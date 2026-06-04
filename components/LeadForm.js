"use client";

import { useState } from "react";
import { copy } from "@/copy/copy";
import { site } from "@/lib/site";
import {
  collectMetaParams,
  generateEventId,
  fireLeadPixel,
} from "@/lib/meta";
import { CheckIcon } from "@/components/Icons";

// Custom-designed lead form (NOT an embedded GHL form). On submit it:
//  1) generates a single event_id,
//  2) fires the browser Meta Pixel "Lead" event with that event_id,
//  3) POSTs the form data + Meta matching params to /api/lead → GHL webhook.
// All state is in React (no localStorage / sessionStorage).
export default function LeadForm() {
  const f = copy.form;
  const fields = f.fields;

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    fleetSize: "",
    timeline: "",
    financing: "",
    consent: false,
  });
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState("");

  function update(field) {
    return (e) =>
      setValues((v) => ({
        ...v,
        [field]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
      }));
  }
  function setField(field, value) {
    setValues((v) => ({ ...v, [field]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    setErrorMsg("");

    // One shared id for browser Pixel + server CAPI event → Meta de-dups them.
    const eventId = generateEventId();
    const meta = collectMetaParams();
    const fullName = `${values.firstName} ${values.lastName}`.trim();

    // 1) Browser-side Pixel Lead event.
    fireLeadPixel(eventId, { content_name: "MAC FL Lightweight LP" });

    // 2) Server-side forward to GHL (which can fire CAPI with the same id).
    const payload = {
      ...values,
      name: fullName,
      event_id: eventId,
      fbp: meta.fbp,
      fbc: meta.fbc,
      fbclid: meta.fbclid,
      event_source_url: meta.event_source_url,
      user_agent: meta.user_agent,
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || "Request failed");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(f.error);
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-white p-8 text-center shadow-lg ring-1 ring-brand-black/10">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
          <CheckIcon width={30} height={30} />
        </span>
        <h3 className="mt-4 text-2xl font-extrabold text-brand-black">
          {f.success.heading}
        </h3>
        <p className="mt-3 text-brand-black/70">{f.success.body}</p>
        <a href={`tel:${site.phoneE164}`} className="btn-primary mt-6">
          {site.phoneDisplay}
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-brand-black/10 sm:p-8"
    >
      <h3 className="text-2xl font-extrabold text-brand-black">{f.heading}</h3>
      <p className="mt-2 text-sm text-brand-black/70">{f.subheading}</p>

      <div className="mt-6 space-y-5">
        {/* First + last name */}
        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            id="firstName"
            label={fields.firstNameLabel}
            placeholder={fields.firstNamePlaceholder}
            value={values.firstName}
            onChange={update("firstName")}
            autoComplete="given-name"
            required
          />
          <Field
            id="lastName"
            label={fields.lastNameLabel}
            placeholder={fields.lastNamePlaceholder}
            value={values.lastName}
            onChange={update("lastName")}
            autoComplete="family-name"
            required
          />
        </div>

        {/* Phone + email */}
        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            id="phone"
            type="tel"
            label={fields.phoneLabel}
            placeholder={fields.phonePlaceholder}
            value={values.phone}
            onChange={update("phone")}
            autoComplete="tel"
            required
          />
          <Field
            id="email"
            type="email"
            label={fields.emailLabel}
            placeholder={fields.emailPlaceholder}
            value={values.email}
            onChange={update("email")}
            autoComplete="email"
            required
          />
        </div>

        {/* Fleet size */}
        <div>
          <label htmlFor="fleetSize" className="block text-sm font-semibold text-brand-black">
            {fields.fleetSizeLabel} <span className="text-brand-red">*</span>
          </label>
          <select
            id="fleetSize"
            value={values.fleetSize}
            onChange={update("fleetSize")}
            required
            className="mt-1.5 w-full rounded-xl border border-brand-black/15 bg-white px-4 py-3 text-brand-black outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red"
          >
            <option value="" disabled>
              {fields.fleetSizePlaceholder}
            </option>
            {fields.fleetSizeOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Timeline (radio cards) */}
        <RadioGroup
          name="timeline"
          label={fields.timelineLabel}
          options={fields.timelineOptions}
          value={values.timeline}
          onSelect={(v) => setField("timeline", v)}
        />

        {/* Financing (radio cards) */}
        <RadioGroup
          name="financing"
          label={fields.financingLabel}
          options={fields.financingOptions}
          value={values.financing}
          onSelect={(v) => setField("financing", v)}
        />

        {/* Consent */}
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            checked={values.consent}
            onChange={update("consent")}
            required
            className="mt-0.5 h-5 w-5 shrink-0 accent-brand-red"
          />
          <span className="text-xs leading-relaxed text-brand-black/70">
            {fields.consentLabel}
          </span>
        </label>
      </div>

      {status === "error" ? (
        <p className="mt-4 rounded-lg bg-brand-red/10 px-4 py-3 text-sm text-brand-red">
          {errorMsg}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary mt-6 w-full transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? f.submittingLabel : f.submitLabel}
      </button>

      <p className="mt-3 text-center text-xs text-brand-black/50">{f.consentNote}</p>
    </form>
  );
}

function Field({ id, label, type = "text", required, ...rest }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-brand-black">
        {label}
        {required ? <span className="text-brand-red"> *</span> : null}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-xl border border-brand-black/15 bg-white px-4 py-3 text-brand-black outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red"
        {...rest}
      />
    </div>
  );
}

// Accessible radio-card group — tactile, mobile-friendly choices.
function RadioGroup({ name, label, options, value, onSelect }) {
  return (
    <fieldset>
      <legend className="block text-sm font-semibold text-brand-black">
        {label} <span className="text-brand-red">*</span>
      </legend>
      <div className="mt-2 grid gap-2">
        {options.map((opt) => {
          const active = value === opt.value;
          return (
            <label
              key={opt.value}
              className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm transition ${
                active
                  ? "border-brand-red bg-brand-red/5 font-semibold text-brand-black"
                  : "border-brand-black/15 text-brand-black/80 hover:border-brand-red/40"
              }`}
            >
              <input
                type="radio"
                name={name}
                value={opt.value}
                checked={active}
                onChange={() => onSelect(opt.value)}
                required
                className="h-4 w-4 accent-brand-red"
              />
              {opt.label}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
