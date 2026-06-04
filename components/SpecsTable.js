import { copy as defaultCopy } from "@/copy/copy";
import { anchors } from "@/lib/site";
import { trailers, specTable } from "@/data/specs";

// SECTION 5 — SPECS / CREDIBILITY. Clean side-by-side spec table.
// Numbers come from /data/specs.js. Row labels can be translated via
// copy.specs.rowLabels (same order as specTable); falls back to the data label.
export default function SpecsTable({ copy = defaultCopy }) {
  const s = copy.specs;

  return (
    <section id={anchors.specs} className="section">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{s.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-black sm:text-4xl">
            {s.heading}
          </h2>
          <p className="mt-4 text-lg text-brand-black/70">{s.subheading}</p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-brand-black/10 bg-white shadow-sm">
          {/* Column header */}
          <div className="grid grid-cols-[1.4fr_1fr_1fr] bg-brand-black text-brand-white">
            <div className="px-4 py-4 text-sm font-semibold sm:px-6">
              {trailers.regular.label.split("(")[0].trim()}
            </div>
            <div className="px-3 py-4 text-center text-sm font-semibold">
              {s.columnRegular}
            </div>
            <div className="bg-brand-red px-3 py-4 text-center text-sm font-semibold">
              {s.columnLightweight}
            </div>
          </div>

          {/* Rows */}
          {specTable.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-[1.4fr_1fr_1fr] border-t border-brand-black/10 ${
                i % 2 === 1 ? "bg-brand-black/[0.02]" : ""
              }`}
            >
              <div className="px-4 py-4 text-sm font-medium text-brand-black sm:px-6">
                {(s.rowLabels && s.rowLabels[i]) || row.label}
              </div>
              <div className="px-3 py-4 text-center text-sm text-brand-black/70">
                {row.regular}
              </div>
              <div
                className={`px-3 py-4 text-center text-sm font-semibold ${
                  row.highlight
                    ? "bg-brand-red/5 text-brand-red"
                    : "text-brand-black"
                }`}
              >
                {row.lightweight}
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-4 max-w-4xl text-center text-xs text-brand-black/50">
          {s.footnote}
        </p>
      </div>
    </section>
  );
}
