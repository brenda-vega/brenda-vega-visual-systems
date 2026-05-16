import { ArrowUpRight, Download, Link as LinkIcon, MapPin, MessageCircle } from "lucide-react";

const cvHref = `${import.meta.env.BASE_URL}CV_VisualDesigner_BrendaVega_2026_v2.pdf`;

const services = [
  "Visual Systems",
  "Editorial Direction",
  "Digital Experiences",
  "Product Communication",
  "Branding",
  "Remote Collaboration",
];

const secondaryLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/brendavega012/",
    icon: ArrowUpRight,
  },
  {
    label: "Explorar enlaces",
    href: "https://linktr.ee/brendavega012",
    icon: LinkIcon,
  },
  {
    label: "Descargar CV",
    href: cvHref,
    icon: Download,
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="scroll-reveal relative border-t border-hairline py-24 sm:py-28 lg:py-40">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-gradient-to-b from-accent/6 to-transparent" />

      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-8 lg:col-span-7 lg:space-y-10">
            <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">07 · Contact</span>
            <h2 className="max-w-4xl font-display text-4xl leading-[1.04] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Este portfolio es una muestra de cómo el diseño puede conectar estructura, comunicación y experiencia digital.
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty lg:text-lg">
              Siempre me interesa colaborar en proyectos donde las ideas necesiten dirección visual, sistemas claros y experiencias digitales capaces de adaptarse y crecer.
            </p>

            <div className="space-y-5 pt-1 sm:pt-2">
              <a
                href="https://wa.me/524445492516?text=Hola%20Brenda,%20vi%20tu%20portfolio%20y%20me%20interesa%20hablar%20sobre%20un%20proyecto."
                target="_blank"
                rel="noopener noreferrer"
                className="soft-button inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background shadow-glow transition-colors duration-500 hover:bg-accent-soft"
              >
                Conversemos
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
              </a>

              <div className="flex flex-wrap gap-3">
                {secondaryLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="soft-button inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/28 px-4 py-2.5 text-[12px] text-foreground/72 transition-colors duration-500 hover:border-accent/30 hover:bg-surface-elevated hover:text-foreground"
                  >
                    {label}
                    <Icon className="h-3.5 w-3.5 text-accent/80" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-hairline pt-6 text-sm text-muted-foreground/84">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
                San Luis Potosí, México - Disponible para Remoto
              </span>
            </div>
          </div>

          <aside className="self-start rounded-[1.75rem] border border-hairline bg-surface/28 p-7 lg:col-span-4 lg:col-start-9 lg:p-8">
            <div className="mb-7 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="text-xs uppercase tracking-[0.18em] text-foreground/88">Visual Designer</span>
            </div>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s} className="flex items-center justify-between border-b border-hairline pb-3 text-sm text-foreground/78 last:border-b-0 last:pb-0">
                  {s}
                  <span className="text-accent/80">+</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <footer className="mt-24 flex flex-col items-start justify-between gap-4 border-t border-hairline pt-8 text-xs sm:flex-row sm:items-center lg:mt-32 lg:pt-10">
          <p className="text-foreground/55">© 2026 Brenda Vega · Visual Designer</p>
          <p className="text-foreground/68">Visual Designer · Branding · Editorial · Social Media · Digital Design</p>
        </footer>
      </div>
    </section>
  );
};
