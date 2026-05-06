import { ArrowUpRight } from "lucide-react";
import kairos from "@/assets/project-kairos.jpg";
import lytryum from "@/assets/project-lytryum.jpg";
import exponencial from "@/assets/project-exponencial.jpg";
import amplify from "@/assets/project-amplify.jpg";

type Project = {
  index: string;
  name: string;
  category: string;
  description: string;
  did: string[];
  result: string;
  tags: string[];
  image: string;
};

const projects: Project[] = [
  {
    index: "01",
    name: "Kairos Research",
    category: "Visual Systems · Editorial Design · Digital Communication",
    description:
      "Desarrollo de sistemas visuales y contenido editorial para newsletter, redes sociales y productos digitales enfocados en comunicación tecnológica y análisis digital.",
    did: [
      "Diseño de sistemas visuales editoriales",
      "Infografías y comunicación visual",
      "Contenido multiplataforma",
      "Exploración UI visual y dashboards",
      "Integración de IA en workflows creativos",
    ],
    result:
      "Fortalecimiento de consistencia visual y estructuración de contenido digital para comunicación multicanal.",
    tags: ["Figma", "Notion", "Beehiiv", "GA4", "AI"],
    image: kairos,
  },
  {
    index: "02",
    name: "Lytryum",
    category: "Content & Visual Design · Education · Digital Systems",
    description:
      "Diseño de contenido visual y materiales educativos para plataforma enfocada en educación digital y comunicación tecnológica.",
    did: [
      "Diseño de contenido para redes sociales",
      "Sistemas visuales para comunicación educativa",
      "Desarrollo visual de colección NFT",
      "Adaptación visual multiformato",
    ],
    result:
      "Construcción de una identidad visual digital consistente orientada a educación y comunidad.",
    tags: ["Branding", "Content System", "NFT", "Figma"],
    image: lytryum,
  },
  {
    index: "03",
    name: "Exponencial Cripto Club",
    category: "Branding · Community Visuals · Marketing Design",
    description:
      "Desarrollo de contenido visual y branding digital para eventos, comunicación en redes sociales y activación de comunidad.",
    did: [
      "Diseño para campañas digitales",
      "Thumbnails y visuales para YouTube",
      "Materiales promocionales",
      "Branding y activaciones visuales",
    ],
    result:
      "Fortalecimiento de presencia digital y consistencia visual para comunicación de comunidad.",
    tags: ["Adobe CS", "Meta Ads", "CapCut", "Branding"],
    image: exponencial,
  },
  {
    index: "04",
    name: "AMPLIFY OS",
    category: "UI Visual Design · Systems Thinking · Digital Product Exploration",
    description:
      "Exploración personal enfocada en diseño de sistemas digitales, dashboards y estructuración visual de procesos para negocios digitales.",
    did: [
      "Arquitectura visual",
      "Diseño de dashboards",
      "Sistemas de navegación",
      "Exploración de automatización e IA",
      "Estructuración de información compleja",
    ],
    result:
      "Desarrollo de un sistema visual orientado a claridad, organización y toma de decisiones.",
    tags: ["UI Design", "Systems", "Automation", "AI"],
    image: amplify,
  },
];

export const Work = () => {
  return (
    <section id="work" className="relative py-32 lg:py-40 border-t border-hairline">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-20">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">03 · Selected Work</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight max-w-3xl text-balance">
              Proyectos donde branding, sistemas y producto se cruzan.
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            Selección curada de colaboraciones recientes en tecnología,
            educación digital y comunidades.
          </p>
        </div>

        <div className="space-y-8 lg:space-y-12">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, reverse }: { project: Project; reverse?: boolean }) => {
  return (
    <article className="group relative rounded-3xl border border-hairline bg-surface/40 hover-lift hover:border-accent/30 hover:bg-surface/70 overflow-hidden">
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-0`}>
        <div className={`lg:col-span-7 relative ${reverse ? "lg:order-2" : ""}`}>
          <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden lg:rounded-none">
            <div className="absolute inset-0 bg-gradient-accent opacity-30 -z-0" />
            <img
              src={project.image}
              alt={`${project.name} — ${project.category}`}
              loading="lazy"
              width={1280}
              height={896}
              className="relative h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>
        </div>

        <div className={`lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between gap-10 ${reverse ? "lg:order-1" : ""}`}>
          <div className="space-y-6">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span className="tracking-[0.2em]">{project.index}</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
            <div className="space-y-3">
              <h3 className="font-display text-3xl lg:text-4xl text-foreground tracking-tight">{project.name}</h3>
              <p className="text-xs uppercase tracking-[0.18em] text-accent">{project.category}</p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed text-pretty">{project.description}</p>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-3">Qué hice</p>
              <ul className="space-y-1.5 text-sm text-foreground/90">
                {project.did.map((d) => (
                  <li key={d} className="flex gap-2.5">
                    <span className="mt-2 h-px w-3 bg-accent shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Resultado</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{project.result}</p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-hairline">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-hairline bg-background/40 px-3 py-1 text-[11px] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
