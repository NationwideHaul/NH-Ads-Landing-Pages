"use client";

import { anchors, site } from "@/lib/site";
import { ArrowRightIcon, PhoneIcon } from "@/components/Icons";

// Reliable smooth-scroll to the lead form. Native "#talk" anchor jumps can be
// swallowed when the target sits inside transformed/animated containers, so we
// scroll explicitly in JS and keep the href as a no-JS fallback.
export function scrollToForm(e) {
  const el = typeof document !== "undefined" && document.getElementById(anchors.form);
  if (!el) return;
  e.preventDefault();

  const headerOffset = 96; // sticky announcement + nav
  const jump = () =>
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.pageYOffset - headerOffset,
      behavior: "instant",
    });

  jump();
  // Re-correct once any scroll-reveals between here and the form have settled.
  setTimeout(() => {
    jump();
    const field = el.querySelector("input, select, textarea");
    if (field) field.focus({ preventScroll: true });
  }, 80);
}

// Primary CTA — the single repeated conversion button. Scrolls to the form.
export function PrimaryCTA({ children, className = "", showArrow = true }) {
  return (
    <a href={`#${anchors.form}`} onClick={scrollToForm} className={`btn-primary ${className}`}>
      <span>{children}</span>
      {showArrow ? <ArrowRightIcon width={18} height={18} /> : null}
    </a>
  );
}

// Secondary CTA — for "ready" buyers. Also points to the form by default.
export function SecondaryCTA({ children, href, className = "" }) {
  const toForm = !href || href === `#${anchors.form}`;
  return (
    <a
      href={href || `#${anchors.form}`}
      onClick={toForm ? scrollToForm : undefined}
      className={`btn-secondary ${className}`}
    >
      {children}
    </a>
  );
}

// Tap-to-call button — uses the env-configured phone number.
export function CallButton({ children, className = "", variant = "secondary" }) {
  const base = variant === "primary" ? "btn-primary" : "btn-secondary";
  return (
    <a href={`tel:${site.phoneE164}`} className={`${base} ${className}`}>
      <PhoneIcon width={18} height={18} />
      <span>{children || site.phoneDisplay}</span>
    </a>
  );
}
