import { Icon } from "./ui";

const priorities = [
  ["Claridad del perfil", "72%"],
  ["Palabras clave", "61%"],
  ["Logros medibles", "48%"],
] as const;

export function DashboardPreview() {
  return (
    <div className="dashboard-float relative mx-auto w-full max-w-[720px]" aria-label="Vista previa del dashboard de SinPalanca">
      <div className="absolute -inset-8 -z-10 rounded-[40px] bg-blue-500/20 blur-3xl" />
      <div className="overflow-hidden rounded-[26px] border border-white/15 bg-[#0a1930]/92 p-2.5 shadow-[0_32px_90px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:p-4">
        <div className="dashboard-sheen pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent" />
        <div className="rounded-[20px] border border-white/10 bg-[#071426] p-4 sm:p-5">
          <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <p className="text-xs font-semibold text-blue-300">Dashboard personal · Vista de ejemplo</p>
              <h2 className="mt-1 text-lg font-bold text-white sm:text-xl">Diagnóstico profesional</h2>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1.5 text-[11px] font-bold text-emerald-300">
              <span className="size-1.5 rounded-full bg-emerald-400" />
              Perfil analizado
            </span>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            {[
              ["Career Score", "82", "Mejorable"],
              ["ATS Score", "76", "Buena base"],
            ].map(([label, value, status], index) => (
              <article key={label} className="rounded-2xl border border-white/10 bg-white/[0.055] p-3.5 sm:p-4">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-[11px] font-semibold text-blue-200 sm:text-xs">{label}</p>
                  <span className="text-[10px] font-semibold text-emerald-300">{status}</span>
                </div>
                <div className="mt-3 flex items-end gap-1">
                  <strong className="font-mono text-3xl text-white sm:text-4xl">{value}</strong>
                  <span className="pb-1 text-xs text-blue-200">/100</span>
                </div>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className="progress-grow h-full rounded-full bg-gradient-to-r from-blue-600 via-blue-400 to-emerald-400" style={{ width: index === 0 ? "82%" : "76%" }} />
                </div>
              </article>
            ))}
          </div>

          <div className="mt-3 grid gap-3 sm:grid-cols-[1.12fr_0.88fr]">
            <article className="rounded-2xl border border-white/10 bg-white/[0.055] p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-bold text-white">Roadmap de 90 días</p>
                  <p className="mt-0.5 text-[11px] text-blue-200">Progreso profesional</p>
                </div>
                <span className="rounded-full bg-blue-500/15 px-2.5 py-1 text-[10px] font-bold text-blue-200">Semana 6</span>
              </div>
              <div className="relative mt-5 h-24 overflow-hidden rounded-xl bg-[#050e1d] px-3 pt-3">
                <div className="absolute inset-x-3 top-8 border-t border-dashed border-white/10" />
                <div className="absolute inset-x-3 top-16 border-t border-dashed border-white/10" />
                <svg aria-hidden="true" viewBox="0 0 300 80" preserveAspectRatio="none" className="absolute inset-x-3 bottom-2 h-16 w-[calc(100%-1.5rem)]">
                  <path d="M0 66 C45 60 54 38 90 43 S140 58 170 30 S232 12 300 8" fill="none" stroke="#3B82F6" strokeWidth="4" />
                  <path d="M0 72 C52 68 92 63 128 54 S206 42 300 24" fill="none" stroke="#10B981" strokeWidth="3" opacity=".75" />
                </svg>
                <span className="absolute right-3 top-3 rounded-lg bg-white px-2 py-1 text-[9px] font-bold text-[#071426]">CV optimizado</span>
              </div>
            </article>

            <article className="rounded-2xl border border-white/10 bg-white/[0.055] p-4">
              <p className="text-sm font-bold text-white">Nivel de empleabilidad</p>
              <div className="mt-4 flex items-center gap-4">
                <div className="grid size-20 shrink-0 place-items-center rounded-full bg-[conic-gradient(#10B981_0_28%,#3B82F6_28%_76%,rgba(255,255,255,.1)_76%)]">
                  <div className="grid size-14 place-items-center rounded-full bg-[#0d1c33] text-center">
                    <strong className="font-mono text-xl text-white">76</strong>
                  </div>
                </div>
                <div>
                  <p className="font-bold text-white">Alto potencial</p>
                  <p className="mt-1 text-[11px] leading-4 text-blue-200">Con mejoras prioritarias</p>
                </div>
              </div>
            </article>
          </div>

          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <article className="rounded-2xl border border-white/10 bg-white/[0.055] p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-white">Top 3 errores críticos</p>
                <Icon name="target" className="size-4 text-rose-300" />
              </div>
              <div className="mt-3 space-y-2.5">
                {priorities.map(([label, width]) => (
                  <div key={label}>
                    <div className="flex justify-between gap-3 text-[10px] text-blue-100">
                      <span>{label}</span><span>{width}</span>
                    </div>
                    <div className="mt-1 h-1 rounded-full bg-white/10"><div className="progress-grow h-full rounded-full bg-blue-400" style={{ width }} /></div>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-2xl border border-white/10 bg-white/[0.055] p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-bold text-white">Oportunidades</p>
                <span className="text-[10px] font-semibold text-emerald-300">Top 5 empleos</span>
              </div>
              <div className="mt-3 space-y-2">
                <p className="flex justify-between rounded-lg bg-white/5 px-3 py-2 text-[10px] text-blue-100"><span>Salario estimado</span><strong className="text-white">$800–$1,500</strong></p>
                <p className="flex justify-between rounded-lg bg-white/5 px-3 py-2 text-[10px] text-blue-100"><span>Habilidad prioritaria</span><strong className="text-white">Análisis de datos</strong></p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
