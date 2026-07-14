export type JobOpportunity = {
  id: string;
  role: string;
  company: string;
  location: string;
  mode: string;
  salary: string;
  match: number;
  skills: string[];
  recommendation: string;
};

export const jobOpportunities: JobOpportunity[] = [
  {
    id: "customer-success",
    role: "Customer Success Specialist",
    company: "Empresa tecnológica internacional",
    location: "Latinoamérica",
    mode: "Remoto",
    salary: "$1,200–$1,800 USD",
    match: 94,
    skills: ["Inglés", "Atención al cliente", "Comunicación", "Experiencia internacional"],
    recommendation: "Destaca resultados medibles y experiencia trabajando con clientes.",
  },
  {
    id: "asistente-virtual",
    role: "Asistente Virtual Bilingüe",
    company: "Empresa de servicios profesionales",
    location: "Latinoamérica",
    mode: "Remoto",
    salary: "$900–$1,400 USD",
    match: 91,
    skills: ["Inglés", "Organización", "Herramientas digitales"],
    recommendation: "Incluye herramientas digitales, organización e inglés profesional.",
  },
  {
    id: "operaciones-junior",
    role: "Analista de Operaciones Junior",
    company: "Empresa regional de operaciones",
    location: "Panamá",
    mode: "Híbrido",
    salary: "$900–$1,300 USD",
    match: 87,
    skills: ["Excel", "Procesos", "Métricas", "Resolución de problemas"],
    recommendation: "Destaca Excel, procesos, métricas y resolución de problemas.",
  },
  {
    id: "ventas-remotas",
    role: "Representante de Ventas Remotas",
    company: "Empresa comercial internacional",
    location: "América",
    mode: "Remoto",
    salary: "$1,000–$2,000 USD más comisión",
    match: 85,
    skills: ["Negociación", "Ventas", "Comunicación", "Metas"],
    recommendation: "Muestra cifras, metas alcanzadas y habilidades de negociación.",
  },
  {
    id: "soporte-tecnico",
    role: "Soporte Técnico Junior",
    company: "Empresa de tecnología y soporte",
    location: "Latinoamérica",
    mode: "Remoto",
    salary: "$1,000–$1,600 USD",
    match: 82,
    skills: ["Soporte", "Diagnóstico técnico", "Atención al usuario"],
    recommendation: "Añade herramientas técnicas, diagnóstico de problemas y atención al usuario.",
  },
  {
    id: "marketing-digital",
    role: "Coordinador de Marketing Digital",
    company: "Agencia de marketing regional",
    location: "Panamá",
    mode: "Remoto parcial",
    salary: "$1,100–$1,700 USD",
    match: 79,
    skills: ["Campañas", "Métricas", "Contenido", "Analítica"],
    recommendation: "Destaca campañas, métricas, contenido y herramientas de análisis.",
  },
];

export const matchMetrics = [
  ["Experiencia", 86],
  ["Habilidades", 92],
  ["Inglés", 78],
  ["Ubicación", 100],
  ["Educación", 83],
] as const;

export const salaryMarkets = [
  { market: "Panamá", range: "$800–$1,500", value: 43 },
  { market: "Trabajo remoto LATAM", range: "$1,000–$2,200", value: 63 },
  { market: "Estados Unidos remoto", range: "$1,500–$3,500", value: 100 },
  { market: "Europa remoto", range: "$1,400–$3,000", value: 86 },
] as const;

export const kanbanColumns = [
  { title: "Encontradas", role: "Soporte Técnico Junior", company: "Empresa tecnológica", date: "Hoy", match: 82, action: "Revisar requisitos" },
  { title: "Alta compatibilidad", role: "Customer Success", company: "Empresa internacional", date: "Hoy", match: 94, action: "Analizar palabras clave" },
  { title: "Preparando CV", role: "Asistente Virtual", company: "Servicios profesionales", date: "Ayer", match: 91, action: "Adaptar resumen" },
  { title: "Aplicadas", role: "Analista de Operaciones", company: "Empresa regional", date: "Hace 2 días", match: 87, action: "Enviar seguimiento" },
  { title: "Entrevistas", role: "Ventas Remotas", company: "Empresa comercial", date: "Jueves", match: 85, action: "Practicar entrevista" },
  { title: "Seguimiento", role: "Marketing Digital", company: "Agencia regional", date: "Viernes", match: 79, action: "Revisar respuesta" },
] as const;
