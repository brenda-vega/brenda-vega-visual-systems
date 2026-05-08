import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const cases = [
  { slug: "kairos", label: "Kairos", path: "/projects/kairos" },
  { slug: "fidex", label: "Fidex", path: "/projects/fidex" },
  { slug: "phronesis", label: "Phronesis", path: "/projects/phronesis" },
  { slug: "lytryum", label: "Lytryum", path: "/projects/lytryum" },
  { slug: "exponencial", label: "Exponencial", path: "/projects/exponencial" },
];

const CaseStudyNav = ({ current }: { current: string }) => (
  <nav className="mt-10 border-t border-hairline pt-6" aria-label="Case studies navigation">
    <p className="mb-4 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">More case studies</p>
    <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
      {cases.map((item) => {
        const isCurrent = item.slug === current;

        if (isCurrent) {
          return (
            <span key={item.slug} className="text-sm text-foreground/42">
              {item.label}
            </span>
          );
        }

        return (
          <Link
            key={item.slug}
            to={item.path}
            className="group/case inline-flex items-center gap-1.5 text-sm text-muted-foreground outline-none transition-colors duration-500 hover:text-foreground focus-visible:text-foreground focus-visible:ring-1 focus-visible:ring-accent/50 focus-visible:ring-offset-4 focus-visible:ring-offset-background"
          >
            {item.label}
            <ArrowUpRight className="h-3.5 w-3.5 text-accent/70 transition-transform duration-500 group-hover/case:translate-x-0.5 group-hover/case:-translate-y-0.5" aria-hidden="true" />
          </Link>
        );
      })}
    </div>
  </nav>
);

export default CaseStudyNav;
