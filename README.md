# Nationwide Haul — MAC FL Lightweight Spec Dump Trailer (Landing Page)

High-converting, mobile-first landing page promoting the **NEW MAC FL Lightweight Spec Dump Trailer** against the standard MAC FL Spec Dump. Built for Florida fleet managers and larger operations. This is the **English master template**; a Spanish version is derived from it (see below).

Stack: **Next.js (App Router) + React + Tailwind CSS**, deployable to **Vercel**.

---

## Quick start

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev                  # http://localhost:3000
```

Build for production:

```bash
npm run build && npm start
```

---

## Where to edit things (everything is centralized)

| What you want to change | File |
| --- | --- |
| **All copy / wording** (translation-ready) | [`copy/copy.js`](copy/copy.js) |
| **Spec numbers + prices** (calculator + table) | [`data/specs.js`](data/specs.js) |
| **Phone, video URL, yard address, Pixel ID, webhook** | `.env.local` (see `.env.example`) |
| Brand colors / font | [`tailwind.config.js`](tailwind.config.js) |
| Section order | [`app/page.js`](app/page.js) |

### Placeholders to fill before launch
- `data/specs.js` — every value marked `// TODO` (weights, prices, table rows).
- `copy/copy.js → socialProof` — testimonial quote/attribution **or** the stat number.
- `.env.local` — `GHL_WEBHOOK_URL`, `NEXT_PUBLIC_META_PIXEL_ID`, phone, yard.
  (`NEXT_PUBLIC_VSL_VIDEO_URL` already defaults to the YouTube ad and autoplays muted.)
- Replace the dashed `ImagePlaceholder` block in the **Ending** section with a real
  presenter/team photo (no presenter image was supplied; the trailer photos are in
  the carousel).

### Images
- The logo (`/public/nh-black.png`) and the 7 carousel photos (`/public/images/
  gallery-1…7.jpg`) are already web-optimized (resized + compressed). Source 30 MB
  PNGs in `/images` were converted with `sips`.
- Next.js image optimization is **off** (`images.unoptimized` in `next.config.js`)
  because the assets are pre-optimized — they serve as plain cacheable files.
- To re-order or swap carousel photos, edit `SLIDES` in `components/Gallery.js` and
  the matching `copy.gallery.slideAlts`.

### Lead form fields (`copy/copy.js → form.fields`)
First name, last name, phone, work email, fleet size (dropdown), timeline (radio),
in-house f!nancing interest (radio), and a consent checkbox — matching the GHL
intake questions. All values map to flat keys in the webhook payload.

---

## Environment variables

See [`.env.example`](.env.example). Copy it to `.env.local` (local) and add the same
keys in **Vercel → Project → Settings → Environment Variables** (production).

| Var | Required | Purpose |
| --- | --- | --- |
| `GHL_WEBHOOK_URL` | ✅ | GHL Inbound Webhook the form POSTs to (server-side, kept secret). |
| `NEXT_PUBLIC_META_PIXEL_ID` | ✅ | Meta Pixel; fires `PageView` + the `Lead` event. |
| `NEXT_PUBLIC_PHONE_E164` / `_DISPLAY` | ✅ | The number every call CTA dials / shows. |
| `NEXT_PUBLIC_VSL_VIDEO_URL` | optional | VSL video (mp4/YouTube/Vimeo). Falls back to a placeholder. |
| `NEXT_PUBLIC_YARD_LABEL` / `_MAPS_URL` | optional | Lakeland yard label + map link. |

---

## How the form → GHL → Meta flow works

The form is **custom-built** (full visual control), not an embedded GHL form.
On submit ([`components/LeadForm.js`](components/LeadForm.js)):

1. Generates one **`event_id`** (`lib/meta.js`).
2. Fires the **browser Meta Pixel `Lead`** event with that `event_id`.
3. POSTs the form data **+ Meta matching params** to `/api/lead`
   ([`app/api/lead/route.js`](app/api/lead/route.js)), which forwards server-side to
   `GHL_WEBHOOK_URL`.

The payload sent to GHL includes everything Meta needs for **CAPI dedup & match
quality**: `_fbp`, `_fbc`, `fbclid`, email, phone, name, client IP, user-agent, and
the **same `event_id`** as the browser event. In GHL, map these into a Conversions
API action so the server `Lead` event de-duplicates against the browser one.

> No `localStorage` / `sessionStorage` is used anywhere — all state is React state.

---

## Building the Spanish version

1. Copy `copy/copy.js` → `copy/copy.es.js`.
2. Translate the string **values only** (never the keys / structure).
3. In `app/page.js` (and `app/layout.js` for `<head>`), import from `copy.es` instead
   of `copy`, or set up a locale switch. Spec numbers in `data/specs.js` stay shared.

---

## Section map (`app/page.js`)

1. **Hero** — VSL player, outcome-led H1, primary CTA + helper, presenter face.
2. **Comparison Calculator** — interactive conversion engine (loss-frame + payback).
3. **The Nationwide Haul Edge** — value stack of 4.
4. **Social Proof** — subtle testimonial / stat.
5. **Specs** — side-by-side Standard vs Lightweight table.
6. **FAQ** — first-person objection handling, tilted toward the lightweight.
7. **Two-Tier CTA** — primary "Talk to our team" + secondary "Get my quote".
8. **Ending** — peak-end restatement + the lead form (never a cold form).

Brand: Inter; red `#C41010`, white `#F0EFEA`, black `#0C0C0C`. Copy always writes
**"f!nancing"** (with the `!`), no hashtags.
