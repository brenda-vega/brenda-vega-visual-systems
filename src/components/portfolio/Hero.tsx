import heroVisual from "@/assets/brenda-vega-editorial-portrait.png";
import { ArrowUpRight, Download } from "lucide-react";
import { navigateToHash } from "@/lib/scroll";
import { useEffect, useRef, useState } from "react";

type StatConfig = {
  end: number;
  label: string;
  suffix?: string;
  rangeEnd?: number;
};

const cvHref = `${import.meta.env.BASE_URL}Brenda-Vega-Visual-Designer-CV.pdf`;

const stats: StatConfig[] = [
  { end: 4, suffix: "+", label: "áreas de diseño" },
  { end: 20, suffix: "+", label: "proyectos visuales" },
  { end: 100, suffix: "+", label: "assets digitales" },
];

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export const Hero = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const element = statsRef.current;
    if (!element) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setProgress(1);
      hasAnimatedRef.current = true;
      return;
    }

    const runCount = () => {
      if (hasAnimatedRef.current) return;
      hasAnimatedRef.current = true;

      const duration = 1450;
      const start = performance.now();
      const animate = (now: number) => {
        const elapsed = Math.min((now - start) / duration, 1);
        setProgress(easeOutCubic(elapsed));

        if (elapsed < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runCount();
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-[22rem] pb-20 sm:pt-[28rem] lg:pt-40 lg:pb-24">
      {/* Soft ambient gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-radial" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-accent opacity-55" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grain opacity-30" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-background to-transparent" />

      <div className="hero-editorial-portrait reveal reveal-delay-2" aria-hidden="true">
        <div className="hero-editorial-glow" />
        <img src={heroVisual} alt="" width={1024} height={1280} decoding="async" fetchPriority="high" className="hero-editorial-image" />
        <div className="hero-editorial-overlay" />
        <div className="hero-editorial-sidefade" />
        <div className="hero-editorial-bottomfade" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl space-y-8 lg:max-w-[43rem] xl:max-w-[47rem] lg:space-y-10">
          <div className="reveal inline-flex items-center gap-3 rounded-full border border-hairline bg-surface/35 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-muted-foreground backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_18px_hsl(var(--accent)/0.45)]" />
            Visual Designer · Branding · Editorial · Digital
          </div>

          <h1 className="reveal reveal-delay-1 max-w-[13ch] font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.94] tracking-normal text-balance">
            <span className="text-foreground">Visual </span>
            <span className="italic font-light text-accent">Designer</span>
          </h1>

          <div className="reveal reveal-delay-2 max-w-2xl space-y-5 text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty">
            <p>
              Diseño sistemas visuales, campañas y contenido digital para marcas que necesitan
              mantener coherencia, velocidad y calidad visual en múltiples canales.
            </p>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-foreground/68">
              Mi perfil combina branding, diseño editorial, social media design y diseño visual
              para productos digitales, permitiéndome trabajar tanto en campañas creativas como
              en sistemas gráficos estructurados para clientes con necesidades cambiantes.
            </p>
          </div>

        </div>

        <div className="reveal reveal-delay-3 mt-8 flex flex-col gap-4 lg:mt-0 lg:grid lg:-translate-y-12 lg:grid-cols-12 lg:items-center xl:-translate-y-14">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 lg:col-span-5">
            <a
              href="#work"
              onClick={(event) => {
                event.preventDefault();
                navigateToHash("#work");
              }}
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background shadow-glow soft-button hover:bg-accent-soft"
            >
              Ver proyectos
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={cvHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/45 px-6 py-3.5 text-sm text-foreground/90 backdrop-blur-md soft-button hover:border-accent/30 hover:bg-surface-elevated hover:text-foreground"
            >
              <Download className="h-4 w-4" />
              Descargar CV
            </a>
          </div>

          <p className="text-[11px] uppercase tracking-[0.16em] text-foreground/48 sm:text-xs lg:hidden">
            4+ ÁREAS · 20+ PROYECTOS · 100+ ASSETS
          </p>

          <div
            ref={statsRef}
            className="hidden max-w-lg grid-cols-3 gap-6 lg:col-span-4 lg:col-start-9 lg:grid lg:max-w-none"
          >
            {stats.map((stat) => (
              <Stat key={stat.label} stat={stat} progress={progress} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ stat, progress }: { stat: StatConfig; progress: number }) => {
  const startValue = Math.round(stat.end * progress);
  const endValue = stat.rangeEnd ? Math.round(stat.rangeEnd * progress) : undefined;
  const value = endValue !== undefined ? `${startValue}–${endValue}${stat.suffix ?? ""}` : `${startValue}${stat.suffix ?? ""}`;

  return (
    <div className="border-l border-white/[0.055] pl-5">
      <div className="font-display text-2xl text-foreground/86 tabular-nums lg:text-[1.95rem] xl:text-[2.1rem]">{value}</div>
      <div className="mt-3 text-[10px] uppercase leading-snug tracking-[0.12em] text-muted-foreground/62">{stat.label}</div>
    </div>
  );
};
