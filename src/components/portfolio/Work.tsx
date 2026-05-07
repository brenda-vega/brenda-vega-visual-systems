import { ArrowUpRight } from "lucide-react";
import kairos from "@/assets/kairos-research-product-visual-system.png";
import lytryum from "@/assets/lytryum-web3-education-brand-system.png";
import exponencial from "@/assets/exponencial-event-campaign-design.png";
import fidex from "@/assets/fidex-capital-fintech-ui-design.png";

type Project = {
  index: string;
  name: string;
  eyebrow: string;
  category: string;
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
    category: "Editorial System · Newsletter Design · Data Visualization",
    description: [
      "Diseñé el sistema visual y editorial de Lupa Web3, un newsletter especializado en análisis de mercados cripto, desarrollando desde la arquitectura visual del contenido hasta piezas editoriales, infografías y adaptación multicanal.",
    ],
    did: [
      "Sistema visual editorial",
      "Infografías financieras",
      "Diseño para newsletter",
      "Adaptación multicanal",
      "Organización visual de información compleja",
      "Integración IA en procesos creativos",
    ],
    result:
      "El newsletter creció de 230 a 528 suscriptores manteniendo un open rate sostenido de 30–35% durante 42 semanas.",
    tags: ["Editorial", "Newsletter", "Data Viz", "AI"],
    image: kairos,
    featured: true,
  },
  {
    index: "02",
    name: "Fidex Capital",
    eyebrow: "UI VISUAL DESIGN",
    category: "UI Visual Design · Design System · Responsive Layouts",
    description: [
      "Diseñé páginas responsivas, layouts adaptativos y componentes visuales para un producto financiero digital, desarrollando un sistema de diseño estructurado en Figma con componentes reutilizables, estados y design tokens.",
    ],
    did: [
      "Landing pages",
      "Responsive layouts",
      "Design systems",
      "Componentes reutilizables",
      "Jerarquía visual",
      "Design tokens",
    ],
    tags: ["Figma", "Design System", "UI Visual", "Responsive"],
    image: fidex,
  },
  {
    index: "03",
    name: "Lytryum",
    eyebrow: "CONTENT DESIGN",
    category: "Content Design · Educational Visual Systems",
    description: [
      "Participé en la construcción visual de un sistema digital de contenido y certificaciones estructurado por categorías y rareza, utilizando IA para optimizar producción y exploración gráfica.",
      "También desarrollé materiales educativos, contenido para redes sociales y piezas promocionales orientadas a mantener consistencia visual y adaptación multiformato.",
    ],
    did: [
      "Sistemas visuales educativos",
      "Diseño para redes sociales",
      "Thumbnails & campaign assets",
      "Producción visual asistida por IA",
      "Adaptación multicanal",
    ],
    tags: ["Content", "Education", "Social", "AI"],
    image: lytryum,
  },
  {
    index: "04",
    name: "Exponencial Cripto Club",
    eyebrow: "CAMPAIGN DESIGN",
    category: "Campaign Design · YouTube Assets · Event Branding",
    description: [
      "Diseñé contenido visual para campañas digitales, YouTube y eventos relacionados con tecnología y educación Web3, adaptando piezas para múltiples formatos y plataformas de comunicación.",
    ],
    did: [
      "Diseño promocional",
      "Materiales para streaming y YouTube",
      "Branding para eventos",
      "Comunicación visual multiplataforma",
      "Assets para campañas digitales",
    ],
    tags: ["Campaign", "YouTube", "Event Branding", "Web3"],
    image: exponencial,
  },
];

export const Work = () => {
  return (
    <section id="work" className="relative overflow-hidden border-t border-hairline py-32 lg:py-44">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-work-radial" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grain opacity-20" />

      <div className="container">
        <div className="mb-20 grid grid-cols-1 gap-10 border-b border-hairline pb-12 lg:mb-24 lg:grid-cols-12 lg:items-end">
          <div className="space-y-5 lg:col-span-8">
            <span className="reveal inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
              <span className="h-px w-10 bg-accent/60" />
              03 / Selected Projects
            </span>
            <h2 className="reveal reveal-delay-1 max-w-4xl font-display text-4xl leading-[1.02] tracking-normal text-balance sm:text-5xl lg:text-7xl">
              Selected Work
            </h2>
          </div>
          <p className="reveal reveal-delay-2 max-w-md text-sm leading-relaxed text-muted-foreground lg:col-span-3 lg:col-start-10">
            Sistemas visuales, campañas y contenido digital desarrollados para marcas con necesidades de coherencia, velocidad y calidad visual.
          </p>
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
      <div className={`grid grid-cols-1 lg:grid-cols-12 ${compact ? "lg:min-h-[520px]" : "lg:min-h-[640px]"}`}>
        <div className={`relative overflow-hidden ${compact ? "lg:col-span-7" : "lg:col-span-8"} ${reverse ? "lg:order-2" : ""}`}>
          <div className={`relative h-full bg-background/35 ${compact ? "min-h-[360px]" : "min-h-[460px]"}`}>
            <img
              src={project.image}
              alt={`${project.name} / ${project.category}`}
              loading="lazy"
              width={1400}
              height={980}
              className="case-study-image h-full w-full object-contain p-4 sm:p-6 lg:p-8"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-background/0 to-background/18 opacity-70 transition-opacity duration-700 group-hover:opacity-90" />
            <div className="absolute inset-0 bg-accent/0 mix-blend-soft-light transition-colors duration-700 group-hover:bg-accent/10" />
            <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-background/45 px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-foreground/80 backdrop-blur-xl">
              {project.eyebrow}
            </div>
          </div>
        </div>

        <div
          className={`flex flex-col justify-between gap-12 p-7 sm:p-9 lg:p-12 ${
            compact ? "lg:col-span-5" : "lg:col-span-4"
          } ${reverse ? "lg:order-1" : ""}`}
        >
          <div className="space-y-8">
            <div className="flex items-start justify-between gap-6">
              <span className="font-display text-5xl leading-none text-foreground/10 sm:text-6xl">{project.index}</span>
              <ArrowUpRight className="mt-1 h-5 w-5 text-muted-foreground transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent-soft" />
            </div>

            <div className="space-y-4">
              <p className="text-[11px] uppercase tracking-[0.22em] text-accent">{project.category}</p>
              <h3 className="font-display text-3xl leading-tight tracking-normal text-foreground text-balance sm:text-4xl lg:text-5xl">
                {project.name}
              </h3>
              <div className="max-w-md space-y-3 text-sm leading-relaxed text-muted-foreground text-pretty">
                {project.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-7">
            <div className="space-y-3 border-t border-hairline pt-6">
              <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Desarrollo</p>
              <ul className="grid gap-2 text-sm leading-relaxed text-foreground/84">
                {project.did.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2.5 h-px w-4 shrink-0 bg-accent/70" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {project.result ? (
              <p className="border-l border-accent/40 pl-4 text-sm leading-relaxed text-foreground/72">{project.result}</p>
            ) : null}

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-hairline bg-background/35 px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-muted-foreground transition-colors duration-500 group-hover:border-accent/20 group-hover:text-foreground/78"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
