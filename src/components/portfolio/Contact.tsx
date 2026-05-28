import { ArrowUpRight, Download, Link as LinkIcon, MapPin } from "lucide-react";

const cvHref = `${import.meta.env.BASE_URL}CV_VisualDesigner_BrendaVega_2026_v2.pdf`;
export const whatsappHref =
  "https://wa.me/524445492516?text=Hola%20Brenda,%20vi%20tu%20portfolio%20y%20me%20interesa%20hablar%20sobre%20un%20proyecto%20de%20dise%C3%B1o%20visual.";

const services = [
  "Visual Systems",
  "Branding",
  "Editorial Design",
  "Content Systems",
  "UI Visual Design",
  "Campaign Assets",
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
    <section id="contact" className="relative scroll-mt-24 border-t border-white/22 bg-background py-12 text-foreground sm:py-14 lg:py-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-background" />

      <div className="container">
        <div className="grid grid-cols-1 gap-8 border-y border-white/28 py-6 sm:py-7 lg:grid-cols-12 lg:gap-12 lg:py-8">
          <div className="space-y-4 lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.22em] text-white/90">07 · Contacto</span>
            <h2 className="max-w-3xl font-display text-2xl leading-[1.08] tracking-normal text-balance text-white sm:text-3xl lg:text-[2.65rem]">
              Disponible para diseño visual, branding, sistemas editoriales y comunicación para marcas, proyectos y experiencias.
            </h2>

            <div className="space-y-3 pt-1">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="soft-button inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-background shadow-soft transition-colors duration-700 hover:bg-[#25D366] hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#25D366]/70"
              >
                Contactar por WhatsApp
                <WhatsAppIcon className="h-4 w-4" />
              </a>

              <div className="flex flex-wrap gap-3">
                {secondaryLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="soft-button inline-flex items-center gap-2 rounded-full border border-white/26 bg-white/[0.09] px-4 py-2.5 text-[12px] text-white/90 transition-colors duration-700 hover:border-white/40 hover:bg-white/[0.13] hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40"
                  >
                    {label}
                    <Icon className="h-3.5 w-3.5 text-accent/68" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-white/22 pt-4 text-sm text-white/90">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent/82" aria-hidden="true" />
                San Luis Potosí, México - Disponible para Remoto
              </span>
              <span>Visual Designer · Branding · Editorial · Social Media · Digital Design</span>
            </div>
          </div>

          <aside className="self-start border-l border-white/32 bg-white/[0.11] px-0 py-0 lg:col-span-4 lg:col-start-9 lg:px-7 lg:py-6">
            <div className="mb-5 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent/20" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="text-xs uppercase tracking-[0.18em] text-white/90">Disponible para</span>
            </div>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s} className="flex items-center justify-between border-b border-white/22 pb-2.5 text-sm text-white last:border-b-0 last:pb-0">
                  {s}
                  <span className="text-accent/72">+</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <footer className="mt-7 flex flex-col items-start justify-between gap-4 border-t border-white/22 pt-5 text-xs sm:flex-row sm:items-center lg:mt-8">
          <p className="text-white/72">© 2026 Brenda Vega · Visual Designer</p>
          <p className="text-white/90">Visual Designer · Branding · Editorial · Social Media · Digital Design</p>
        </footer>
      </div>
    </section>
  );
};

export const FloatingWhatsApp = () => (
  <a
    href={whatsappHref}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contactar por WhatsApp"
    className="fixed bottom-5 right-5 z-[70] inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#25D366]/45 bg-[#25D366] text-white shadow-soft transition-all duration-500 hover:-translate-y-0.5 hover:bg-[#20BD5A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/45 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
  >
    <WhatsAppIcon className="h-6 w-6" />
  </a>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" focusable="false">
    <path d="M16.04 3C9.47 3 4.13 8.32 4.13 14.87c0 2.1.55 4.14 1.6 5.94L4 27.13l6.48-1.7a11.9 11.9 0 0 0 5.56 1.42h.01c6.57 0 11.92-5.32 11.92-11.87S22.61 3 16.04 3Zm0 21.83h-.01a9.88 9.88 0 0 1-5.03-1.38l-.36-.21-3.84 1.01 1.03-3.73-.24-.38a9.78 9.78 0 0 1-1.5-5.25c0-5.43 4.46-9.85 9.95-9.85 2.66 0 5.16 1.03 7.04 2.89a9.75 9.75 0 0 1 2.92 6.96c0 5.43-4.47 9.84-9.96 9.84Zm5.46-7.37c-.3-.15-1.76-.86-2.03-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.46s1.07 2.86 1.22 3.06c.15.2 2.1 3.18 5.08 4.45.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.08 1.76-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35Z" />
  </svg>
);
