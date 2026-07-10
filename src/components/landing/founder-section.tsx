import Image from "next/image";
import { STRIPE_PROFESIONAL, type IconName } from "./data";
import { FounderBadge } from "./founder-badge";
import { ButtonLink, Icon } from "./ui";

const availableToday = [
  "Análisis personalizado de tu perfil",
  "Revisión y mejora de tu CV",
  "ATS Score",
  "Career Score",
  "Recomendaciones profesionales",
  "Roadmap de 90 días",
  "Carta de presentación",
  "Orientación para mejorar tus oportunidades",
];

const inDevelopment = [
  ["Dashboard personal", "En desarrollo"],
  ["Historial de CV y reportes", "En desarrollo"],
  ["Análisis en vivo del CV con IA", "Próximamente"],
  ["Comparación del CV con una vacante específica", "Próximamente"],
  ["Recomendaciones automáticas de palabras clave", "Próximamente"],
  ["Generador de diferentes versiones del CV", "Próximamente"],
  ["Seguimiento del progreso profesional", "Próximamente"],
  ["Simulador de entrevistas con IA", "Próximamente"],
  ["Roadmap interactivo", "Próximamente"],
  ["Alertas de habilidades recomendadas", "Próximamente"],
  ["Recomendaciones de trabajos según el perfil", "Próximamente"],
  ["Panel de afiliados", "Próximamente"],
  ["Descarga de reportes y CV en PDF", "Próximamente"],
] as const;

const roadmap: Array<{
  stage: string;
  title: string;
  status: string;
  description: string;
  icon: IconName;
  state: "available" | "building" | "next" | "future";
}> = [
  {
    stage: "Etapa 1",
    title: "Análisis personalizado",
    status: "Disponible ahora",
    description: "Revisión del CV, Career Score, ATS Score y plan profesional.",
    icon: "check",
    state: "available",
  },
  {
    stage: "Etapa 2",
    title: "Dashboard personal",
    status: "En desarrollo",
    description: "Perfil, reportes, historial y seguimiento del progreso.",
    icon: "chart",
    state: "building",
  },
  {
    stage: "Etapa 3",
    title: "Análisis en vivo con IA",
    status: "Próximamente",
    description: "Sube tu CV y recibe recomendaciones automáticas dentro de la plataforma.",
    icon: "sparkles",
    state: "next",
  },
  {
    stage: "Etapa 4",
    title: "Copiloto profesional completo",
    status: "Visión futura",
    description: "Entrevistas con IA, comparación con vacantes, recomendaciones y roadmap interactivo.",
    icon: "compass",
    state: "future",
  },
];

