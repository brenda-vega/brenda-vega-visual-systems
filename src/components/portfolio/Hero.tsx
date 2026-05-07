import heroVisual from "@/assets/hero-visual.jpg";
import { ArrowUpRight, Download } from "lucide-react";

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-36 pb-24 sm:pt-40 lg:pt-44 lg:pb-28">
      {/* Soft ambient gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-radial" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-accent opacity-55" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grain opacity-30" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-background to-transparent" />

      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center">
        <div className="lg:col-span-7 space-y-9 lg:space-y-10">
          <div className="reveal inline-flex items-center gap-3 rounded-full border border-hairline bg-surface/35 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-muted-foreground backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_18px_hsl(var(--accent)/0.45)]" />
            Portfolio ¬∑ 2018 ‚Äî 2026
          </div>

          <h1 className="reveal reveal-delay-1 max-w-4xl font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.92] tracking-normal text-balance">
            <span className="text-gradient">Visual systems</span>
            <br />
            <span className="text-foreground">for digital </span>
            <span className="italic font-light text-accent">brands</span>
            <span className="text-foreground"> & products.</span>
          </h1>

          <p className="reveal reveal-delay-2 max-w-2xl text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty">
            Dise√±o sistemas visuales y experiencias digitales que conectan branding,
            contenido y estrategia para marcas, productos y plataformas digitales.
          </p>

          <div className="reveal reveal-delay-3 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background shadow-glow soft-button hover:bg-accent-soft"
            >
              Ver proyectos
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/45 px-6 py-3.5 text-sm text-foreground/90 backdrop-blur-md soft-button hover:border-accent/30 hover:bg-surface-elevated hover:text-foreground"
            >
              <Download className="h-4 w-4" />
              Descargar CV
            </a>
          </div>

          <div className="reveal reveal-delay-4 grid max-w-lg grid-cols-3 gap-4 border-t border-hairline pt-8">
            <Stat value="6+" label="a√±os de pr√°ctica" />
            <Stat value="20+" label="proyectos" />
            <Stat value="‚àû" label="iteraciones" />
          </div>
        </div>

        <div className="lg:col-span-5 reveal reveal-delay-2">
          <div className="relative mx-auto max-w-[520px] lg:max-w-none">
            <div className="absolute -inset-8 -z-10 rounded-[2rem] bg-gradient-accent blur-3xl opacity-50" />
            <div className="absolute -inset-px -z-0 rounded-[1.75rem] bg-gradient-to-br from-white/12 via-white/4 to-accent/10" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-hairline bg-surface/35 p-2 shadow-soft backdrop-blur-sm">
              <img
                src={heroVisual}
                alt="Composici√≥n visual de tarjetas UI flotantes con acentos rosados"
                width={1024}
                height={1024}
                className="w-full h-auto rounded-[1.25rem]"
              />
            </div>

            {/* Floating UI chips */}
            <div className="float-slow absolute -left-3 top-10 hidden sm:flex items-center gap-2 rounded-full border border-hairline bg-background/72 backdrop-blur-xl px-3.5 py-2 text-[11px] text-muted-foreground shadow-soft soft-button hover:border-accent/25 hover:text-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Design system ¬∑ v3
            </div>
            <div className="float-slower absolute -right-3 bottom-10 hidden sm:flex flex-col gap-1 rounded-2xl border border-hairline bg-background/72 backdrop-blur-xl px-4 py-3 text-[11px] shadow-soft soft-button hover:border-accent/25">
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
  <div className="pt-5">
    <div className="font-display text-2xl sm:text-3xl text-foreground">{value}</div>
    <div className="mt-1.5 text-xs leading-snug text-muted-foreground">{label}</div>
  </div>
);
