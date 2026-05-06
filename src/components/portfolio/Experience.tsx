const items = [
  {
    role: "Visual Designer & Digital Communication",
    company: "Kairos Research",
    period: "2023 — Actualidad",
    desc: "Diseño de sistemas visuales, contenido editorial y comunicación digital para plataformas enfocadas en tecnología y análisis digital.",
  },
  {
    role: "Content & Visual Designer",
    company: "Lytryum",
    period: "2022 — 2023",
    desc: "Desarrollo de contenido visual y sistemas gráficos para educación digital y comunicación multicanal.",
  },
  {
    role: "Marketing Visual Designer",
    company: "Exponencial Cripto Club",
    period: "2021 — 2023",
    desc: "Diseño visual para campañas digitales, branding, contenido y comunicación enfocada en comunidad.",
  },
  {
    role: "Branding & Visual Systems",
    company: "Freelance",
    period: "2018 — Actualidad",
    desc: "Desarrollo de branding, contenido digital y sistemas visuales para negocios, eventos y marcas digitales.",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="relative py-32 lg:py-40 border-t border-hairline">
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <div className="sticky top-32 space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">04 · Experience</span>
            <h2 className="font-display text-4xl lg:text-5xl tracking-tight">Trayectoria.</h2>
            <p className="text-sm text-muted-foreground max-w-xs">
              Roles y colaboraciones a lo largo de los últimos años.
            </p>
          </div>
        </div>

        <ol className="lg:col-span-7 lg:col-start-6 relative">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-border/40" aria-hidden />
          {items.map((it) => (
            <li key={it.role + it.company} className="relative pl-8 py-8 border-b border-hairline last:border-b-0 group">
              <span className="absolute left-[-3.5px] top-10 h-2 w-2 rounded-full bg-muted-foreground/50 group-hover:bg-accent transition-colors" />
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-display text-xl text-foreground">{it.role}</h3>
                  <p className="text-sm text-accent mt-0.5">{it.company}</p>
                </div>
                <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{it.period}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">{it.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
