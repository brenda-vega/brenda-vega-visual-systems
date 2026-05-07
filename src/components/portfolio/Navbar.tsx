import { useEffect, useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
          <a href="#top" className="group font-display text-sm tracking-normal">
            <span className="text-foreground transition-colors group-hover:text-accent-soft">Brenda Vega</span>
            <span className="text-muted-foreground">  ¬∑  Visual Designer</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-[13px] text-muted-foreground">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="link-underline hover:text-foreground transition-colors duration-300">
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden md:inline-flex h-9 items-center rounded-full border border-hairline bg-surface/55 px-4 text-[11px] tracking-[0.16em] text-foreground/90 soft-button hover:border-accent/30 hover:bg-surface-elevated hover:text-foreground"
          >
            Disponible ¬∑ 2026
          </a>
        </div>
      </div>
    </header>
  );
};
