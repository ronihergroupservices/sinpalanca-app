"use client";

import { useState } from "react";
import { Brand } from "./ui";

const links = [
  ["Cómo funciona", "#como-funciona"],
  ["Qué recibes", "#que-recibes"],
  ["Precios", "#precios"],
  ["Oportunidades", "#job-match"],
  ["Historia", "#historia"],
  ["Preguntas", "#preguntas"],
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#071426]/88 text-white backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <a href="#inicio" aria-label="Ir al inicio" onClick={() => setOpen(false)}>
          <Brand light />
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-semibold text-blue-100/70 transition hover:text-white"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 sm:flex">
          <button
            type="button"
            disabled
            title="Disponible próximamente"
            className="rounded-full px-4 py-2.5 text-sm font-semibold text-blue-100/55"
          >
            Iniciar sesión
          </button>
          <a
            href="#precios"
            className="rounded-full bg-[var(--primary)] px-5 py-2.5 text-sm font-bold text-white shadow-[0_8px_24px_rgba(59,130,246,0.3)] transition hover:-translate-y-0.5 hover:bg-blue-500"
          >
            Analizar mi CV
          </a>
        </div>

        <div className="flex items-center gap-2 sm:hidden">
          <a
            href="#precios"
            className="rounded-full bg-[var(--primary)] px-3.5 py-2.5 text-xs font-bold text-white"
          >
            Analizar CV
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((current) => !current)}
            className="grid size-10 place-items-center rounded-full border border-white/15 bg-white/5"
          >
            <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
            <span aria-hidden="true" className="relative block h-4 w-5">
              <span className={`absolute left-0 top-0 h-0.5 w-5 bg-white transition ${open ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`absolute left-0 top-[7px] h-0.5 w-5 bg-white transition ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 top-[14px] h-0.5 w-5 bg-white transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      <div
        id="menu-movil"
        className={`border-t border-white/10 bg-[#071426] px-4 transition-[max-height,opacity] duration-300 sm:hidden ${
          open ? "max-h-96 pb-5 pt-3 opacity-100" : "pointer-events-none max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <div className="mx-auto grid max-w-7xl gap-1">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 font-semibold text-blue-50 transition hover:bg-white/5"
            >
              {label}
            </a>
          ))}
          <button
            type="button"
            disabled
            className="mt-2 rounded-xl border border-white/10 px-4 py-3 text-left font-semibold text-blue-100/50"
          >
            Iniciar sesión · Próximamente
          </button>
        </div>
      </div>
    </nav>
  );
}
