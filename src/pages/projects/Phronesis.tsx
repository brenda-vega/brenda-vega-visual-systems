import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const metadata = [
  { label: "Año", value: `2024 — 2025` },
  { label: "Rol", value: `UX/UI Designer` },
  { label: "Herramientas", value: `Figma, FigJam, Notion` },
];

const decisions = [
  `Definir zonas principales: métricas clave, oportunidades y novedades.`,
  `Diseñar una tabla maestra con estados visuales claros.`,
  `Crear sistema de tags por red para filtrar información sin fricción.`,
  `Priorizar lectura rápida antes que densidad visual.`
];

const Phronesis = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-hairline py-28 lg:py-36">
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

          <div className="reveal reveal-delay-1 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
            <div className="space-y-6 lg:col-span-8">
              <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                <span className="h-px w-10 bg-accent/60" />
                UX/UI · Dashboard System · Information Architecture
              </span>
              <h1 className="font-display text-5xl leading-[0.96] tracking-normal text-balance sm:text-6xl lg:text-8xl">
                Phronesis
              </h1>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground text-pretty lg:col-span-4 lg:text-lg">
              Diseño de dashboards e interfaces para estructurar información compleja.
            </p>
          </div>

          <div className="reveal reveal-delay-2 mt-16 grid grid-cols-1 gap-4 border-y border-hairline py-6 sm:grid-cols-3">
            {metadata.map((item) => (
              <div key={item.label} className="border-b border-hairline pb-5 transition-colors duration-500 hover:border-accent/25 last:border-b-0 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-6 sm:last:border-r-0">
                <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{item.label}</p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/82">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="container grid grid-cols-1 gap-16 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <div className="scroll-reveal sticky top-28 space-y-5">
              <span className="font-display text-7xl leading-none text-foreground/8 sm:text-8xl">01</span>
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                Case study structure focused on context, decisions and system-level design thinking.
              </p>
            </div>
          </aside>

          <div className="space-y-16 lg:col-span-7 lg:col-start-6">
            <CaseBlock title="Contexto" body={`Phronesis necesitaba una interfaz que ayudara a usuarios a navegar información financiera, métricas y oportunidades sin sobrecarga cognitiva.`} />
            <CaseBlock title="Problema" body={`Había demasiados datos sin jerarquía clara, lo que dificultaba distinguir información prioritaria, estados relevantes y elementos accionables.`} />
            <CaseBlock title="Hipótesis" body={`Un dashboard con jerarquía visual clara, métricas clave arriba y filtros simples puede mejorar la lectura rápida y la toma de decisiones.`} />

            <section className="scroll-reveal space-y-5 border-t border-hairline pt-8 transition-colors duration-500 hover:border-accent/25">
              <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Decisiones clave</p>
              <ol className="grid gap-4">
                {decisions.map((decision, index) => (
                  <li key={decision} className="grid grid-cols-[2.5rem_1fr] gap-4 text-sm leading-relaxed text-foreground/82">
                    <span className="font-display text-foreground/24">{String(index + 1).padStart(2, "0")}</span>
                    <span>{decision}</span>
                  </li>
                ))}
              </ol>
            </section>

            <CaseBlock title="Solución" body={`Dashboard modular en tema oscuro, enfocado en jerarquía visual, comparación entre activos y lectura clara de información compleja.`} />
            <CaseBlock title="Resultado" body={`Interfaz base preparada para escalar nuevos módulos y facilitar comprensión rápida de métricas y datos.`} />
            <CaseBlock title="Aprendizaje" body={`En dashboards, la jerarquía gana siempre a la densidad. Menos módulos bien priorizados funcionan mejor que muchas cards compitiendo por atención.`} />

            <section className="scroll-reveal rounded-[1.75rem] border border-hairline bg-surface/25 p-8 shadow-soft transition-all duration-700 hover:-translate-y-1 hover:border-accent/25 hover:bg-surface/35 sm:p-10">
              <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Next</p>
              <Link
                to="/#work"
                className="group mt-5 inline-flex items-center gap-3 font-display text-2xl text-foreground transition-colors duration-500 hover:text-accent-soft"
              >
                Back to selected work
                <ArrowUpRight className="h-5 w-5 text-accent transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
              </Link>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};

const CaseBlock = ({ title, body }: { title: string; body: string }) => (
  <section className="scroll-reveal space-y-5 border-t border-hairline pt-8 transition-colors duration-500 hover:border-accent/25">
    <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{title}</p>
    <p className="text-base leading-relaxed text-foreground/78 text-pretty lg:text-lg">{body}</p>
  </section>
);

export default Phronesis;
