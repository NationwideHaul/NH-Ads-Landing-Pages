// ============================================================================
//  Public site config — pulls NEXT_PUBLIC_* env vars with safe fallbacks so
//  the page renders even before the real values are filled in.
// ============================================================================

export const site = {
  phoneE164: process.env.NEXT_PUBLIC_PHONE_E164 || "+18635550100",
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY || "(863) 555-0100",
  vslVideoUrl:
    process.env.NEXT_PUBLIC_VSL_VIDEO_URL ||
    "https://www.youtube.com/watch?v=Pr6Fa1Vuvt8",
  yardLabel: process.env.NEXT_PUBLIC_YARD_LABEL || "Lakeland, FL yard",
  yardMapsUrl:
    process.env.NEXT_PUBLIC_YARD_MAPS_URL ||
    "https://maps.google.com/?q=Nationwide+Haul+Lakeland+FL",
};

// Shared anchor ids so CTAs and sections stay in sync.
export const anchors = {
  form: "talk",
  calculator: "calculator",
  specs: "specs",
  faq: "faq",
};

export default site;
