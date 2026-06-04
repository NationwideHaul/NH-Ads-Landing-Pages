import { copy as defaultCopy } from "@/copy/copy";
import { PrimaryCTA } from "@/components/CTA";
import VSLPlayer from "@/components/VSLPlayer";
import Reveal from "@/components/Reveal";

// SECTION 1 — HERO. Outcome-led H1 + concrete subhead (with highlighter),
// momentum badge, single primary CTA + helper microcopy, THEN the autoplaying
// VSL video directly after the helper line. NO price in the hero.
export default function Hero({ copy = defaultCopy }) {
  const h = copy.hero;
  const h1 = h.h1Options[0]; // swap index to A/B test the headline

  return (
    <section id="top" className="section pt-8 sm:pt-12">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          {/* Momentum badge */}
          <span className="inline-flex items-center rounded-full border border-brand-red/25 bg-brand-red/5 px-4 py-1.5 text-sm font-semibold text-brand-red">
            {h.switchingBadge}
          </span>

          <p className="mt-4 eyebrow">{h.eyebrow}</p>

          <h1 className="mt-3 text-4xl font-extrabold leading-[1.08] tracking-tight text-brand-black sm:text-5xl lg:text-6xl">
            {h1}
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-brand-black/75">
            {h.subheadStart}
            <span className="marker font-semibold text-brand-black">
              {h.subheadHighlight}
            </span>
            {h.subheadEnd}
          </p>

          {/* Single primary CTA + helper microcopy */}
          <div className="mt-8 flex flex-col items-center">
            <PrimaryCTA className="w-full sm:w-auto">{h.primaryCta}</PrimaryCTA>
            <p className="mt-3 text-base font-bold text-brand-red">
              {h.helperMicrocopy}
            </p>
          </div>
        </Reveal>

        {/* VSL video — directly AFTER the helper line, autoplaying (muted) */}
        <Reveal className="mx-auto mt-10 max-w-3xl" delay={120}>
          <VSLPlayer label={h.videoLabel} url={h.videoUrl} />
        </Reveal>
      </div>
    </section>
  );
}
