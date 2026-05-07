import { ArrowUpRight, Mail, MapPin } from "lucide-react";

const services = [
  "Branding",
  "Editorial",
  "Social Media",
  "Digital Design",
  "UI Visual",
  "Remote Collaboration",
];

export const Contact = () => {
  return (
    <section id="contact" className="scroll-reveal relative py-32 lg:py-44 border-t border-hairline">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 space-y-10">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">07 ¬∑ Contact</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.04] tracking-tight text-balance">
              Disponible para colaborar con agencias creativas, equipos de marketing y proyectos digitales.
            </h2>
            <p className="max-w-2xl text-base lg:text-lg leading-relaxed text-muted-foreground text-pretty">
              Dise√±o visual consistente, adaptable y orientado a comunicaci√≥n de marca.
            </p>

            <a
              href="mailto:brendavegavqz@gmail.com"
              className="group inline-flex items-center gap-3 text-2xl sm:text-3xl font-display text-foreground"
            >
              <span className="link-underline">brendavegavqz@gmail.com</span>
              <ArrowUpRight className="h-6 w-6 text-accent transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> brendavegavqz@gmail.com</span>
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /> San Luis Potos√≠, M√©xico - Disponible para Remoto</span>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {["LinkedIn", "Portfolio", "Behance"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="soft-button rounded-full border border-hairline bg-surface/40 px-4 py-2 text-sm text-foreground/85 hover:border-accent/30 hover:text-foreground hover:bg-surface-elevated"
                >
                  {s} ‚Üó
                </a>
              ))}
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

        <footer className="mt-32 pt-10 border-t border-hairline flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>¬© 2026 Brenda Vega ¬∑ Visual Designer</p>
          <p>Visual Designer ¬∑ Branding ¬∑ Editorial ¬∑ Social Media ¬∑ Digital Design</p>
        </footer>
      </div>
    </section>
  );
};
