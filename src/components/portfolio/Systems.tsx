import { Sparkles, Workflow, LayoutGrid } from "lucide-react";

const blocks = [
  { icon: Sparkles, label: "AI aplicada", desc: "Integración de modelos generativos en workflows visuales y de contenido." },
  { icon: Workflow, label: "Automatización", desc: "Procesos creativos optimizados para escalar comunicación digital." },
  { icon: LayoutGrid, label: "Sistemas digitales", desc: "Estructuras visuales para organizar información compleja." },
];

export const Systems = () => {
  return (
    <section id="systems" className="relative py-32 lg:py-40 border-t border-hairline overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-accent opacity-40" />
      <div className="container">
        <div className="rounded-3xl border border-hairline bg-surface/40 p-10 lg:p-16 backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">06 · Systems & Automation</span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight text-balance">
                Exploración continua de <span className="italic text-accent">IA, automatización</span> y sistemas digitales aplicados al diseño.
              </h2>
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl text-pretty">
                Enfocada en la optimización de procesos creativos y el desarrollo de sistemas digitales
                que conectan contenido, comunicación y producto.
              </p>
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
