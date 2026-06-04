// ============================================================================
//  SPEC DATA — numbers the CALCULATOR uses. (The visible spec TABLE rows live
//  in copy.js / copy.es.js under specs.table, so they're translatable.)
//
//  Real data pulled from the Nationwide Haul inventory listings:
//   - Standard  : 2026 MAC 24' Tri-Axle End Dump, aluminum box on STEEL frame,
//                 steel wheels, 60" wall, 80K GVWR — $61,719
//   - Lightweight: 2027 MAC 24' Tri-Axle End Dump "Lightweight Spec", ALL
//                 aluminum, aluminum wheels, 52" wall, 31 cu yd, 80K GVWR — $67,719
//
//  >>> STILL NEEDED: the exact EMPTY (tare) WEIGHT of each unit. The listings
//  don't publish it, and the empty-weight DIFFERENCE is what drives the
//  calculator. Values below marked EST are estimates — replace with the real
//  numbers from the MAC spec sheet and the calculator becomes exact.
// ============================================================================

export const trailers = {
  regular: {
    label: "MAC FL Standard (Steel Frame)",
    emptyWeightLbs: 15000, // EST — replace with real tare weight
    maxLegalPayloadLbs: 65000, // EST = 80,000 GVWR − ~15,000 empty
    priceUSD: 61719, // real (2026 listing)
  },
  lightweight: {
    label: "MAC FL Lightweight (All-Aluminum)",
    emptyWeightLbs: 12500, // EST — replace with real tare weight
    maxLegalPayloadLbs: 67500, // EST = 80,000 GVWR − ~12,500 empty
    priceUSD: 67719, // real (2027 listing)
  },
};

// Defaults the calculator opens with. revenuePerLoad strongly drives the
// headline — confirm a realistic per-load haul rate for FL aggregate work.
export const calculatorDefaults = {
  loadsPerWeek: 25, // runs per week per truck
  revenuePerLoad: 250, // $ per full load — EDITABLE by the visitor; confirm default
  weeksPerMonth: 4.3, // standard conversion factor
};

// Bounds for the loads-per-week slider.
export const calculatorBounds = {
  loadsPerWeekMin: 5,
  loadsPerWeekMax: 80,
  loadsPerWeekStep: 1,
  revenuePerLoadMin: 10,
  revenuePerLoadMax: 2000,
};

export default trailers;
