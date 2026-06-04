// ============================================================================
//  Meta (Facebook) matching helpers — client-side capture for CAPI dedup.
//  These read the cookies/URL params the Meta Pixel drops so we can pass the
//  same identifiers to the GHL webhook → Conversions API. The browser "Lead"
//  event and the server event share ONE event_id so Meta de-duplicates them.
// ============================================================================

/** Read a cookie value by name (browser only). */
export function getCookie(name) {
  if (typeof document === "undefined") return "";
  const match = document.cookie.match(
    new RegExp("(?:^|; )" + name.replace(/([.$?*|{}()[\]\\/+^])/g, "\\$1") + "=([^;]*)")
  );
  return match ? decodeURIComponent(match[1]) : "";
}

/** Read a query param from the current URL (browser only). */
export function getQueryParam(name) {
  if (typeof window === "undefined") return "";
  return new URLSearchParams(window.location.search).get(name) || "";
}

/**
 * Generate a unique event_id for a Lead event. Used for BOTH the browser
 * Pixel event and the server-side event so Meta can de-duplicate them.
 */
export function generateEventId() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  // Fallback for older browsers.
  return "lead-" + Math.random().toString(36).slice(2) + "-" + Date.now();
}

/**
 * Build the _fbc cookie value from an fbclid if the cookie isn't already set.
 * Format Meta expects: fb.1.<timestamp_ms>.<fbclid>
 */
export function deriveFbc(existingFbc, fbclid) {
  if (existingFbc) return existingFbc;
  if (!fbclid) return "";
  return `fb.1.${Date.now()}.${fbclid}`;
}

/**
 * Collect every Meta matching parameter available on the client.
 * Call this at submit time and send the result to the webhook.
 */
export function collectMetaParams() {
  const fbclid = getQueryParam("fbclid");
  const fbp = getCookie("_fbp");
  const fbc = deriveFbc(getCookie("_fbc"), fbclid);
  return {
    fbp,
    fbc,
    fbclid,
    event_source_url: typeof window !== "undefined" ? window.location.href : "",
    user_agent: typeof navigator !== "undefined" ? navigator.userAgent : "",
  };
}

/** Fire the browser-side Meta Pixel "Lead" event with a shared event_id. */
export function fireLeadPixel(eventId, params = {}) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  window.fbq("track", "Lead", params, { eventID: eventId });
}
