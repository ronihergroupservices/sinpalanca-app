import Image from "next/image";

export function FounderBadge({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`founder-badge ${compact ? "founder-badge-compact" : ""}`}>
      <div className="founder-badge-ring">
        <div className="founder-badge-core">
          <Image
            src="/shield.png"
            width={compact ? 50 : 74}
            height={compact ? 50 : 74}
            alt="Escudo azul de SinPalanca"
            className="object-contain drop-shadow-[0_0_14px_rgba(59,130,246,0.65)]"
            priority
          />
        </div>
      </div>
      <div>
        <p className="font-mono text-[10px] font-bold uppercase text-amber-200">Founder</p>
        <p className="mt-0.5 text-xs font-semibold leading-5 text-blue-100">
          Insignia exclusiva
        </p>
      </div>
    </div>
  );
}
