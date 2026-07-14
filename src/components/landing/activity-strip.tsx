import { Icon } from "./ui";

type ActivityStripProps = {
  count?: number;
  isDemo?: boolean;
};

export function ActivityStrip({ count = 18, isDemo = true }: ActivityStripProps) {
  return (
    <section aria-label="Actividad de la plataforma" className="relative overflow-hidden bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-5 rounded-2xl border border-blue-100 bg-[linear-gradient(135deg,#ffffff,#f3f7ff)] px-5 py-5 shadow-[0_18px_50px_rgba(27,79,228,0.1)] sm:flex-row sm:px-7">
        <div className="flex items-center gap-4">
          <div className="flex -space-x-2.5" aria-hidden="true">
            {["bg-blue-100", "bg-emerald-100", "bg-indigo-100", "bg-sky-100"].map((color, index) => (
              <span key={color} className={`activity-avatar grid size-10 place-items-center rounded-full border-[3px] border-white ${color} text-blue-700`} style={{ animationDelay: `${index * 160}ms` }}>
                <Icon name="person" className="size-4" />
              </span>
            ))}
          </div>
          <div>
            <p className="flex items-center gap-2 text-sm font-bold text-[var(--ink)] sm:text-base">
              <span className="activity-dot size-2 shrink-0 rounded-full bg-emerald-500" />
              {count} personas están mejorando su CV ahora.
            </p>
            <p className="mt-1 text-xs text-slate-500">Vista previa del tipo de actividad que mostrará la plataforma.</p>
          </div>
        </div>
        {isDemo && (
          <span className="shrink-0 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 font-mono text-[9px] font-bold uppercase text-blue-700">
            Demostración de actividad de la plataforma
          </span>
        )}
      </div>
    </section>
  );
}
