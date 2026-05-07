import { LayoutGrid, Layers3, PenTool } from "lucide-react";

const blocks = [
  { icon: Layers3, label: "Branding visual", desc: "Direcci√≥n visual, sistemas de marca y consistencia entre aplicaciones digitales." },
  { icon: PenTool, label: "Dise√±o editorial", desc: "Organizaci√≥n de contenido, jerarqu√≠a visual y comunicaci√≥n clara de informaci√≥n compleja." },
  { icon: LayoutGrid, label: "UI visual", desc: "Layouts web, arquitectura visual y adaptaci√≥n multiformato para productos digitales." },
];

const principles = ["consistencia", "claridad", "velocidad de producci√≥n", "percepci√≥n de calidad"];

const focus = [
  "Branding visual",
  "Social media systems",
  "Dise√±o editorial",
  "Campa√±as digitales",
  "Layouts web",
  "UI visual",
  "Direcci√≥n visual",
  "Organizaci√≥n de contenido",
  "Exploraci√≥n creativa con IA",
];

export const Systems = () => {
  return (
    <section id="systems" className="relative py-32 lg:py-40 border-t border-hairline overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-accent opacity-40" />
      <div className="container">
        <div className="rounded-3xl border border-hairline bg-surface/40 p-10 lg:p-16 backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-8">
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">06 ¬∑ What I bring to creative teams</span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight text-balance">
                M√°s que piezas aisladas.
              </h2>
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl text-pretty">
                Me interesa construir sistemas visuales que ayuden a las marcas a mantener consistencia,
                claridad, velocidad de producci√≥n y percepci√≥n de calidad entre plataformas.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {principles.map((item) => (
                  <div key={item} className="border-t border-hairline pt-4 text-sm text-foreground/80">
                    {item}
                  </div>
                ))}
              </div>

              <div className="space-y-4 border-t border-hairline pt-8">
                <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Por eso mi trabajo suele enfocarse en</p>
                <div className="flex flex-wrap gap-2">
                  {focus.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-hairline bg-background/35 px-3.5 py-1.5 text-sm text-foreground/84 transition-colors hover:border-accent/30 hover:text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-3">
              {blocks.map((b) => (
                <div
                  key={b.label}
                  className="flex gap-4 rounded-2xl border border-hairline bg-background/40 p-5 hover:border-accent/30 hover:bg-background/70 transition-colors"
                >
                  <div className="h-10 w-10 shrink-0 rounded-full border border-hairline bg-surface flex items-center justify-center">
                    <b.icon className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm text-foreground">{b.label}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
