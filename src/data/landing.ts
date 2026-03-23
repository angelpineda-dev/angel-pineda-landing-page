export type Locale = "en" | "es";

export type ThemeOption = "light" | "dark" | "system";

export type NavIcon = "compass" | "grid" | "briefcase" | "user" | "help";

export type NavItem = {
  href: string;
  label: string;
  shortLabel: string;
  icon: NavIcon;
};

export type Service = {
  number: string;
  title: string;
  description: string;
  icon: "search" | "strategy" | "code" | "rocket";
};

export type Tool = {
  name: string;
  tone: "signal" | "accent" | "muted";
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
  highlights?: {
    currentLabel: string;
    currentDescription: string;
    futureLabel: string;
    futureDescription: string;
    ctaLabel: string;
  };
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type LandingPageContent = {
  site: {
    lang: string;
    title: string;
    description: string;
  };
  contact: {
    email: string;
    phoneLabel: string;
    phoneHref: string;
    location: string;
    remoteLabel: string;
    whatsappHref: string;
  };
  navigation: {
    brandLabel: string;
    items: readonly NavItem[];
    whatsappLabel: string;
    whatsappAriaLabel: string;
    localeSectionLabel: string;
    localeToggleText: string;
    localeToggleLabel: string;
    localeToggleAriaLabel: string;
    themeToggleLabel: string;
    themeLabel: string;
    openNavigationLabel: string;
    closeNavigationLabel: string;
    dialogLabel: string;
    themeOptions: Record<ThemeOption, string>;
    themeStatus: {
      followingDeviceTheme: string;
      usingOverridePrefix: string;
      usingOverrideSuffix: string;
    };
  };
  hero: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    description: string;
    ctaLabel: string;
    ctaAriaLabel: string;
    secondaryCtaLabel: string;
    secondaryCtaHref: string;
    supportingLine: string;
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    items: readonly Service[];
  };
  tools: {
    eyebrow: string;
    title: string;
    description: string;
    items: readonly Tool[];
  };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
    featured: Project;
    featuredNote: string;
    archiveTitle: string;
    archiveDescription: string;
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    quote: string;
    linkLabel: string;
    experienceLabel: string;
    portraitAlt: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    description: string;
    items: readonly FaqItem[];
  };
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    label: string;
    note: string;
    ariaLabel: string;
  };
  footer: {
    blurb: string;
    whatsappLabel: string;
    whatsappAriaLabel: string;
  };
};

const whatsappBusinessNumber = "+523317960306";
const whatsappBusinessLabel = "+52 33 1796 0306";

