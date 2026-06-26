import Image from "next/image";

const stripeInicio = "https://buy.stripe.com/6oU4gA2vr7Nw8U1eqKcMM0v";
const stripeProfesional = "https://buy.stripe.com/cNicN6fid6Js7PXciCcMM0w";

const painPoints = [
  {
    numero: "01",
    titulo: "Sin contactos",
    texto:
      "No todos tienen una recomendación interna o alguien que los ayude a entrar.",
    badge: "Problema cultural",
  },
  {
    numero: "02",
    titulo: "CV invisible",
    texto:
      "Tu CV puede estar siendo descartado antes de que lo lea una persona.",
    badge: "Filtro ATS",
  },
  {
    numero: "03",
    titulo: "Sin dirección",
    texto:
      "No saber qué mejorar te hace perder tiempo aplicando a ciegas.",
    badge: "Falta de estrategia",
  },
];

const seccionesAnalisis = [
  "Career Score",
  "Análisis de CV",
  "3 errores críticos",
  "Top 5 empleos",
  "Fortalezas y debilidades",
  "Mercado laboral",
  "Salarios base por país",
  "Carreras más buscadas",
  "Mejores certificaciones",
  "Roadmap 90 días",
  "CV reescrito + carta",
  "Análisis remoto en dólares",
  "Trabajo en otro país on-site",
  "Estrategia LinkedIn completa",
  "Inglés técnico para CV",
];

const detallesAnalisis = [
  "Score del 1 al 100 basado en educación, experiencia, habilidades, inglés, CV y mercado.",
  "Revisa estructura, formato, legibilidad ATS, verbos de acción, keywords, errores y longitud.",
  "Detecta los problemas más graves que te están costando entrevistas hoy.",
  "Muestra los trabajos con mayor probabilidad para tu perfil, país y mercado actual.",
  "Identifica fortalezas para destacar y debilidades con recursos gratuitos para resolverlas.",
  "Analiza sectores con mayor contratación, skills pagadas y salarios promedio por sector.",
  "Compara salarios locales, remotos y extranjeros según tu perfil y país.",
  "Detecta roles y carreras más buscadas en tu país con contexto local.",
  "Recomienda certificaciones gratuitas y de pago valoradas para 2026-2027.",
  "Entrega un plan semana a semana con CV, aplicaciones, skills y recursos.",
  "Genera un CV adaptado a tu nivel y una carta personalizable por empresa.",
  "Mide compatibilidad con trabajos remotos y rangos salariales en USD.",
  "Calcula probabilidad de trabajar en el extranjero y países con mayor demanda.",
  "Optimiza headline, About, keywords, conexiones y publicaciones para reclutadores.",
  "Traduce logros, términos y frases profesionales para CV internacional y LinkedIn.",
];

const planes = [
  {
    nombre: "INICIO",
    precio: "$5.99",
    descripcion: "Pago único",
    url: stripeInicio,
    boton: "Comprar ahora",
    destacado: false,
    beneficios: [
      "CV analizado por IA",
      "Optimización ATS",
      "Career Score y ATS Score",
      "Top 3 errores críticos",
      "Top 5 empleos para tu perfil",
      "Roadmap 90 días",
      "Dashboard personal",
      "Reporte completo en PDF",
    ],
  },
  {
    nombre: "PROFESIONAL",
    precio: "$19.99",
    descripcion: "Pago único",
    badge: "MÁS ELEGIDO",
    url: stripeProfesional,
    boton: "Comprar ahora",
    destacado: true,
    beneficios: [
      "Todo lo del Plan Inicio",
      "CV reescrito y optimizado 5 veces",
      "Carta de presentación personalizada",
      "Salarios base por país y sector",
      "Mercado laboral actual",
      "Carreras más buscadas",
      "Mejores certificaciones",
      "Skills más demandadas",
      "Estrategia LinkedIn completa",
      "Reporte profesional en PDF",
    ],
  },
];

const testimonios = [
  {
    nombre: "Andrea M.",
    usuario: "@andream",
    texto: "Mi CV decía lo que hice, pero no vendía lo que podía aportar. El reporte me dio claridad en una tarde.",
  },
  {
    nombre: "Luis R.",
    usuario: "@luisbusca",
    texto: "El ATS Score me mostró errores que nunca había visto. Cambié mi CV y empecé a postular con dirección.",
  },
  {
    nombre: "Camila P.",
    usuario: "@camilap",
    texto: "El roadmap de 90 días hizo que la búsqueda dejara de sentirse como tirar CVs al vacío.",
  },
  {
    nombre: "Marco T.",
    usuario: "@marcot",
    texto: "No tenía palanca ni experiencia fuerte. La IA me ayudó a contar mejor mis proyectos.",
  },
];

