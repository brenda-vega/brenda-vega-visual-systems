import { ArrowUpRight, Download, Link as LinkIcon, MapPin } from "lucide-react";

const services = [
  "Branding",
  "Editorial",
  "Social Media",
  "Digital Design",
  "UI Visual",
  "Remote Collaboration",
];

const contactLinks = [
  {
    label: "Contactar por LinkedIn",
    href: "https://www.linkedin.com/in/brendavega012/",
    icon: ArrowUpRight,
    primary: true,
  },
  {
    label: "Ver enlaces profesionales",
    href: "https://linktr.ee/brendavega012",
    icon: LinkIcon,
  },
  {
    label: "Descargar CV",
    href: "/Brenda-Vega-Visual-Designer-CV.pdf",
    icon: Download,
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="scroll-reveal relative py-32 lg:py-44 border-t border-hairline">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 space-y-10">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">07 · Contact</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.04] tracking-tight text-balance">
              Disponible para colaborar con agencias creativas, equipos de marketing y proyectos digitales.
            </h2>
            <p className="max-w-2xl text-base lg:text-lg leading-relaxed text-muted-foreground text-pretty">
              Diseño visual consistente, adaptable y orientado a comunicación de marca.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {contactLinks.map(({ label, href, icon: Icon, primary }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`soft-button inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm transition-colors duration-500 ${
                    primary
                      ? "bg-foreground text-background shadow-glow hover:bg-accent-soft"
                      : "border border-hairline bg-surface/40 text-foreground/85 hover:border-accent/30 hover:bg-surface-elevated hover:text-foreground"
                  }`}
                >
                  {label}
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /> San Luis Potosí, México - Disponible para Remoto</span>
              <a href="mailto:brendavegavqz@gmail.com" className="link-underline text-foreground/45 transition-colors duration-300 hover:text-foreground/70">
                Email directo
              </a>
            </div>
          </div>

          <aside className="lg:col-span-4 lg:col-start-9 rounded-3xl border border-hairline bg-surface/40 p-8 self-start">
            <div className="flex items-center gap-2 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="text-xs uppercase tracking-[0.18em] text-foreground">Visual Designer</span>
            </div>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s} className="flex items-center justify-between text-sm text-foreground/85 border-b border-hairline pb-3 last:border-b-0 last:pb-0">
                  {s}
                  <span className="text-accent">+</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <footer className="mt-32 pt-10 border-t border-hairline flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
          <p className="text-foreground/55">© 2026 Brenda Vega · Visual Designer</p>
          <p className="text-foreground/68">Visual Designer · Branding · Editorial · Social Media · Digital Design</p>
        </footer>
      </div>
    </section>
  );
};
