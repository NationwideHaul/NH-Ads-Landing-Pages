import { copy } from "@/copy/copy";
import { site } from "@/lib/site";
import { PrimaryCTA, SecondaryCTA } from "@/components/CTA";

// SECTION 7 — TWO-TIER CTA. Primary "Talk to our team / See it at the yard";
// Secondary "Get my quote" for buyers ready to move now.
export default function TwoTierCTA() {
  const t = copy.twoTierCta;
  return (
    <section className="section">
      <div className="container-page">
        <div className="mx-auto max-w-3xl rounded-3xl bg-brand-black px-6 py-12 text-center text-brand-white sm:px-12">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t.heading}
          </h2>
          <p className="mt-4 text-lg text-brand-white/70">{t.subheading}</p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <div className="flex flex-col items-center">
              <PrimaryCTA className="w-full sm:w-auto">
                {t.primaryLabel}
              </PrimaryCTA>
              <span className="mt-2 text-xs text-brand-white/60">
                {t.primaryHelper} ({site.yardLabel})
              </span>
            </div>
            <div className="flex flex-col items-center">
              <SecondaryCTA className="w-full !border-white/30 !text-brand-white hover:!border-brand-white hover:!text-brand-white sm:w-auto">
                {t.secondaryLabel}
              </SecondaryCTA>
              <span className="mt-2 text-xs text-brand-white/60">
                {t.secondaryHelper}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
