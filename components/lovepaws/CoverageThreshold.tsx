"use client";

import { useMemo, useState } from "react";

/**
 * The 70% line, made draggable.
 *
 * Sterilisation coverage below roughly 70% inside a defined area does not slow
 * the population: survivors breed back faster than the programme cuts. That is
 * the hardest idea in the Love Paws argument to carry in prose, so it is shown
 * instead. Drag the coverage and watch the six-year projection flip.
 */

const ZONE_DOGS = 168;
const COLS = 14;
const ROWS = 12; // 14 x 12 = 168
const THRESHOLD = 70;
const YEARS = 6;
const BASE_GROWTH = 0.18; // annual growth of an untouched population

/** Deterministic shuffle, so server and client agree and the zone fills in
 *  scattered rather than sweeping across like a progress bar. */
function seededOrder(n: number): number[] {
  const idx = Array.from({ length: n }, (_, i) => i);
  let seed = 20260817;
  for (let i = n - 1; i > 0; i--) {
    seed = (seed * 1103515245 + 12345) % 2147483648;
    const j = seed % (i + 1);
    [idx[i], idx[j]] = [idx[j], idx[i]];
  }
  return idx;
}

/** Annual rate reaches exactly zero at the threshold, and turns negative above it. */
function project(coverage: number) {
  const rate = BASE_GROWTH * (1 - coverage / THRESHOLD);
  return Array.from({ length: YEARS + 1 }, (_, y) => ZONE_DOGS * Math.pow(1 + rate, y));
}

function verdictFor(coverage: number) {
  if (coverage === 0)
    return "Nothing has happened here. The population grows straight through the programme.";
  if (coverage < 40)
    return "Visible activity, no effect. Every animal treated is replaced before the team returns.";
  if (coverage < 60)
    return "Half the zone done, and the survivors breed back faster than the programme cuts.";
  if (coverage < THRESHOLD)
    return "Sixty-nine per cent is not almost. Below the line, the money bought a smaller treadmill.";
  if (coverage < 85)
    return "Threshold crossed. The population stops replacing itself and begins to fall.";
  return "Past the line and holding. This zone can be closed out, evidenced and handed over.";
}

const CURVE_W = 340;
const CURVE_H = 190;
const Y_MAX = 480;

