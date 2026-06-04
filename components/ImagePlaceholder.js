// Drop-in placeholder for presenter / product imagery.
// >>> PLACEHOLDER: replace these with <Image> from next/image once you have
//     real assets. Keep the alt text (it's in /copy for translation).
//
// `gaze` is a hint only — position the real photo so the presenter looks
// toward the CTA (gaze cueing nudges attention to the button).

export default function ImagePlaceholder({
  alt,
  className = "",
  label = "Presenter image",
  gaze = "right",
  ratio = "4 / 5",
}) {
  return (
    <div
      role="img"
      aria-label={alt}
      style={{ aspectRatio: ratio }}
      className={`relative flex items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-brand-black/20 bg-brand-black/5 ${className}`}
    >
      <div className="px-4 text-center">
        <div className="text-xs font-semibold uppercase tracking-wide text-brand-black/40">
          Image placeholder
        </div>
        <div className="mt-1 text-sm text-brand-black/50">{label}</div>
        <div className="mt-2 text-[11px] text-brand-black/35">
          gaze → {gaze} (toward CTA)
        </div>
      </div>
    </div>
  );
}