const createWhatsappHref = (message: string) =>
  `https://wa.me/${whatsappBusinessNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;

export const landingPages = {
  en: {
    site: {
      lang: "en",
      title: "Angel Pineda | Software Engineer",
      description:
        "Software engineer building product-focused web experiences with strategy, design, development, and deployment under one roof.",
    },
    contact: {
      email: "angelpdev@gmail.com",
      phoneLabel: whatsappBusinessLabel,
      phoneHref: `tel:${whatsappBusinessNumber}`,
      location: "Guadalajara, Jalisco, Mexico",
      remoteLabel: "Remote collaboration across Mexico and Latin America",
      whatsappHref: createWhatsappHref(
        "Hi Angel, I want to build a website for my business. Can you help me?"
      ),
    },
    navigation: {
      brandLabel: "Angel Pineda",
      items: [
        { href: "#services", label: "Services", shortLabel: "Services", icon: "compass" },
        { href: "#tools", label: "Tools", shortLabel: "Tools", icon: "grid" },
        { href: "#projects", label: "Projects", shortLabel: "Work", icon: "briefcase" },
        { href: "#about", label: "About", shortLabel: "About", icon: "user" },
        { href: "#faq", label: "FAQ", shortLabel: "FAQ", icon: "help" },
      ] satisfies NavItem[],
      whatsappLabel: "WhatsApp",
      whatsappAriaLabel: "Open WhatsApp chat in a new tab",
      localeSectionLabel: "Language",
      localeToggleText: "Spanish version",
      localeToggleLabel: "ES",
      localeToggleAriaLabel: "Open the Spanish version of the site",
      themeToggleLabel: "Toggle theme",
      themeLabel: "Theme",
      openNavigationLabel: "Open navigation",
      closeNavigationLabel: "Close navigation",
      dialogLabel: "Mobile navigation",
      themeOptions: {
        light: "Light",
        dark: "Dark",
        system: "System",
      },
      themeStatus: {
        followingDeviceTheme: "Following device theme",
        usingOverridePrefix: "Using ",
        usingOverrideSuffix: " override",
      },
    },
    hero: {
      eyebrow: "Software Engineer",
      title: "Build, launch, and scale your web product",
      titleAccent: "without the chaos.",
      description:
        "From idea to production, I handle discovery, strategy, design, development, and deployment so your product keeps moving while you stay focused on the business behind it.",
      ctaLabel: "Start on WhatsApp",
      ctaAriaLabel: "Start the conversation on WhatsApp",
      secondaryCtaLabel: "See services",
      secondaryCtaHref: "#services",
      supportingLine:
        "Start with a focused conversation about goals, constraints, and the fastest useful version to ship.",
    },
    services: {
      eyebrow: "Services",
      title: "A complete end-to-end web development process.",
      description:
        "This process is built to remove costly guesswork early and turn scattered ideas into a product that ships with clarity and purpose.",
      items: [
        {
          number: "01",
          title: "Discovery",
          description:
            "Understand your business goals, users, and technical requirements before committing to scope.",
          icon: "search",
        },
        {
          number: "02",
          title: "Design and strategy",
          description:
            "Define the architecture, interface direction, user experience, and the delivery path that can grow with the product.",
          icon: "strategy",
        },
        {
          number: "03",
          title: "Development",
          description:
            "Build fast, modern, and maintainable applications with a strong bias toward clarity and long-term usability.",
          icon: "code",
        },
        {
          number: "04",
          title: "Deployment",
          description:
            "Launch, optimize, and keep production healthy with a clear handoff and a dependable release approach.",
          icon: "rocket",
        },
      ] satisfies Service[],
    },
    tools: {
      eyebrow: "Tools",
      title: "A stack that stays practical under real product pressure.",
      description:
        "The stack only matters if it helps you move faster, stay reliable, and keep the product adaptable as real-world demands increase.",
      items: [
        { name: "React", tone: "signal" },
        { name: "Astro", tone: "accent" },
        { name: "Node.js", tone: "muted" },
        { name: "Express.js", tone: "accent" },
        { name: "PHP", tone: "muted" },
        { name: "Laravel", tone: "signal" },
        { name: "Figma", tone: "accent" },
        { name: "Artificial Intelligence", tone: "signal" },
      ] satisfies Tool[],
    },
    projects: {
      eyebrow: "Recent projects",
      title: "Selected work with a product lens.",
      description:
        "These projects show how product thinking turns business goals into experiences that build trust, sharpen positioning, and create traction.",
      featured: {
        title: "Nutriologa Monserrat",
        description:
          "A wellness-focused experience for a nutrition specialist who helps people improve their digestive and metabolic health through tailored guidance.",
        tags: ["Wellness", "Entrepreneur"],
        href: "https://nutriologa-monserrat.vercel.app/",
        highlights: {
          currentLabel: "Now",
          currentDescription:
            "The live build already shows the brand voice, trust-building structure, consultation flow, and service framing in a usable state.",
          futureLabel: "Next",
          futureDescription:
            "This direction points toward a stronger case-study-ready experience with more polish, richer proof, and clearer conversion detail as the project matures.",
          ctaLabel: "Open project site",
        },
      } satisfies Project,
      featuredNote:
        "Open the project in its own tab to review the current experience without an embedded frame.",
      archiveTitle: "More on the way",
      archiveDescription:
        "More case studies are being documented, including current work across fintech, logistics, and operational tooling.",
    },
    about: {
      eyebrow: "About me",
      title: "Systems thinking, translated into clear experiences.",
      description:
        "I enjoy solving problems, optimizing processes, and automating when it creates real leverage. I build solutions that make life easier by matching the technology to the challenge instead of forcing the challenge to fit the tool.",
      quote:
        "I don’t just write code. I design systems that solve real problems, scale with your growth, and deliver measurable results.",
      linkLabel: "Know more about my process",
      experienceLabel: "Years of craft",
      portraitAlt: "Portrait of Angel Pineda",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Straight answers before we build.",
      description:
        "Before any code gets written, you should know what is worth building, what it will take, and what the smartest next move looks like.",
      items: [
        {
          question: "How much does a project cost?",
          answer:
            "Pricing depends on the product scope, but the first version can be shaped to fit your budget while still solving a real problem.",
        },
        {
          question: "How long does development take?",
          answer:
            "Small projects usually need at least four weeks. Timelines increase with feature depth, review cycles, and integration complexity.",
        },
        {
          question: "Can you work with my existing system or team?",
          answer:
            "Yes. I can collaborate with your current team, work inside an existing stack, or improve a product that is already in production.",
        },
      ] satisfies FaqItem[],
    },
    cta: {
      eyebrow: "Direct line",
      title: "Ready to begin?",
      description:
        "If you have an idea, an existing product, or a bottleneck slowing growth, let’s turn it into a sharper plan and a better next release.",
      label: "Chat on WhatsApp",
      note: "Direct message, no form required.",
      ariaLabel: "Chat on WhatsApp",
    },
    footer: {
      blurb:
        "Building product-focused web experiences with clear thinking, calm execution, and systems that can scale with the business.",
      whatsappLabel: "WhatsApp",
      whatsappAriaLabel: "Open WhatsApp chat in a new tab",
    },
  },
  es: {
    site: {
      lang: "es-MX",
      title: "Angel Pineda | Ingeniero de Software",
      description:
        "Ingeniero de software que crea experiencias web orientadas a producto, combinando estrategia, diseño, desarrollo y despliegue en un mismo proceso.",
    },
    contact: {
      email: "angelpdev@gmail.com",
      phoneLabel: whatsappBusinessLabel,
      phoneHref: `tel:${whatsappBusinessNumber}`,
      location: "Guadalajara, Jalisco, México",
      remoteLabel: "Trabajo remoto para México y Latinoamérica",
      whatsappHref: createWhatsappHref(
        "Hola Angel, quiero construir un sitio web para mi negocio. ¿Me puedes ayudar?"
      ),
    },
    navigation: {
      brandLabel: "Angel Pineda",
      items: [
        { href: "#services", label: "Servicios", shortLabel: "Servicios", icon: "compass" },
        { href: "#tools", label: "Tecnología", shortLabel: "Tecnología", icon: "grid" },
        { href: "#projects", label: "Proyectos", shortLabel: "Proyectos", icon: "briefcase" },
        { href: "#about", label: "Perfil", shortLabel: "Perfil", icon: "user" },
        { href: "#faq", label: "Preguntas frecuentes", shortLabel: "Preguntas", icon: "help" },
      ] satisfies NavItem[],
      whatsappLabel: "WhatsApp",
      whatsappAriaLabel: "Abrir chat de WhatsApp en una nueva pestaña",
      localeSectionLabel: "Idioma",
      localeToggleText: "Versión en inglés",
      localeToggleLabel: "EN",
      localeToggleAriaLabel: "Abrir la versión en inglés del sitio",
      themeToggleLabel: "Cambiar tema",
      themeLabel: "Tema",
      openNavigationLabel: "Abrir navegación",
      closeNavigationLabel: "Cerrar navegación",
      dialogLabel: "Navegación móvil",
      themeOptions: {
        light: "Claro",
        dark: "Oscuro",
        system: "Sistema",
      },
      themeStatus: {
        followingDeviceTheme: "Siguiendo el tema del dispositivo",
        usingOverridePrefix: "Usando tema ",
        usingOverrideSuffix: "",
      },
    },
    hero: {
      eyebrow: "Ingeniero de software",
      title: "Diseña, lanza y escala tu producto web",
      titleAccent: "sin fricción innecesaria.",
      description:
        "Desde la idea hasta producción, me encargo del diagnóstico, la estrategia, el diseño, el desarrollo y el despliegue para que tu producto avance con foco y tú puedas concentrarte en el negocio.",
      ctaLabel: "Empezar por WhatsApp",
      ctaAriaLabel: "Iniciar la conversación por WhatsApp",
      secondaryCtaLabel: "Ver servicios",
      secondaryCtaHref: "#services",
      supportingLine:
        "Empezamos con una conversación concreta para aterrizar objetivos, restricciones y la versión más útil que conviene lanzar primero.",
    },
    services: {
      eyebrow: "Servicios",
      title: "Un proceso integral para construir y lanzar productos web.",
      description:
        "Este proceso existe para quitar incertidumbre desde el inicio y convertir ideas sueltas en un producto que sale con claridad, intención y dirección.",
      items: [
        {
          number: "01",
          title: "Diagnóstico",
          description:
            "Aterrizamos objetivos de negocio, usuarios y requerimientos técnicos antes de comprometer alcance.",
          icon: "search",
        },
        {
          number: "02",
          title: "Diseño y estrategia",
          description:
            "Definimos arquitectura, dirección visual, experiencia de uso y una ruta de entrega que pueda crecer con el producto.",
          icon: "strategy",
        },
        {
          number: "03",
          title: "Desarrollo",
          description:
            "Construyo aplicaciones modernas, rápidas y mantenibles, con una fuerte preferencia por la claridad y la utilidad a largo plazo.",
          icon: "code",
        },
        {
          number: "04",
          title: "Despliegue",
          description:
            "Lanzamos, optimizamos y mantenemos producción saludable con una entrega clara y un proceso confiable para publicar cambios.",
          icon: "rocket",
        },
      ] satisfies Service[],
    },
    tools: {
      eyebrow: "Tecnología",
      title: "Tecnología práctica cuando el producto ya tiene presión real.",
      description:
        "La base tecnológica solo vale la pena si te ayuda a avanzar más rápido, mantener estabilidad y adaptar el producto cuando el mercado empieza a exigir más.",
      items: [
        { name: "React", tone: "signal" },
        { name: "Astro", tone: "accent" },
        { name: "Node.js", tone: "muted" },
        { name: "Express.js", tone: "accent" },
        { name: "PHP", tone: "muted" },
        { name: "Laravel", tone: "signal" },
        { name: "Figma", tone: "accent" },
        { name: "Inteligencia Artificial", tone: "signal" },
      ] satisfies Tool[],
    },
    projects: {
      eyebrow: "Proyectos recientes",
      title: "Trabajo seleccionado con criterio de producto.",
      description:
        "Estos proyectos muestran cómo una mirada de producto convierte objetivos de negocio en experiencias que generan confianza, diferencian la marca y mueven resultados.",
      featured: {
        title: "Nutrióloga Monserrat",
        description:
          "Una experiencia digital enfocada en bienestar para una especialista en nutrición que acompaña a personas a mejorar su salud digestiva y metabólica con atención personalizada.",
        tags: ["Bienestar", "Emprendimiento"],
        href: "https://nutriologa-monserrat.vercel.app/",
        highlights: {
          currentLabel: "Ahora",
          currentDescription:
            "La versión publicada ya comunica voz de marca, estructura de confianza, flujo de consulta y una explicación de servicios que ya resulta clara y funcional.",
          futureLabel: "Siguiente paso",
          futureDescription:
            "La dirección abre camino a un caso de estudio más sólido, con mejor pulido visual, más evidencia y una conversión todavía más clara conforme el proyecto madura.",
          ctaLabel: "Abrir sitio del proyecto",
        },
      } satisfies Project,
      featuredNote:
        "Abre el proyecto en una pestaña aparte para revisar la experiencia actual fuera de esta misma página.",
      archiveTitle: "Más casos en camino",
      archiveDescription:
        "Se están documentando más casos, incluyendo trabajo actual en fintech, logística y herramientas operativas.",
    },
    about: {
      eyebrow: "Sobre mí",
      title: "Pensamiento sistémico, traducido a experiencias claras.",
      description:
        "Disfruto resolver problemas, optimizar procesos y automatizar cuando eso genera ventaja real. Construyo soluciones que hacen la vida más simple al adaptar la tecnología al reto, en vez de forzar el reto a encajar en la herramienta.",
      quote:
        "No solo escribo código. Diseño sistemas que resuelven problemas reales, escalan con tu crecimiento y generan resultados medibles.",
      linkLabel: "Conoce cómo trabajo",
      experienceLabel: "Años de oficio",
      portraitAlt: "Retrato de Angel Pineda",
    },
    faq: {
      eyebrow: "Preguntas frecuentes",
      title: "Respuestas claras antes de construir.",
      description:
        "Antes de escribir una línea de código, deberías tener claro qué conviene construir, qué va a requerir y cuál es el siguiente paso más inteligente.",
      items: [
        {
          question: "¿Cuánto cuesta un proyecto?",
          answer:
            "El precio depende del alcance, pero la primera versión puede definirse para ajustarse a tu presupuesto sin dejar de resolver un problema real.",
        },
        {
          question: "¿Cuánto tiempo tarda el desarrollo?",
          answer:
            "Los proyectos pequeños suelen requerir al menos cuatro semanas. El tiempo aumenta según la profundidad de funcionalidades, ciclos de revisión e integraciones.",
        },
        {
          question: "¿Puedes trabajar con mi sistema o con mi equipo actual?",
          answer:
            "Sí. Puedo colaborar con tu equipo, trabajar sobre una base tecnológica existente o mejorar un producto que ya está en producción.",
        },
      ] satisfies FaqItem[],
    },
    cta: {
      eyebrow: "Contacto directo",
      title: "¿Listo para empezar?",
      description:
        "Si tienes una idea, un producto existente o un cuello de botella frenando crecimiento, hablemos y convirtámoslo en un plan con más tracción.",
      label: "Hablar por WhatsApp",
      note: "Mensaje directo, sin formularios.",
      ariaLabel: "Hablar por WhatsApp",
    },
    footer: {
      blurb:
        "Construyo experiencias web orientadas a producto con criterio claro, ejecución serena y sistemas que pueden escalar junto con el negocio.",
      whatsappLabel: "WhatsApp",
      whatsappAriaLabel: "Abrir chat de WhatsApp en una nueva pestaña",
    },
  },
} satisfies Record<Locale, LandingPageContent>;

export const getLandingPage = (locale: Locale) => landingPages[locale];
