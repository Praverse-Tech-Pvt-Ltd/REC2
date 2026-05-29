"use client";

/**
 * 21st.dev-inspired Animated Dot Grid
 * Pure CSS — zero JS, zero canvas.
 * Dots pulse-fade in staggered waves using CSS animation-delay.
 * Use as a positioned overlay on any section.
 */

type Props = {
  className?: string;
  color?: string;
  gap?: number;
  dotSize?: number;
  rows?: number;
  cols?: number;
};

export default function AnimatedDotGrid({
  className,
  color = "var(--sage)",
  gap = 32,
  dotSize = 2,
  rows = 8,
  cols = 20,
}: Props) {
  const dots = Array.from({ length: rows * cols }, (_, i) => i);

  return (
    <div
      className={`pointer-events-none ${className ?? ""}`}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, ${gap}px)`,
        gridTemplateRows: `repeat(${rows}, ${gap}px)`,
        placeItems: "center",
      }}
      aria-hidden="true"
    >
      {dots.map((i) => {
        const col = i % cols;
        const row = Math.floor(i / cols);
        // stagger delay: diagonal wave
        const delay = ((col + row) % 8) * 0.22;
        return (
          <span
            key={i}
            style={{
              width: dotSize,
              height: dotSize,
              borderRadius: "50%",
              backgroundColor: color,
              opacity: 0,
              animation: `dotPulse 4s ease-in-out ${delay}s infinite`,
            }}
          />
        );
      })}

      <style>{`
        @keyframes dotPulse {
          0%, 100% { opacity: 0.05; }
          45%, 55%  { opacity: 0.55; }
        }
      `}</style>
    </div>
  );
}
