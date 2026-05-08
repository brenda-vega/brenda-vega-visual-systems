import { CaseMetric } from "@/components/portfolio/CaseMetric";
import CaseStudyNav from "@/components/portfolio/CaseStudyNav";
import phronesisHero from "@/assets/phronesis-fintech-dashboard-product-design.png";
import phronesisSystem from "@/assets/phronesis-dashboard-ui-system-dark-mode.png";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  { value: "Dashboard System", label: "Arquitectura modular" },
  { value: "Information Design", label: "Jerarquía visual clara" },
  { value: "Responsive UI", label: "Desktop · Tablet · Mobile" },
];

const decisions = [
  "Definir jerarquías visuales claras para métricas y módulos principales.",
  "Diseñar estructuras dashboard enfocadas en lectura rápida y claridad operativa.",
  "Implementar componentes reutilizables y layouts modulares.",
  "Mantener consistencia visual entre navegación, tablas, métricas y estados.",
];

const tags = [
  "Dashboard",
  "Product UI",
  "Information Design",
  "UX Systems",
  "Data Interface",
  "Responsive UI",
];

const Phronesis = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-hairline py-24 sm:py-28 lg:py-36">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-work-radial" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grain opacity-20" />

        <div className="container">
          <Link
            to="/#work"
            className="group reveal mb-16 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted-foreground transition-all duration-500 hover:-translate-y-0.5 hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 text-accent transition-transform duration-500 group-hover:-translate-x-1" aria-hidden="true" />
            Back to Work
          </Link>

          <div className="reveal reveal-delay-1 grid grid-cols-1 gap-9 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="space-y-6 lg:col-span-8">
              <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                <span className="h-px w-10 bg-accent/60" />
                Product UI · Dashboard System · Information Architecture
              </span>
              <h1 className="font-display text-5xl leading-[0.96] tracking-normal text-balance sm:text-6xl lg:text-8xl">
                Phronesis
              </h1>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground text-pretty lg:col-span-4 lg:text-lg">
              Case study enfocado en dashboards, organización visual de información y sistemas UI para productos digitales.
            </p>
          </div>

          <div className="reveal reveal-delay-2 mt-14 grid grid-cols-1 gap-4 border-y border-hairline py-5 sm:grid-cols-3 lg:mt-16 lg:py-7">
            {highlights.map((item) => (
              <div key={item.label} className="border-b border-hairline pb-5 transition-colors duration-500 hover:border-accent/25 last:border-b-0 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-6 sm:last:border-r-0">
                <CaseMetric value={item.value} />
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground/82">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="reveal reveal-delay-3 mt-14 overflow-hidden rounded-[1.75rem] border border-hairline bg-surface/20 p-3 shadow-soft sm:p-5 lg:mt-16 lg:p-7">
            <img
              src={phronesisHero}
              alt="Phronesis fintech dashboard product design mockup"
              width={1600}
              height={1100}
              className="h-auto w-full rounded-[1.15rem] object-contain"
            />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-24 lg:py-36">
        <div className="container grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-12 lg:gap-20">
          <aside className="lg:col-span-4">
            <div className="scroll-reveal sticky top-28 space-y-4 sm:space-y-6 lg:top-32 lg:space-y-7">
              <span className="hidden font-display text-7xl leading-none text-foreground/8 sm:block sm:text-8xl">01</span>
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                Sistema visual diseñado para simplificar información compleja mediante dashboards claros, modulares y escalables.
              </p>
              <div className="flex max-w-sm flex-wrap gap-2 pt-2 sm:pt-5">
                {tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-hairline bg-surface/28 px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-muted-foreground/86">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          <div className="space-y-10 sm:space-y-14 lg:col-span-7 lg:col-start-6 lg:space-y-20">
            <CaseBlock title="Contexto" body="Phronesis requería una interfaz capaz de organizar grandes volúmenes de información financiera y operativa sin generar sobrecarga visual ni confusión para el usuario." />
            <CaseBlock title="Problema" body="La cantidad de datos, métricas y categorías dificultaba lectura rápida, navegación y jerarquización efectiva dentro del producto." />
            <CaseBlock title="Hipótesis" body="Un dashboard modular con jerarquía clara, componentes reutilizables y organización visual consistente puede mejorar comprensión, navegación y escalabilidad del sistema." />

            <section className="scroll-reveal space-y-4 border-t border-hairline pt-7 transition-colors duration-500 hover:border-accent/25 lg:space-y-5 lg:pt-10">
              <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground/88">Decisiones clave</p>
              <ol className="grid gap-4 lg:gap-5">
                {decisions.map((decision, index) => (
                  <li key={decision} className="grid grid-cols-[2.5rem_1fr] gap-4 text-sm leading-relaxed text-foreground/80">
                    <span className="font-display text-foreground/18">{String(index + 1).padStart(2, "0")}</span>
                    <span>{decision}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section className="scroll-reveal overflow-hidden rounded-[1.75rem] border border-hairline bg-surface/20 p-3 shadow-soft transition-all duration-700 hover:-translate-y-1 hover:border-accent/25 hover:bg-surface/32 sm:p-5 lg:p-7">
              <div className="mb-6 flex items-center justify-between gap-6 border-b border-hairline pb-5">
                <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground/88">Supporting visual</p>
                <span className="text-xs text-muted-foreground/58">UI system detail</span>
              </div>
              <img
                src={phronesisSystem}
                alt="Phronesis dark mode dashboard UI system"
                width={1600}
                height={1100}
                className="h-auto w-full rounded-[1.15rem] object-contain"
              />
            </section>

            <CaseBlock title="Solución" body="Diseño de un sistema dashboard modular enfocado en claridad visual, navegación intuitiva y organización eficiente de información compleja dentro de una interfaz escalable." />
            <CaseBlock title="Resultado" body="Interfaz estructurada para facilitar lectura rápida, exploración de datos y expansión futura del producto sin perder consistencia visual." />
            <CaseBlock title="Aprendizajes" body="En productos basados en información, la jerarquía visual y la claridad operativa son más importantes que la densidad visual. Menos ruido genera mejores decisiones." />

            <section className="scroll-reveal rounded-[1.75rem] border border-hairline bg-surface/22 p-7 shadow-soft transition-all duration-700 hover:-translate-y-1 hover:border-accent/25 hover:bg-surface/32 sm:p-9 lg:p-10">
              <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground/88">Next</p>
              <Link
                to="/#work"
                className="group mt-6 inline-flex items-center gap-3 font-display text-2xl text-foreground transition-colors duration-500 hover:text-accent-soft"
              >
                Back to selected work
                <ArrowUpRight className="h-5 w-5 text-accent transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
              </Link>
              <CaseStudyNav current="phronesis" />
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};

const CaseBlock = ({ title, body }: { title: string; body: string }) => (
  <section className="scroll-reveal space-y-4 border-t border-hairline pt-7 transition-colors duration-500 hover:border-accent/25 lg:space-y-5 lg:pt-10">
    <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground/88">{title}</p>
    <p className="text-base leading-relaxed text-foreground/76 text-pretty lg:text-[1.08rem]">{body}</p>
  </section>
);

export default Phronesis;
