import Image from "next/image";
import { copy as defaultCopy } from "@/copy/copy";
import { site } from "@/lib/site";
import { PrimaryCTA } from "@/components/CTA";
import { PhoneIcon } from "@/components/Icons";

// Sticky top nav: logo + tap-to-call + the single primary CTA.
export default function Header({ copy = defaultCopy }) {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-black/10 bg-brand-white/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <a href="#top" aria-label={copy.nav.logoAlt} className="flex items-center">
          <Image
            src="/nh-black.png"
            alt={copy.nav.logoAlt}
            width={1260}
            height={512}
            priority
            sizes="240px"
            className="h-12 w-auto sm:h-14"
          />
        </a>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={`tel:${site.phoneE164}`}
            className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-brand-black transition hover:text-brand-red"
          >
            <PhoneIcon width={18} height={18} />
            <span className="hidden sm:inline">{site.phoneDisplay}</span>
            <span className="sm:hidden">{copy.nav.callLabel}</span>
          </a>
          <PrimaryCTA className="!px-4 !py-2.5 text-sm sm:!px-5" showArrow={false}>
            {copy.nav.primaryCta}
          </PrimaryCTA>
        </div>
      </div>
    </header>
  );
}
