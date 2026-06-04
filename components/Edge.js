import { copy as defaultCopy } from "@/copy/copy";
import { EdgeIcon } from "@/components/Icons";

// SECTION 3 — THE NATIONWIDE HAUL EDGE. Value stack of 4. Icons + short copy.
export default function Edge({ copy = defaultCopy }) {
  const e = copy.edge;
  return (
    <section className="section">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-black sm:text-4xl">
            {e.heading}
          </h2>
          <p className="mt-4 text-lg text-brand-black/70">{e.subheading}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {e.items.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-brand-black/10 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red">
                <EdgeIcon name={item.icon} width={26} height={26} />
              </span>
              <h3 className="mt-4 text-lg font-bold text-brand-black">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-black/70">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
