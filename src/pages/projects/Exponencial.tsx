import CaseStudyNav from "@/components/portfolio/CaseStudyNav";
import exponencialVisual from "@/assets/exponencial-event-campaign-design.png";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  { value: "Multichannel System", label: "Contenido distribuido en múltiples plataformas" },
  { value: "Event Communication", label: "Campañas y activaciones digitales" },
  { value: "Reusable Assets", label: "Producción visual escalable" },
];

const decisions = [
  "Definir una estructura visual reutilizable para campañas y contenido digital.",
  "Adaptar piezas para YouTube, eventos, redes sociales y streaming.",
  "Mantener coherencia visual entre comunicación digital y activaciones de comunidad.",
  "Diseñar assets reutilizables para acelerar producción y distribución.",
];

const tags = [
  "Campaign System",
  "Event Branding",
  "Digital Content",
  "YouTube",
  "Community Communication",
  "Multiplatform Design",
];

const Exponencial = () => {
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
                Campaign System · Event Branding · Digital Content Distribution
              </span>
              <h1 className="font-display text-5xl leading-[0.96] tracking-normal text-balance sm:text-6xl lg:text-8xl">
                Exponencial Cripto Club
              </h1>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground text-pretty lg:col-span-4 lg:text-lg">
              Case study enfocado en campañas digitales, sistemas de contenido y comunicación visual multiplataforma.
            </p>
          </div>

          <div className="reveal reveal-delay-2 mt-16 grid grid-cols-1 gap-4 border-y border-hairline py-6 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.label} className="border-b border-hairline pb-5 transition-colors duration-500 hover:border-accent/25 last:border-b-0 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-6 sm:last:border-r-0">
                <p className="font-display text-2xl text-foreground/90">{item.value}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="reveal reveal-delay-3 mt-12 overflow-hidden rounded-[1.75rem] border border-hairline bg-surface/25 p-4 shadow-soft sm:p-6 lg:p-8">
            <img
              src={exponencialVisual}
              alt="Exponencial Cripto Club event campaign design mockup"
              width={1600}
              height={1100}
              className="h-auto w-full rounded-[1.25rem] object-contain"
            />
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="container grid grid-cols-1 gap-16 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <div className="scroll-reveal sticky top-28 space-y-6">
              <span className="font-display text-7xl leading-none text-foreground/8 sm:text-8xl">01</span>
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                Sistema visual orientado a campañas digitales, activaciones de comunidad y distribución de contenido multiformato.
              </p>
              <div className="flex max-w-sm flex-wrap gap-2 pt-4">
                {tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-hairline bg-surface/35 px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          <div className="space-y-16 lg:col-span-7 lg:col-start-6">
            <CaseBlock title="Contexto" body="Exponencial Cripto Club necesitaba estructurar su comunicación visual entre múltiples plataformas, eventos y formatos digitales manteniendo consistencia y reconocimiento visual." />
            <CaseBlock title="Problema" body="La distribución de contenido y comunicación visual estaban fragmentadas entre canales, dificultando mantener coherencia entre campañas, eventos y contenido recurrente." />
            <CaseBlock title="Hipótesis" body="Un sistema visual adaptable y una estructura de contenido consistente pueden transformar comunicación dispersa en una identidad reconocible y escalable." />

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

            <CaseBlock title="Solución" body="Sistema visual y de contenido diseñado para soportar campañas recurrentes, eventos y distribución multiplataforma manteniendo consistencia visual entre formatos." />
            <CaseBlock title="Resultado" body="Comunicación visual unificada entre plataformas, campañas y eventos digitales con una estructura adaptable para producción continua." />
            <CaseBlock title="Aprendizajes" body="La consistencia visual no depende del formato; depende del sistema que conecta todas las piezas dentro de una misma narrativa visual." />

            <section className="scroll-reveal rounded-[1.75rem] border border-hairline bg-surface/25 p-8 shadow-soft transition-all duration-700 hover:-translate-y-1 hover:border-accent/25 hover:bg-surface/35 sm:p-10">
              <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Next</p>
              <Link
                to="/#work"
                className="group mt-5 inline-flex items-center gap-3 font-display text-2xl text-foreground transition-colors duration-500 hover:text-accent-soft"
              >
                Back to selected work
                <ArrowUpRight className="h-5 w-5 text-accent transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
              </Link>
              <CaseStudyNav current="exponencial" />
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

export default Exponencial;
