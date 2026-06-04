"use client";

import { useState } from "react";
import { copy as defaultCopy } from "@/copy/copy";
import { anchors } from "@/lib/site";
import { ChevronDownIcon } from "@/components/Icons";
import { scrollToForm } from "@/components/CTA";

// SECTION 6 — FAQ. Conversational, first-person objection handling.
// Accessible accordion (button + aria-expanded). First item open by default.
export default function FAQ({ copy = defaultCopy }) {
  const f = copy.faq;
  const [open, setOpen] = useState(0);

  return (
    <section id={anchors.faq} className="section bg-white">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-black sm:text-4xl">
            {f.heading}
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-3xl divide-y divide-brand-black/10 rounded-2xl border border-brand-black/10">
          {f.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                  >
                    <span className="text-base font-semibold text-brand-black sm:text-lg">
                      {item.q}
                    </span>
                    <ChevronDownIcon
                      width={20}
                      height={20}
                      className={`shrink-0 text-brand-red transition ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </h3>
                {isOpen ? (
                  <div className="animate-fade-up px-5 pb-6 text-brand-black/75 leading-relaxed">
                    {item.a}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <a
            href={`#${anchors.form}`}
            onClick={scrollToForm}
            className="text-base font-semibold text-brand-red hover:underline"
          >
            Still have a question? Learn more from our team →
          </a>
        </div>
      </div>
    </section>
  );
}
