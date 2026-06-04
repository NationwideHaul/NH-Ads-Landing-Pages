// ============================================================================
//  POST /api/lead
//  Receives the custom form payload + Meta matching params from the client,
//  then forwards everything to the GoHighLevel Inbound Webhook server-side.
//
//  Why server-side: keeps GHL_WEBHOOK_URL out of the browser, avoids CORS,
//  and lets GHL fire the Meta Conversions API "Lead" event using the SAME
//  event_id the browser Pixel used — so Meta de-duplicates the two events.
// ============================================================================

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid JSON." }, { status: 400 });
  }

  // Route to the GHL webhook for the form's language.
  //   en -> GHL_WEBHOOK_URL        (English workflow)
  //   es -> GHL_WEBHOOK_URL_ES     (Spanish workflow), falls back to English.
  const locale = String(body.locale || "en").toLowerCase();
  const webhookUrl =
    locale === "es"
      ? process.env.GHL_WEBHOOK_URL_ES || process.env.GHL_WEBHOOK_URL
      : process.env.GHL_WEBHOOK_URL;

  if (!webhookUrl || webhookUrl.includes("PLACEHOLDER")) {
    // Don't 500 when the env var isn't set yet — make it obvious.
    return Response.json(
      {
        ok: false,
        error: `Webhook for locale "${locale}" is not configured. Set ${
          locale === "es" ? "GHL_WEBHOOK_URL_ES" : "GHL_WEBHOOK_URL"
        } in Vercel env vars.`,
      },
      { status: 503 }
    );
  }

  // Minimal server-side validation (the UI validates too).
  const firstName = String(body.firstName || "").trim();
  const lastName = String(body.lastName || "").trim();
  const name = String(body.name || `${firstName} ${lastName}`).trim();
  const email = String(body.email || "").trim();
  const phone = String(body.phone || "").trim();
  if (!name || !email || !phone) {
    return Response.json(
      { ok: false, error: "Name, email, and phone are required." },
      { status: 422 }
    );
  }

  // Derive client IP + UA so GHL can pass them to the Conversions API.
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "";
  const userAgent =
    body.user_agent || request.headers.get("user-agent") || "";

  // Flat payload — easy to map inside a GHL workflow.
  const payload = {
    // Contact fields
    name,
    first_name: firstName,
    last_name: lastName,
    email,
    phone,
    fleet_size: String(body.fleetSize || "").trim(),
    timeline: String(body.timeline || "").trim(),
    financing: String(body.financing || "").trim(),
    consent: Boolean(body.consent),

    // Lead source context
    source: locale === "es" ? "MAC FL Lightweight LP (ES)" : "MAC FL Lightweight LP (EN)",
    locale,
    page_url: body.event_source_url || "",
    submitted_at: new Date().toISOString(),

    // ---- Meta matching params (for CAPI dedup + match quality) ----
    event_name: "Lead",
    event_id: String(body.event_id || ""), // SAME id as the browser Pixel event
    fbp: body.fbp || "",
    fbc: body.fbc || "",
    fbclid: body.fbclid || "",
    client_ip_address: ip,
    client_user_agent: userAgent,
  };

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      return Response.json(
        { ok: false, error: `Webhook responded ${res.status}.`, detail: text.slice(0, 300) },
        { status: 502 }
      );
    }

    return Response.json({ ok: true });
  } catch (err) {
    return Response.json(
      { ok: false, error: "Failed to reach the webhook.", detail: String(err).slice(0, 300) },
      { status: 502 }
    );
  }
}