const preguntas = [
  {
    pregunta: "¿SinPalanca me consigue trabajo?",
    respuesta:
      "No garantizamos empleo. Te ayudamos a mejorar tu CV, detectar errores, optimizar tu perfil y aumentar tus probabilidades de conseguir entrevistas.",
  },
  {
    pregunta: "¿Qué pasa después de pagar?",
    respuesta:
      "Después de pagar, completarás tu información profesional y recibirás tu análisis según el plan seleccionado.",
  },
  {
    pregunta: "¿Puedo usarlo si no tengo experiencia?",
    respuesta:
      "Sí. El análisis se adapta a estudiantes, técnicos, personas sin experiencia y profesionales.",
  },
  {
    pregunta: "¿El pago es mensual?",
    respuesta:
      "No. El Plan Inicio y el Plan Profesional son pagos únicos.",
  },
  {
    pregunta: "¿Qué es ATS?",
    respuesta:
      "ATS significa Applicant Tracking System. Es el software que muchas empresas usan para filtrar currículums antes de que los revise una persona.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F5F5F0] text-[#0A1628]">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#08111f]/85 text-white backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#inicio" className="flex items-center gap-2 font-black">
            <Image
              src="/shield.png"
              alt="SinPalanca shield"
              width={42}
              height={42}
              className="size-[42px] object-contain"
              style={{
                filter: "drop-shadow(0 0 8px rgba(59,130,246,0.9))",
              }}
              priority
            />
            <span>SinPalanca</span>
          </a>
          <div className="hidden items-center gap-7 text-sm font-bold text-blue-100/75 md:flex">
            <a href="#precios" className="transition hover:text-white">
              Precios
            </a>
            <a href="#funciona" className="transition hover:text-white">
              Cómo funciona
            </a>
            <a href="#historia" className="transition hover:text-white">
              Historia
            </a>
            <a href="#faq" className="transition hover:text-white">
              FAQ
            </a>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="#recibes"
              className="hidden rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-black text-white shadow-[0_0_28px_rgba(59,130,246,0.16)] transition hover:-translate-y-0.5 hover:bg-white/10 sm:inline-flex"
            >
              Ver qué recibo
            </a>
            <a
              href={stripeInicio}
              className="rounded-full border border-[#60A5FA]/30 bg-[#1B4FE4] px-5 py-3 text-sm font-black text-white shadow-[0_0_32px_rgba(59,130,246,0.42)] transition hover:-translate-y-0.5 hover:bg-[#3B82F6]"
            >
              Comprar ahora
            </a>
          </div>
        </div>
      </nav>

      <section id="inicio" className="relative overflow-hidden bg-[#08111f] px-5 pb-16 pt-16 text-white sm:px-8 lg:pb-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(59,130,246,0.4),transparent_34%),radial-gradient(circle_at_88%_28%,rgba(27,79,228,0.24),transparent_32%),linear-gradient(180deg,#08111f_0%,#0A1628_58%,#F5F5F0_100%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-black text-blue-50 shadow-[0_0_28px_rgba(59,130,246,0.22)] backdrop-blur">
              <span className="pulse-dot size-2 rounded-full bg-[#10B981]" />
              37 personas analizaron su CV esta semana
            </div>
            <h1 className="max-w-4xl text-5xl font-extrabold leading-[0.98] tracking-normal sm:text-6xl lg:text-7xl">
              Consigue trabajo sin contactos.
            </h1>
            <p className="mt-6 max-w-2xl text-2xl font-extrabold leading-tight text-[#93C5FD] sm:text-3xl">
              Ellos tienen palanca.
              <br />
              Tú tienes estrategia.
              <br />
              Tú tienes IA.
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100/80 sm:text-xl">
              Sube tu CV después de comprar y recibe un análisis profesional
              impulsado por IA que te muestra qué está frenando tus entrevistas,
              cómo mejorar tu CV y qué pasos seguir para aumentar tus
              oportunidades.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={stripeInicio}
                className="rounded-full border border-[#60A5FA]/30 bg-[#1B4FE4] px-7 py-4 text-center text-base font-black text-white shadow-[0_0_36px_rgba(59,130,246,0.46)] transition hover:-translate-y-0.5 hover:bg-[#3B82F6]"
              >
                Comprar ahora
              </a>
              <a
                href="#recibes"
                className="rounded-full border border-white/20 bg-white/10 px-7 py-4 text-center text-base font-black text-white shadow-[0_0_28px_rgba(59,130,246,0.16)] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                Ver qué recibo
              </a>
            </div>
            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex -space-x-3">
                {["R", "A", "L", "C"].map((avatar) => (
                  <span
                    key={avatar}
                    className="grid size-10 place-items-center rounded-full border-2 border-white/30 bg-white/10 text-sm font-black text-white backdrop-blur"
                  >
                    {avatar}
                  </span>
                ))}
              </div>
              <p className="text-sm font-bold text-blue-100/75">
                Únete a personas en LATAM que están mejorando su empleabilidad.
              </p>
            </div>
          </div>

          <div
            id="dashboard"
            className="relative overflow-hidden rounded-[28px] border border-white/15 bg-white/[0.08] p-3 shadow-[0_0_90px_rgba(59,130,246,0.28)] backdrop-blur-xl sm:p-4 lg:scale-105"
          >
            <div className="absolute -inset-20 bg-[radial-gradient(circle_at_50%_0%,rgba(96,165,250,0.2),transparent_34%)]" />
            <div className="dashboard-beam pointer-events-none absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,#93C5FD,transparent)]" />
            <div className="relative rounded-[22px] border border-white/10 bg-[#07111f]/95 p-3 text-white shadow-inner sm:p-5">
              <div className="hidden">
                {["Panamá", "Perfil profesional", "90 días"].map((filter) => (
                  <div
                    key={filter}
                    className="flex items-center justify-between rounded-lg border border-white/10 bg-white/8 px-3 py-3 text-xs font-bold text-blue-100"
                  >
                    <span>{filter}</span>
                    <span className="text-[#3B82F6]">⌄</span>
                  </div>
                ))}
              </div>
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold text-blue-200">
                    Dashboard personal
                  </p>
                  <h2 className="text-lg font-semibold">Resumen del análisis IA</h2>
                </div>
                <span className="rounded-full bg-[#10B981]/15 px-3 py-1 text-xs font-black text-emerald-200">
                  Alto potencial
                </span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  ["Career Score", "82/100", "+18%"],
                  ["ATS Score", "76/100", "+22%"],
                ].map(([label, value, meta]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-white/[0.07] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                  >
                    <p className="text-[11px] font-bold text-blue-200">
                      {label}
                    </p>
                    <p className="mt-2 text-xl font-semibold leading-tight">
                      {value}
                    </p>
                    <p className="mt-1 text-[11px] font-bold text-emerald-300">
                      {meta}
                    </p>
                    <div className="hidden">
                      {[38, 54, 44, 66, 58, 82].map((height, index) => (
                        <span
                          key={`${label}-${height}-${index}`}
                          className="flex-1 rounded-t bg-gradient-to-t from-[#4338CA] to-[#60A5FA]"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-3 grid gap-3 sm:grid-cols-[1.15fr_0.85fr]">
                <div className="hidden rounded-2xl border border-white/10 bg-white/[0.07] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:block">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-black">Progreso del perfil</p>
                      <p className="text-xs font-bold text-blue-200">
                        Roadmap 90 días
                      </p>
                    </div>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-black text-blue-100">
                      Alto potencial
                    </span>
                  </div>
                  <div className="relative mt-4 h-28 overflow-hidden rounded-2xl bg-[#050B18] p-4">
                    <div className="absolute inset-x-4 top-8 h-px bg-white/10" />
                    <div className="absolute inset-x-4 top-16 h-px bg-white/10" />
                    <div className="absolute inset-x-4 top-24 h-px bg-white/10" />
                    <div className="absolute inset-x-4 bottom-8 h-px bg-white/10" />
                    <div className="absolute bottom-6 left-4 right-4 h-16 rounded-[50%] border-t-4 border-[#3B82F6] opacity-80" />
                    <div className="absolute bottom-6 left-6 right-8 h-10 rounded-[50%] border-t-4 border-[#7C3AED] opacity-80" />
                    <div className="absolute left-[42%] top-8 rounded-lg bg-white px-3 py-2 text-[#0A1628] shadow-lg">
                      <p className="text-[11px] font-black">Semana 6</p>
                      <p className="text-sm font-black">CV optimizado</p>
                    </div>
                    <div className="absolute bottom-7 left-[48%] size-3 rounded-full border-2 border-white bg-[#60A5FA]" />
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-black">Distribución ATS</p>
                    <p className="text-xs font-bold text-blue-200">76/100</p>
                  </div>
                  <div className="mx-auto mt-4 grid size-28 place-items-center rounded-full bg-[conic-gradient(#60A5FA_0_42%,#7C3AED_42%_68%,#1B4FE4_68%_82%,rgba(255,255,255,0.12)_82%_100%)]">
                    <div className="grid size-16 place-items-center rounded-full bg-[#111936] text-center">
                      <p className="text-2xl font-semibold">76</p>
                      <p className="text-[10px] font-bold text-blue-200">
                        ATS
                      </p>
                    </div>
                  </div>
                  <div className="hidden">
                    <span>Keywords 42%</span>
                    <span>Formato 26%</span>
                    <span>Logros 18%</span>
                    <span>Brechas 14%</span>
                  </div>
                </div>
              </div>

              <div className="hidden">
                <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm font-black">Top 3 errores críticos</p>
                    <span className="rounded-full bg-red-500/15 px-2 py-1 text-[10px] font-black text-red-200">
                      Prioridad
                    </span>
                  </div>
                  {[
                    ["Logros sin métricas", "82%"],
                    ["Keywords débiles", "76%"],
                    ["Perfil poco claro", "61%"],
                  ].map(([item, value]) => (
                    <div key={item} className="mb-3 last:mb-0">
                      <div className="flex justify-between text-xs font-bold text-blue-100">
                        <span>{item}</span>
                        <span>{value}</span>
                      </div>
                      <div className="mt-2 h-2 rounded-full bg-white/10">
                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#60A5FA]"
                          style={{ width: value }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm font-black">Empleos recomendados</p>
                    <span className="rounded-full bg-[#10B981]/15 px-2 py-1 text-[10px] font-black text-emerald-200">
                      Match
                    </span>
                  </div>
                  {[
                    ["Asistente administrativo", "91%"],
                    ["Analista junior", "78%"],
                  ].map(([role, match]) => (
                    <div
                      key={role}
                      className="mb-2 flex items-center justify-between rounded-lg bg-white/6 px-3 py-2 last:mb-0"
                    >
                      <span className="text-xs font-bold text-blue-100">
                        {role}
                      </span>
                      <span className="text-xs font-black text-emerald-300">
                        {match}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden">
                {[
                  ["Nivel de empleabilidad", "Alto potencial"],
                  ["Salario estimado", "$800 - $1,500"],
                  ["Siguiente acción", "Reescribir logros"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-lg border border-white/10 bg-white/8 p-3"
                  >
                    <p className="text-[11px] font-bold text-blue-200">
                      {label}
                    </p>
                    <p className="mt-1 text-sm font-black">{value}</p>
                  </div>
                ))}
              </div>

              <div className="hidden">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-black">Reporte listo</p>
                    <p className="text-xs font-bold text-blue-200">
                      CV, carta, roadmap y análisis PDF
                    </p>
                  </div>
                  <span className="grid size-9 place-items-center rounded-full bg-[#10B981] text-sm font-black">
                    ✓
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0A1628_0%,#08111f_100%)] px-5 py-16 text-white sm:px-8 lg:py-24">
        <div className="pointer-events-none absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-[#3B82F6]/25 blur-3xl" />
        <div className="pointer-events-none absolute bottom-20 right-0 h-80 w-80 rounded-full bg-[#1B4FE4]/25 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-[#3B82F6]/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.82fr] lg:items-start">
            <div>
              <p className="text-sm font-mono font-semibold uppercase tracking-[0.18em] text-[#3B82F6]">
                El problema real
              </p>
              <h2 className="mt-4 max-w-5xl text-4xl font-bold leading-tight sm:text-6xl">
                En LATAM, el talento no siempre basta.
              </h2>
              <p className="mt-6 max-w-4xl text-xl leading-9 text-blue-100">
                Muchas personas preparadas no reciben entrevistas porque no
                saben c&oacute;mo vender su perfil, su CV no pasa filtros autom&aacute;ticos
                o simplemente no tienen contactos.
              </p>

              <div className="mt-10 rounded-lg border border-white/15 bg-white/[0.06] p-4 shadow-[7px_7px_0px_#000] backdrop-blur">
                <div className="grid gap-3 sm:grid-cols-4">
                  {[
                    "Talento",
                    "CV invisible",
                    "Sin entrevistas",
                    "Estrategia IA",
                  ].map((step, index) => (
                    <div
                      key={step}
                      className="relative flex items-center gap-3 rounded-lg border border-white/10 bg-[#0A1628]/70 p-4"
                    >
                      <span className="grid size-9 shrink-0 place-items-center rounded-full border border-[#3B82F6]/60 bg-[#1B4FE4]/25 font-mono text-sm font-bold text-blue-100 shadow-[0_0_18px_rgba(59,130,246,0.35)]">
                        {index + 1}
                      </span>
                      <span className="text-sm font-bold text-white">
                        {step}
                      </span>
                      {index < 3 && (
                        <span className="pointer-events-none absolute -right-3 top-1/2 hidden -translate-y-1/2 text-[#3B82F6] sm:block">
                          &rarr;
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid gap-5 lg:grid-cols-3">
                {painPoints.map((point, index) => (
                  <article
                    key={point.numero}
                    className="group relative overflow-hidden rounded-lg border border-white/15 bg-white/[0.07] p-6 shadow-[6px_6px_0px_#000] backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-[#3B82F6]/70 hover:bg-white/[0.1] hover:shadow-[0_0_35px_rgba(59,130,246,0.25)]"
                  >
                    <div className="absolute -right-10 -top-10 size-28 rounded-full bg-[#3B82F6]/15 blur-2xl transition group-hover:bg-[#3B82F6]/30" />
                    <div className="relative flex items-start justify-between gap-4">
                      <div className="grid size-14 place-items-center rounded-lg border border-white/15 bg-[#1B4FE4]/25 text-blue-100 shadow-[0_0_24px_rgba(59,130,246,0.28)]">
                        {index === 0 && (
                          <svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            className="size-8"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                          >
                            <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                            <path d="M16 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                            <path d="M3.5 19a4.5 4.5 0 0 1 9 0" />
                            <path d="M11.5 19a4.5 4.5 0 0 1 9 0" />
                          </svg>
                        )}
                        {index === 1 && (
                          <svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            className="size-8"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                          >
                            <path d="M7 3h7l4 4v14H7V3Z" />
                            <path d="M14 3v5h5" />
                            <path d="M5 9H3m2 4H3m2 4H3" />
                            <path d="M10 13h6m-6 4h4" />
                          </svg>
                        )}
                        {index === 2 && (
                          <svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            className="size-8"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                          >
                            <circle cx="12" cy="12" r="8" />
                            <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
                            <path d="M12 2v2m0 16v2m10-10h-2M4 12H2" />
                          </svg>
                        )}
                      </div>
                      <p className="font-mono text-5xl font-black leading-none text-white/15 transition group-hover:text-[#3B82F6]/40">
                        {point.numero}
                      </p>
                    </div>
                    <h3 className="relative mt-6 text-2xl font-semibold">
                      {point.titulo}
                    </h3>
                    <p className="relative mt-4 text-lg leading-8 text-blue-100">
                      {point.texto}
                    </p>
                    <span className="relative mt-6 inline-flex rounded-full border border-[#3B82F6]/40 bg-[#3B82F6]/15 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-blue-100">
                      {point.badge}
                    </span>
                  </article>
                ))}
              </div>
            </div>

            <aside className="relative rounded-lg border border-white/15 bg-white/[0.08] p-5 shadow-[8px_8px_0px_#000] backdrop-blur lg:sticky lg:top-24">
              <div className="absolute -inset-1 -z-10 rounded-lg bg-[#3B82F6]/20 blur-2xl" />
              <div className="rounded-lg bg-[#0A1628]/80 p-5">
                <p className="font-mono text-sm font-semibold uppercase tracking-[0.16em] text-[#3B82F6]">
                  Diagn&oacute;stico r&aacute;pido:
                </p>
                <div className="mt-6 space-y-5">
                  {[
                    ["CV", "54/100", "54%"],
                    ["ATS", "48/100", "48%"],
                    ["Estrategia", "37/100", "37%"],
                  ].map(([label, value, width]) => (
                    <div key={label}>
                      <div className="flex items-center justify-between gap-4">
                        <p className="font-bold text-blue-100">{label}</p>
                        <p className="font-mono text-lg font-black text-white">
                          {value}
                        </p>
                      </div>
                      <div className="mt-2 h-3 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="diagnostic-bar h-full rounded-full bg-[linear-gradient(90deg,#1B4FE4,#3B82F6,#10B981)]"
                          style={{ width }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-7 rounded-lg border border-white/10 bg-white/[0.06] p-5">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-blue-200">
                    Resultado:
                  </p>
                  <p className="mt-3 text-2xl font-bold leading-tight">
                    No es falta de talento. Es falta de visibilidad.
                  </p>
                </div>
              </div>
            </aside>
          </div>

          <p className="mt-12 text-center text-2xl font-bold leading-tight text-white sm:text-3xl">
            SinPalanca convierte incertidumbre en un plan claro.
          </p>
        </div>
      </section>

      <section
        id="funciona"
        className="relative overflow-hidden px-5 py-16 sm:px-8 lg:py-24"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_85%_35%,rgba(27,79,228,0.16),transparent_30%),linear-gradient(180deg,#F5F5F0_0%,#F0F5FF_100%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(27,79,228,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(27,79,228,0.08)_1px,transparent_1px)] [background-size:44px_44px]" />
        <div className="relative mx-auto max-w-7xl overflow-hidden">
          <Image
            src="/shield.png"
            alt=""
            width={90}
            height={90}
            aria-hidden="true"
            className="pointer-events-none absolute bottom-4 right-4 z-0 h-[90px] w-[90px] object-contain opacity-10"
          />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <p className="text-sm font-mono font-semibold uppercase tracking-[0.18em] text-[#1B4FE4]">
              C&oacute;mo funciona
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-6xl">
              C&oacute;mo funciona SinPalanca
            </h2>
            <p className="mt-5 text-xl leading-8 text-slate-600">
              De la incertidumbre a un plan profesional en menos de 3 pasos.
            </p>
          </div>

          <div className="relative z-10 mt-12 space-y-6 lg:space-y-8">
            <article className="group relative grid gap-6 rounded-lg border border-[#0A1628] bg-white/90 p-5 shadow-[7px_7px_0px_#0A1628] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(59,130,246,0.22)] lg:grid-cols-[0.72fr_1fr] lg:p-7">
              <div>
                <span className="inline-flex rounded-full bg-[#10B981]/12 px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#047857]">
                  Listo para comenzar
                </span>
                <h3 className="mt-5 flex items-center gap-3 text-3xl font-bold leading-tight">
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-[#1B4FE4] font-mono text-base text-white shadow-[3px_3px_0px_#0A1628]">
                    01
                  </span>
                  COMPRA TU AN&Aacute;LISIS
                </h3>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  Elige Plan Inicio o Profesional y desbloquea tu diagn&oacute;stico
                  profesional.
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-[#F8FAFC] p-5 shadow-inner">
                {[
                  "Pago confirmado",
                  "Acceso activado",
                  "Perfil creado",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="check-pop flex items-center gap-3 border-b border-slate-200 py-3 last:border-b-0"
                    style={{ animationDelay: index * 120 + "ms" }}
                  >
                    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[#10B981] text-sm font-black text-white">
                      &#10003;
                    </span>
                    <span className="font-bold text-[#0A1628]">{item}</span>
                  </div>
                ))}
              </div>
            </article>

            <div className="flow-arrow mx-auto grid size-10 place-items-center rounded-full border border-[#1B4FE4]/30 bg-white text-[#1B4FE4] shadow-[0_0_24px_rgba(59,130,246,0.28)]">
              &darr;
            </div>

            <article className="group relative grid gap-6 rounded-lg border border-[#0A1628] bg-[#0A1628] p-5 text-white shadow-[7px_7px_0px_#000] transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_42px_rgba(59,130,246,0.3)] lg:grid-cols-[0.72fr_1fr] lg:p-7">
              <div>
                <span className="inline-flex rounded-full border border-[#3B82F6]/40 bg-[#3B82F6]/15 px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-blue-100">
                  Analizando perfil...
                </span>
                <h3 className="mt-5 flex items-center gap-3 text-3xl font-bold leading-tight">
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-[#3B82F6] font-mono text-base text-white shadow-[3px_3px_0px_#000]">
                    02
                  </span>
                  IA ANALIZA TU PERFIL
                </h3>
                <p className="mt-4 text-lg leading-8 text-blue-100">
                  La IA revisa tu CV, experiencia, habilidades, nivel de ingl&eacute;s
                  y situaci&oacute;n laboral.
                </p>
              </div>
              <div className="relative overflow-hidden rounded-lg border border-white/15 bg-[#111936] p-5">
                <div className="scan-line pointer-events-none absolute inset-x-0 top-0 h-16 bg-[linear-gradient(180deg,transparent,rgba(59,130,246,0.28),transparent)]" />
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    ["Career Score", "82/100", "82%"],
                    ["ATS Score", "76/100", "76%"],
                    ["Mercado laboral", "Alto", "68%"],
                    ["Top empleos", "5 roles", "74%"],
                    ["Certificaciones", "3 claves", "62%"],
                    ["Roadmap", "90 d\u00edas", "90%"],
                  ].map(([label, value, width]) => (
                    <div
                      key={label}
                      className="rounded-lg border border-white/10 bg-white/[0.06] p-4"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-sm font-bold text-blue-100">{label}</p>
                        <p className="font-mono text-sm font-black text-white">
                          {value}
                        </p>
                      </div>
                      <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="diagnostic-bar h-full rounded-full bg-[linear-gradient(90deg,#1B4FE4,#3B82F6,#10B981)]"
                          style={{ width }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <div className="flow-arrow mx-auto grid size-10 place-items-center rounded-full border border-[#1B4FE4]/30 bg-white text-[#1B4FE4] shadow-[0_0_24px_rgba(59,130,246,0.28)]">
              &darr;
            </div>

            <article className="group grid gap-6 rounded-lg border border-[#0A1628] bg-white/90 p-5 shadow-[7px_7px_0px_#0A1628] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(16,185,129,0.2)] lg:grid-cols-[0.72fr_1fr] lg:p-7">
              <div>
                <span className="inline-flex rounded-full bg-[#10B981]/12 px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#047857]">
                  Reporte completado
                </span>
                <h3 className="mt-5 flex items-center gap-3 text-3xl font-bold leading-tight">
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-[#10B981] font-mono text-base text-white shadow-[3px_3px_0px_#0A1628]">
                    03
                  </span>
                  RECIBE TU PLAN DE ACCI&Oacute;N
                </h3>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  Obtienes un reporte completo con recomendaciones claras y
                  priorizadas.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "CV optimizado",
                  "ATS Score",
                  "Top empleos",
                  "Salarios",
                  "LinkedIn",
                  "Roadmap 90 d\u00edas",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="check-pop flex items-center gap-3 rounded-lg border border-slate-200 bg-[#F8FAFC] p-4"
                    style={{ animationDelay: index * 90 + "ms" }}
                  >
                    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[#10B981] text-sm font-black text-white">
                      &#10003;
                    </span>
                    <span className="font-bold text-[#0A1628]">{item}</span>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <div className="relative z-10 mt-14 rounded-lg border border-[#0A1628] bg-white p-6 shadow-[7px_7px_0px_#0A1628]">
            <h3 className="text-3xl font-bold leading-tight">
              &iquest;QU&Eacute; RECIBES AL FINAL?
            </h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["15", "secciones profesionales"],
                ["Score", "Career Score personalizado"],
                ["Top 5", "empleos recomendados"],
                ["90", "d\u00edas de roadmap"],
              ].map(([numero, texto]) => (
                <article
                  key={texto}
                  className="rounded-lg border border-slate-200 bg-[#F8FAFC] p-5 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-950/10"
                >
                  <p className="font-mono text-4xl font-black text-[#1B4FE4]">
                    {numero}
                  </p>
                  <p className="mt-3 font-bold text-slate-700">{texto}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="recibes" className="bg-white px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-mono font-semibold uppercase tracking-[0.18em] text-[#1B4FE4]">
            Qué recibes exactamente
          </p>
          <h2 className="mt-4 max-w-4xl text-4xl font-bold leading-tight sm:text-6xl">
            Tu reporte incluye 15 secciones profesionales.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Todo lo que necesitas para entender tu situación actual y mejorar tu
            estrategia de búsqueda laboral.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {seccionesAnalisis.map((seccion, index) => (
              <article
                key={seccion}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-lg shadow-blue-950/5 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-blue-950/10"
              >
                <div className="mb-5 grid size-11 place-items-center rounded-lg bg-[#1B4FE4] text-sm font-black text-white">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold">{seccion}</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {detallesAnalisis[index]}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl overflow-hidden">
          <p className="text-sm font-mono font-semibold uppercase tracking-[0.18em] text-[#1B4FE4]">
            Prueba social
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-6xl">
            Personas como tú necesitan claridad, no más consejos genéricos.
          </h2>
          <p className="mt-4 max-w-2xl text-sm font-bold text-slate-500">
            Ejemplos ilustrativos del tipo de resultados que buscamos entregar.
          </p>
          <div className="mt-10 flex w-max gap-4 marquee">
            {[...testimonios, ...testimonios].map((testimonio, index) => (
              <article
                key={`${testimonio.usuario}-${index}`}
                className="w-[320px] rounded-lg border border-[#E2E8F0] bg-white p-5 shadow-lg shadow-blue-950/5"
              >
                <div className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-full bg-[#0A1628] font-black text-white">
                    {testimonio.nombre.charAt(0)}
                  </span>
                  <div>
                    <h3 className="font-black">{testimonio.nombre}</h3>
                    <p className="text-sm text-slate-500">
                      {testimonio.usuario}
                    </p>
                  </div>
                </div>
                <p className="mt-4 leading-7 text-slate-600">
                  {testimonio.texto}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="precios" className="bg-white px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-mono font-semibold uppercase tracking-[0.18em] text-[#1B4FE4]">
            Precios
          </p>
          <h2 className="mt-4 max-w-4xl text-4xl font-bold leading-tight sm:text-6xl">
            Elige cómo quieres mejorar tu perfil profesional.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Pago único. Sin mensualidades. Sin promesas falsas. Solo estrategia,
            claridad y mejor preparación.
          </p>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {planes.map((plan) => (
              <article
                key={plan.nombre}
                className={`rounded-lg border p-6 shadow-[7px_7px_0px_#0A1628] ${
                  plan.destacado
                    ? "border-[#0A1628] bg-[#0A1628] text-white"
                    : "border-[#0A1628] bg-white text-[#0A1628]"
                }`}
              >
                {plan.badge && (
                  <p className="mb-4 inline-flex rounded-full bg-[#10B981] px-3 py-1 text-sm font-black text-white">
                    {plan.badge}
                  </p>
                )}
                <h3 className="text-3xl font-semibold">{plan.nombre}</h3>
                <div className="mt-4 flex items-end gap-2">
                  <span className="text-5xl font-extrabold">{plan.precio}</span>
                  <span
                    className={
                      plan.destacado
                        ? "pb-2 text-blue-100"
                        : "pb-2 text-slate-500"
                    }
                  >
                    {plan.descripcion}
                  </span>
                </div>
                <ul className="mt-6 space-y-3">
                  {plan.beneficios.map((beneficio) => (
                    <li key={beneficio} className="flex gap-3">
                      <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-[#10B981] text-xs font-black text-white">
                        &#10003;
                      </span>
                      <span>{beneficio}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.url}
                  className={`mt-7 block rounded-full border border-[#0A1628] px-6 py-4 text-center font-black shadow-[3px_3px_0px_#0A1628] transition hover:-translate-y-0.5 ${
                    plan.destacado
                      ? "bg-white text-[#1B4FE4] hover:bg-blue-50"
                      : "bg-[#1B4FE4] text-white hover:bg-[#3B82F6]"
                  }`}
                >
                  {plan.boton}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="historia" className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-lg border border-[#0A1628] bg-[#1B4FE4] p-8 text-white shadow-[7px_7px_0px_#0A1628]">
            <div className="relative size-28 overflow-hidden rounded-full border-4 border-white bg-[#0A1628] shadow-[4px_4px_0px_#0A1628]">
              <Image
                src="/roni-profile.png"
                alt="Roni, fundador de SinPalanca"
                fill
                sizes="112px"
                className="object-cover"
              />
            </div>
            <p className="mt-6 text-sm font-mono font-semibold uppercase tracking-[0.18em] text-blue-100">
              RONI &middot; FUNDADOR
            </p>
            <blockquote className="mt-5 space-y-4 text-3xl font-bold leading-tight sm:text-4xl">
              <p>No necesitas contactos para construir tu futuro.</p>
              <p>
                Necesitas preparaci&oacute;n, estrategia y las herramientas
                correctas.
              </p>
            </blockquote>
          </div>
          <div className="self-center">
            <div className="flex items-center gap-3">
              <svg
                aria-hidden="true"
                viewBox="0 0 48 48"
                className="size-12 shrink-0 drop-shadow-[0_0_10px_rgba(59,130,246,0.45)]"
              >
                <rect width="48" height="48" rx="14" fill="#F5F7FB" />
                <path d="M24 4h10c5.5 0 10 4.5 10 10v10H24V4Z" fill="#D21034" />
                <path d="M4 24h20v20H14C8.5 44 4 39.5 4 34V24Z" fill="#072B61" />
                <path d="M24 24h20v10c0 5.5-4.5 10-10 10H24V24Z" fill="#F5F7FB" />
                <path
                  d="m14 10 1.6 4.8h5.1l-4.1 3 1.6 4.9-4.2-3-4.1 3 1.6-4.9-4.1-3h5L14 10Z"
                  fill="#072B61"
                />
                <path
                  d="m34 25.3 1.6 4.9h5.1l-4.1 3 1.6 4.8-4.2-3-4.1 3 1.6-4.8-4.1-3h5l1.6-4.9Z"
                  fill="#D21034"
                />
              </svg>
              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                Creado desde Panam&aacute; para quienes no tienen palanca
              </h2>
            </div>
            <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
              <p>Soy Roni.</p>
              <p>
                Durante a&ntilde;os envi&eacute; curr&iacute;culums, busqu&eacute;
                oportunidades y vi c&oacute;mo muchas personas con talento quedaban
                fuera por no tener contactos, recomendaciones o una estrategia
                clara.
              </p>
              <p>
                Mientras algunos consegu&iacute;an entrevistas gracias a conexiones,
                otros con habilidades reales eran descartados sin siquiera saber
                por qu&eacute;.
              </p>
              <p>
                Con el tiempo logr&eacute; trabajar de forma remota, convertirme en
                n&oacute;mada digital y construir proyectos online, pero entend&iacute;
                algo importante:
              </p>
              <p className="text-xl font-bold text-[#0A1628]">
                El problema no siempre es la falta de talento.
              </p>
              <p>
                Muchas veces el problema es no saber c&oacute;mo presentar ese
                talento.
              </p>
              <p>Por eso naci&oacute; SinPalanca.app.</p>
              <p>
                Mi misi&oacute;n es ayudar a estudiantes, profesionales y personas
                que buscan empleo a entender qu&eacute; est&aacute; frenando sus
                oportunidades y c&oacute;mo mejorar sus posibilidades utilizando
                estrategia, datos e inteligencia artificial.
              </p>
              <p className="font-bold text-[#1B4FE4]">
                Porque las oportunidades deber&iacute;an depender m&aacute;s de la
                preparaci&oacute;n que de los contactos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-white px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-mono font-semibold uppercase tracking-[0.18em] text-[#1B4FE4]">
            FAQ
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-6xl">
            Respuestas honestas.
          </h2>
          <div className="mt-10 space-y-4">
            {preguntas.map((item) => (
              <details
                key={item.pregunta}
                className="group rounded-lg border border-[#0A1628] bg-white p-5 shadow-[4px_4px_0px_#0A1628]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold">
                  {item.pregunta}
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#EFF6FF] text-[#1B4FE4] transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-7 text-slate-600">{item.respuesta}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0A1628] px-5 py-20 text-white sm:px-8 lg:py-28">
        <div className="absolute inset-0 bg-[url('/libera-tu-potencial.jfif')] bg-cover bg-center opacity-55" />
        <div className="absolute inset-0 bg-[#0A1628]/70" />
        <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_20%_20%,#3B82F6_0,transparent_28%),radial-gradient(circle_at_80%_10%,#1B4FE4_0,transparent_24%)]" />
        <div className="relative mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-bold leading-tight sm:text-6xl">
            Antes de enviar otros 100 CVs, descubre qué está fallando.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Tu problema quizás no es falta de talento. Puede ser tu CV, tus
            palabras clave, tu estrategia o las habilidades que estás mostrando.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={stripeInicio}
              className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-[#1B4FE4] shadow-[3px_3px_0px_#3B82F6] transition hover:-translate-y-0.5 hover:bg-blue-50"
            >
              Comprar ahora
            </a>
            <a
              href={stripeProfesional}
              className="rounded-full border border-white bg-[#1B4FE4] px-8 py-4 text-lg font-semibold text-white shadow-[3px_3px_0px_#3B82F6] transition hover:-translate-y-0.5 hover:bg-[#3B82F6]"
            >
              Comprar ahora
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#E2E8F0] bg-[#F5F5F0] px-5 py-8 text-[#0A1628] sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-600 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-black text-[#0A1628]">SinPalanca.app</p>
            <p>Consigue trabajo sin contactos.</p>
            <p>Hecho desde Panamá por Roniher.</p>
          </div>
          <div className="flex flex-wrap gap-4 font-bold">
            <a href="#inicio" className="hover:text-[#1B4FE4]">
              Privacidad
            </a>
            <a href="#inicio" className="hover:text-[#1B4FE4]">
              Términos
            </a>
            <a href="#historia" className="hover:text-[#1B4FE4]">
              Contacto
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
