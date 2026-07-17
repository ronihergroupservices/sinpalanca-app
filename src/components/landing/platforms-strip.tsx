import Image from "next/image";
import type { CSSProperties } from "react";
import { ButtonLink, Icon } from "./ui";
import type { IconName } from "./data";
import styles from "./platforms-strip.module.css";

type PlatformCategory = "empleo" | "freelance" | "tecnología";

type PlatformItem = {
  name: string;
  category: PlatformCategory;
  logo?: string;
  alt: string;
  href?: string;
};

const platforms: PlatformItem[] = [
  { name: "LinkedIn", category: "empleo", alt: "Logotipo de LinkedIn" },
  { name: "Indeed", category: "empleo", alt: "Logotipo de Indeed" },
  { name: "Glassdoor", category: "empleo", alt: "Logotipo de Glassdoor" },
  { name: "Wellfound", category: "empleo", alt: "Logotipo de Wellfound" },
  { name: "Remote OK", category: "empleo", alt: "Logotipo de Remote OK" },
  { name: "Fiverr", category: "freelance", alt: "Logotipo de Fiverr" },
  { name: "Upwork", category: "freelance", alt: "Logotipo de Upwork" },
  { name: "Freelancer.com", category: "freelance", alt: "Logotipo de Freelancer.com" },
  { name: "Contra", category: "freelance", alt: "Logotipo de Contra" },
  { name: "OpenAI", category: "tecnología", alt: "Logotipo de OpenAI" },
  { name: "GitHub", category: "tecnología", alt: "Logotipo de GitHub" },
  { name: "Canva", category: "tecnología", alt: "Logotipo de Canva" },
];

const categories: Array<{
  id: PlatformCategory;
  number: string;
  label: string;
  description: string;
}> = [
  {
    id: "empleo",
    number: "01",
    label: "Empleo",
    description: "Vacantes, empresas y oportunidades remotas.",
  },
  {
    id: "freelance",
    number: "02",
    label: "Freelance",
    description: "Proyectos, servicios y clientes internacionales.",
  },
  {
    id: "tecnología",
    number: "03",
    label: "Tecnología, IA y perfil profesional",
    description: "Herramientas para construir, demostrar y comunicar habilidades.",
  },
];

const benefits: Array<{
  icon: IconName;
  title: string;
  text: string;
}> = [
  {
    icon: "document",
    title: "CV más claro y profesional",
    text: "Presenta tu experiencia con mejor estructura, palabras clave y resultados.",
  },
  {
    icon: "globe",
    title: "Perfil optimizado para oportunidades remotas",
    text: "Mejora la forma en que muestras tus habilidades, idiomas y experiencia internacional.",
  },
  {
    icon: "target",
    title: "Estrategia adaptada a cada plataforma",
    text: "No se aplica igual en LinkedIn, Fiverr, Upwork o una bolsa de empleo tradicional.",
  },
];

function PlatformMark({ platform }: { platform: PlatformItem }) {
  if (platform.logo) {
    return (
      <Image
        src={platform.logo}
        width={156}
        height={40}
        alt={platform.alt}
        className={styles.logoImage}
      />
    );
  }

  return (
    <span className={styles.wordmark} aria-label={platform.alt} role="img">
      {platform.name}
    </span>
  );
}

export function PlatformsStrip() {
  return (
    <section id="plataformas" className={styles.stage} aria-labelledby="platforms-title">
      <div className={styles.gridPattern} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.inner}>
        <header className={`${styles.headingLayout} reveal-up`}>
          <div>
            <p className="section-label text-blue-600">Plataformas donde están las oportunidades</p>
            <h2 id="platforms-title" className={`${styles.title} section-title`}>
              Prepárate para destacar donde las empresas y clientes están buscando talento.
            </h2>
            <p className={styles.description}>
              SinPalanca te ayuda a mejorar tu CV, perfil profesional, LinkedIn y estrategia de aplicación para competir mejor en plataformas de empleo, trabajo remoto, freelance y tecnología.
            </p>
          </div>

          <div className={styles.support}>
            <span className={styles.supportIcon} aria-hidden="true">
              <Icon name="sparkles" className="size-5" />
            </span>
            <p>
              No importa dónde quieras buscar oportunidades. Te ayudamos a presentar mejor tu experiencia, tus habilidades y tu valor profesional.
            </p>
          </div>
        </header>

        <div className={styles.mobileHint} aria-hidden="true">
          Desliza para explorar las categorías
          <Icon name="arrow" className="size-4" />
        </div>

        <div className={styles.categoryTrack} aria-label="Categorías de plataformas">
          {categories.map((category, categoryIndex) => {
            const categoryPlatforms = platforms.filter((platform) => platform.category === category.id);

            return (
              <section
                key={category.id}
                className={`${styles.categoryGroup} ${styles[category.id]} reveal-up`}
                style={{ "--category-delay": `${categoryIndex * 90}ms` } as CSSProperties}
                aria-labelledby={`platform-category-${categoryIndex}`}
              >
                <div className={styles.categoryHeading}>
                  <span className={styles.categoryNumber}>{category.number}</span>
                  <div>
                    <h3 id={`platform-category-${categoryIndex}`}>{category.label}</h3>
                    <p>{category.description}</p>
                  </div>
                </div>

                <ul className={styles.platformGrid}>
                  {categoryPlatforms.map((platform, platformIndex) => (
                    <li
                      key={platform.name}
                      className={styles.platformCard}
                      style={{ "--platform-delay": `${(categoryIndex * 3 + platformIndex) * 45}ms` } as CSSProperties}
                    >
                      <PlatformMark platform={platform} />
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>

        <div className={styles.benefits} aria-label="Cómo te prepara SinPalanca">
          {benefits.map((benefit, index) => (
            <article
              key={benefit.title}
              className={`${styles.benefitCard} reveal-up`}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <span className={styles.benefitIcon} aria-hidden="true">
                <Icon name={benefit.icon} className="size-5" />
              </span>
              <div>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.footerRow}>
          <p className={styles.legal}>
            Las marcas y logotipos mostrados pertenecen a sus respectivos propietarios. SinPalanca.app no implica afiliación, patrocinio ni colaboración oficial con estas plataformas.
          </p>
          <ButtonLink href="#job-match" variant="secondary" className={styles.cta}>
            Ver herramientas futuras
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
