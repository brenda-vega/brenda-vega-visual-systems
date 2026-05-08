import { ArrowUpRight, Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://www.linkedin.com/in/brendavega012/", label: "LinkedIn", icon: ArrowUpRight },
  { href: "/Brenda-Vega-Visual-Designer-CV.pdf", label: "Download CV", icon: Download },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["top", ...links.map((link) => link.href.replace("#", ""))];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-28% 0px -58% 0px", threshold: [0.12, 0.25, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2 md:py-3" : "py-3 md:py-5"
      }`}
    >
      <div className="container">
        <div
          className={`hidden h-14 items-center justify-between rounded-full px-4 transition-all duration-500 sm:px-5 md:flex ${
            scrolled
              ? "border border-hairline bg-background/68 shadow-soft backdrop-blur-2xl"
              : "border border-transparent bg-background/18 backdrop-blur-sm"
          }`}
        >
          <a
            href="#top"
            aria-current={activeSection === "top" ? "page" : undefined}
            className="group font-display text-sm tracking-normal"
          >
            <span className="text-foreground transition-colors group-hover:text-accent-soft">Brenda Vega</span>
            <span className="text-muted-foreground"> · Visual Designer</span>
          </a>
          <nav className="hidden items-center gap-7 text-[13px] text-muted-foreground md:flex" aria-label="Navegación principal">
            {links.map((l) => {
              const isActive = activeSection === l.href.replace("#", "");

              return (
                <a
                  key={l.href}
                  href={l.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`nav-link link-underline transition-colors duration-300 ${
                    isActive ? "text-foreground" : "hover:text-foreground"
                  }`}
                >
                  {l.label}
                </a>
              );
            })}
          </nav>
          <a
            href="#contact"
            className="hidden h-9 items-center rounded-full border border-hairline bg-surface/55 px-4 text-[11px] tracking-[0.16em] text-foreground/90 soft-button hover:border-accent/30 hover:bg-surface-elevated hover:text-foreground md:inline-flex"
          >
            Disponible · 2026
          </a>
        </div>

        <div className="flex h-10 items-center justify-between md:hidden">
          <a
            href="#top"
            aria-current={activeSection === "top" ? "page" : undefined}
            onClick={() => setIsMenuOpen(false)}
            className={`font-display text-[13px] tracking-normal transition-colors duration-500 ${
              scrolled ? "text-foreground" : "text-foreground/92"
            }`}
          >
            <span>Brenda Vega</span>
            <span className="text-muted-foreground/78"> · Visual Designer</span>
          </a>

          <button
            type="button"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground/86 outline-none transition-all duration-500 focus-visible:ring-1 focus-visible:ring-accent/50 ${
              scrolled || isMenuOpen ? "bg-background/38 backdrop-blur-md" : "bg-background/12 backdrop-blur-sm"
            }`}
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 -z-10 md:hidden transition-[opacity,visibility] duration-500 ${
          isMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <button
          type="button"
          aria-label="Cerrar menú"
          onClick={() => setIsMenuOpen(false)}
          className="absolute inset-0 cursor-default bg-background/82 backdrop-blur-xl"
        />
        <div
          className={`absolute inset-x-4 top-20 rounded-[1.75rem] border border-hairline bg-surface/48 p-7 shadow-soft backdrop-blur-2xl transition-all duration-500 ${
            isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
        >
          <nav className="grid gap-5" aria-label="Navegación móvil">
            {links.map((l) => {
              const isActive = activeSection === l.href.replace("#", "");

              return (
                <a
                  key={l.href}
                  href={l.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-display text-3xl leading-none transition-colors duration-500 ${
                    isActive ? "text-foreground" : "text-foreground/58 hover:text-foreground"
                  }`}
                >
                  {l.label}
                </a>
              );
            })}
          </nav>

          <div className="mt-10 flex flex-wrap gap-3 border-t border-hairline pt-5">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-hairline bg-background/24 px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-foreground/76 transition-colors duration-500 hover:border-accent/30 hover:text-foreground"
              >
                {label}
                <Icon className="h-3.5 w-3.5 text-accent/70" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
