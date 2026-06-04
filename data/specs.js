// ============================================================================
//  SPEC DATA — single source of truth for every number on the page.
//  >>> PLACEHOLDERS: replace the values marked TODO with real MAC FL numbers.
//  The calculator AND the spec table both read from this object, so you only
//  edit it once. Keep weights in pounds and prices in whole US dollars.
// ============================================================================

export const trailers = {
  regular: {
    label: "MAC FL Spec Dump (Standard)",
    emptyWeightLbs: 14500, // TODO: real empty/tare weight of the standard build
    maxLegalPayloadLbs: 65500, // TODO: real max legal payload (GVWR - empty weight)
    priceUSD: 62000, // TODO: real delivered price (used only for payback math)
  },
  lightweight: {
    label: "MAC FL Lightweight Spec Dump (NEW)",
    emptyWeightLbs: 12500, // TODO: real empty/tare weight of the lightweight build
    maxLegalPayloadLbs: 67500, // TODO: real max legal payload (GVWR - empty weight)
    priceUSD: 67500, // TODO: real delivered price (used only for payback math)
  },
};

// Defaults the calculator opens with. Pick numbers a FL fleet manager will
// recognize as realistic so the math feels like "their" numbers immediately.
export const calculatorDefaults = {
  loadsPerWeek: 25, // runs per week
  revenuePerLoad: 90, // $ per load (aggregate / per-ton-equivalent average)
  weeksPerMonth: 4.3, // standard conversion factor (do not change unless asked)
};

// Bounds for the loads-per-week slider.
export const calculatorBounds = {
  loadsPerWeekMin: 5,
  loadsPerWeekMax: 80,
  loadsPerWeekStep: 1,
  revenuePerLoadMin: 10,
  revenuePerLoadMax: 1000,
};

// ---------------------------------------------------------------------------
//  Side-by-side spec table rows (Section 5). Visual, not text-heavy.
//  "highlight: true" tints the row to favor the lightweight column.
//  Fill in the TODO strings with real spec sheet values.
// ---------------------------------------------------------------------------
export const specTable = [
  {
    label: "Empty (tare) weight",
    regular: `${trailers.regular.emptyWeightLbs.toLocaleString()} lbs`,
    lightweight: `${trailers.lightweight.emptyWeightLbs.toLocaleString()} lbs`,
    highlight: true,
  },
  {
    label: "Max legal payload",
    regular: `${trailers.regular.maxLegalPayloadLbs.toLocaleString()} lbs`,
    lightweight: `${trailers.lightweight.maxLegalPayloadLbs.toLocaleString()} lbs`,
    highlight: true,
  },
  {
    label: "Body length",
    regular: "TODO ft", // TODO
    lightweight: "TODO ft", // TODO
    highlight: false,
  },
  {
    label: "Cubic yard capacity",
    regular: "TODO cu yd", // TODO
    lightweight: "TODO cu yd", // TODO
    highlight: false,
  },
  {
    label: "Body material",
    regular: "TODO", // TODO e.g. steel / abrasion-resistant steel
    lightweight: "TODO", // TODO e.g. aluminum / lightweight alloy
    highlight: true,
  },
  {
    label: "Suspension",
    regular: "TODO", // TODO
    lightweight: "TODO", // TODO
    highlight: false,
  },
  {
    label: "Axles",
    regular: "TODO", // TODO
    lightweight: "TODO", // TODO
    highlight: false,
  },
  {
    label: "Warranty",
    regular: "TODO", // TODO
    lightweight: "TODO", // TODO
    highlight: false,
  },
];

export default trailers;
