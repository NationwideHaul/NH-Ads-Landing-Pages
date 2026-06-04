"use client";

import { useState } from "react";
import { copy as defaultCopy } from "@/copy/copy";
import { oems } from "@/data/oems";
import { CheckIcon } from "@/components/Icons";

// AUTHORIZED DEALER band + infinite OEM logo carousel.
// States our MAC dealership status, then auto-scrolls the OEM logos.
// Each logo falls back to a styled name chip until a real image is dropped in.
export default function OemMarquee({ copy = defaultCopy }) {
  const o = copy.oem;
  // Duplicate the list so the marquee can loop seamlessly (-50%).
  const loop = [...oems, ...oems];

  return (
    <section className="border-y border-brand-black/10 bg-white py-12">
      <div className="container-page text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-red/10 px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-brand-red">
          <CheckIcon width={16} height={16} />
          {o.authorizedBadge}
        </span>

        {/* MAC Trailer logo directly under the tag */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/mac-logo.png"
          alt="MAC Trailer"
          className="mx-auto mt-5 h-20 w-auto sm:h-24"
        />

        <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-brand-black sm:text-3xl">
          {o.heading}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-brand-black/70">
          {o.subheading}
        </p>
      </div>

      {/* Marquee */}
      <div
        className="marquee-pause relative mt-9 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
        aria-label="Brands we carry"
      >
        <ul className="animate-marquee flex w-max items-center gap-12 px-6">
          {loop.map((brand, i) => (
            <li key={i} className="shrink-0" aria-hidden={i >= oems.length}>
              <LogoItem brand={brand} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// Renders the logo image, or a styled name chip if the image is missing/errors.
function LogoItem({ brand }) {
  const [errored, setErrored] = useState(false);

  if (!brand.logo || errored) {
    return (
      <span className="flex h-12 items-center whitespace-nowrap rounded-lg border border-brand-black/15 px-5 text-lg font-extrabold uppercase tracking-wide text-brand-black/55">
        {brand.name}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={brand.logo}
      alt={brand.name}
      className="h-12 w-auto object-contain opacity-80 transition hover:opacity-100"
      onError={() => setErrored(true)}
      loading="lazy"
    />
  );
}
