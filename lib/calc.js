// ============================================================================
//  Calculator math — pure functions, no React. The comparison engine.
//  All formulas mirror the plain-English version shown to the buyer in
//  copy.calculator.formula, so the math stays honest and auditable.
// ============================================================================

const LBS_PER_TON = 2000;

/**
 * @param {object} args
 * @param {import('../data/specs').trailers} args.trailers  spec config object
 * @param {number} args.loadsPerWeek    runs per week (per truck)
 * @param {number} args.revenuePerLoad  $ per load
 * @param {number} args.weeksPerMonth   conversion factor (~4.3)
 */
export function computeComparison({
  trailers,
  loadsPerWeek,
  revenuePerLoad,
  weeksPerMonth,
}) {
  const { regular, lightweight } = trailers;

  // Extra legal payload the lightweight carries on every load.
  const extraPayloadPerLoadLbs = Math.max(
    0,
    lightweight.maxLegalPayloadLbs - regular.maxLegalPayloadLbs
  );

  const runsPerMonth = loadsPerWeek * weeksPerMonth;

  // Extra tonnage moved per month thanks to the heavier legal payload.
  const extraMonthlyPayloadLbs = extraPayloadPerLoadLbs * runsPerMonth;
  const extraTonsPerMonth = extraMonthlyPayloadLbs / LBS_PER_TON;

  // Convert that extra tonnage into "standard loads equivalent", then to $.
  // One standard load = the standard trailer's max legal payload.
  const standardPayload = regular.maxLegalPayloadLbs || 1;
  const extraLoadsEquivalent = extraMonthlyPayloadLbs / standardPayload;
  const extraRevenuePerMonth = extraLoadsEquivalent * revenuePerLoad;

  // Payback period in months on the price delta.
  const priceDelta = Math.max(
    0,
    lightweight.priceUSD - regular.priceUSD
  );
  const paybackMonths =
    extraRevenuePerMonth > 0 ? priceDelta / extraRevenuePerMonth : null;

  return {
    extraPayloadPerLoadLbs,
    extraTonsPerMonth,
    extraRevenuePerMonth,
    extraRevenuePerYear: extraRevenuePerMonth * 12,
    paybackMonths,
    priceDelta,
    runsPerMonth,
  };
}

// --- Formatting helpers ----------------------------------------------------

export function formatUSD(value, { decimals = 0 } = {}) {
  if (value == null || !isFinite(value)) return "$0";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

export function formatNumber(value, { decimals = 0 } = {}) {
  if (value == null || !isFinite(value)) return "0";
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

export function formatMonths(value) {
  if (value == null || !isFinite(value)) return null;
  const rounded = Math.round(value * 10) / 10;
  return rounded;
}
