const groups = [
  {
    title: "Branding & Comunicación",
    items: ["Branding", "Identidad visual", "Dirección visual", "Diseño editorial", "Comunicación digital", "Storytelling visual"],
  },
  {
    title: "Diseño Digital",
    items: ["UI Visual Design", "Wireframes", "Responsive Design", "Arquitectura de información", "Productos digitales"],
  },
  {
    title: "Contenido & Estrategia",
    items: ["Estrategia de contenido", "Adaptación multicanal", "Engagement visual", "SEO/SEM", "Meta Ads"],
  },
  {
    title: "Herramientas",
    items: ["Figma", "Framer", "Adobe CS", "Notion", "Canva", "Metricool", "CapCut", "GA4", "Search Console", "Beehiiv", "AI"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="relative py-32 lg:py-40 border-t border-hairline">
      <div className="container">
        <div className="mb-20 max-w-3xl space-y-3">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">05 · Capabilities</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight text-balance">
            Habilidades que combinan diseño, sistemas y estrategia.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14">
          {groups.map((g) => (
            <div key={g.title} className="space-y-6">
              <div className="flex items-center justify-between border-b border-hairline pb-4">
                <h3 className="font-display text-lg text-foreground">{g.title}</h3>
                <span className="text-xs text-muted-foreground">{String(g.items.length).padStart(2, "0")}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-hairline bg-surface/40 px-3.5 py-1.5 text-sm text-foreground/85 hover:border-accent/40 hover:text-foreground hover:bg-surface-elevated transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
