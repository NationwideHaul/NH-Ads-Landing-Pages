import Image from "next/image";
import { copy } from "@/copy/copy";

// SECTION 4 — SOCIAL PROOF. Real Google reviews screenshot.
// >>> To swap the image, replace /public/testimonial.jpg.
export default function SocialProof() {
  const s = copy.socialProof;
  return (
    <section className="border-y border-brand-black/10 bg-white py-14">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-black sm:text-4xl">
            {s.heading}
          </h2>
          <p className="mt-3 text-lg text-brand-black/70">{s.subheading}</p>
        </div>

        <div className="mx-auto mt-9 max-w-3xl overflow-hidden rounded-2xl ring-1 ring-brand-black/10">
          <Image
            src={s.image}
            alt={s.imageAlt}
            width={1080}
            height={962}
            sizes="(max-width: 768px) 100vw, 768px"
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
