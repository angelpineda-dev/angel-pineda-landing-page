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
  image?: {
    src: string;
    alt: string;
  };
  highlights?: {
    currentLabel: string;
    currentDescription: string;
    futureLabel?: string;
    futureDescription?: string;
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
        { href: "#projects", label: "Projects", shortLabel: "Work", icon: "briefcase" },
        { href: "#tools", label: "Tools", shortLabel: "Tools", icon: "grid" },
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
      eyebrow: "Software Engineer · Guadalajara, Mexico",
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
            "Understand your business goals, users, and technical requirements before committing to scope. You leave with a clear plan, a realistic timeline, and a confirmed next step — before any code is written.",
          icon: "search",
        },
        {
          number: "02",
          title: "Design and strategy",
          description:
            "Define the architecture, interface direction, user experience, and the delivery path that can grow with the product. You receive a clickable Figma prototype and a delivery roadmap before development begins.",
          icon: "strategy",
        },
        {
          number: "03",
          title: "Development",
          description:
            "Build fast, modern, and maintainable applications with a strong bias toward clarity and long-term usability. You get clean code, a staging environment for review, and a product your team can actually maintain.",
          icon: "code",
        },
        {
          number: "04",
          title: "Deployment",
          description:
            "Launch, optimize, and keep production healthy with a clear handoff and a dependable release approach. You receive a live, production-ready product and a documented process for future updates.",
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
        { name: "AI Integration", tone: "signal" },
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
        href: "https://monserratherrera.com/",
        image: {
          src: "https://monserratherrera.com/images/philosophy.webp",
          alt: "Monserrat Herrera — philosophy section",
        },
        highlights: {
          currentLabel: "Live",
          currentDescription:
            "Patients can now book their first consultation directly through an integrated scheduling calendar — no back-and-forth, no friction. One click to start improving their digestive and metabolic health.",
          ctaLabel: "Open project site",
        },
      } satisfies Project,
      featuredNote:
        "Open the project in its own tab to review the current experience without an embedded frame.",
      archiveTitle: "More on the way",
      archiveDescription:
        "Case studies in fintech, logistics, and operational tooling are being documented. Each one will cover the problem, the approach, and the measurable result.",
    },
    about: {
      eyebrow: "About me",
      title: "Systems thinking, translated into clear experiences.",
      description:
        "I started building web products for local businesses and independent professionals in Guadalajara, and grew into more complex product challenges across logistics, healthcare, and operations tooling. Five-plus years in, the constant is the same: clients arrive with a problem, I translate it into a product that solves it cleanly, and we ship something that works in the real world. I enjoy the moments where good engineering and clear thinking make something hard look simple.",
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
            "Pricing is scoped to the specific product. Full web applications with custom functionality, integrations, and multi-user flows run higher depending on complexity. Every engagement begins with a discovery conversation to define scope before any number is confirmed, which eliminates budget surprises. The goal is always to build the most useful version that fits the current budget.",
        },
        {
          question: "How long does development take?",
          answer:
            "A focused landing page or web presence can ship in four weeks. A full product with multiple user flows, third-party integrations, and custom backend logic typically takes eight to sixteen weeks. What adds time: additional user roles, payment gateways, CRM integrations, multi-language support, and extended review cycles. Every project starts with a scoped timeline before development begins.",
        },
        {
          question: "Can you work with my existing system or team?",
          answer:
            "Yes. I can collaborate directly in your existing codebase, follow your team's workflow, and integrate with tools like GitHub, Slack, Notion, or Linear. If you have an existing site or application that needs improvement, redesign, or new functionality, that is a common and comfortable starting point. Starting from scratch is not required.",
        },
        {
          question: "What technologies do you use?",
          answer:
            "The main stack includes React and Astro for frontend development, Node.js and Express for backend APIs, and Laravel and PHP for full-stack applications. For design and prototyping, I use Figma. I also integrate AI-powered features — such as automated workflows, LLM API integrations, and intelligent assistants — when they create real leverage for the product. The technology is always matched to the problem, not the other way around.",
        },
        {
          question: "What types of businesses do you work with?",
          answer:
            "Entrepreneurs and independent professionals launching their first web presence. Small and medium-sized businesses that need a new or improved site. Startups and product teams seeking a reliable development partner. Past work includes wellness and healthcare professionals, SMEs, logistics and operations tooling, and fintech-adjacent platforms. If your project involves building something useful that serves real users, it is a good fit.",
        },
        {
          question: "Where are you based and do you work remotely?",
          answer:
            "Based in Guadalajara, Jalisco, Mexico. All client work is done remotely across Mexico and Latin America. Communication happens via WhatsApp, video call, or whatever tools your team already uses. Time zone: CST (UTC-6). Working in both Spanish and English.",
        },
        {
          question: "What is included in the deployment phase?",
          answer:
            "Deployment covers the production launch, performance baseline verification, and a clear handoff that describes how to update and maintain the product going forward. For most projects this includes hosting setup, domain configuration, pre-launch checks, and establishing a reliable process for pushing future changes without downtime. You leave with a working product and the confidence to manage it.",
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
        { href: "#projects", label: "Proyectos", shortLabel: "Proyectos", icon: "briefcase" },
        { href: "#tools", label: "Tecnología", shortLabel: "Tecnología", icon: "grid" },
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
      eyebrow: "Ingeniero de software · Guadalajara, México",
      title: "Diseña, lanza y escala tu producto web",
      titleAccent: "sin fricción innecesaria.",
      description:
        "Desde la idea hasta producción, me encargo del diagnóstico, la estrategia, el diseño, el desarrollo y el despliegue para que tu producto avance mientras te mantienes enfocado y tú puedas concentrarte en el negocio.",
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
            "Aterrizamos objetivos de negocio, usuarios y requerimientos técnicos antes de comprometer alcance. Sales con un plan claro, un cronograma realista y un siguiente paso confirmado — antes de escribir una línea de código.",
          icon: "search",
        },
        {
          number: "02",
          title: "Diseño y estrategia",
          description:
            "Definimos arquitectura, dirección visual, experiencia de uso y una ruta de entrega que pueda crecer con el producto. Recibes un prototipo interactivo en Figma y un mapa de entrega antes de que inicie el desarrollo.",
          icon: "strategy",
        },
        {
          number: "03",
          title: "Desarrollo",
          description:
            "Construyo aplicaciones modernas, rápidas y mantenibles, con una fuerte preferencia por la claridad y la utilidad a largo plazo. Obtienes código limpio, un entorno de preparado para revisiones y un producto que tu equipo puede mantener.",
          icon: "code",
        },
        {
          number: "04",
          title: "Despliegue",
          description:
            "Lanzamos, optimizamos y mantenemos producción saludable con una entrega clara y un proceso confiable para publicar cambios. Recibes un producto en vivo, listo para producción, con un proceso documentado para actualizaciones futuras.",
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
        { name: "Integración con IA", tone: "signal" },
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
        href: "https://monserratherrera.com/",
        image: {
          src: "https://monserratherrera.com/images/philosophy.webp",
          alt: "Monserrat Herrera — sección de filosofía",
        },
        highlights: {
          currentLabel: "En vivo",
          currentDescription:
            "Los pacientes ahora pueden agendar su primera consulta directamente desde un calendario integrado — sin ida y vuelta, sin fricción. Un clic para empezar a mejorar su salud digestiva y metabólica.",
          ctaLabel: "Abrir sitio del proyecto",
        },
      } satisfies Project,
      featuredNote:
        "Abre el proyecto en una pestaña aparte para revisar la experiencia actual fuera de esta misma página.",
      archiveTitle: "Más casos en camino",
      archiveDescription:
        "Se están documentando casos en fintech, logística y herramientas operativas. Cada uno cubrirá el problema, el enfoque y el resultado medible.",
    },
    about: {
      eyebrow: "Sobre mí",
      title: "Pensamiento sistémico, traducido a experiencias claras.",
      description:
        "Empecé construyendo productos web para negocios locales y profesionales independientes en Guadalajara, y fui creciendo hacia retos más complejos en logística, salud y herramientas operativas. Con más de cinco años de trabajo, la constante es siempre la misma: los clientes llegan con un problema, yo lo traduzco en un producto que lo resuelve con claridad, y lanzamos algo que funciona en el mundo real. Disfruto los momentos donde un buen criterio de ingeniería hace que algo difícil parezca simple.",
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
            "El precio se define según el alcance específico del producto. Una plataforma web con funcionalidades personalizadas, integraciones y flujos multi-usuario tiene un costo mayor dependiendo de la complejidad. Todo empieza con una conversación de diagnóstico para definir el alcance antes de confirmar cualquier número. El objetivo siempre es construir la versión más útil que se ajuste al presupuesto actual.",
        },
        {
          question: "¿Cuánto tiempo tarda el desarrollo?",
          answer:
            "Una landing page o presencia web enfocada puede estar lista en cuatro semanas. Una plataforma completa con múltiples flujos de usuario, integraciones con terceros y lógica de backend personalizada suele tomar entre ocho y dieciséis semanas. Lo que suma tiempo: roles de usuario adicionales, pasarelas de pago, integraciones con CRM, soporte multilenguaje y ciclos de revisión extendidos. Cada proyecto comienza con un cronograma claro antes de que inicie el desarrollo.",
        },
        {
          question: "¿Puedes trabajar con mi sistema o con mi equipo actual?",
          answer:
            "Sí. Puedo colaborar directamente en con código existente, seguir el flujo de trabajo de tu equipo e integrarme con herramientas como GitHub, Slack, Notion o Linear. Si tienes un sitio o aplicación que necesita mejoras, rediseño o nuevas funcionalidades, ese es un punto de partida común y cómodo. No es necesario empezar desde cero.",
        },
        {
          question: "¿Qué tecnologías utilizas?",
          answer:
            "El stack principal incluye React y Astro para desarrollo frontend, Node.js y Express para APIs, y Laravel y PHP para aplicaciones full-stack cuando el proyecto lo requiere. Para diseño y prototipado uso Figma. También integro funcionalidades con inteligencia artificial — como flujos automatizados, integraciones con APIs de LLMs y asistentes inteligentes — cuando generan ventaja real para el producto. La tecnología siempre se adapta al problema, no al revés.",
        },
        {
          question: "¿Con qué tipos de negocios trabajas?",
          answer:
            "Emprendedores y profesionales independientes que quieren lanzar su primera presencia digital. Pequeñas y medianas empresas que necesitan un sitio nuevo o mejorado. Startups y equipos de producto que buscan un socio de desarrollo confiable. El trabajo previo incluye profesionales de salud y bienestar, pymes, herramientas de logística y operaciones, y plataformas en sectores fintech. Si tu proyecto implica construir algo útil que sirve a usuarios reales, es un buen punto de partida.",
        },
        {
          question: "¿Dónde estás ubicado y trabajas de forma remota?",
          answer:
            "Con base en Guadalajara, Jalisco, México. Todo el trabajo con clientes se hace de forma remota para México y Latinoamérica. La comunicación ocurre por WhatsApp, videollamada o las herramientas que ya usa tu equipo. Zona horaria: CST (UTC-6). Trabajo en español e inglés.",
        },
        {
          question: "¿Qué incluye la fase de despliegue?",
          answer:
            "El despliegue cubre el lanzamiento a producción, la verificación del rendimiento base y una entrega clara que describe cómo actualizar y mantener el producto. Para la mayoría de proyectos esto incluye configuración de hosting, configuración del dominio, revisiones previas al lanzamiento y un proceso confiable para publicar cambios futuros sin tiempo de inactividad. Sales con un producto funcionando y la confianza para gestionarlo.",
        },
      ] satisfies FaqItem[],
    },
    cta: {
      eyebrow: "Contacto directo",
      title: "¿Listo para empezar?",
      description:
        "Si tienes una idea, un producto existente o algo que este deteniendo tu crecimiento, hablemos y convirtámoslo en un plan con más tracción.",
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
