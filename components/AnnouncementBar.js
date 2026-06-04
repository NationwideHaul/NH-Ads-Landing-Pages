import { copy } from "@/copy/copy";

// Top strip: "WE F!NANCE ALL EQUIPMENT IN-HOUSE" with a slow shine sweep.
export default function AnnouncementBar() {
  return (
    <div className="relative overflow-hidden bg-brand-red text-brand-white">
      <div className="container-page flex items-center justify-center gap-2 py-2 text-center">
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-white animate-soft-pulse" />
        <p className="text-xs font-bold uppercase tracking-[0.12em] sm:text-sm">
          {copy.announcement}
        </p>
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-white animate-soft-pulse" />
      </div>
      {/* shine sweep */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-white/20 blur-md animate-shine"
      />
    </div>
  );
}
