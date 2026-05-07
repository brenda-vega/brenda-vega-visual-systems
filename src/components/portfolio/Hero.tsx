import heroVisual from "@/assets/brenda-vega-editorial-portrait.png";
import { ArrowUpRight, Download } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type StatConfig = {
  end: number;
  label: string;
  suffix?: string;
  rangeEnd?: number;
};

const stats: StatConfig[] = [
  { end: 4, label: "√°reas de dise√±o" },
  { end: 42, label: "semanas editoriales" },
  { end: 30, rangeEnd: 35, suffix: "%", label: "open rate sostenido" },
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
            Visual Designer ¬∑ Branding ¬∑ Editorial ¬∑ Digital
          </div>

          <h1 className="reveal reveal-delay-1 max-w-4xl font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.94] tracking-normal text-balance">
            <span className="text-gradient">Visual Designer</span>
            <br />
            <span className="text-foreground">para agencias </span>
            <span className="italic font-light text-accent">creativas</span>
          </h1>

          <div className="reveal reveal-delay-2 max-w-2xl space-y-5 text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty">
            <p>
              Dise√±o sistemas visuales, campa√±as y contenido digital para marcas que necesitan
              mantener coherencia, velocidad y calidad visual en m√∫ltiples canales.
            </p>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-foreground/68">
              Mi perfil combina branding, dise√±o editorial, social media design y dise√±o visual
              para productos digitales, permiti√©ndome trabajar tanto en campa√±as creativas como
              en sistemas gr√°ficos estructurados para clientes con necesidades cambiantes.
            </p>
          </div>

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

          <div ref={statsRef} className="reveal reveal-delay-4 grid max-w-lg grid-cols-3 gap-4 border-t border-hairline pt-8">
            {stats.map((stat) => (
              <Stat key={stat.label} stat={stat} progress={progress} />
            ))}
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
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Visual system ¬∑ v3
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

const Stat = ({ stat, progress }: { stat: StatConfig; progress: number }) => {
  const startValue = Math.round(stat.end * progress);
  const endValue = stat.rangeEnd ? Math.round(stat.rangeEnd * progress) : undefined;
  const value = endValue !== undefined ? `${startValue}‚Äì${endValue}${stat.suffix ?? ""}` : `${startValue}${stat.suffix ?? ""}`;

  return (
    <div className="pt-5">
      <div className="font-display text-2xl sm:text-3xl text-foreground tabular-nums">{value}</div>
      <div className="mt-1.5 text-xs leading-snug text-muted-foreground">{stat.label}</div>
    </div>
  );
};
