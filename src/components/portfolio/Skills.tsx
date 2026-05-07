const groups = [
  {
    title: "Dise√±o Visual",
    items: ["Branding", "Direcci√≥n visual", "Dise√±o editorial", "Storytelling visual", "Sistemas visuales", "Social media design"],
  },
  {
    title: "Dise√±o Digital",
    items: ["UI visual", "Responsive layouts", "Dise√±o para productos digitales", "Arquitectura visual", "Adaptaci√≥n multiformato"],
  },
  {
    title: "Herramientas",
    items: ["Adobe Creative Suite", "Figma", "Framer", "Canva", "CapCut", "Notion", "IA aplicada a dise√±o"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="scroll-reveal relative py-32 lg:py-40 border-t border-hairline">
      <div className="container">
        <div className="mb-20 max-w-3xl space-y-3">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">05 ¬∑ Capabilities</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight text-balance">
            Skills
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-14">
          {groups.map((g) => (
            <div key={g.title} className="motion-card space-y-6">
              <div className="flex items-center justify-between border-b border-hairline pb-4">
                <h3 className="font-display text-lg text-foreground">{g.title}</h3>
                <span className="text-xs text-muted-foreground">{String(g.items.length).padStart(2, "0")}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-hairline bg-surface/40 px-3.5 py-1.5 text-sm text-foreground/85 transition-all duration-500 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-surface-elevated hover:text-foreground"
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
