export type NavItem = {
  href: string;
  label: string;
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

const whatsappBusinessNumber = "+523317960306";
const whatsappBusinessLabel = "+52 33 1796 0306";
const whatsappHref =
  `https://wa.me/${whatsappBusinessNumber.replace(/\D/g, "")}?text=Hi%2C%20I%20want%20to%20build%20a%20website.%20Can%20you%20help%20me%3F`;

export const landingPage = {
  site: {
    title: "Angel Pineda | Software Engineer",
    description:
      "Software engineer building product-focused web experiences with strategy, design, development, and deployment under one roof.",
  },
  contact: {
    email: "angelpdev@gmail.com",
    phoneLabel: whatsappBusinessLabel,
    phoneHref: `tel:${whatsappBusinessNumber}`,
    location: "Guadalajara, Jalisco",
    remoteLabel: "We can work remote",
    whatsappHref,
  },
  navItems: [
    { href: "#services", label: "Services" },
    { href: "#tools", label: "Tools" },
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#faq", label: "FAQ" },
  ] satisfies NavItem[],
  hero: {
    eyebrow: "Software Engineer",
    title: "Build, launch, and scale your web product",
    titleAccent: "without the chaos.",
    description:
      "From idea to production, I handle discovery, strategy, design, development, and deployment so your product keeps moving while you stay focused on the business behind it.",
    ctaLabel: "Start on WhatsApp",
    secondaryCtaLabel: "See services",
    secondaryCtaHref: "#services",
    supportingLine:
      "Start with a focused conversation about goals, constraints, and the fastest useful version to ship.",
  },
  services: {
    eyebrow: "Services",
    title: "A complete end-to-end web development process.",
    description:
      "Every stage is shaped to reduce ambiguity, keep decisions visible, and move from concept to release with less friction.",
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
      "The technologies below are arranged as a living orbit to reinforce the idea that the stack supports the product, not the other way around.",
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
      "A featured project with clear progress notes today, plus room for the next documented case study.",
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
  },
  faq: {
    eyebrow: "FAQ",
    title: "Straight answers before we build.",
    description:
      "A first conversation should make the next steps clearer, not more complicated.",
    items: [
      {
        question: "How much does a project cost?",
        answer:
          "The price depends on the product scope, but the first version can be shaped to fit your budget while still solving a real problem.",
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
    title: "Ready to begin?",
    description:
      "Let’s have an initial conversation about your ideas without any obligation.",
    label: "Chat on WhatsApp",
    note: "Direct message, no form required.",
  },
} as const;
