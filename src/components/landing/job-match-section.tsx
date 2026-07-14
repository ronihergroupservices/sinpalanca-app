"use client";

import Image from "next/image";
import { useState } from "react";
import { jobOpportunities, kanbanColumns, matchMetrics, salaryMarkets } from "./job-match-data";
import { Icon } from "./ui";
import styles from "./job-match.module.css";

const tabs = [
  "Mejores resultados",
  "Mayor compatibilidad",
  "Trabajo remoto",
  "Mejor salario",
  "Guardadas",
] as const;

const strengths = ["Buen nivel de comunicación", "Experiencia relevante", "Perfil adaptable"];
const gaps = ["Faltan dos palabras clave", "LinkedIn incompleto", "Logros sin métricas"];
const nextActions = [
  "Ajustar el resumen profesional",
  "Añadir tres palabras clave",
  "Preparar una carta personalizada",
  "Practicar preguntas de entrevista",
];

function DemoSelect({ label, options }: { label: string; options: string[] }) {
  return (
    <label className={styles.selectControl}>
      <span>{label}</span>
      <select aria-label={label} defaultValue="">
        <option value="" disabled>Seleccionar</option>
        {options.map((option) => <option key={option}>{option}</option>)}
      </select>
    </label>
  );
}

export function JobMatchSection() {
  const [selectedId, setSelectedId] = useState(jobOpportunities[0].id);
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>(tabs[0]);
  const selectedJob = jobOpportunities.find((job) => job.id === selectedId) ?? jobOpportunities[0];

  function toggleSaved(id: string) {
    setSavedIds((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  }

  return (
    <section id="job-match" className={`${styles.stage} relative overflow-hidden px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28`}>
      <div className={`${styles.grid} pointer-events-none absolute inset-0`} />
      <div className={`${styles.glow} pointer-events-none absolute inset-x-0 top-0 h-[38rem]`} />
      <Image
        src="/shield.png"
        width={560}
        height={560}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 top-16 size-[560px] object-contain opacity-[0.035]"
      />

      <div className="relative mx-auto max-w-7xl">
        <header className="mx-auto max-w-4xl text-center reveal-up">
          <span className={styles.futureBadge}>
            <span className="size-1.5 rounded-full bg-blue-300 shadow-[0_0_12px_rgba(147,197,253,.7)]" />
            Próximamente en SinPalanca
          </span>
          <h2 className="mt-6 text-4xl font-extrabold leading-[1.03] sm:text-5xl lg:text-6xl">
            Encuentra las oportunidades que realmente encajan contigo.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100/72">
            SinPalanca AI Job Match analizará vacantes, comparará sus requisitos con tu perfil y te mostrará dónde tienes mejores posibilidades de conseguir una entrevista.
          </p>
          <p id="job-match-disclaimer" className={styles.transparencyNote}>
            <Icon name="sparkles" className="mt-0.5 size-4 shrink-0 text-blue-300" />
            <span><strong>Vista previa:</strong> esta es una función futura. La búsqueda automática estará disponible únicamente mediante fuentes compatibles, ofertas públicas y enlaces proporcionados por el usuario.</span>
          </p>
        </header>

        <div className={`${styles.appShell} reveal-up mt-14`} aria-describedby="job-match-disclaimer">
          <div className={styles.appChrome}>
            <div className="flex items-center gap-2" aria-hidden="true">
              <span className="size-2.5 rounded-full bg-rose-400/70" />
              <span className="size-2.5 rounded-full bg-amber-300/70" />
              <span className="size-2.5 rounded-full bg-emerald-400/70" />
            </div>
            <span className="font-mono text-[10px] font-semibold uppercase text-blue-200/65">Vista de producto · Datos demostrativos</span>
          </div>

          <div className="p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-mono text-[10px] font-bold uppercase text-blue-300">SinPalanca AI Job Match</p>
                <h3 className="mt-2 text-2xl font-bold sm:text-3xl">Buscador inteligente de oportunidades</h3>
              </div>
              <span className={styles.demoTag}>Experiencia visual · Próximamente</span>
            </div>

            <form className={`${styles.searchArea} mt-7`} onSubmit={(event) => event.preventDefault()}>
              <label htmlFor="job-query" className="sr-only">Enlace de vacante o descripción del trabajo</label>
              <div className={styles.searchInput}>
                <Icon name="search" className="size-5 shrink-0 text-blue-300" />
                <input
                  id="job-query"
                  type="text"
                  placeholder="Pega el enlace de una vacante o describe el trabajo que buscas"
                  aria-describedby="job-match-disclaimer"
                />
                <span className={styles.scanLine} aria-hidden="true" />
              </div>
              <button type="submit" className={styles.primaryAction} title="Vista previa: la búsqueda estará disponible próximamente">
                <Icon name="search" className="size-4" />
                Buscar oportunidades
              </button>
              <button type="button" className={styles.secondaryAction} title="Vista previa: el análisis estará disponible próximamente">
                <Icon name="scanner" className="size-4" />
                Analizar una vacante
              </button>
            </form>

            <details className={`${styles.filterPanel} mt-4`} open>
              <summary>
                <span className="inline-flex items-center gap-2"><Icon name="target" className="size-4" /> Filtros de búsqueda</span>
                <span className="font-mono text-[10px] text-blue-300">10 opciones</span>
              </summary>
              <div className={styles.filterGrid}>
                <DemoSelect label="Cargo" options={["Atención al cliente", "Operaciones", "Tecnología", "Marketing"]} />
                <DemoSelect label="País" options={["Panamá", "Colombia", "México", "Costa Rica"]} />
                <DemoSelect label="Ciudad" options={["Ciudad de Panamá", "Bogotá", "Ciudad de México", "San José"]} />
                <DemoSelect label="Salario mínimo" options={["$800 USD", "$1,000 USD", "$1,500 USD", "$2,000 USD"]} />
                <DemoSelect label="Nivel de experiencia" options={["Sin experiencia", "Inicial", "Intermedio", "Avanzado"]} />
                <DemoSelect label="Idioma" options={["Español", "Inglés", "Bilingüe"]} />
                <DemoSelect label="Industria" options={["Tecnología", "Servicios", "Comercio", "Logística"]} />
                <fieldset className={styles.modeControl}>
                  <legend>Modalidad</legend>
                  <div>
                    <button type="button" className={styles.modeActive}>Remoto</button>
                    <button type="button">Presencial</button>
                    <button type="button">Híbrido</button>
                  </div>
                </fieldset>
              </div>
            </details>

            <div className={`${styles.tabs} mt-5`} role="tablist" aria-label="Ordenar oportunidades">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab}
                  className={activeTab === tab ? styles.tabActive : ""}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm font-bold text-white">6 resultados demostrativos</p>
              <p className="text-xs text-blue-200/55">Los controles no realizan búsquedas ni aplicaciones reales.</p>
            </div>

            <div className={`${styles.workspace} mt-4`}>
              <div className={styles.resultsGrid}>
                {jobOpportunities.map((job) => {
                  const selected = selectedId === job.id;
                  const saved = savedIds.includes(job.id);
                  return (
                    <article key={job.id} className={`${styles.jobCard} ${selected ? styles.jobCardSelected : ""}`}>
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <span className={styles.resultBadge}>Oferta demostrativa</span>
                          <h4 className="mt-3 text-lg font-bold leading-6 text-white">{job.role}</h4>
                          <p className="mt-1 text-sm text-blue-100/62">{job.company}</p>
                        </div>
                        <div className={styles.jobScore} style={{ background: `conic-gradient(#10b981 0 ${job.match}%, rgba(255,255,255,.09) ${job.match}% 100%)` }}>
                          <span>{job.match}%</span>
                        </div>
                      </div>

                      <div className="mt-4 grid gap-2 text-xs text-blue-100/72">
                        <p className="flex items-center gap-2"><Icon name="map" className="size-3.5 text-blue-300" /> {job.location} · {job.mode}</p>
                        <p className="flex items-center gap-2"><Icon name="chart" className="size-3.5 text-emerald-300" /> {job.salary}</p>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {job.skills.map((skill) => <span key={skill} className={styles.skillTag}>{skill}</span>)}
                      </div>

                      <p className={styles.recommendation}><strong>Recomendación:</strong> {job.recommendation}</p>

                      <div className={styles.jobActions}>
                        <button type="button" onClick={() => setSelectedId(job.id)} aria-pressed={selected}>
                          <Icon name="chart" className="size-3.5" /> Ver análisis
                        </button>
                        <button type="button" onClick={() => toggleSaved(job.id)} aria-pressed={saved}>
                          <Icon name="bookmark" className="size-3.5" /> {saved ? "Guardada" : "Guardar"}
                        </button>
                        <a href="#cv-adaptado"><Icon name="document" className="size-3.5" /> Adaptar mi CV</a>
                      </div>
                    </article>
                  );
                })}
              </div>

              <aside className={styles.detailPanel} aria-live="polite">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[10px] font-bold uppercase text-blue-300">Análisis detallado</p>
                    <h4 className="mt-2 text-xl font-bold">Tu compatibilidad con esta oportunidad</h4>
                    <p className="mt-2 text-xs leading-5 text-blue-100/55">{selectedJob.role}</p>
                  </div>
                  <span className={styles.demoTag}>Demostración</span>
                </div>

                <div className="mt-6 flex items-center gap-5 rounded-2xl border border-white/8 bg-white/[0.035] p-4">
                  <div className={styles.totalScore}>
                    <div><strong>88%</strong><span>Compatibilidad</span></div>
                  </div>
                  <div>
                    <p className="font-bold text-white">Muy buena afinidad</p>
                    <p className="mt-1 text-xs leading-5 text-blue-100/55">Puntaje detallado de demostración.</p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {matchMetrics.map(([label, value]) => (
                    <div key={label}>
                      <div className="flex items-center justify-between gap-3 text-xs">
                        <span className="font-semibold text-blue-100/75">{label}</span>
                        <strong className="font-mono text-white">{value}%</strong>
                      </div>
                      <div className={styles.progressTrack}><span style={{ width: `${value}%` }} /></div>
                    </div>
                  ))}
                </div>

                <div className={styles.insightGrid}>
                  <div>
                    <h5 className="text-sm font-bold text-emerald-300">Fortalezas</h5>
                    <ul>{strengths.map((item) => <li key={item}><span>+</span>{item}</li>)}</ul>
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-amber-200">Brechas</h5>
                    <ul>{gaps.map((item) => <li key={item}><span>!</span>{item}</li>)}</ul>
                  </div>
                </div>

                <div className="mt-5 border-t border-white/8 pt-5">
                  <h5 className="text-sm font-bold">Siguiente acción</h5>
                  <ol className="mt-3 space-y-2">
                    {nextActions.map((item, index) => (
                      <li key={item} className="flex items-start gap-2 text-xs leading-5 text-blue-100/65">
                        <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-blue-500/15 font-mono text-[8px] font-bold text-blue-200">{index + 1}</span>
                        {item}
                      </li>
                    ))}
                  </ol>
                </div>
              </aside>
            </div>
          </div>
        </div>

        <section aria-labelledby="salarios-title" className="mt-24">
          <div className="grid items-end gap-6 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="section-label text-blue-300">Salarios y mercado</p>
              <h3 id="salarios-title" className="mt-4 text-3xl font-bold sm:text-4xl">Conoce cuánto podrías ganar.</h3>
              <p className="mt-4 max-w-2xl leading-7 text-blue-100/62">Compara rangos de referencia por mercado antes de decidir dónde concentrar tu búsqueda.</p>
            </div>
            <div className={styles.salaryFilters} aria-label="Filtros demostrativos de salarios">
              {['País', 'Profesión', 'Nivel', 'Modalidad'].map((label) => <button key={label} type="button">{label}<span>⌄</span></button>)}
            </div>
          </div>

          <div className={`${styles.salaryLayout} mt-10`}>
            <div className={styles.salaryCards}>
              {salaryMarkets.map((item) => (
                <article key={item.market} className={styles.salaryCard}>
                  <span className="grid size-10 place-items-center rounded-xl bg-blue-500/12 text-blue-300"><Icon name="globe" className="size-5" /></span>
                  <h4 className="mt-5 font-bold">{item.market}</h4>
                  <p className="mt-4 text-xs text-blue-100/50">Rango estimado</p>
                  <strong className="mt-1 block font-mono text-2xl text-white">{item.range}</strong>
                </article>
              ))}
            </div>
            <div className={styles.salaryChart} aria-label="Comparación visual de rangos salariales">
              <div className="flex items-center justify-between gap-3">
                <div><p className="text-sm font-bold">Comparación de mercados</p><p className="mt-1 text-xs text-blue-100/50">Escala demostrativa</p></div>
                <Icon name="chart" className="size-5 text-blue-300" />
              </div>
              <div className="mt-7 space-y-5">
                {salaryMarkets.map((item) => (
                  <div key={item.market}>
                    <div className="flex justify-between gap-3 text-xs"><span className="text-blue-100/65">{item.market}</span><span className="font-mono text-white">{item.range}</span></div>
                    <div className={styles.salaryBar}><span style={{ width: `${item.value}%` }} /></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-5 text-xs leading-5 text-blue-100/45">Los salarios son ejemplos demostrativos y pueden variar según experiencia, empresa, país y modalidad.</p>
        </section>

        <section aria-labelledby="aplicaciones-title" className="mt-24">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="section-label text-blue-300">Panel de aplicaciones</p>
              <h3 id="aplicaciones-title" className="mt-4 text-3xl font-bold sm:text-4xl">Organiza toda tu búsqueda en un solo lugar.</h3>
            </div>
            <span className={styles.demoTag}>Datos de demostración de una función futura</span>
          </div>

          <div className={`${styles.kanbanStats} mt-8`}>
            {[
              ["24", "oportunidades analizadas"],
              ["8", "con más de 85% de compatibilidad"],
              ["4", "aplicaciones preparadas"],
              ["2", "entrevistas programadas"],
            ].map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
          </div>

          <div className={`${styles.kanbanBoard} mt-5`}>
            {kanbanColumns.map((column, index) => (
              <article key={column.title} className={styles.kanbanColumn}>
                <div className="flex items-center justify-between gap-3">
                  <h4>{column.title}</h4>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className={styles.kanbanCard}>
                  <span className="font-mono text-[9px] font-bold uppercase text-blue-300">{column.match}% compatible</span>
                  <p className="mt-2 font-bold leading-5">{column.role}</p>
                  <p className="mt-1 text-xs text-blue-100/50">{column.company}</p>
                  <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/8 pt-3 text-[10px] text-blue-100/50"><span>{column.date}</span><span>{column.action}</span></div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="cv-adaptado" aria-labelledby="cv-adaptado-title" className={`${styles.cvPanel} mt-24`}>
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <p className="section-label text-blue-300">CV adaptado por vacante</p>
                <span className={styles.futurePill}>Próximamente</span>
              </div>
              <h3 id="cv-adaptado-title" className="mt-4 text-3xl font-bold sm:text-4xl">Un CV diferente para cada oportunidad.</h3>
              <p className="mt-5 leading-7 text-blue-100/62">SinPalanca podrá comparar tu CV con una vacante específica y sugerir cambios para mejorar la claridad, las palabras clave y la compatibilidad ATS.</p>
              <button type="button" className={`${styles.primaryAction} mt-7`} title="Disponible próximamente">
                <Icon name="sparkles" className="size-4" /> Generar versión adaptada
              </button>
            </div>
            <div>
              <div className={styles.cvFlow}>
                {[
                  ["briefcase", "Vacante seleccionada"],
                  ["search", "Palabras clave detectadas"],
                  ["scanner", "Errores del CV"],
                  ["sparkles", "CV adaptado"],
                ].map(([icon, label], index) => (
                  <div key={label} className={styles.cvStep}>
                    <span><Icon name={icon as "briefcase" | "search" | "scanner" | "sparkles"} className="size-5" /></span>
                    <p>{label}</p>
                    {index < 3 && <b aria-hidden="true">→</b>}
                  </div>
                ))}
              </div>
              <div className={`${styles.cvResults} mt-5`}>
                {[["ATS antes", "58/100"], ["ATS después", "84/100"], ["Palabras clave agregadas", "7"], ["Logros mejorados", "4"]].map(([label, value], index) => (
                  <div key={label} className={index === 1 ? styles.cvResultFeatured : ""}><span>{label}</span><strong>{value}</strong></div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
