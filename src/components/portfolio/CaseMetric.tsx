import { useEffect, useRef, useState } from "react";

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

type CaseMetricProps = {
  value: string;
};

export const CaseMetric = ({ value }: CaseMetricProps) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const [progress, setProgress] = useState(0);
  const hasAnimatedRef = useRef(false);
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : null;
  const suffix = match?.[2] ?? "";

  useEffect(() => {
    if (target === null) {
      setProgress(1);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setProgress(1);
      hasAnimatedRef.current = true;
      return;
    }

    const runCount = () => {
      if (hasAnimatedRef.current) return;
      hasAnimatedRef.current = true;

      const duration = 1450;
      const start = performance.now();

      const animate = (now: number) => {
        const elapsed = Math.min((now - start) / duration, 1);
        setProgress(easeOutCubic(elapsed));

        if (elapsed < 1) requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runCount();
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [target]);

  const displayValue = target === null ? value : `${Math.round(target * progress)}${suffix}`;

  return (
    <p ref={ref} className="font-display text-[1.65rem] leading-none text-foreground/88 tabular-nums lg:text-3xl">
      {displayValue}
    </p>
  );
};
