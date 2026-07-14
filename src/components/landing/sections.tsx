import Image from "next/image";
import { DashboardPreview } from "./dashboard-preview";
import {
  deliverables,
  plans,
  questions,
  STRIPE_FOUNDER,
  type IconName,
} from "./data";
import { SpotlightSection } from "./spotlight-section";
import { FounderBadge } from "./founder-badge";
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

      <section aria-label="Beneficios principales" className="stats-stage relative border-b border-blue-100 px-4 py-7 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["check", "Pago único", "Sin mensualidades"],
            ["target", "Estrategia personalizada", "Prioridades para tu perfil"],
            ["scanner", "Compatible con ATS", "Mejor estructura y claridad"],
            ["globe", "Enfoque LATAM", "Distintos niveles de experiencia"],
          ].map(([icon, title, text], index) => (
            <article key={title} className="stat-card reveal-up group">
              <span className={`stat-count stat-count-${index + 1}`} aria-hidden="true" />
              <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-blue-600 text-white shadow-[0_9px_24px_rgba(27,79,228,0.24)] transition group-hover:scale-105">
                <Icon name={icon as IconName} className="size-5" />
              </span>
              <div>
                <p className="text-sm font-bold text-[var(--ink)]">{title}</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
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
    <SpotlightSection>
      <div className="problem-grid pointer-events-none absolute inset-0" />
      <div className="problem-spotlight pointer-events-none absolute inset-0" />
      <div className="problem-title-glow pointer-events-none absolute left-1/2 top-16 h-72 w-[min(90vw,820px)] -translate-x-1/2 rounded-full blur-3xl" />
      <div className="problem-particles pointer-events-none absolute inset-0" aria-hidden="true">
        {[12, 24, 38, 57, 72, 86].map((position, index) => (
          <span
            key={position}
            className="problem-particle"
            style={{ left: `${position}%`, animationDelay: `${index * 620}ms` }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-5xl text-center reveal-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/20 bg-white/[0.07] px-4 py-2 text-xs font-bold text-blue-100 backdrop-blur-xl">
            <span className="size-1.5 rounded-full bg-blue-300 shadow-[0_0_12px_4px_rgba(147,197,253,0.42)]" />
            Problema detectado
          </span>
          <p className="section-label mt-7 text-blue-200">El problema real</p>
          <h2 className="problem-title mt-4 bg-gradient-to-b from-white via-blue-50 to-blue-300 bg-clip-text text-5xl font-extrabold leading-[0.98] text-transparent sm:text-6xl lg:text-7xl">
            En LATAM, el talento no siempre basta.
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-blue-50/75 sm:text-xl">
            Personas preparadas quedan fuera porque su perfil no es visible, su CV no supera filtros o nadie les explica qué deberían mejorar primero.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {problems.map((problem, index) => (
            <article
              key={problem.number}
              className="problem-card reveal-up group relative min-h-72 overflow-hidden p-7 sm:p-8"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <span className="problem-card-line absolute inset-x-8 top-0 h-px" />
              <div className="absolute -right-12 -top-12 size-44 rounded-full bg-blue-400/10 blur-3xl transition duration-500 group-hover:bg-blue-400/20" />
              <div className="relative flex items-start justify-between gap-5">
                <span className="grid size-16 place-items-center rounded-2xl border border-blue-200/20 bg-gradient-to-br from-blue-400/20 to-blue-600/5 text-blue-200 shadow-[0_0_34px_rgba(59,130,246,0.2)] transition duration-300 group-hover:scale-105 group-hover:text-white">
                  <Icon name={problem.icon} className="size-8" />
                </span>
                <span className="font-mono text-6xl font-bold leading-none text-white/[0.08] transition group-hover:text-blue-300/15">
                  {problem.number}
                </span>
              </div>
              <span className="relative mt-8 inline-flex rounded-full border border-blue-200/15 bg-blue-300/10 px-3 py-1.5 text-[10px] font-bold uppercase text-blue-200">
                Problema detectado
              </span>
              <h3 className="relative mt-4 text-2xl font-bold text-white">{problem.title}</h3>
              <p className="relative mt-3 max-w-sm leading-7 text-blue-50/65">{problem.text}</p>
            </article>
          ))}
        </div>

        <aside className="diagnostic-dashboard reveal-up relative mt-6 overflow-hidden rounded-[28px] border border-blue-200/20 p-6 sm:p-8 lg:p-9 [animation-delay:180ms]">
          <div className="absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[0.72fr_0.5fr_1.35fr]">
            <div>
              <div className="flex items-center gap-3">
                <span className="grid size-12 place-items-center rounded-2xl bg-blue-500/15 text-blue-200 shadow-[0_0_28px_rgba(59,130,246,0.2)]">
                  <Icon name="chart" className="size-6" />
                </span>
                <div>
                  <p className="section-label text-blue-300">Diagnóstico rápido</p>
                  <h3 className="mt-1 text-2xl font-bold text-white">Visibilidad del perfil</h3>
                </div>
              </div>
              <p className="mt-6 max-w-sm text-lg font-semibold leading-7 text-white">
                No es falta de talento. Es falta de visibilidad y estrategia.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-amber-200/20 bg-amber-300/10 px-3 py-1.5 text-xs font-bold text-amber-100">
                <span className="size-1.5 rounded-full bg-amber-300" />
                Nivel de perfil: En desarrollo
              </span>
            </div>

            <div className="mx-auto text-center">
              <div className="score-ring score-ring-54 grid size-40 place-items-center rounded-full">
                <div className="grid size-28 place-items-center rounded-full border border-white/10 bg-[#0b1c35]">
                  <div>
                    <span className="score-count score-count-54 font-mono text-4xl font-bold text-white" role="img" aria-label="54 de 100" />
                    <p className="mt-1 text-[10px] font-bold uppercase text-blue-300">Career Score</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
              {[
                ["Career Score", "54", "score-54"],
                ["ATS Score", "48", "score-48"],
                ["Visibilidad / estrategia", "37", "score-37"],
              ].map(([label, value, scoreClass]) => (
                <div key={label}>
                  <div className="flex items-end justify-between gap-4">
                    <span className="text-sm font-semibold text-blue-100">{label}</span>
                    <span className={`metric-count ${scoreClass} font-mono text-lg font-bold text-white`} role="img" aria-label={`${value} de 100`} />
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="progress-grow h-full rounded-full bg-gradient-to-r from-blue-600 via-blue-400 to-emerald-400" style={{ width: `${value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </SpotlightSection>
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
    { icon: "target" as IconName, number: "01", title: "Elige tu análisis", text: "Selecciona Plan Inicio o Plan Founder.", items: ["Pago único", "Dos niveles de análisis"] },
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
    <section id="precios" className="pricing-stage relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="pointer-events-none absolute left-1/2 top-24 size-[520px] -translate-x-1/2 rounded-full bg-blue-400/10 blur-3xl" />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading eyebrow="Precios simples" title="Invierte una vez en mejorar tu perfil profesional." description="Pago único. Sin mensualidades." align="center" />

        <div className="pricing-assurance mt-9 grid overflow-hidden rounded-2xl border border-blue-100 bg-white/85 shadow-[0_14px_44px_rgba(27,79,228,0.08)] sm:grid-cols-3">
          {[
            ["check", "Pago único"],
            ["target", "Sin mensualidades"],
            ["sparkles", "Acceso inmediato"],
          ].map(([icon, label], index) => (
            <div key={label} className="flex items-center justify-center gap-2.5 border-b border-blue-50 px-4 py-3.5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
              <Icon name={icon as IconName} className="size-4 text-blue-600" />
              <span className="text-sm font-bold text-[var(--ink)]">{label}</span>
              {index === 2 && <span className="size-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />}
            </div>
          ))}
        </div>

        <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-2 lg:gap-7">
          {plans.map((plan, planIndex) => (
            <article
              key={plan.name}
              id={plan.featured ? "plan-founder" : undefined}
              className={`pricing-card reveal-up group relative flex flex-col p-7 sm:p-10 ${plan.featured ? "pricing-card-featured text-white lg:scale-[1.025]" : "text-[var(--ink)]"}`}
              style={{ animationDelay: `${planIndex * 100}ms` }}
            >
              {plan.featured && (
                <div className="absolute -top-5 left-1/2 z-10 -translate-x-1/2 rounded-full border border-emerald-200/30 bg-emerald-400 px-5 py-2 text-xs font-extrabold text-emerald-950 shadow-[0_10px_30px_rgba(16,185,129,0.25)]">
                  Primeros 100 Founders
                </div>
              )}
              <div className="pricing-card-glow pointer-events-none absolute inset-x-12 top-0 h-px" />
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className={`section-label ${plan.featured ? "text-blue-300" : "text-blue-600"}`}>{plan.name}</p>
                <span className={`rounded-full px-3 py-1.5 text-xs font-bold ${plan.featured ? "bg-emerald-400 text-emerald-950" : "border border-blue-200 bg-blue-50 text-blue-700"}`}>
                  {plan.featured ? "Acceso fundador" : "Ideal para comenzar"}
                </span>
              </div>

              <div className="mt-7 flex flex-wrap items-end gap-x-3 gap-y-1">
                <strong className="font-mono text-5xl font-bold sm:text-6xl">{plan.price.replace(" USD", "")}</strong>
                <span className={`pb-2 text-sm ${plan.featured ? "text-blue-200" : "text-slate-500"}`}>USD · Pago único</span>
              </div>

              <div className={`mt-7 border-y py-5 ${plan.featured ? "border-white/10" : "border-blue-100"}`}>
                <p className={`text-xs font-bold uppercase ${plan.featured ? "text-blue-300" : "text-blue-600"}`}>Ideal para</p>
                <p className={`mt-2 text-sm leading-6 ${plan.featured ? "text-blue-100/75" : "text-slate-600"}`}>{plan.idealFor}</p>
              </div>

              {plan.featured && (
                <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-amber-200/15 bg-amber-200/[0.055] p-4 sm:flex-row sm:items-center">
                  <FounderBadge compact />
                  <p className="text-xs leading-5 text-blue-100/65">
                    Tu insignia Founder quedará asociada a tu perfil cuando el dashboard esté disponible.
                  </p>
                </div>
              )}

              <ul className="mt-7 flex-1 space-y-3.5">
                {plan.features.map((feature, featureIndex) => (
                  <li key={feature} className={`flex items-start gap-3 ${plan.featured ? "text-blue-50" : "text-slate-700"}`}>
                    <span className="pricing-check mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-emerald-500 text-white" style={{ animationDelay: `${featureIndex * 70}ms` }}>
                      <svg aria-hidden="true" viewBox="0 0 20 20" className="size-3.5" fill="none">
                        <path className="pricing-check-path" d="m4 10 4 4 8-9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="leading-6">{feature}</span>
                  </li>
                ))}
              </ul>

              <ButtonLink
                href={plan.href}
                variant={plan.featured ? "light" : "primary"}
                className="pricing-button mt-9 justify-center"
              >
                {plan.cta}
              </ButtonLink>
              {plan.featured && (
                <p className="mt-4 text-center text-xs font-semibold text-blue-200/70">
                  Disponible únicamente para los primeros 100 miembros fundadores.
                </p>
              )}
            </article>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-6 text-slate-500">
          SinPalanca mejora la forma en que presentas tu perfil. Ningún plan garantiza entrevistas ni empleo.
        </p>
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
        <h2 className="mt-5 text-4xl font-bold leading-[1.04] sm:text-5xl lg:text-6xl">Deja de aplicar a ciegas.</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100/70">Descubre qué oportunidades encajan contigo, adapta tu CV y construye una estrategia profesional basada en datos.</p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href={STRIPE_FOUNDER} variant="light" className="justify-center">Ser Founder por $19.99</ButtonLink>
          <ButtonLink href="#job-match" variant="secondary" className="justify-center border-white/15 bg-white/5 text-white hover:border-white/30 hover:bg-white/10">Ver vista previa del Job Match</ButtonLink>
        </div>
        <p className="mt-5 text-xs font-semibold text-blue-200">Pago único. Primeros 100 Founders.</p>
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
          <a href="#job-match" className="hover:text-blue-600">Oportunidades</a>
          <a href="mailto:contacto@sinpalanca.app?subject=Consulta%20de%20privacidad" className="hover:text-blue-600">Privacidad</a>
          <a href="mailto:contacto@sinpalanca.app?subject=Consulta%20sobre%20términos" className="hover:text-blue-600">Términos</a>
          <a href="mailto:contacto@sinpalanca.app" className="hover:text-blue-600">Contacto</a>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-7xl border-t border-blue-50 pt-5 text-xs text-slate-400">© {new Date().getFullYear()} SinPalanca.app. Todos los derechos reservados.</p>
    </footer>
  );
}
