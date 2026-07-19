"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

/**
 * AnimatedCounter — parses a display value like "75+", "€10M+",
 * "LOD 500" and animates the numeric portion from 0 to target when
 * scrolled into view. Prefix and suffix (currency, unit, etc.) are
 * preserved verbatim.
 *
 * Uses IntersectionObserver so animation only fires once per element
 * and only when the number is visible.
 */

type Props = {
  value: string;
  duration?: number;
  className?: string;
  style?: CSSProperties;
};

export function AnimatedCounter({
  value,
  duration = 1500,
  className,
  style,
}: Props) {
  // Extract prefix (any leading non-digit run), the first integer, and
  // suffix (everything after). E.g. "€10M+" → ["€", 10, "M+"].
  const match = value.match(/^([^\d]*)(\d+)(.*)$/);
  const prefix = match?.[1] ?? "";
  const target = match ? parseInt(match[2], 10) : 0;
  const suffix = match?.[3] ?? "";

  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const start = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      const startTime = performance.now();
      const step = (now: number) => {
        const elapsed = now - startTime;
        const t = Math.min(elapsed / duration, 1);
        // ease-out cubic — starts fast, decelerates as it lands
        const eased = 1 - Math.pow(1 - t, 3);
        setCurrent(Math.round(eased * target));
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    // Respect prefers-reduced-motion — jump straight to target.
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setCurrent(target);
      startedRef.current = true;
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            start();
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref} className={className} style={style}>
      {prefix}
      {current}
      {suffix}
    </span>
  );
}