export function FounderSection() {
  return (
    <section id="founders" className="founder-stage relative overflow-hidden px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
      <div className="founder-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute left-1/2 top-0 size-[620px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
      <Image
        src="/shield.png"
        width={520}
        height={520}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-28 size-[520px] object-contain opacity-[0.035]"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center reveal-up">
          <span className="founder-label">Los primeros 200 Founders</span>
          <h2 className="mt-6 text-4xl font-bold leading-[1.04] sm:text-5xl lg:text-6xl">
            Tu apoyo no solo mejora tu CV. Ayuda a construir el futuro de SinPalanca.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100/70">
            Los primeros miembros Founder nos ayudarán a convertir SinPalanca en una plataforma más completa, automatizada y útil para quienes buscan trabajo sin contactos.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <article className="founder-panel reveal-up p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <span className="status-badge status-available">Disponible hoy</span>
                <h3 className="mt-3 text-2xl font-bold">Lo que recibes hoy</h3>
              </div>
              <Icon name="check" className="size-8 text-emerald-300" />
            </div>
            <ul className="mt-6 grid gap-3">
              {availableToday.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-xl bg-white/[0.045] px-4 py-3 text-sm leading-6 text-blue-50">
                  <span className="mt-1 grid size-4 shrink-0 place-items-center rounded-full bg-emerald-400 text-emerald-950">
                    <Icon name="check" className="size-2.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="founder-panel reveal-up p-6 sm:p-8 [animation-delay:100ms]">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <span className="status-badge status-building">En desarrollo</span>
                <h3 className="mt-3 text-2xl font-bold">Lo que estamos construyendo</h3>
              </div>
              <Icon name="sparkles" className="size-8 text-blue-300" />
            </div>
            <ul className="mt-6 space-y-2.5">
              {inDevelopment.map(([item, status]) => (
                <li key={item} className="flex items-center justify-between gap-4 border-b border-white/[0.06] py-2.5 text-sm last:border-b-0">
                  <span className="leading-5 text-blue-50/85">{item}</span>
                  <span className={`shrink-0 rounded-full px-2.5 py-1 text-[9px] font-bold uppercase ${status === "En desarrollo" ? "bg-blue-400/15 text-blue-200" : "bg-white/[0.07] text-blue-100/55"}`}>
                    {status}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <article className="founder-message reveal-up relative mt-6 overflow-hidden rounded-[28px] border border-amber-200/20 p-7 sm:p-10">
          <div className="absolute -right-20 -top-24 size-64 rounded-full bg-amber-300/10 blur-3xl" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <FounderBadge />
            <div>
              <p className="section-label text-amber-200">No estás comprando solo un análisis.</p>
              <p className="mt-4 text-lg leading-8 text-blue-50/80">
                Estás entrando desde el inicio a una plataforma creada para ayudar a miles de personas en Latinoamérica a competir por mejores oportunidades sin depender de contactos, recomendaciones o palancas.
              </p>
              <p className="mt-4 leading-7 text-blue-100/65">
                Cada Founder nos ayuda a mejorar la tecnología, automatizar los análisis y construir nuevas herramientas para la comunidad.
              </p>
              <p className="mt-6 border-l-2 border-amber-300 pl-5 text-xl font-bold leading-8 text-white">
                Los primeros 200 no solo serán clientes. Serán parte de la historia de SinPalanca.
              </p>
            </div>
          </div>
        </article>

        <div className="mt-16">
          <div className="text-center">
            <p className="section-label text-blue-300">Roadmap de producto</p>
            <h3 className="mt-4 text-3xl font-bold sm:text-4xl">De análisis profesional a copiloto completo.</h3>
          </div>
          <div className="founder-timeline relative mt-12 grid gap-5 lg:grid-cols-4">
            <div className="founder-timeline-line absolute hidden lg:block" />
            {roadmap.map((item, index) => (
              <article key={item.stage} className="founder-roadmap-card reveal-up relative p-5" style={{ animationDelay: `${index * 90}ms` }}>
                <span className={`roadmap-marker roadmap-marker-${item.state}`}>
                  <Icon name={item.icon} className="size-4" />
                </span>
                <p className="font-mono text-[10px] font-bold uppercase text-blue-300">{item.stage}</p>
                <h4 className="mt-3 text-lg font-bold">{item.title}</h4>
                <span className={`mt-3 inline-flex status-badge status-${item.state}`}>{item.status}</span>
                <p className="mt-4 text-sm leading-6 text-blue-100/60">{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-blue-200/15 bg-white/[0.045] p-5 text-sm leading-6 text-blue-100/65">
          <strong className="text-white">Transparencia:</strong> SinPalanca está en su primera etapa. Algunas funciones avanzadas todavía están en desarrollo y se lanzarán progresivamente. El Plan Founder incluye los servicios disponibles actualmente y acceso prioritario a las nuevas funciones a medida que sean publicadas. No se prometen fechas exactas ni se garantiza empleo.
        </div>

        <div className="founder-cta relative mt-14 overflow-hidden rounded-[30px] border border-blue-200/20 px-6 py-10 text-center sm:px-10 sm:py-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,.2),transparent_45%)]" />
          <div className="relative mx-auto max-w-3xl">
            <h3 className="text-3xl font-bold sm:text-4xl">Sé parte de los primeros 200.</h3>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100/70">
              Mejora tu perfil profesional hoy y acompáñanos mientras construimos una plataforma más poderosa para quienes buscan oportunidades sin contactos.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href={STRIPE_PROFESIONAL} variant="light" className="founder-button justify-center">
                Convertirme en Founder por $19.99
              </ButtonLink>
              <ButtonLink href="#plan-founder" variant="secondary" className="justify-center border-white/15 bg-white/5 text-white hover:border-white/30 hover:bg-white/10">
                Ver todo lo que incluye
              </ButtonLink>
            </div>
            <p className="mt-5 text-xs font-semibold text-blue-200">Pago único. Sin mensualidades.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
