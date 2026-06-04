import Image from "next/image";
import { copy } from "@/copy/copy";
import { anchors } from "@/lib/site";
import LeadForm from "@/components/LeadForm";

// SECTION 8 — ENDING (peak-end). Restates the future-self outcome with the dump
// trailer, then the easiest next step (the form). The form carries the #talk
// anchor that every primary CTA scrolls to, so the button lands right on it.
export default function Ending() {
  const e = copy.ending;
  return (
    <section className="section bg-brand-white">
      <div className="container-page">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Peak-end message + the dump */}
          <div>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-brand-black sm:text-4xl">
              {e.heading}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-brand-black/75">
              {e.body}
            </p>
            <p className="mt-4 text-sm font-medium text-brand-black/80">
              {e.helper}
            </p>
            <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-brand-black/10">
              <Image
                src="/dump.jpg"
                alt="MAC FL Lightweight dump trailer"
                width={1400}
                height={1095}
                sizes="(max-width: 1024px) 100vw, 560px"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* The easiest next step — the #talk scroll target lands here */}
          <div id={anchors.form} className="scroll-mt-28">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
