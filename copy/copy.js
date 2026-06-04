// ============================================================================
//  MASTER COPY: every user-facing string lives here (ENGLISH master).
//  To build the Spanish version, copy this file to copy.es.js, translate the
//  string VALUES only (never the keys), and swap the import in app/page.js.
//
//  BRAND RULES (strict, enforced in copy):
//   - Always write "f!nancing" / "in-house f!nancing" (with the !).
//   - No hashtags. Continuous prose in body copy. No em dashes.
//   - Warm, direct, professional. Audience = FL fleet managers & larger
//     operations. NEVER owner-operators. Tilt objection answers toward the
//     lightweight for margin-minded buyers.
// ============================================================================

export const copy = {
  // ---- <head> / SEO -------------------------------------------------------
  meta: {
    title:
      "MAC FL Lightweight Spec Dump Trailer | Nationwide Haul (Florida)",
    description:
      "The new MAC FL Lightweight dump hauls more legal payload per load than the standard spec. See your numbers, then talk to our Florida team about in-house f!nancing.",
  },

  // ---- Top announcement strip --------------------------------------------
  announcement: "WE F!NANCE ALL EQUIPMENT IN-HOUSE",

  // ---- Sticky nav ---------------------------------------------------------
  nav: {
    brand: "Nationwide Haul",
    logoAlt: "Nationwide Haul",
    primaryCta: "Learn more from our team",
    callLabel: "Call",
  },

  // ---- 1. HERO ------------------------------------------------------------
  hero: {
    eyebrow: "MAC FL Lightweight Spec Dump",
    // Attention-grabbing momentum badge near the top of the hero.
    switchingBadge: "Florida contractors are switching",
    // Pick ONE h1 for the live page; the others are alternates for testing.
    // The page renders `h1Options[0]` by default.
    h1Options: [
      "Move more tons per load, without buying another truck.",
      "Same routes, same hours, more payload on every single load.",
      "The lightweight dump that turns your empty weight into margin.",
    ],
    // Subhead is split so the middle phrase can be highlighter-marked.
    // (Keep it readable as one sentence: start + highlight + end.)
    subheadStart: "The new MAC FL Lightweight Spec ",
    subheadHighlight: "runs lighter than the standard dump",
    subheadEnd:
      ", so every load carries more legal payload. Across a Florida hauling season that extra payload turns straight into margin you keep.",
    primaryCta: "Learn more from our team",
    // Helper microcopy sits directly under the primary CTA.
    helperMicrocopy: "Same Day Answers!",
    // VSL video. Empty = use NEXT_PUBLIC_VSL_VIDEO_URL (the English default).
    videoUrl: "",
    videoLabel: "Watch: the MAC FL Lightweight in action",
    presenterImageAlt:
      "Nationwide Haul specialist ready to answer your questions",
  },

  // ---- AUTHORIZED DEALER + OEM LOGO CAROUSEL -----------------------------
  oem: {
    authorizedBadge: "Authorized MAC dealer",
    heading: "An authorized dealership of MAC Trailer",
    subheading:
      "We sell, spec, and service the brands Florida fleets trust, backed by in-house f!nancing on all of it.",
  },

  // ---- 2. COMPARISON CALCULATOR ------------------------------------------
  calculator: {
    sectionEyebrow: "Run your own numbers",
    heading: "What is the standard dump costing you every month?",
    subheading:
      "Plug in how you actually run. The math below is yours, so adjust it until it matches your operation.",
    inputs: {
      loadsPerWeekLabel: "Loads (runs) per week",
      loadsPerWeekHelp: "Per truck, across a normal week.",
      revenuePerLoadLabel: "Revenue per load",
      revenuePerLoadHelp: "Your average. Change it to match your lanes.",
    },
    outputs: {
      extraPayloadLabel: "Extra legal payload per load",
      extraTonsLabel: "Extra tons moved per month",
      extraRevenueLabel: "Extra revenue per month",
      paybackLabel: "Payback period on the upgrade",
      paybackUnit: "months",
      paybackNever:
        "Add your loads and revenue above to see the payback period.",
    },
    // The headline reframes the gap as money already being lost (loss aversion).
    // "{amount}" is replaced at render with the live monthly figure.
    lossHeadline:
      "You're leaving about {amount}/month on the road with a standard dump.",
    lossSubline:
      "That is the same hours and the same diesel, just less payload on every load.",
    // Transparency builder, shown when the buyer expands "How is this figured?"
    formulaToggle: "How is this figured?",
    formula: {
      intro: "Honest math, no fine print:",
      lines: [
        "Extra payload per load = Lightweight max payload − Standard max payload.",
        "Extra tons per month = extra payload × loads per week × 4.3 weeks ÷ 2,000 lbs.",
        "Extra revenue per month = those extra tons, converted to standard loads, × your revenue per load.",
        "Payback = (Lightweight price − Standard price) ÷ extra revenue per month.",
      ],
      disclaimer:
        "Estimates for planning only. Your lanes, scale tickets, and material density set the real number. We will walk through your actual figures on the call.",
    },
    cta: "Learn more from our team",
    ctaHelper: "Bring these figures and we'll pressure-test them with you.",
  },

  // ---- GALLERY / CAROUSEL ------------------------------------------------
  gallery: {
    eyebrow: "See it for yourself",
    heading: "The MAC FL Lightweight, up close",
    subheading:
      "Real units on our Florida lot. Swipe through, then come see one in person at the Lakeland yard.",
    // Alt text per slide (in order). Edit to describe each real photo.
    slideAlts: [
      "MAC FL Lightweight dump trailer, full side profile",
      "MAC FL Lightweight dump trailer, rear and tailgate",
      "MAC FL Lightweight dump trailer, body detail",
      "MAC FL Lightweight dump trailer, three-quarter view",
      "MAC FL Lightweight dump trailer, suspension and axles",
      "MAC FL Lightweight dump trailer, front detail",
      "MAC FL Lightweight dump trailer, on the lot",
    ],
  },

  // ---- 3. THE NATIONWIDE HAUL EDGE ---------------------------------------
  edge: {
    heading: "Why fleets buy their equipment from Nationwide Haul",
    subheading:
      "The trailer is the start. What you get with it is the reason fleets keep coming back.",
    items: [
      {
        icon: "finance",
        title: "In-house f!nancing on all equipment",
        body:
          "We f!nance every piece of equipment we sell, and equipment you already own or buy elsewhere. One team, decisions that fit how a fleet actually runs.",
      },
      {
        icon: "shield",
        title: "Free trucking insurance quote & policy review",
        body:
          "Our team reviews your current coverage and quotes it side by side, so you know you're not overpaying to keep your fleet on the road.",
      },
      {
        icon: "wrench",
        title: "DOT for Life free inspection",
        body:
          "Every unit gets a complimentary DOT inspection, and we stand behind it for the life you own it. Keep your fleet compliant and rolling.",
      },
      {
        icon: "badge",
        title: "Extended warranty, GAP & roadside",
        body:
          "Protect the investment with extended warranty coverage, GAP, and roadside support, so an unexpected day off the road doesn't become a lost week.",
      },
    ],
  },

  // ---- 4. SOCIAL PROOF (subtle) ------------------------------------------
  socialProof: {
    heading: "What Florida fleets say about us",
    subheading: "Real Google reviews from Nationwide Haul customers.",
    // The reviews screenshot shown in this section.
    image: "/testimonial.jpg",
    imageAlt:
      "Five-star Google reviews for Nationwide Haul from MAC trailer buyers",
  },

  // ---- 5. SPECS / CREDIBILITY --------------------------------------------
  specs: {
    eyebrow: "The numbers, side by side",
    heading: "MAC FL Standard vs. Lightweight",
    subheading:
      "Same MAC build quality. The lightweight spec just gives more of every load back to you as payload.",
    columnRegular: "Standard",
    columnLightweight: "Lightweight",
    footnote:
      "Specs shown for planning. Final spec sheet provided on quote. Payload figures assume legal GVWR limits.",
  },

  // ---- 6. FAQ (objection handling, first-person) -------------------------
  faq: {
    heading: "Straight answers to what fleets ask us",
    items: [
      {
        q: "Is the lightweight really worth the premium over the standard spec?",
        a: "For most fleets running steady miles, yes, and it usually isn't close. The premium is a one-time number; the extra payload pays you back on every single load, for as long as you own the trailer. Run your loads through the calculator above and you'll see the payback period in months, not years. If your routes are light or seasonal, we'll tell you honestly when the standard makes more sense.",
      },
      {
        q: "What about the Federal Excise Tax (FET)?",
        a: "FET applies the same way it would on any new heavy trailer, and we build it into the out-the-door number so there are no surprises. We'll lay out exactly how it factors into your quote and your f!nancing.",
      },
      {
        q: "Do you have units available, or is this a long wait?",
        a: "Availability moves week to week, and Florida-spec units go quickly. The fastest way to lock in a build slot and a price is to talk to our team now, and we'll tell you what's on the ground and what's inbound.",
      },
      {
        q: "How does the in-house f!nancing work?",
        a: "We f!nance in-house, which means we make the decision instead of shopping your file around. That covers this trailer, your whole fleet, and equipment you didn't even buy from us. Bring your numbers and we'll structure terms that fit your cash flow.",
      },
      {
        q: "Can I see it before I commit?",
        a: "Absolutely. Come see it at our Lakeland yard, or we'll send detailed photos, the full spec sheet, and walk you through it over a call. No commitment to look.",
      },
    ],
  },

  // ---- 7. TWO-TIER CTA ----------------------------------------------------
  twoTierCta: {
    heading: "Ready when you are",
    subheading:
      "Talk it through with someone who knows Florida hauling, or jump straight to a quote.",
    primaryLabel: "Learn more from our team",
    primaryHelper: "See it at the Lakeland yard",
    secondaryLabel: "Get my quote",
    secondaryHelper: "For buyers ready to move now",
  },

  // ---- 8. ENDING (peak-end) ----------------------------------------------
  ending: {
    heading: "Run the same hours, move more tons, keep more margin.",
    body:
      "That's the whole point of the lightweight spec. Tell us how you run and we'll show you, with your numbers, exactly what it changes. The next step is one short conversation.",
    primaryCta: "Learn more from our team",
    helper: "Same-day answers on specs and in-house f!nancing.",
    presenterImageAlt: "Nationwide Haul specialist ready to help",
  },

  // ---- LEAD FORM ----------------------------------------------------------
  form: {
    heading: "Learn more from our team",
    subheading:
      "Tell us a little about your operation and we'll get right back to you, usually the same day.",
    fields: {
      firstNameLabel: "First name",
      firstNamePlaceholder: "Jordan",
      lastNameLabel: "Last name",
      lastNamePlaceholder: "Alvarez",
      phoneLabel: "Phone",
      phonePlaceholder: "(863) 555-0100",
      emailLabel: "Work email",
      emailPlaceholder: "you@yourfleet.com",

      fleetSizeLabel: "How big is your fleet?",
      fleetSizePlaceholder: "Select fleet size",
      fleetSizeOptions: [
        { value: "1-2", label: "1 to 2 trucks" },
        { value: "3-9", label: "3 to 9 trucks" },
        { value: "10-24", label: "10 to 24 trucks" },
        { value: "25-49", label: "25 to 49 trucks" },
        { value: "50+", label: "50+ trucks" },
      ],

      timelineLabel: "When do you need it?",
      timelineOptions: [
        { value: "ready_now", label: "Ready now" },
        { value: "1_3_months", label: "Within the next 1 to 3 months" },
        { value: "researching", label: "Just researching for now" },
      ],

      financingLabel: "Do you want in-house f!nancing?",
      financingOptions: [
        { value: "yes", label: "Yes, tell me about f!nancing" },
        { value: "cash", label: "No, paying cash" },
        { value: "explore", label: "I'd like to explore my options" },
      ],

      consentLabel:
        "I agree to be contacted by Nationwide Haul about my inquiry, and to the terms & conditions.",
    },
    submitLabel: "Learn more from our team",
    submittingLabel: "Sending…",
    consentNote:
      "We respect your time and your inbox. No spam, just straight answers.",
    success: {
      heading: "Got it. Thank you.",
      body:
        "Your details are in. A Nationwide Haul specialist will reach out shortly, usually the same day. Prefer to talk now? Give us a call.",
    },
    error:
      "Something went wrong sending your details. Please try again, or call us directly and we'll take care of you.",
  },

  // ---- FOOTER -------------------------------------------------------------
  footer: {
    tagline: "Equipment, in-house f!nancing, and support for Florida fleets.",
    rightsTemplate: "© {year} Nationwide Haul. All rights reserved.",
  },
};

export default copy;
