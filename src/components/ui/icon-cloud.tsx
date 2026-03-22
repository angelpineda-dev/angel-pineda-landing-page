import React, { useEffect, useRef, useState } from "react"
import { renderToString } from "react-dom/server"

import { cn } from "@/lib/utils"

interface Icon {
  x: number
  y: number
  z: number
  scale: number
  opacity: number
  id: number
}

interface IconCloudProps {
  icons?: React.ReactNode[]
  images?: string[]
  className?: string
  iconScale?: number
  radiusScale?: number
}

interface CanvasMetrics {
  width: number
  height: number
  pixelRatio: number
}

interface Point {
  x: number
  y: number
}

interface TargetRotation {
  x: number
  y: number
  startX: number
  startY: number
  distance: number
  startTime: number
  duration: number
}

const MAX_PIXEL_RATIO = 3

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}

export function IconCloud({
  icons,
  images,
  className,
  iconScale = 0.2,
  radiusScale = 0.36,
}: IconCloudProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [iconPositions, setIconPositions] = useState<Icon[]>([])
  const [canvasSize, setCanvasSize] = useState<CanvasMetrics>({
    width: 520,
    height: 520,
    pixelRatio: 1,
  })
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const animationFrameRef = useRef<number>(0)
  const rotationRef = useRef({ x: 0, y: 0 })
  const isDraggingRef = useRef(false)
  const lastPointerPosRef = useRef<Point>({ x: 0, y: 0 })
  const pointerPosRef = useRef<Point>({ x: 0, y: 0 })
  const targetRotationRef = useRef<TargetRotation | null>(null)
  const iconCanvasesRef = useRef<HTMLCanvasElement[]>([])
  const imagesLoadedRef = useRef<boolean[]>([])
  const diameter = Math.min(canvasSize.width, canvasSize.height)
  const sphereRadius = Math.max(120, diameter * radiusScale)
  const iconDrawSize = Math.max(72, diameter * iconScale)
  const iconResolution = Math.min(
    640,
    Math.max(128, Math.round(iconDrawSize * canvasSize.pixelRatio * 1.6))
  )
  const pixelWidth = Math.max(
    1,
    Math.round(canvasSize.width * canvasSize.pixelRatio)
  )
  const pixelHeight = Math.max(
    1,
    Math.round(canvasSize.height * canvasSize.pixelRatio)
  )

  useEffect(() => {
    const wrapper = wrapperRef.current
    if (!wrapper) return

    const updateSize = () => {
      const bounds = wrapper.getBoundingClientRect()
      const width = Math.max(1, Math.round(bounds.width))
      const height = Math.max(1, Math.round(bounds.height))
      const pixelRatio = Math.min(
        MAX_PIXEL_RATIO,
        Math.max(1, window.devicePixelRatio || 1)
      )

      setCanvasSize((current) =>
        current.width === width &&
        current.height === height &&
        current.pixelRatio === pixelRatio
          ? current
          : { width, height, pixelRatio }
      )
    }

    updateSize()

    const observer = new ResizeObserver(() => {
      updateSize()
    })

    observer.observe(wrapper)
    window.addEventListener("resize", updateSize)

    return () => {
      observer.disconnect()
      window.removeEventListener("resize", updateSize)
    }
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const legacyMediaQuery = mediaQuery as MediaQueryList & {
      addListener?: (listener: (event: MediaQueryListEvent) => void) => void
      removeListener?: (listener: (event: MediaQueryListEvent) => void) => void
    }

    const syncMotionPreference = () => {
      const reduceMotion = mediaQuery.matches
      setPrefersReducedMotion(reduceMotion)

      if (reduceMotion) {
        targetRotationRef.current = null
      }
    }

    syncMotionPreference()

    if ("addEventListener" in mediaQuery) {
      mediaQuery.addEventListener("change", syncMotionPreference)
    } else if (legacyMediaQuery.addListener) {
      legacyMediaQuery.addListener(syncMotionPreference)
    }

    return () => {
      if ("removeEventListener" in mediaQuery) {
        mediaQuery.removeEventListener("change", syncMotionPreference)
      } else if (legacyMediaQuery.removeListener) {
        legacyMediaQuery.removeListener(syncMotionPreference)
      }
    }
  }, [])

  useEffect(() => {
    const centeredPointer = {
      x: canvasSize.width / 2,
      y: canvasSize.height / 2,
    }

    pointerPosRef.current = centeredPointer
    lastPointerPosRef.current = centeredPointer
  }, [canvasSize.width, canvasSize.height])

  // Create icon canvases once when icons/images change
  useEffect(() => {
    if (!icons && !images) return

    const items = icons ?? images ?? []
    imagesLoadedRef.current = new Array(items.length).fill(false)

    const newIconCanvases = items.map((item, index) => {
      const offscreen = document.createElement("canvas")
      offscreen.width = iconResolution
      offscreen.height = iconResolution
      const offCtx = offscreen.getContext("2d")
      const center = iconResolution / 2

      if (offCtx) {
        offCtx.imageSmoothingEnabled = true
        offCtx.imageSmoothingQuality = "high"

        if (images) {
          // Handle image URLs directly
          const img = new Image()
          img.crossOrigin = "anonymous"
          img.src = items[index] as string
          img.onload = () => {
            offCtx.clearRect(0, 0, offscreen.width, offscreen.height)

            // Create circular clipping path
            offCtx.beginPath()
            offCtx.arc(center, center, center, 0, Math.PI * 2)
            offCtx.closePath()
            offCtx.clip()

            // Draw the image
            offCtx.imageSmoothingEnabled = true
            offCtx.imageSmoothingQuality = "high"
            offCtx.drawImage(img, 0, 0, iconResolution, iconResolution)

            imagesLoadedRef.current[index] = true
          }
        } else {
          // Handle SVG icons
          offCtx.scale(iconResolution / 100, iconResolution / 100)
          const svgString = renderToString(item as React.ReactElement)
          const img = new Image()
          img.src = "data:image/svg+xml;base64," + btoa(svgString)
          img.onload = () => {
            offCtx.clearRect(0, 0, offscreen.width, offscreen.height)
            offCtx.drawImage(img, 0, 0)
            imagesLoadedRef.current[index] = true
          }
        }
      }
      return offscreen
    })

    iconCanvasesRef.current = newIconCanvases
  }, [icons, images, iconResolution])

  // Generate initial icon positions on a sphere
  useEffect(() => {
    const items = icons ?? images ?? []
    const newIcons: Icon[] = []
    const numIcons = items.length || 20

    // Fibonacci sphere parameters
    const offset = 2 / numIcons
    const increment = Math.PI * (3 - Math.sqrt(5))

    for (let i = 0; i < numIcons; i++) {
      const y = i * offset - 1 + offset / 2
      const r = Math.sqrt(1 - y * y)
      const phi = i * increment

      const x = Math.cos(phi) * r
      const z = Math.sin(phi) * r

      newIcons.push({
        x: x * sphereRadius,
        y: y * sphereRadius,
        z: z * sphereRadius,
        scale: 1,
        opacity: 1,
        id: i,
      })
    }
    setIconPositions(newIcons)
  }, [icons, images, sphereRadius])

  const getTargetRotationAtPoint = (
    clientX: number,
    clientY: number
  ): TargetRotation | null => {
    const rect = canvasRef.current?.getBoundingClientRect()
    if (!rect) return null

    const x = clientX - rect.left
    const y = clientY - rect.top

    for (const icon of iconPositions) {
      const cosX = Math.cos(rotationRef.current.x)
      const sinX = Math.sin(rotationRef.current.x)
      const cosY = Math.cos(rotationRef.current.y)
      const sinY = Math.sin(rotationRef.current.y)

      const rotatedX = icon.x * cosY - icon.z * sinY
      const rotatedZ = icon.x * sinY + icon.z * cosY
      const rotatedY = icon.y * cosX + rotatedZ * sinX

      const screenX = canvasSize.width / 2 + rotatedX
      const screenY = canvasSize.height / 2 + rotatedY

      const scale = (rotatedZ + sphereRadius * 2) / (sphereRadius * 3)
      const radius = (iconDrawSize / 2) * scale
      const dx = x - screenX
      const dy = y - screenY

      if (dx * dx + dy * dy < radius * radius) {
        const targetX = -Math.atan2(
          icon.y,
          Math.sqrt(icon.x * icon.x + icon.z * icon.z)
        )
        const targetY = Math.atan2(icon.x, icon.z)

        const currentX = rotationRef.current.x
        const currentY = rotationRef.current.y
        const distance = Math.sqrt(
          Math.pow(targetX - currentX, 2) + Math.pow(targetY - currentY, 2)
        )

        const duration = Math.min(2000, Math.max(800, distance * 1000))

        return {
          x: targetX,
          y: targetY,
          startX: currentX,
          startY: currentY,
          distance,
          startTime: performance.now(),
          duration,
        }
      }
    }

    return null
  }

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const targetRotation = getTargetRotationAtPoint(e.clientX, e.clientY)

    if (targetRotation) {
      if (prefersReducedMotion) {
        rotationRef.current = {
          x: targetRotation.x,
          y: targetRotation.y,
        }
        targetRotationRef.current = null
      } else {
        targetRotationRef.current = targetRotation
      }

      isDraggingRef.current = false
      return
    }

    isDraggingRef.current = true
    lastPointerPosRef.current = { x: e.clientX, y: e.clientY }
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect()

    if (rect) {
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      pointerPosRef.current = { x, y }
    }

    if (isDraggingRef.current) {
      const deltaX = e.clientX - lastPointerPosRef.current.x
      const deltaY = e.clientY - lastPointerPosRef.current.y

      rotationRef.current = {
        x: rotationRef.current.x + deltaY * 0.002,
        y: rotationRef.current.y + deltaX * 0.002,
      }

      lastPointerPosRef.current = { x: e.clientX, y: e.clientY }
    }
  }

  const handlePointerEnd = (e: React.PointerEvent<HTMLCanvasElement>) => {
    isDraggingRef.current = false

    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId)
    }
  }

  // Animation and rendering
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")

    if (canvas && ctx) {
      const animate = () => {
        ctx.setTransform(1, 0, 0, 1, 0, 0)
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.setTransform(canvasSize.pixelRatio, 0, 0, canvasSize.pixelRatio, 0, 0)
        ctx.imageSmoothingEnabled = true
        ctx.imageSmoothingQuality = "high"

        const centerX = canvasSize.width / 2
        const centerY = canvasSize.height / 2
        const maxDistance = Math.max(
          1,
          Math.sqrt(centerX * centerX + centerY * centerY)
        )
        const dx = pointerPosRef.current.x - centerX
        const dy = pointerPosRef.current.y - centerY
        const distance = Math.sqrt(dx * dx + dy * dy)
        const speed = 0.003 + (distance / maxDistance) * 0.01
        const ambientDrift = 0.0014
        const targetRotation = targetRotationRef.current

        if (targetRotation && !prefersReducedMotion) {
          const elapsed = performance.now() - targetRotation.startTime
          const progress = Math.min(1, elapsed / targetRotation.duration)
          const easedProgress = easeOutCubic(progress)

          rotationRef.current = {
            x:
              targetRotation.startX +
              (targetRotation.x - targetRotation.startX) * easedProgress,
            y:
              targetRotation.startY +
              (targetRotation.y - targetRotation.startY) * easedProgress,
          }

          if (progress >= 1) {
            targetRotationRef.current = null
          }
        } else if (!isDraggingRef.current && !prefersReducedMotion) {
          rotationRef.current = {
            x:
              rotationRef.current.x +
              ambientDrift * 0.45 +
              (dy / canvasSize.height) * speed * 0.45,
            y:
              rotationRef.current.y +
              ambientDrift +
              (dx / canvasSize.width) * speed,
          }
        }

        iconPositions.forEach((icon, index) => {
          const cosX = Math.cos(rotationRef.current.x)
          const sinX = Math.sin(rotationRef.current.x)
          const cosY = Math.cos(rotationRef.current.y)
          const sinY = Math.sin(rotationRef.current.y)

          const rotatedX = icon.x * cosY - icon.z * sinY
          const rotatedZ = icon.x * sinY + icon.z * cosY
          const rotatedY = icon.y * cosX + rotatedZ * sinX

          const scale = (rotatedZ + sphereRadius * 2) / (sphereRadius * 3)
          const opacity = Math.max(
            0.75,
            Math.min(1, (rotatedZ + sphereRadius * 1.8) / (sphereRadius * 2.3))
          )

          ctx.save()
          ctx.translate(centerX + rotatedX, centerY + rotatedY)
          ctx.scale(scale, scale)
          ctx.globalAlpha = opacity

          if (icons || images) {
            // Only try to render icons/images if they exist
            if (
              iconCanvasesRef.current[index] &&
              imagesLoadedRef.current[index]
            ) {
              ctx.drawImage(
                iconCanvasesRef.current[index],
                -iconDrawSize / 2,
                -iconDrawSize / 2,
                iconDrawSize,
                iconDrawSize
              )
            }
          } else {
            // Show numbered circles if no icons/images are provided
            ctx.beginPath()
            ctx.arc(0, 0, iconDrawSize / 2, 0, Math.PI * 2)
            ctx.fillStyle = "#023f73"
            ctx.fill()
            ctx.fillStyle = "white"
            ctx.textAlign = "center"
            ctx.textBaseline = "middle"
            ctx.font = `${Math.max(18, iconDrawSize * 0.34)}px Arial`
            ctx.fillText(`${icon.id + 1}`, 0, 0)
          }

          ctx.restore()
        })
        animationFrameRef.current = requestAnimationFrame(animate)
      }

      animate()
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [
    icons,
    images,
    iconPositions,
    iconDrawSize,
    sphereRadius,
    canvasSize,
    prefersReducedMotion,
  ])

  return (
    <div ref={wrapperRef} className={cn("size-full", className)}>
      <canvas
        ref={canvasRef}
        width={pixelWidth}
        height={pixelHeight}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
        onPointerLeave={handlePointerEnd}
        className="size-full touch-none"
        aria-label="Interactive 3D Icon Cloud"
        role="img"
      />
    </div>
  )
}
