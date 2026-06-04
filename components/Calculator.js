"use client";

import { useMemo, useState } from "react";
import { copy as defaultCopy } from "@/copy/copy";
import { anchors } from "@/lib/site";
import { trailers, calculatorDefaults, calculatorBounds } from "@/data/specs";
import {
  computeComparison,
  formatUSD,
  formatNumber,
  formatMonths,
} from "@/lib/calc";
import { ArrowRightIcon, ChevronDownIcon } from "@/components/Icons";
import { scrollToForm } from "@/components/CTA";

// SECTION 2 — THE COMPARISON CALCULATOR. Interactive centerpiece.
// Buyer enters loads/week + revenue/load; outputs update live. Loss-framed
// headline + payback period. Math is shown on expand for trust. Ends with CTA.
export default function Calculator({ copy = defaultCopy }) {
  const c = copy.calculator;

  const [loadsPerWeek, setLoadsPerWeek] = useState(
    calculatorDefaults.loadsPerWeek
  );
  const [revenuePerLoad, setRevenuePerLoad] = useState(
    calculatorDefaults.revenuePerLoad
  );
  const [showFormula, setShowFormula] = useState(false);

  const result = useMemo(
    () =>
      computeComparison({
        trailers,
        loadsPerWeek: Number(loadsPerWeek) || 0,
        revenuePerLoad: Number(revenuePerLoad) || 0,
        weeksPerMonth: calculatorDefaults.weeksPerMonth,
      }),
    [loadsPerWeek, revenuePerLoad]
  );

  const payback = formatMonths(result.paybackMonths);

  return (
    <section id={anchors.calculator} className="section bg-brand-black text-brand-white">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{c.sectionEyebrow}</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            {c.heading}
          </h2>
          <p className="mt-4 text-lg text-brand-white/70">{c.subheading}</p>
        </div>

        <div className="mx-auto mt-10 max-w-5xl rounded-3xl bg-brand-white/5 p-5 ring-1 ring-white/10 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* ---- Inputs ---- */}
            <div className="space-y-8">
              {/* Loads per week */}
              <div>
                <label
                  htmlFor="loadsPerWeek"
                  className="flex items-baseline justify-between"
                >
                  <span className="text-sm font-semibold">
                    {c.inputs.loadsPerWeekLabel}
                  </span>
                  <span className="text-2xl font-extrabold text-brand-red">
                    {formatNumber(loadsPerWeek)}
                  </span>
                </label>
                <input
                  id="loadsPerWeek"
                  type="range"
                  min={calculatorBounds.loadsPerWeekMin}
                  max={calculatorBounds.loadsPerWeekMax}
                  step={calculatorBounds.loadsPerWeekStep}
                  value={loadsPerWeek}
                  onChange={(e) => setLoadsPerWeek(Number(e.target.value))}
                  className="mt-3 w-full accent-brand-red"
                  aria-describedby="loadsPerWeekHelp"
                />
                <p id="loadsPerWeekHelp" className="mt-1 text-xs text-brand-white/50">
                  {c.inputs.loadsPerWeekHelp}
                </p>
              </div>

              {/* Revenue per load */}
              <div>
                <label
                  htmlFor="revenuePerLoad"
                  className="text-sm font-semibold"
                >
                  {c.inputs.revenuePerLoadLabel}
                </label>
                <div className="mt-2 flex items-center rounded-xl bg-brand-white px-4 text-brand-black focus-within:ring-2 focus-within:ring-brand-red">
                  <span className="text-lg font-bold">$</span>
                  <input
                    id="revenuePerLoad"
                    type="number"
                    inputMode="decimal"
                    min={calculatorBounds.revenuePerLoadMin}
                    max={calculatorBounds.revenuePerLoadMax}
                    value={revenuePerLoad}
                    onChange={(e) => setRevenuePerLoad(Number(e.target.value))}
                    className="w-full bg-transparent px-2 py-3 text-lg font-semibold outline-none"
                    aria-describedby="revenuePerLoadHelp"
                  />
                </div>
                <p
                  id="revenuePerLoadHelp"
                  className="mt-1 text-xs text-brand-white/50"
                >
                  {c.inputs.revenuePerLoadHelp}
                </p>
              </div>

              {/* Secondary outputs */}
              <dl className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
                <Stat
                  label={c.outputs.extraPayloadLabel}
                  value={`+${formatNumber(result.extraPayloadPerLoadLbs)} lbs`}
                />
                <Stat
                  label={c.outputs.extraTonsLabel}
                  value={`+${formatNumber(result.extraTonsPerMonth, { decimals: 1 })} tons`}
                />
                <Stat
                  label={c.outputs.paybackLabel}
                  value={
                    payback != null
                      ? `${formatNumber(payback, { decimals: 1 })} ${c.outputs.paybackUnit}`
                      : "n/a"
                  }
                />
              </dl>
            </div>

            {/* ---- The loss-framed payoff ---- */}
            <div className="flex flex-col justify-between rounded-2xl bg-brand-red p-6 sm:p-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
                  {c.outputs.extraRevenueLabel}
                </p>
                <p className="mt-1 text-5xl font-extrabold leading-none sm:text-6xl">
                  {formatUSD(result.extraRevenuePerYear)}
                </p>
                <p className="mt-2 text-sm text-white/75">
                  {c.outputs.perMonthNote.replace(
                    "{amount}",
                    formatUSD(result.extraRevenuePerMonth)
                  )}
                </p>
                <p className="mt-5 text-2xl font-bold leading-tight">
                  {c.lossHeadline.replace(
                    "{amount}",
                    formatUSD(result.extraRevenuePerYear)
                  )}
                </p>
                <p className="mt-3 text-white/85">{c.lossSubline}</p>
                {payback != null ? (
                  <p className="mt-4 text-sm text-white/80">
                    {c.outputs.paybackLabel}:{" "}
                    <strong className="font-bold">
                      {formatNumber(payback, { decimals: 1 })}{" "}
                      {c.outputs.paybackUnit}
                    </strong>
                  </p>
                ) : (
                  <p className="mt-4 text-sm text-white/80">
                    {c.outputs.paybackNever}
                  </p>
                )}
              </div>

              <a
                href={`#${anchors.form}`}
                onClick={scrollToForm}
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-white px-6 py-4 text-base font-semibold text-brand-black transition hover:brightness-95"
              >
                {c.cta}
                <ArrowRightIcon width={18} height={18} />
              </a>
              <p className="mt-2 text-center text-xs text-white/80">
                {c.ctaHelper}
              </p>
            </div>
          </div>

          {/* ---- Formula transparency ---- */}
          <div className="mt-6 border-t border-white/10 pt-4">
            <button
              type="button"
              onClick={() => setShowFormula((v) => !v)}
              aria-expanded={showFormula}
              className="flex items-center gap-2 text-sm font-semibold text-brand-white/80 hover:text-brand-white"
            >
              <ChevronDownIcon
                width={18}
                height={18}
                className={`transition ${showFormula ? "rotate-180" : ""}`}
              />
              {c.formulaToggle}
            </button>
            {showFormula ? (
              <div className="mt-4 animate-fade-up rounded-xl bg-brand-black/40 p-5 text-sm text-brand-white/75">
                <p className="font-semibold text-brand-white">
                  {c.formula.intro}
                </p>
                <ul className="mt-3 space-y-2">
                  {c.formula.lines.map((line, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-brand-red">•</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-brand-white/50">
                  {c.formula.disclaimer}
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl bg-brand-white/5 p-4 ring-1 ring-white/10">
      <dt className="text-xs font-medium uppercase tracking-wide text-brand-white/50">
        {label}
      </dt>
      <dd className="mt-1 text-xl font-extrabold">{value}</dd>
    </div>
  );
}
