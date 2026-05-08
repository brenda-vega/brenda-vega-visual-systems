import { CaseMetric } from "@/components/portfolio/CaseMetric";
import CaseStudyNav from "@/components/portfolio/CaseStudyNav";
import fidexVisual from "@/assets/fidex-capital-fintech-ui-design.png";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  { value: "Responsive", label: "Desktop · Tablet · Mobile" },
  { value: "Design System", label: "Componentes reutilizables" },
  { value: "UI Visual", label: "Jerarquía · Claridad · Consistencia" },
];

const decisions = [
  "Definir una base visual con color, tipografía, espaciado y jerarquía.",
  "Diseñar componentes reutilizables para navegación, hero, cards y CTAs.",
  "Crear layouts responsivos para páginas clave del producto.",
  "Mantener coherencia visual entre experiencia desktop y mobile.",
];

const tags = [
  "UI Visual",
  "Design System",
  "Responsive Design",
  "Product Design",
  "Fintech",
  "Visual Hierarchy",
];

const Fidex = () => {
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
                UI Visual Design · Design System · Responsive Layouts
              </span>
              <h1 className="font-display text-5xl leading-[0.96] tracking-normal text-balance sm:text-6xl lg:text-8xl">
                Fidex Capital
              </h1>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground text-pretty lg:col-span-4 lg:text-lg">
              Case study enfocado en diseño UI visual, sistemas responsivos y componentes reutilizables para producto financiero digital.
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
              src={fidexVisual}
              alt="Fidex Capital fintech UI design mockup"
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
                Sistema visual diseñado para comunicar confianza, claridad y consistencia en una plataforma financiera digital.
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
            <CaseBlock title="Contexto" body="Fidex Capital necesitaba una presencia digital seria, confiable y escalable para comunicar un producto financiero con claridad en distintos dispositivos." />
            <CaseBlock title="Problema" body="La comunicación visual y las interfaces requerían mayor consistencia para transmitir confianza, facilitar navegación y adaptarse correctamente a desktop y mobile." />
            <CaseBlock title="Hipótesis" body="Un sistema visual con componentes reutilizables, jerarquía clara y layouts responsivos puede mejorar la percepción del producto y facilitar su crecimiento digital." />

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

            <CaseBlock title="Solución" body="Diseño de un sistema UI visual con componentes reutilizables, estructura responsiva y jerarquía clara para comunicar valor, confianza y navegación sencilla." />
            <CaseBlock title="Resultado" body="Sistema adaptable para desktop y mobile, con mayor consistencia visual entre pantallas y una base preparada para escalar nuevas vistas." />
            <CaseBlock title="Aprendizajes" body="Un design system no es solo una guía visual; es una estructura para tomar decisiones más rápido y mantener coherencia en la experiencia digital." />

            <section className="scroll-reveal rounded-[1.75rem] border border-hairline bg-surface/22 p-7 shadow-soft transition-all duration-700 hover:-translate-y-1 hover:border-accent/25 hover:bg-surface/32 sm:p-9 lg:p-10">
              <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground/88">Next</p>
              <Link
                to="/#work"
                className="group mt-6 inline-flex items-center gap-3 font-display text-2xl text-foreground transition-colors duration-500 hover:text-accent-soft"
              >
                Back to selected work
                <ArrowUpRight className="h-5 w-5 text-accent transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
              </Link>
              <CaseStudyNav current="fidex" />
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

export default Fidex;
