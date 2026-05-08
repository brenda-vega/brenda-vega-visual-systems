import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import kairos from "@/assets/kairos-research-product-visual-system.png";
import lytryum from "@/assets/lytryum-web3-education-brand-system.png";
import exponencial from "@/assets/exponencial-event-campaign-design.png";
import fidex from "@/assets/fidex-capital-fintech-ui-design.png";
import phronesis from "@/assets/phronesis-fintech-dashboard-product-design.png";

type Project = {
  index: string;
  name: string;
  eyebrow: string;
  category: string;
  slug: string;
  caseStudyPath: string;
  hasCaseStudy?: boolean;
  description: string[];
  did: string[];
  result?: string;
  tags: string[];
  image: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    index: "01",
    name: "Kairos Research",
    eyebrow: "EDITORIAL SYSTEM",
    category: "Editorial System · Newsletter Design · Information Design",
    slug: "kairos",
    caseStudyPath: "/projects/kairos",
    hasCaseStudy: true,
    description: [
      "Diseñé el sistema visual y editorial de Lupa Web3, creando estructuras reutilizables para contenido recurrente, piezas editoriales e infografías adaptadas a múltiples formatos digitales.",
    ],
    did: [
      "Sistema editorial modular",
      "Arquitectura visual de contenido",
      "Infografías financieras",
      "Diseño para newsletter",
      "Adaptación multiformato",
      "Organización de información compleja",
    ],
    result:
      "Producción editorial consistente durante 42 ediciones semanales con crecimiento sostenido de audiencia.",
    tags: ["Editorial", "Newsletter", "Information Design", "Data Visualization"],
    image: kairos,
    featured: true,
  },
  {
    index: "02",
    name: "Fidex Capital",
    eyebrow: "UI VISUAL DESIGN",
    category: "UI Visual Design · Design System · Responsive Layouts",
    slug: "fidex",
    caseStudyPath: "/projects/fidex",
    hasCaseStudy: true,
    description: [
      "Diseñé interfaces y layouts responsivos para un producto financiero digital, desarrollando componentes reutilizables y estructuras visuales orientadas a claridad y consistencia.",
    ],
    did: [
      "Responsive layouts",
      "UI systems",
      "Design systems",
      "Componentes reutilizables",
      "Jerarquía visual",
      "Design tokens",
    ],
    result:
      "Sistema adaptable para desktop y mobile manteniendo coherencia visual entre pantallas.",
    tags: ["UI Visual", "Design System", "Responsive", "Product Design"],
    image: fidex,
  },
  {
    index: "03",
    name: "Phronesis",
    eyebrow: "DASHBOARD SYSTEM",
    category: "UX/UI · Dashboard System · Information Architecture",
    slug: "phronesis",
    caseStudyPath: "/projects/phronesis",
    hasCaseStudy: true,
    description: [
      "Diseñé dashboards e interfaces orientadas a organizar información compleja mediante jerarquía visual, estructuras modulares y navegación clara.",
    ],
    did: [
      "Dashboard systems",
      "Information architecture",
      "Data hierarchy",
      "Visual states",
      "Modular layouts",
      "UI organization",
    ],
    result:
      "Interfaz preparada para escalar módulos y facilitar lectura rápida de métricas y datos.",
    tags: ["Dashboard", "UX/UI", "Information Design", "Product System"],
    image: phronesis,
  },
  {
    index: "04",
    name: "Lytryum",
    eyebrow: "CONTENT DESIGN",
    category: "Educational Visual System · Content Architecture · Digital Learning",
    slug: "lytryum",
    caseStudyPath: "/projects/lytryum",
    hasCaseStudy: true,
    description: [
      "Participé en la construcción visual de un ecosistema educativo digital, desarrollando sistemas adaptables para contenido, certificaciones y materiales de aprendizaje.",
    ],
    did: [
      "Sistemas educativos visuales",
      "Arquitectura de contenido",
      "Materiales educativos",
      "Diseño para redes sociales",
      "Adaptación multicanal",
      "Producción asistida por IA",
    ],
    result:
      "Consistencia visual entre contenido educativo, comunicación digital y assets promocionales.",
    tags: ["Education", "Content System", "Digital Learning", "AI Assisted"],
    image: lytryum,
  },
  {
    index: "05",
    name: "Exponencial Cripto Club",
    eyebrow: "CAMPAIGN DESIGN",
    category: "Campaign System · Event Branding · Digital Content",
    slug: "exponencial",
    caseStudyPath: "/projects/exponencial",
    hasCaseStudy: true,
    description: [
      "Diseñé sistemas visuales para campañas digitales, eventos y contenido audiovisual adaptado a múltiples plataformas y formatos de comunicación.",
    ],
    did: [
      "Campaign assets",
      "Event branding",
      "Streaming visuals",
      "YouTube content",
      "Comunicación multiplataforma",
      "Adaptación de contenido digital",
    ],
    result:
      "Sistema visual consistente para campañas, eventos y contenido recurrente en distintos canales.",
    tags: ["Campaign", "Event Branding", "Digital Content", "YouTube"],
    image: exponencial,
  },
];

