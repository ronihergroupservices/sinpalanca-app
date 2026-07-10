import Image from "next/image";
import { DashboardPreview } from "./dashboard-preview";
import {
  deliverables,
  plans,
  questions,
  STRIPE_INICIO,
  STRIPE_PROFESIONAL,
  type IconName,
} from "./data";
import { Brand, ButtonLink, CheckItem, Icon, SectionHeading } from "./ui";

export function Hero() {
  return (
    <>
      <section id="inicio" className="dark-grid relative overflow-hidden bg-[var(--navy)] px-4 pb-20 pt-14 text-white sm:px-6 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="hero-glow pointer-events-none absolute inset-0" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-10">
          <div className="max-w-xl reveal-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-400/10 px-3.5 py-2 text-xs font-bold text-blue-100 backdrop-blur">
              <Icon name="sparkles" className="size-4 text-blue-300" />
              Análisis profesional impulsado por IA
            </div>
            <h1 className="mt-7 text-5xl font-extrabold leading-[0.98] tracking-normal sm:text-6xl lg:text-7xl">
              Consigue trabajo sin contactos.
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100/75 sm:text-xl">
              Mejora tu CV, descubre qué está frenando tus entrevistas y recibe una estrategia profesional personalizada para aumentar tus oportunidades.
            </p>
            <p className="mt-7 border-l-2 border-blue-400 pl-5 text-xl font-bold leading-8 text-blue-200 sm:text-2xl">
              Ellos tienen palanca.<br />
              Tú tienes estrategia.<br />
              Tú tienes IA.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#precios" className="justify-center sm:justify-start">Analizar mi CV</ButtonLink>
              <ButtonLink href="#que-recibes" variant="secondary" className="justify-center border-white/15 bg-white/5 text-white hover:border-white/30 hover:bg-white/10">
                Ver qué recibo
              </ButtonLink>
            </div>
            <p className="mt-6 max-w-lg text-sm leading-6 text-blue-100/55">
              No garantizamos empleo. Te ayudamos a presentar mejor tu experiencia, detectar errores y competir con una estrategia más clara.
            </p>
          </div>
          <div className="reveal-up [animation-delay:120ms]">
            <DashboardPreview />
          </div>
        </div>
      </section>

      <div className="border-b border-blue-100 bg-white px-4 py-5 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-4 text-center sm:grid-cols-3 sm:divide-x sm:divide-blue-100">
          {[
            ["Pago único", "Sin mensualidades"],
            ["Estrategia clara", "Sin promesas de empleo"],
            ["Enfoque LATAM", "Para distintos niveles de experiencia"],
          ].map(([title, text]) => (
            <div key={title} className="px-4">
              <p className="text-sm font-bold text-[var(--ink)]">{title}</p>
              <p className="mt-1 text-xs text-slate-500">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

const problems: Array<{ icon: IconName; number: string; title: string; text: string }> = [
  { icon: "people", number: "01", title: "Sin contactos", text: "No todos tienen una recomendación interna o alguien que los ayude a entrar." },
  { icon: "scanner", number: "02", title: "CV invisible", text: "Tu CV puede ser descartado antes de que lo lea una persona." },
  { icon: "compass", number: "03", title: "Sin dirección", text: "No saber qué mejorar te hace perder tiempo aplicando a ciegas." },
];

export function ProblemSection() {
  return (
    <section className="section-dark relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="orb-blue pointer-events-none absolute -left-20 top-1/3 size-80 rounded-full blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="El problema real"
          title="En LATAM, el talento no siempre basta."
          description="Personas preparadas quedan fuera porque su perfil no es visible, su CV no supera filtros o nadie les explica qué deberían mejorar primero."
          dark
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_1fr_1fr_1.08fr]">
          {problems.map((problem, index) => (
            <article key={problem.number} className="premium-card-dark reveal-up group p-6" style={{ animationDelay: `${index * 80}ms` }}>
              <div className="flex items-start justify-between gap-4">
                <span className="grid size-12 place-items-center rounded-2xl border border-blue-300/20 bg-blue-400/10 text-blue-300 transition group-hover:bg-blue-400/15">
                  <Icon name={problem.icon} className="size-6" />
                </span>
                <span className="font-mono text-3xl font-bold text-white/15">{problem.number}</span>
              </div>
              <h3 className="mt-7 text-xl font-bold text-white">{problem.title}</h3>
              <p className="mt-3 text-sm leading-6 text-blue-100/65">{problem.text}</p>
            </article>
          ))}

          <aside className="reveal-up rounded-3xl border border-blue-300/20 bg-gradient-to-b from-blue-500/15 to-white/[0.04] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.25)] [animation-delay:240ms]">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="section-label text-blue-300">Diagnóstico rápido</p>
                <h3 className="mt-2 text-xl font-bold text-white">Visibilidad del perfil</h3>
              </div>
              <Icon name="chart" className="size-7 text-blue-300" />
            </div>
            <div className="mt-7 space-y-5">
              {[["CV", "54"], ["ATS", "48"], ["Estrategia", "37"]].map(([label, value]) => (
                <div key={label}>
                  <div className="flex justify-between text-sm"><span className="font-semibold text-blue-100">{label}</span><span className="font-mono font-bold text-white">{value}/100</span></div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10"><div className="progress-grow h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-300" style={{ width: `${value}%` }} /></div>
                </div>
              ))}
            </div>
            <p className="mt-7 rounded-2xl border border-white/10 bg-white/[0.055] p-4 text-sm font-semibold leading-6 text-white">
              No es falta de talento. Es falta de visibilidad y estrategia.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

export function AtsSection() {
  const flow = [
    ["document", "CV actual"],
    ["scanner", "Análisis ATS"],
    ["search", "Errores detectados"],
    ["sparkles", "CV optimizado"],
  ] as const;

  return (
    <section id="ats" className="section-light px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="reveal-up">
          <SectionHeading
            eyebrow="Entiende los filtros ATS"
            title="Tu CV puede estar siendo descartado antes de que lo lea una persona."
            description="ATS significa Applicant Tracking System. Son sistemas utilizados por empresas para organizar y filtrar currículums."
          />
          <div className="mt-7 flex items-start gap-3 rounded-2xl border border-blue-100 bg-white p-4 text-sm leading-6 text-slate-600 shadow-sm">
            <Icon name="document" className="mt-0.5 size-5 shrink-0 text-[var(--primary)]" />
            <p>SinPalanca no garantiza aprobación automática ni empleo. Ayuda a mejorar la claridad, estructura y compatibilidad de tu CV.</p>
          </div>
        </div>

        <div className="reveal-up relative rounded-[28px] border border-blue-100 bg-white p-5 shadow-[0_24px_70px_rgba(27,79,228,0.12)] sm:p-8 [animation-delay:100ms]">
          <div className="absolute inset-x-16 top-1/2 hidden h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent sm:block" />
          <div className="relative grid gap-3 sm:grid-cols-4">
            {flow.map(([icon, label], index) => (
              <div key={label} className="relative flex items-center gap-3 rounded-2xl border border-blue-100 bg-[var(--surface)] p-4 sm:block sm:min-h-40 sm:text-center">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-blue-600 text-white shadow-[0_8px_22px_rgba(27,79,228,0.25)] sm:mx-auto">
                  <Icon name={icon} className="size-5" />
                </span>
                <div className="sm:mt-5">
                  <span className="font-mono text-[10px] font-bold text-blue-500">0{index + 1}</span>
                  <p className="mt-1 text-sm font-bold text-[var(--ink)]">{label}</p>
                </div>
                {index < flow.length - 1 && <span aria-hidden="true" className="absolute -bottom-3 left-1/2 z-10 grid size-6 -translate-x-1/2 place-items-center rounded-full border border-blue-100 bg-white text-blue-500 sm:-right-3 sm:bottom-auto sm:left-auto sm:top-1/2 sm:-translate-y-1/2 sm:translate-x-0">↓</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  const steps = [
    { icon: "target" as IconName, number: "01", title: "Elige tu análisis", text: "Selecciona Plan Inicio o Plan Profesional.", items: ["Pago único", "Dos niveles de análisis"] },
    { icon: "person" as IconName, number: "02", title: "Completa tu perfil", text: "Comparte tu experiencia, educación, habilidades, objetivos y CV.", items: ["Información profesional", "Contexto de tus objetivos"] },
    { icon: "map" as IconName, number: "03", title: "Recibe tu estrategia", text: "Obtén recomendaciones, mejoras de CV, scores y un plan de acción.", items: ["Prioridades claras", "Roadmap de 90 días"] },
  ];

  return (
    <section id="como-funciona" className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="soft-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading eyebrow="Cómo funciona" title="De la incertidumbre a un plan profesional." description="Un proceso claro para convertir tu experiencia en decisiones concretas." align="center" />
        <div className="relative mt-14 grid gap-5 lg:grid-cols-3">
          <div className="absolute left-[16%] right-[16%] top-14 hidden h-px bg-gradient-to-r from-blue-200 via-blue-500 to-blue-200 lg:block" />
          {steps.map((step, index) => (
            <article key={step.number} className="premium-card reveal-up relative p-6 sm:p-8" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="relative flex items-center justify-between gap-4">
                <span className="grid size-14 place-items-center rounded-2xl bg-[var(--primary)] text-white shadow-[0_10px_28px_rgba(27,79,228,0.28)]"><Icon name={step.icon} className="size-6" /></span>
                <span className="font-mono text-3xl font-bold text-blue-100">{step.number}</span>
              </div>
              <h3 className="mt-7 text-2xl font-bold text-[var(--ink)]">{step.title}</h3>
              <p className="mt-3 min-h-14 leading-7 text-slate-600">{step.text}</p>
              <ul className="mt-6 space-y-3 border-t border-slate-100 pt-5">
                {step.items.map((item) => <CheckItem key={item}>{item}</CheckItem>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DeliverablesSection() {
  return (
    <section id="que-recibes" className="section-light px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Qué recibes" title="Un análisis completo, organizado por prioridades." description="Cada parte del reporte te ayuda a entender dónde estás, qué está frenando tu perfil y cuál debería ser tu siguiente paso." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {deliverables.map((item, index) => {
            const large = index < 2;
            return (
              <article key={item.title} className={`reveal-up group relative overflow-hidden rounded-3xl border p-6 transition duration-300 hover:-translate-y-1 ${large ? "border-blue-200 bg-[var(--navy)] text-white shadow-[0_20px_55px_rgba(7,20,38,0.16)] lg:col-span-2" : "border-blue-100 bg-white text-[var(--ink)] shadow-[0_12px_36px_rgba(27,79,228,0.07)] hover:border-blue-200"}`} style={{ animationDelay: `${(index % 4) * 55}ms` }}>
                <div className="flex items-start justify-between gap-4">
                  <span className={`grid size-11 place-items-center rounded-xl ${large ? "bg-blue-500/15 text-blue-300" : item.featured ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-600"}`}><Icon name={item.icon} className="size-5" /></span>
                  <span className={`font-mono text-xs font-bold ${large ? "text-blue-300" : "text-blue-400"}`}>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 className={`mt-6 font-bold ${large ? "text-2xl" : "text-lg"}`}>{item.title}</h3>
                <p className={`mt-3 text-sm leading-6 ${large ? "max-w-md text-blue-100/65" : "text-slate-600"}`}>{item.description}</p>
                {large && (
                  <div className="mt-6 h-1.5 max-w-sm overflow-hidden rounded-full bg-white/10"><div className="progress-grow h-full rounded-full bg-gradient-to-r from-blue-500 to-emerald-400" style={{ width: index === 0 ? "82%" : "76%" }} /></div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function PricingSection() {
  return (
    <section id="precios" className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Precios simples" title="Invierte una vez en mejorar tu perfil profesional." description="Pago único. Sin mensualidades." align="center" />
        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-2">
          {plans.map((plan) => (
            <article key={plan.name} className={`reveal-up relative flex flex-col rounded-[28px] border p-6 sm:p-8 ${plan.featured ? "border-blue-400 bg-[var(--navy)] text-white shadow-[0_28px_80px_rgba(7,20,38,0.25)]" : "border-blue-100 bg-white text-[var(--ink)] shadow-[0_20px_60px_rgba(27,79,228,0.1)]"}`}>
              {plan.badge && <span className="absolute right-5 top-5 rounded-full bg-emerald-400 px-3 py-1.5 text-xs font-bold text-emerald-950">{plan.badge}</span>}
              <p className={`section-label ${plan.featured ? "text-blue-300" : "text-blue-600"}`}>{plan.name}</p>
              <div className="mt-5 flex flex-wrap items-end gap-x-3 gap-y-1">
                <strong className="font-mono text-4xl font-bold sm:text-5xl">{plan.price.replace(" USD", "")}</strong>
                <span className={`pb-1 text-sm ${plan.featured ? "text-blue-200" : "text-slate-500"}`}>USD · Pago único</span>
              </div>
              <div className={`mt-6 rounded-2xl p-4 ${plan.featured ? "border border-white/10 bg-white/[0.055]" : "bg-blue-50"}`}>
                <p className={`text-xs font-bold uppercase ${plan.featured ? "text-blue-300" : "text-blue-600"}`}>Ideal para</p>
                <p className={`mt-2 text-sm leading-6 ${plan.featured ? "text-blue-100/75" : "text-slate-600"}`}>{plan.idealFor}</p>
              </div>
              <ul className="mt-7 flex-1 space-y-3.5">
                {plan.features.map((feature) => <CheckItem key={feature} dark={plan.featured}>{feature}</CheckItem>)}
              </ul>
              <ButtonLink href={plan.href} variant={plan.featured ? "light" : "primary"} className="mt-8 justify-center">{plan.cta}</ButtonLink>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-6 text-slate-500">SinPalanca mejora la forma en que presentas tu perfil. Ningún plan garantiza entrevistas ni empleo.</p>
      </div>
    </section>
  );
}

export function StorySection() {
  return (
    <section id="historia" className="section-light px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <article className="reveal-up relative mx-auto grid max-w-7xl overflow-hidden rounded-[32px] border border-blue-100 bg-white shadow-[0_28px_90px_rgba(27,79,228,0.13)] lg:grid-cols-[0.72fr_1.28fr]">
        <div className="relative flex min-h-[420px] flex-col items-center justify-center overflow-hidden bg-[var(--navy)] p-8 text-center text-white sm:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(59,130,246,.32),transparent_38%)]" />
          <Image src="/shield.png" width={240} height={240} alt="" aria-hidden="true" className="pointer-events-none absolute -bottom-12 -right-10 size-56 object-contain opacity-[0.06]" />
          <div className="relative grid size-40 place-items-center rounded-full border border-blue-300/30 bg-gradient-to-b from-blue-500/25 to-blue-500/5 shadow-[0_0_60px_rgba(59,130,246,0.26)]">
            <Icon name="person" className="size-20 text-blue-100" />
          </div>
          <p className="relative mt-7 text-2xl font-bold">Estefany Fox</p>
          <p className="relative mt-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-blue-100"><span aria-hidden="true">🇵🇦</span> Creado desde Panamá</p>
        </div>
        <div className="p-6 sm:p-10 lg:p-14">
          <p className="section-label text-blue-600">Nuestra historia</p>
          <h2 className="section-title mt-4">Creado desde Panamá para quienes no tienen palanca.</h2>
          <div className="mt-7 space-y-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            <p>SinPalanca.app nació después de vivir de cerca lo difícil que puede ser buscar empleo, enviar aplicaciones y no recibir respuestas.</p>
            <p>Muchas personas tienen talento, experiencia y ganas de trabajar, pero no saben cómo presentar correctamente su perfil o cómo superar los filtros que utilizan las empresas.</p>
            <p>Después de trabajar de forma remota y conocer diferentes mercados, Estefany Fox decidió crear SinPalanca.app para ayudar a estudiantes, técnicos, profesionales y personas sin experiencia a competir con mejores herramientas.</p>
            <div className="rounded-2xl bg-blue-50 p-5">
              <p className="font-bold text-[var(--ink)]">Nuestra misión es sencilla:</p>
              <p className="mt-2 text-[var(--primary)]">Que las oportunidades dependan más de la preparación que de los contactos.</p>
            </div>
          </div>
          <blockquote className="mt-7 border-l-2 border-blue-500 pl-5 text-lg font-semibold italic leading-7 text-[var(--ink)]">“El talento merece oportunidades. Nosotros te ayudamos a demostrarlo.”</blockquote>
        </div>
      </article>
    </section>
  );
}

export function FaqSection() {
  return (
    <section id="preguntas" className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1.28fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading eyebrow="Preguntas frecuentes" title="Respuestas claras antes de elegir." description="Sin letras pequeñas ni promesas irreales." />
        </div>
        <div className="space-y-3">
          {questions.map((item, index) => (
            <details key={item.question} className="faq-item group rounded-2xl border border-blue-100 bg-white shadow-[0_8px_28px_rgba(27,79,228,0.06)]" open={index === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 font-bold text-[var(--ink)] sm:px-6">
                <span>{item.question}</span>
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-blue-50 text-xl font-normal text-blue-600 transition group-open:rotate-45">+</span>
              </summary>
              <div className="faq-answer px-5 sm:px-6"><p className="border-t border-blue-50 pb-5 pt-4 leading-7 text-slate-600">{item.answer}</p></div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="section-dark relative overflow-hidden px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,.3),transparent_40%)]" />
      <Image src="/shield.png" width={420} height={420} alt="" aria-hidden="true" className="pointer-events-none absolute -bottom-32 left-1/2 size-[420px] -translate-x-1/2 object-contain opacity-[0.035]" />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="section-label text-blue-300">Tu siguiente paso</p>
        <h2 className="mt-5 text-4xl font-bold leading-[1.04] sm:text-5xl lg:text-6xl">Antes de enviar otros 100 CVs, descubre qué está fallando.</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100/70">Tu problema quizás no es falta de talento. Puede ser tu CV, tu estrategia o la forma en que estás mostrando tus habilidades.</p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href={STRIPE_INICIO} variant="light" className="justify-center">Comprar Plan Inicio · $5.99</ButtonLink>
          <ButtonLink href={STRIPE_PROFESIONAL} className="justify-center border border-blue-300/20">Comprar Plan Profesional · $19.99</ButtonLink>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-blue-100 bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <a href="#inicio" aria-label="Ir al inicio"><Brand /></a>
          <p className="mt-4 text-sm font-semibold text-[var(--ink)]">Consigue trabajo sin contactos.</p>
          <p className="mt-1 text-sm text-slate-500">Creado desde Panamá.</p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold text-slate-600">
          <a href="#como-funciona" className="hover:text-blue-600">Cómo funciona</a>
          <a href="#precios" className="hover:text-blue-600">Precios</a>
          <a href="mailto:contacto@sinpalanca.app?subject=Consulta%20de%20privacidad" className="hover:text-blue-600">Privacidad</a>
          <a href="mailto:contacto@sinpalanca.app?subject=Consulta%20sobre%20términos" className="hover:text-blue-600">Términos</a>
          <a href="mailto:contacto@sinpalanca.app" className="hover:text-blue-600">Contacto</a>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-7xl border-t border-blue-50 pt-5 text-xs text-slate-400">© {new Date().getFullYear()} SinPalanca.app. Todos los derechos reservados.</p>
    </footer>
  );
}
