import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-paper)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[color:var(--color-ink)] px-6 text-[color:var(--color-paper)] shadow-[0_16px_40px_rgba(30,30,30,0.12)] hover:-translate-y-0.5 hover:bg-[color:var(--color-accent)]",
        outline:
          "border border-[color:color-mix(in_oklab,var(--color-muted)_68%,transparent)] bg-transparent px-6 text-[color:var(--color-ink)] hover:border-[color:var(--color-accent)] hover:bg-[color:color-mix(in_oklab,var(--color-accent)_10%,transparent)]",
        ghost:
          "bg-transparent px-4 text-[color:var(--color-ink)] hover:bg-[color:color-mix(in_oklab,var(--color-muted)_10%,transparent)]",
        accent:
          "bg-[color:var(--color-signal)] px-6 text-[color:var(--color-ink)] shadow-[0_18px_45px_rgba(245,236,57,0.22)] hover:-translate-y-0.5 hover:bg-[color:color-mix(in_oklab,var(--color-signal)_88%,white)]",
      },
      size: {
        sm: "h-10 px-4 text-sm",
        default: "h-11 px-5 text-sm",
        lg: "h-14 px-7 text-sm tracking-[0.18em] uppercase",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