export const Work = () => {
  return (
    <section id="work" className="relative overflow-hidden border-t border-hairline py-32 lg:py-44">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-work-radial" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grain opacity-20" />

      <div className="container">
        <div className="mb-20 border-b border-hairline pb-12 lg:mb-24">
          <div className="mb-10 flex items-center justify-between text-xs uppercase tracking-[0.22em] text-muted-foreground">
            <span className="reveal inline-flex items-center gap-3">
              <span className="h-px w-10 bg-accent/60" />
              03 / Selected Projects
            </span>
            <span className="hidden lg:inline">Brand systems · Editorial · Digital campaigns</span>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <h2 className="reveal reveal-delay-1 max-w-4xl font-display text-4xl leading-[1.02] tracking-normal text-balance sm:text-5xl lg:col-span-8 lg:text-7xl">
              Selected Work
            </h2>
            <p className="reveal reveal-delay-2 max-w-md text-sm leading-relaxed text-muted-foreground lg:col-span-3 lg:col-start-10">
              Sistemas visuales, campañas y contenido digital desarrollados para marcas con necesidades de coherencia, velocidad y calidad visual.
            </p>
          </div>
        </div>

        <div className="space-y-10 lg:space-y-16">
          {projects.map((project, i) => (
            <ProjectCase
              key={project.name}
              project={project}
              reverse={i % 2 === 1}
              compact={!project.featured}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCase = ({
  project,
  reverse,
  compact,
}: {
  project: Project;
  reverse?: boolean;
  compact?: boolean;
}) => {
  return (
    <article
      className={`case-study group reveal relative overflow-hidden border border-hairline bg-surface/25 ${
        compact ? "rounded-[1.5rem]" : "rounded-[1.75rem]"
      }`}
    >
      <div className={`grid grid-cols-1 md:grid-cols-12 ${compact ? "md:min-h-[430px] lg:min-h-[500px]" : "md:min-h-[500px] lg:min-h-[610px]"}`}>
        <div className={`relative overflow-hidden ${compact ? "md:col-span-7" : "md:col-span-8"} ${reverse ? "md:order-2" : ""}`}>
          <div className={`relative h-full bg-background/35 ${compact ? "min-h-[220px] sm:min-h-[280px] md:min-h-[360px]" : "min-h-[240px] sm:min-h-[310px] md:min-h-[420px]"}`}>
            <img
              src={project.image}
              alt={`${project.name} / ${project.category}`}
              loading="lazy"
              width={1400}
              height={980}
              className="case-study-image h-full w-full object-contain p-3 sm:p-5 md:p-6 lg:-translate-y-6 lg:p-8"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-background/0 to-background/18 opacity-70 transition-opacity duration-700 group-hover:opacity-90" />
            <div className="absolute inset-0 bg-accent/0 mix-blend-soft-light transition-colors duration-700 group-hover:bg-accent/10" />
            <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-background/45 px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-foreground/80 backdrop-blur-xl">
              {project.eyebrow}
            </div>
          </div>
        </div>

        <div
          className={`flex flex-col justify-between gap-8 p-6 sm:p-7 md:p-8 lg:gap-12 lg:p-12 ${
            compact ? "md:col-span-5" : "md:col-span-4"
          } ${reverse ? "md:order-1" : ""}`}
        >
          <div className="space-y-6 md:space-y-7 lg:space-y-8">
            <div className="flex items-start justify-between gap-6">
              <span className="font-display text-[1.7rem] leading-none text-foreground/[0.055] sm:text-4xl md:text-5xl md:text-foreground/[0.065] lg:text-6xl lg:text-foreground/[0.075]">{project.index}</span>
            </div>

            <div className="space-y-3.5 md:space-y-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-accent sm:text-[11px] md:tracking-[0.22em]">{project.category}</p>
              <h3 className="font-display text-2xl leading-[1.08] tracking-normal text-foreground text-pretty sm:text-3xl md:text-4xl md:text-balance lg:text-5xl">
                {project.name}
              </h3>
              <div className="max-w-sm space-y-3 text-sm leading-relaxed text-muted-foreground text-pretty">
                {project.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-5 md:space-y-6">
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-hairline bg-background/35 px-2.5 py-1 text-[10px] uppercase tracking-[0.11em] text-muted-foreground transition-colors duration-500 group-hover:border-accent/20 group-hover:text-foreground/78 sm:px-3 sm:text-[11px] sm:tracking-[0.12em]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {project.hasCaseStudy ? (
                <Link
                  to={project.caseStudyPath}
                  aria-label={`View case study for ${project.name}`}
                  className="group/case inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-foreground/70 outline-none transition-colors duration-500 hover:text-foreground focus-visible:text-foreground focus-visible:ring-1 focus-visible:ring-accent/50 focus-visible:ring-offset-4 focus-visible:ring-offset-background"
                >
                  <span className="link-underline">View Case Study</span>
                  <ArrowUpRight
                    className="h-4 w-4 text-accent/80 transition-transform duration-500 group-hover/case:translate-x-1 group-hover/case:-translate-y-1 group-focus-visible/case:translate-x-1 group-focus-visible/case:-translate-y-1"
                    aria-hidden="true"
                  />
                </Link>
              ) : (
                <button
                  type="button"
                  aria-disabled="true"
                  aria-label={`View case study for ${project.name} - coming soon`}
                  data-case-study-path={project.caseStudyPath}
                  className="group/case inline-flex cursor-default items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-foreground/38 outline-none transition-colors duration-500"
                >
                  <span>View Case Study</span>
                  <ArrowUpRight className="h-4 w-4 text-accent/35" aria-hidden="true" />
                </button>
              )}

            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
