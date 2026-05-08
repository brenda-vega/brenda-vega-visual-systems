import adobeIcon from "@/assets/adobe.png";
import canvaIcon from "@/assets/canva.png";
import capcutIcon from "@/assets/capcut.png";
import claudeIcon from "@/assets/claude.png";
import figmaIcon from "@/assets/figma.png";
import framerIcon from "@/assets/framer.png";
import miroIcon from "@/assets/miro.png";
import notionIcon from "@/assets/notion.png";
import webflowIcon from "@/assets/webflow.png";
import { Palette, Sparkles, Type } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type SkillGroup = {
  title: string;
  items: string[];
};

type Tool = {
  name: string;
  icon: string;
};

const groups: SkillGroup[] = [
  {
    title: "Diseño Visual",
    items: ["Branding", "Dirección visual", "Diseño editorial", "Storytelling visual", "Sistemas visuales", "Social media design"],
  },
  {
    title: "Diseño Digital",
    items: ["UI visual", "Responsive layouts", "Diseño para productos digitales", "Arquitectura visual", "Adaptación multiformato"],
  },
];

const tools: Tool[] = [
  { name: "Adobe", icon: adobeIcon },
  { name: "Figma", icon: figmaIcon },
  { name: "Framer", icon: framerIcon },
  { name: "Webflow", icon: webflowIcon },
  { name: "Canva", icon: canvaIcon },
  { name: "CapCut", icon: capcutIcon },
  { name: "Notion", icon: notionIcon },
  { name: "Miro", icon: miroIcon },
  { name: "Claude", icon: claudeIcon },
];

const groupIcons: Record<string, LucideIcon> = {
  "Diseño Visual": Palette,
  "Diseño Digital": Type,
};

export const Skills = () => {
  return (
    <section id="skills" className="scroll-reveal relative overflow-hidden border-t border-hairline py-32 lg:py-40">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-gradient-to-b from-white/[0.035] to-transparent" />
      <div className="container">
        <div className="mb-16 flex items-center justify-between border-b border-hairline pb-5 text-xs uppercase tracking-[0.22em] text-muted-foreground">
          <span>05 · Capabilities</span>
          <span className="hidden sm:inline">Visual design · Digital systems · Tools</span>
        </div>

        <div className="mb-20 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <h2 className="max-w-4xl font-display text-5xl leading-[0.96] tracking-normal text-balance sm:text-6xl lg:col-span-8 lg:text-7xl">
            Skills & tools for visual systems.
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground lg:col-span-3 lg:col-start-10">
            Herramientas de diseño, producción y colaboración para crear piezas visuales consistentes entre formatos y canales.
          </p>
        </div>

        <div className="mb-20 border-y border-hairline py-8">
          <div className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            <span className="grid h-8 w-8 place-items-center rounded-full border border-hairline bg-surface/45 text-accent/90">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" strokeWidth={1.7} />
            </span>
            Herramientas
          </div>

          <div className="grid grid-cols-3 gap-4 sm:grid-cols-5 lg:grid-cols-9">
            {tools.map((tool, index) => (
              <div
                key={tool.name}
                className="group/tool reveal relative flex aspect-square items-center justify-center rounded-[1.25rem] border border-hairline bg-surface/35 p-3 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-accent/25 hover:bg-surface-elevated"
                style={{ animationDelay: `${0.04 * index}s` }}
              >
                <img
                  src={tool.icon}
                  alt={tool.name}
                  loading="lazy"
                  width={96}
                  height={96}
                  className="h-12 w-12 rounded-[0.9rem] object-contain transition-transform duration-500 group-hover/tool:scale-105 sm:h-14 sm:w-14"
                />
                <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-muted-foreground opacity-0 transition-all duration-500 group-hover/tool:bottom-[-1.7rem] group-hover/tool:opacity-100">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-12 gap-y-14 md:grid-cols-2">
          {groups.map((g) => {
            const GroupIcon = groupIcons[g.title];

            return (
              <div key={g.title} className="motion-card space-y-6">
                <div className="flex items-center justify-between border-b border-hairline pb-4">
                  <div className="flex items-center gap-3">
                    <span className="grid h-8 w-8 place-items-center rounded-full border border-hairline bg-surface/45 text-accent/90">
                      <GroupIcon className="h-3.5 w-3.5" aria-hidden="true" strokeWidth={1.7} />
                    </span>
                    <h3 className="font-display text-lg text-foreground">{g.title}</h3>
                  </div>
                  <span className="text-xs text-muted-foreground">{String(g.items.length).padStart(2, "0")}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-hairline bg-surface/40 px-3.5 py-1.5 text-sm text-foreground/85 transition-all duration-500 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-surface-elevated hover:text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
