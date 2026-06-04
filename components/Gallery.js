"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { copy } from "@/copy/copy";
import { ArrowRightIcon } from "@/components/Icons";

// SECTION — GALLERY CAROUSEL. Real trailer photos from /public/images.
// Autoplays, pauses on hover/focus/touch, supports swipe + arrow keys + dots.
const SLIDES = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-4.jpg",
  "/images/gallery-5.jpg",
  "/images/gallery-6.jpg",
  "/images/gallery-7.jpg",
];

const AUTOPLAY_MS = 4500;

export default function Gallery() {
  const g = copy.gallery;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef(null);
  const count = SLIDES.length;

  const go = useCallback(
    (next) => setIndex((i) => (next + count) % count),
    [count]
  );

  useEffect(() => {
    if (paused) return;
    const reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const t = setInterval(() => go(index + 1), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [index, paused, go]);

  function onTouchStart(e) {
    touchX.current = e.touches[0].clientX;
  }
  function onTouchEnd(e) {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
    touchX.current = null;
  }

  return (
    <section className="section">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{g.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-black sm:text-4xl">
            {g.heading}
          </h2>
          <p className="mt-4 text-lg text-brand-black/70">{g.subheading}</p>
        </div>

        <div
          className="group relative mx-auto mt-10 max-w-4xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
          role="region"
          aria-roledescription="carousel"
          aria-label={g.heading}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") go(index - 1);
            if (e.key === "ArrowRight") go(index + 1);
          }}
          tabIndex={0}
        >
          {/* Viewport */}
          <div
            className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl bg-brand-black shadow-lg ring-1 ring-brand-black/10"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex h-full transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {SLIDES.map((src, i) => (
                <div key={src} className="relative h-full w-full shrink-0">
                  <Image
                    src={src}
                    alt={g.slideAlts[i] || `MAC FL Lightweight photo ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 896px"
                    className="object-cover"
                    priority={i === 0}
                  />
                </div>
              ))}
            </div>

            {/* Arrows */}
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-brand-white/85 p-2 text-brand-black shadow transition hover:bg-brand-white"
            >
              <ArrowRightIcon width={20} height={20} className="rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-brand-white/85 p-2 text-brand-black shadow transition hover:bg-brand-white"
            >
              <ArrowRightIcon width={20} height={20} />
            </button>
          </div>

          {/* Dots */}
          <div className="mt-4 flex items-center justify-center gap-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to photo ${i + 1}`}
                aria-current={i === index}
                className={`h-2.5 rounded-full transition-all ${
                  i === index
                    ? "w-7 bg-brand-red"
                    : "w-2.5 bg-brand-black/20 hover:bg-brand-black/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
