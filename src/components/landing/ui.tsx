import Image from "next/image";
import type { ReactNode } from "react";
import type { IconName } from "./data";

type IconProps = {
  name: IconName;
  className?: string;
};

export function Icon({ name, className = "size-5" }: IconProps) {
  const paths: Record<IconName, ReactNode> = {
    arrow: <path d="m5 12 14 0m-6-6 6 6-6 6" />,
    briefcase: <><path d="M9 7V5h6v2" /><rect x="3" y="7" width="18" height="12" rx="2" /><path d="M3 12h18M10 12v2h4v-2" /></>,
    chart: <><path d="M4 19V9m6 10V5m6 14v-7m4 7H2" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    compass: <><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" /></>,
    document: <><path d="M6 3h8l4 4v14H6Z" /><path d="M14 3v5h5M9 13h6m-6 4h6" /></>,
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" /></>,
    graduation: <><path d="m3 10 9-5 9 5-9 5-9-5Z" /><path d="M7 13v4c3 2 7 2 10 0v-4m4-3v6" /></>,
    language: <><path d="M4 5h8M8 3v2m3 0c-1 4-3 7-7 9m2-5c1 2 3 4 6 5" /><path d="m14 19 3-8 3 8m-5-3h4" /></>,
    linkedin: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 10v7m0-10v.1M12 17v-7m0 3a3 3 0 0 1 6 0v4" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
    map: <><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3Z" /><path d="M9 3v15m6-12v15" /></>,
    people: <><circle cx="8" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3 20a5 5 0 0 1 10 0m1-4a4 4 0 0 1 7 3" /></>,
    person: <><circle cx="12" cy="8" r="4" /><path d="M5 21a7 7 0 0 1 14 0" /></>,
    scanner: <><path d="M4 8V4h4m8 0h4v4M4 16v4h4m8 0h4v-4" /><path d="M7 12h10M8 9h8m-7 6h6" /></>,
    search: <><circle cx="10" cy="10" r="6" /><path d="m15 15 5 5" /></>,
    sparkles: <><path d="m12 3 1.3 3.7L17 8l-3.7 1.3L12 13l-1.3-3.7L7 8l3.7-1.3L12 3Z" /><path d="m5 14 .8 2.2L8 17l-2.2.8L5 20l-.8-2.2L2 17l2.2-.8L5 14Zm14-2 .7 1.8 1.8.7-1.8.7L19 17l-.7-1.8-1.8-.7 1.8-.7L19 12Z" /></>,
    target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></>,
    trend: <><path d="m3 17 6-6 4 4 8-9" /><path d="M15 6h6v6" /></>,
  };

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Image
        src="/shield.png"
        width={42}
        height={42}
        alt=""
        className="size-10 object-contain drop-shadow-[0_0_10px_rgba(59,130,246,0.72)] sm:size-[42px]"
        priority
      />
      <span className={`text-base font-extrabold sm:text-lg ${light ? "text-white" : "text-[var(--ink)]"}`}>
        SinPalanca<span className="brand-domain text-[var(--primary)]">.app</span>
      </span>
    </span>
  );
}

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className={`section-label ${dark ? "text-blue-300" : "text-[var(--primary)]"}`}>
        {eyebrow}
      </p>
      <h2 className={`section-title mt-4 ${dark ? "text-white" : "text-[var(--ink)]"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-base leading-7 sm:text-lg sm:leading-8 ${dark ? "text-blue-100/75" : "text-slate-600"}`}>
          {description}
        </p>
      )}
    </div>
  );
}

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  const variants = {
    primary: "bg-[var(--primary)] text-white shadow-[0_12px_34px_rgba(27,79,228,0.3)] hover:bg-[#1645cc]",
    secondary: "border border-slate-300 bg-white text-[var(--ink)] hover:border-blue-300 hover:bg-blue-50",
    light: "bg-white text-[var(--primary)] shadow-[0_12px_34px_rgba(0,0,0,0.18)] hover:bg-blue-50",
  };

  return (
    <a
      href={href}
      className={`button-base ${variants[variant]} ${className}`}
    >
      <span>{children}</span>
      <Icon name="arrow" className="size-4" />
    </a>
  );
}

export function CheckItem({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <li className={`flex items-start gap-3 ${dark ? "text-blue-50" : "text-slate-700"}`}>
      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-emerald-500 text-white shadow-[0_0_14px_rgba(16,185,129,0.28)]">
        <Icon name="check" className="size-3" />
      </span>
      <span className="leading-6">{children}</span>
    </li>
  );
}
