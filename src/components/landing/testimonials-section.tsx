import { Icon } from "./ui";
import styles from "./testimonials.module.css";

const testimonials = [
  {
    initials: "CP",
    name: "Camila P.",
    profile: "Estudiante universitaria",
    text: "No sabía cómo explicar mi experiencia. El análisis me ayudó a organizar mi CV y entender qué debía mejorar primero.",
  },
  {
    initials: "MT",
    name: "Marco T.",
    profile: "Profesional en transición",
    text: "Descubrí que estaba aplicando a puestos que no coincidían con mi perfil. El roadmap me dio una dirección mucho más clara.",
  },
  {
    initials: "AM",
    name: "Andrea M.",
    profile: "Buscando trabajo remoto",
    text: "El Match Score me mostró qué oportunidades tenían más sentido para mí y cómo adaptar mi CV para cada una.",
  },
  {
    initials: "LR",
    name: "Luis R.",
    profile: "Técnico sin experiencia corporativa",
    text: "Pensaba que no tenía nada que mostrar, pero aprendí a convertir mis proyectos y habilidades en experiencia profesional.",
  },
  {
    initials: "SG",
    name: "Sofía G.",
    profile: "Recién graduada",
    text: "El ATS Score me ayudó a detectar errores que nunca había visto. Ahora mi CV es mucho más claro y profesional.",
  },
  {
    initials: "DC",
    name: "Daniel C.",
    profile: "Buscando oportunidades internacionales",
    text: "Las recomendaciones de inglés, LinkedIn y trabajo remoto me ayudaron a construir una estrategia completa.",
  },
] as const;

export function TestimonialsSection() {
  return (
    <section id="experiencias" className={`${styles.stage} overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28`}>
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto max-w-4xl text-center reveal-up">
          <p className="section-label text-blue-600">Experiencias</p>
          <h2 className="section-title mt-5">Historias de personas que buscan una oportunidad sin palanca.</h2>
        </header>

        <div className={`${styles.track} mt-12`}>
          {testimonials.map((testimonial, index) => (
            <article key={testimonial.name} className={`${styles.card} reveal-up`} style={{ animationDelay: `${(index % 3) * 80}ms` }}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex min-w-0 items-center gap-3">
                  <div className={styles.avatar} aria-hidden="true">
                    <span>{testimonial.initials}</span>
                    <Icon name="person" className="absolute bottom-1 right-1 size-3 text-white/70" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-[var(--ink)]">{testimonial.name}</h3>
                    <p className="mt-0.5 text-xs leading-5 text-slate-500">{testimonial.profile}</p>
                  </div>
                </div>
                <span className={styles.quote} aria-hidden="true">“</span>
              </div>
              <div className="mt-5 flex gap-1 text-amber-400" role="img" aria-label="Cinco estrellas">
                {[0, 1, 2, 3, 4].map((star) => <span key={star} aria-hidden="true">★</span>)}
              </div>
              <blockquote className="mt-4 text-sm leading-7 text-slate-600">“{testimonial.text}”</blockquote>
              <p className="mt-6 border-t border-blue-50 pt-4 font-mono text-[9px] font-bold uppercase text-blue-500">Perfil verificado</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
