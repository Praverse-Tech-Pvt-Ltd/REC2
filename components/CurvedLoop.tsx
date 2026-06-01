"use client";

/**
 * CurvedLoop — from React Bits (reactbits.dev)
 * Adapted to TypeScript for Next.js 14 App Router.
 * CSS inlined via <style> tag to avoid global CSS import issues.
 *
 * Props:
 *   marqueeText  — text to repeat along the curve
 *   speed        — px per frame (default 2)
 *   curveAmount  — SVG quadratic bezier peak height (default 250)
 *   direction    — "left" | "right"
 *   interactive  — drag-to-scrub enabled
 *   className    — applied to the <text> SVG element (for fill/font)
 */

import { useRef, useEffect, useState, useMemo, useId } from "react";

type Props = {
  marqueeText?: string;
  speed?: number;
  className?: string;
  curveAmount?: number;
  direction?: "left" | "right";
  interactive?: boolean;
};

export default function CurvedLoop({
  marqueeText = "",
  speed = 2,
  className,
  curveAmount = 250,
  direction = "left",
  interactive = true,
}: Props) {
  // Ensure trailing non-breaking space for even repeating
  const text = useMemo(() => {
    const hasTrailing = /\s| $/.test(marqueeText);
    return (hasTrailing ? marqueeText.replace(/\s+$/, "") : marqueeText) + " ";
  }, [marqueeText]);

  const measureRef = useRef<SVGTextElement>(null);
  const textPathRef = useRef<SVGTextPathElement>(null);
  const [spacing, setSpacing] = useState(0);
  const [offset, setOffset] = useState(0);

  const uid = useId();
  const pathId = `curve-${uid.replace(/:/g, "")}`;

  // Gentle S-shaped curve: start flat, peak in the middle, end flat
  const pathD = `M-100,40 Q500,${40 + curveAmount} 1540,40`;

  // Drag state
  const dragRef = useRef(false);
  const lastXRef = useRef(0);
  const dirRef = useRef(direction);
  const velRef = useRef(0);

  // Build repeated text to fill the full SVG width
  const totalText = spacing
    ? Array(Math.ceil(1800 / spacing) + 2).fill(text).join("")
    : text;
  const ready = spacing > 0;

  // Measure single text span length once mounted
  useEffect(() => {
    if (measureRef.current) {
      setSpacing(measureRef.current.getComputedTextLength());
    }
  }, [text, className]);

  // Initialise startOffset after spacing is known
  useEffect(() => {
    if (!spacing) return;
    if (textPathRef.current) {
      const initial = -spacing;
      textPathRef.current.setAttribute("startOffset", `${initial}px`);
      setOffset(initial);
    }
  }, [spacing]);

  // Animation loop
  useEffect(() => {
    if (!spacing || !ready) return;
    let frame = 0;
    const step = () => {
      if (!dragRef.current && textPathRef.current) {
        const delta = dirRef.current === "right" ? speed : -speed;
        const current = parseFloat(
          textPathRef.current.getAttribute("startOffset") ?? "0"
        );
        let next = current + delta;
        if (next <= -spacing) next += spacing;
        if (next > 0) next -= spacing;
        textPathRef.current.setAttribute("startOffset", `${next}px`);
        setOffset(next);
      }
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [spacing, speed, ready]);

  // Drag handlers
  const onPointerDown = (e: React.PointerEvent<SVGSVGElement>) => {
    if (!interactive) return;
    dragRef.current = true;
    lastXRef.current = e.clientX;
    velRef.current = 0;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    if (!interactive || !dragRef.current || !textPathRef.current) return;
    const dx = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;
    velRef.current = dx;
    const current = parseFloat(
      textPathRef.current.getAttribute("startOffset") ?? "0"
    );
    let next = current + dx;
    if (next <= -spacing) next += spacing;
    if (next > 0) next -= spacing;
    textPathRef.current.setAttribute("startOffset", `${next}px`);
    setOffset(next);
  };

  const endDrag = () => {
    if (!interactive) return;
    dragRef.current = false;
    dirRef.current = velRef.current > 0 ? "right" : "left";
  };

  const cursorStyle = interactive
    ? dragRef.current ? "grabbing" : "grab"
    : "default";

  return (
    <>
      {/* Scoped styles — overrides the default "full-screen jacket" */}
      <style>{`
        .cl-jacket {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
        }
        .cl-svg {
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          width: 100%;
          aspect-ratio: 100 / 6;
          overflow: visible;
          display: block;
        }
        @media (max-width: 640px) {
          .cl-svg {
            aspect-ratio: 100 / 10;
          }
        }
      `}</style>

      <div
        className="cl-jacket"
        style={{ visibility: ready ? "visible" : "hidden", cursor: cursorStyle }}
      >
        <svg
          className="cl-svg"
          viewBox="0 0 1440 120"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
        >
          {/* Hidden measurement text */}
          <text
            ref={measureRef}
            xmlSpace="preserve"
            style={{ visibility: "hidden", opacity: 0, pointerEvents: "none" }}
            className={className}
          >
            {text}
          </text>

          <defs>
            <path id={pathId} d={pathD} fill="none" stroke="transparent" />
          </defs>

          {ready && (
            <text xmlSpace="preserve" className={className}>
              <textPath
                ref={textPathRef}
                href={`#${pathId}`}
                startOffset={`${offset}px`}
                xmlSpace="preserve"
              >
                {totalText}
              </textPath>
            </text>
          )}
        </svg>
      </div>
    </>
  );
}
