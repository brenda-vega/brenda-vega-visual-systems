import heroVisual from "@/assets/hero-visual.jpg";
import { ArrowUpRight, Download } from "lucide-react";

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Soft ambient gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-accent opacity-60" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grain opacity-40" />

      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 space-y-10">
          <div className="reveal flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Portfolio · 2018 — 2026
          </div>

          <h1 className="reveal reveal-delay-1 font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight text-balance">
            <span className="text-gradient">Visual systems</span>
            <br />
            <span className="text-foreground">for digital </span>
            <span className="italic font-light text-accent">brands</span>
            <span className="text-foreground"> & products.</span>
          </h1>

          <p className="reveal reveal-delay-2 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty">
            Diseño sistemas visuales y experiencias digitales que conectan branding,
            contenido y estrategia para marcas, productos y plataformas digitales.
          </p>

          <div className="reveal reveal-delay-3 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm text-background hover:bg-accent-soft transition-colors"
            >
              Ver proyectos
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/40 px-6 py-3.5 text-sm text-foreground hover:bg-surface-elevated transition-colors"
            >
              <Download className="h-4 w-4" />
              Descargar CV
            </a>
          </div>

          <div className="reveal reveal-delay-4 pt-8 grid grid-cols-3 gap-6 max-w-md border-t border-hairline">
            <Stat value="6+" label="años de práctica" />
            <Stat value="20+" label="proyectos" />
            <Stat value="∞" label="iteraciones" />
          </div>
        </div>

        <div className="lg:col-span-5 reveal reveal-delay-2">
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-accent blur-3xl opacity-60 -z-10" />
            <div className="relative rounded-3xl border border-hairline bg-surface/40 p-2 shadow-soft">
              <img
                src={heroVisual}
                alt="Composición visual de tarjetas UI flotantes con acentos rosados"
                width={1024}
                height={1024}
                className="w-full h-auto rounded-2xl"
              />
            </div>

            {/* Floating UI chips */}
            <div className="float-slow absolute -left-4 top-12 hidden sm:flex items-center gap-2 rounded-full border border-hairline bg-background/80 backdrop-blur px-3 py-1.5 text-[11px] text-muted-foreground shadow-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Design system · v3
            </div>
            <div className="float-slower absolute -right-2 bottom-10 hidden sm:flex flex-col gap-1 rounded-2xl border border-hairline bg-background/80 backdrop-blur px-4 py-3 text-[11px] shadow-soft">
              <span className="text-muted-foreground">Editorial</span>
              <span className="text-foreground font-display text-sm">12 col grid</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="pt-6">
    <div className="font-display text-2xl text-foreground">{value}</div>
    <div className="text-xs text-muted-foreground mt-1">{label}</div>
  </div>
);