function curvePath(series: number[]) {
  return series
    .map((v, i) => {
      const x = (i / YEARS) * CURVE_W;
      const y = CURVE_H - (v / Y_MAX) * CURVE_H;
      return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");
}

export default function CoverageThreshold({ color }: { color: string }) {
  const [coverage, setCoverage] = useState(38);

  const order = useMemo(() => seededOrder(ZONE_DOGS), []);
  const treated = Math.round((coverage / 100) * ZONE_DOGS);
  const treatedSet = useMemo(() => new Set(order.slice(0, treated)), [order, treated]);

  const series = project(coverage);
  const doNothing = project(0);
  const endPop = Math.round(series[YEARS]);
  const crossed = coverage >= THRESHOLD;
  const live = crossed ? color : "var(--charcoal)";

  return (
    <div>
      {/* ── Control ──────────────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-end gap-8 sm:gap-14 pb-11">
        <div className="flex-shrink-0">
          <p className="label mb-3">Coverage in this zone</p>
          <div
            className="font-display leading-none tabular-nums"
            style={{ fontSize: "clamp(54px,10vw,88px)", fontWeight: 300, color: live }}
          >
            {coverage}
            <span style={{ fontSize: "0.32em", verticalAlign: "super", marginLeft: 2 }}>%</span>
          </div>
        </div>

        <div className="flex-1 pb-4">
          <label htmlFor="coverage-range" className="label block mb-5">
            Drag to change coverage
          </label>
          <div className="relative">
            <input
              id="coverage-range"
              className="cov-range"
              type="range"
              min={0}
              max={100}
              step={1}
              value={coverage}
              onChange={(e) => setCoverage(Number(e.target.value))}
              aria-valuetext={`${coverage} per cent. ${verdictFor(coverage)}`}
              style={
                {
                  "--cov-accent": color,
                  "--cov-pct": `${coverage}%`,
                } as React.CSSProperties
              }
            />
            <span
              className="absolute pointer-events-none"
              style={{
                left: `${THRESHOLD}%`,
                top: -7,
                width: 1,
                height: 18,
                backgroundColor: "var(--charcoal)",
                opacity: 0.42,
              }}
              aria-hidden="true"
            />
            <span
              className="absolute label pointer-events-none whitespace-nowrap"
              style={{ left: `${THRESHOLD}%`, top: 16, transform: "translateX(-50%)", color: "var(--muted)" }}
              aria-hidden="true"
            >
              70 · the line
            </span>
          </div>
        </div>
      </div>

      {/* ── Panels ───────────────────────────────────────────────────── */}
      <div
        className="grid lg:grid-cols-2 gap-px border"
        style={{ backgroundColor: "var(--border)", borderColor: "var(--border)" }}
      >
        {/* Zone map */}
        <div className="p-7 sm:p-9" style={{ backgroundColor: "var(--cream)" }}>
          <div className="flex items-baseline justify-between gap-4 mb-7">
            <p className="label">Zone 04B / {ZONE_DOGS} dogs</p>
            <p className="text-[11px] tabular-nums" style={{ color: "var(--muted)" }}>
              {treated} sterilised
            </p>
          </div>
          <svg
            viewBox={`0 0 ${COLS * 16} ${ROWS * 16}`}
            className="w-full h-auto"
            role="img"
            aria-label={`Zone map: ${treated} of ${ZONE_DOGS} dogs sterilised`}
          >
            {Array.from({ length: ZONE_DOGS }, (_, i) => {
              const on = treatedSet.has(i);
              return (
                <circle
                  key={i}
                  cx={(i % COLS) * 16 + 8}
                  cy={Math.floor(i / COLS) * 16 + 8}
                  r={on ? 4.6 : 2.9}
                  fill={on ? color : "transparent"}
                  stroke={on ? color : "var(--border-strong)"}
                  strokeWidth={1.1}
                  style={{ transition: "r 200ms ease-out, fill 200ms ease-out, stroke 200ms ease-out" }}
                />
              );
            })}
          </svg>
        </div>

        {/* Projection */}
        <div className="p-7 sm:p-9" style={{ backgroundColor: "var(--cream)" }}>
          <div className="flex items-baseline justify-between gap-4 mb-7">
            <p className="label">Population, next six years</p>
            <p className="text-[11px] tabular-nums" style={{ color: live }}>
              {endPop} dogs by year {YEARS}
            </p>
          </div>
          <svg
            viewBox={`0 0 ${CURVE_W} ${CURVE_H}`}
            className="w-full h-auto overflow-visible"
            role="img"
            aria-label={`Projection: ${ZONE_DOGS} dogs today, ${endPop} after six years at ${coverage} per cent coverage`}
          >
            <line
              x1={0}
              x2={CURVE_W}
              y1={CURVE_H - (ZONE_DOGS / Y_MAX) * CURVE_H}
              y2={CURVE_H - (ZONE_DOGS / Y_MAX) * CURVE_H}
              stroke="var(--border-strong)"
              strokeWidth={1}
              strokeDasharray="2 5"
            />
            <path
              d={curvePath(doNothing)}
              fill="none"
              stroke="var(--border-strong)"
              strokeWidth={1.2}
              strokeDasharray="4 5"
            />
            <path
              d={curvePath(series)}
              fill="none"
              stroke={live}
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ transition: "d 320ms cubic-bezier(0.22,1,0.36,1), stroke 200ms ease-out" }}
            />
            <circle
              cx={CURVE_W}
              cy={CURVE_H - (series[YEARS] / Y_MAX) * CURVE_H}
              r={3.5}
              fill={live}
              style={{ transition: "cy 320ms cubic-bezier(0.22,1,0.36,1), fill 200ms ease-out" }}
            />
          </svg>
          <div className="flex items-center gap-6 mt-6 flex-wrap">
            <span className="flex items-center gap-2 text-[10px]" style={{ color: "var(--muted)" }}>
              <span style={{ width: 15, borderTop: "1.2px dashed var(--border-strong)" }} />
              No programme
            </span>
            <span className="flex items-center gap-2 text-[10px]" style={{ color: "var(--muted)" }}>
              <span style={{ width: 15, height: 2, backgroundColor: live }} />
              At {coverage}% coverage
            </span>
          </div>
        </div>
      </div>

      {/* ── Verdict ──────────────────────────────────────────────────── */}
      <p
        className="font-display mt-9 max-w-[60ch]"
        style={{ fontSize: "clamp(20px,2.7vw,27px)", lineHeight: 1.42, fontWeight: 300, color: live }}
        aria-live="polite"
      >
        {verdictFor(coverage)}
      </p>
      <p className="text-[12px] mt-5 max-w-[70ch]" style={{ color: "var(--faint)", lineHeight: 1.7 }}>
        Illustrative projection. It shows threshold behaviour and direction, not a forecast for any
        specific ward.
      </p>
    </div>
  );
}
