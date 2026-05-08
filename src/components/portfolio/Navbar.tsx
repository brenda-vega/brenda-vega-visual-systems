import { useEffect, useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container">
        <div
          className={`flex h-14 items-center justify-between rounded-full px-4 sm:px-5 transition-all duration-500 ${
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
          <nav className="hidden md:flex items-center gap-7 text-[13px] text-muted-foreground" aria-label="Navegación principal">
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
            className="hidden md:inline-flex h-9 items-center rounded-full border border-hairline bg-surface/55 px-4 text-[11px] tracking-[0.16em] text-foreground/90 soft-button hover:border-accent/30 hover:bg-surface-elevated hover:text-foreground"
          >
            Disponible · 2026
          </a>
        </div>

        <nav className="mt-2 flex gap-2 overflow-x-auto rounded-full border border-hairline bg-background/58 p-1 text-[11px] text-muted-foreground shadow-soft backdrop-blur-2xl md:hidden" aria-label="Navegación móvil">
          {links.map((l) => {
            const isActive = activeSection === l.href.replace("#", "");

            return (
              <a
                key={l.href}
                href={l.href}
                aria-current={isActive ? "page" : undefined}
                className={`mobile-nav-link whitespace-nowrap rounded-full px-3.5 py-2 transition-colors duration-300 ${
                  isActive ? "bg-foreground text-background" : "hover:bg-surface hover:text-foreground"
                }`}
              >
                {l.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
