"use client";

import { useEffect, useRef, useState } from "react";

// Lightweight scroll-reveal wrapper. Fades + lifts its children into view.
// Robust by design:
//  • Content is visible by default (CSS only hides it once <html> has `.js`,
//    which we add on mount) — so no-JS users always see everything.
//  • Reveals immediately if already in the viewport on mount.
//  • IntersectionObserver handles below-the-fold sections.
//  • A safety timeout guarantees content appears even if IO never fires.
export default function Reveal({ children, className = "", as: Tag = "div", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setVisible(true);
      return;
    }

    // Already in view on mount? Reveal right away (covers the hero/LCP).
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.95) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);

    // Safety net: never leave content hidden.
    const t = setTimeout(() => setVisible(true), 1500);

    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
