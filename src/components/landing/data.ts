export const STRIPE_INICIO =
  "https://buy.stripe.com/6oU4gA2vr7Nw8U1eqKcMM0v";
export const STRIPE_PROFESIONAL =
  "https://buy.stripe.com/cNicN6fid6Js7PXciCcMM0w";

export type IconName =
  | "arrow"
  | "briefcase"
  | "chart"
  | "check"
  | "compass"
  | "document"
  | "globe"
  | "graduation"
  | "language"
  | "linkedin"
  | "mail"
  | "map"
  | "people"
  | "person"
  | "scanner"
  | "search"
  | "sparkles"
  | "target"
  | "trend";

export type Plan = {
  name: string;
  price: string;
  idealFor: string;
  href: string;
  cta: string;
  featured: boolean;
  badge?: string;
  features: string[];
};

export const plans: Plan[] = [
  {
    name: "Plan Inicio",
    price: "$5.99 USD",
    idealFor:
      "Personas que quieren entender los errores principales de su CV y recibir recomendaciones iniciales.",
    href: STRIPE_INICIO,
    cta: "Comprar Plan Inicio",
    featured: false,
    features: [
      "CV analizado por IA",
      "Optimización ATS",
      "Career Score y ATS Score",
      "Top 3 errores críticos",
      "Top 5 empleos para tu perfil",
      "Roadmap de 90 días",
      "Dashboard personal",
      "Reporte completo en PDF",
    ],
  },
  {
    name: "Plan Profesional",
    price: "$19.99 USD",
    idealFor:
      "Personas que quieren un análisis profundo, CV optimizado y una estrategia profesional completa.",
    href: STRIPE_PROFESIONAL,
    cta: "Comprar Plan Profesional",
    featured: true,
    badge: "Más completo",
    features: [
      "Todo lo incluido en Plan Inicio",
      "CV reescrito y optimizado hasta 5 veces",
      "Carta de presentación personalizada",
      "Salarios base por país y sector",
      "Mercado laboral actual",
      "Carreras con mayor demanda",
      "Mejores certificaciones",
      "Habilidades más demandadas",
      "Estrategia completa para LinkedIn",
      "Reporte profesional en PDF",
    ],
  },
];

export type Deliverable = {
  title: string;
  description: string;
  icon: IconName;
  featured?: boolean;
};

export const deliverables: Deliverable[] = [
  {
    title: "Career Score",
    description:
      "Una lectura general de tu perfil basada en experiencia, educación, habilidades, CV y mercado.",
    icon: "chart",
    featured: true,
  },
  {
    title: "ATS Score",
    description:
      "Evalúa estructura, palabras clave, formato y compatibilidad con filtros automatizados.",
    icon: "scanner",
    featured: true,
  },
  {
    title: "Análisis de CV",
    description:
      "Revisa claridad, longitud, verbos de acción, logros, lectura y organización.",
    icon: "document",
  },
  {
    title: "Errores críticos",
    description:
      "Prioriza los tres problemas que más pueden estar limitando tus entrevistas.",
    icon: "target",
  },
  {
    title: "Top de empleos",
    description:
      "Identifica cinco roles alineados con tu experiencia, país y perfil profesional.",
    icon: "briefcase",
  },
  {
    title: "Fortalezas y debilidades",
    description:
      "Muestra qué conviene destacar y qué brechas deberías trabajar primero.",
    icon: "trend",
  },
  {
    title: "Mercado laboral",
    description:
      "Ofrece contexto sobre sectores, contratación y habilidades con mayor demanda.",
    icon: "globe",
  },
  {
    title: "Salarios por país",
    description:
      "Compara rangos locales, remotos e internacionales según tu perfil.",
    icon: "chart",
  },
  {
    title: "Carreras con demanda",
    description:
      "Detecta roles y áreas profesionales con oportunidades en tu mercado.",
    icon: "trend",
  },
  {
    title: "Certificaciones",
    description:
      "Recomienda formación gratuita y de pago relevante para tus objetivos.",
    icon: "graduation",
  },
  {
    title: "Roadmap de 90 días",
    description:
      "Convierte el diagnóstico en pasos semanales para mejorar y aplicar con dirección.",
    icon: "map",
    featured: true,
  },
  {
    title: "CV reescrito",
    description:
      "Transforma responsabilidades en logros claros y orientados al puesto.",
    icon: "sparkles",
    featured: true,
  },
  {
    title: "Carta de presentación",
    description:
      "Recibe una base profesional que puedes adaptar a cada empresa.",
    icon: "mail",
  },
  {
    title: "Trabajo remoto",
    description:
      "Explora compatibilidad con oportunidades remotas y rangos salariales en dólares.",
    icon: "globe",
  },
  {
    title: "LinkedIn",
    description:
      "Mejora titular, resumen, palabras clave y visibilidad frente a reclutadores.",
    icon: "linkedin",
  },
  {
    title: "Inglés técnico",
    description:
      "Adapta logros y términos profesionales para CV y perfiles internacionales.",
    icon: "language",
  },
];

export const questions = [
  {
    question: "¿SinPalanca me consigue trabajo?",
    answer:
      "No. SinPalanca no garantiza empleo. Te ayuda a detectar errores, mejorar tu presentación profesional y competir con una estrategia más clara.",
  },
  {
    question: "¿Qué es ATS?",
    answer:
      "ATS significa Applicant Tracking System o sistema de seguimiento de candidatos. Muchas empresas lo utilizan para organizar y filtrar currículums antes de una revisión humana.",
  },
  {
    question: "¿Puedo usarlo sin experiencia?",
    answer:
      "Sí. El análisis se adapta a estudiantes, técnicos, personas sin experiencia formal y profesionales con trayectoria.",
  },
  {
    question: "¿Sirve si no fui a la universidad?",
    answer:
      "Sí. La educación es solo una parte del perfil. También se consideran experiencia, proyectos, habilidades, certificaciones y objetivos.",
  },
  {
    question: "¿El pago es único?",
    answer:
      "Sí. Plan Inicio y Plan Profesional se pagan una sola vez. No son suscripciones mensuales.",
  },
  {
    question: "¿Qué pasa después de pagar?",
    answer:
      "Recibirás los siguientes pasos para completar tu información profesional, compartir tu CV y comenzar el análisis correspondiente a tu plan.",
  },
  {
    question: "¿Cuánto tarda el análisis?",
    answer:
      "El tiempo puede variar según la información de tu perfil y el plan elegido. La confirmación de compra indicará los siguientes pasos del proceso.",
  },
  {
    question: "¿Puedo mejorar mi CV varias veces?",
    answer:
      "Plan Profesional incluye la reescritura y optimización del CV hasta cinco veces. Plan Inicio se concentra en el diagnóstico y las recomendaciones iniciales.",
  },
];
