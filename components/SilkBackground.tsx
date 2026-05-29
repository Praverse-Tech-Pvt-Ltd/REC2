"use client";

import { useEffect, useRef } from "react";

type Props = {
  className?: string;
  opacity?: number;
  speed?: number;
};

// Visible sage × cream ribbon palette — boosted for legibility
const RIBBON_COLORS = [
  "rgba(152, 196, 148, 0.38)", // vivid sage green
  "rgba(195, 218, 193, 0.32)", // medium sage
  "rgba(230, 240, 228, 0.45)", // pale sage panel
  "rgba(242, 237, 229, 0.36)", // warm cream
  "rgba(168, 205, 164, 0.28)", // medium-deep sage
  "rgba(255, 252, 245, 0.40)", // near-white cream
  "rgba(140, 188, 136, 0.22)", // deep sage accent
];

const N = 7;

export default function SilkBackground({ className, opacity = 1, speed = 0.0007 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let t = 0;
    let W = 0, H = 0;

    const resize = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width  = W * window.devicePixelRatio;
      canvas.height = H * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const draw = () => {
      t += speed;
      ctx.clearRect(0, 0, W, H);

      for (let i = 0; i < N; i++) {
        const frac  = i / N;
        const phase = frac * Math.PI * 2.3;
        const baseY = frac * H * 1.15 - H * 0.07;

        ctx.beginPath();

        let first = true;
        for (let x = 0; x <= W; x += 3) {
          const xn = x / W;
          const y = baseY
            + Math.sin(xn * 2.6 + t       + phase)       * H * 0.09
            + Math.sin(xn * 1.3 + t * 0.5 + phase * 1.5) * H * 0.06
            + Math.sin(xn * 5.1 + t * 1.5 + phase * 0.7) * H * 0.03;

          if (first) { ctx.moveTo(x, y); first = false; }
          else ctx.lineTo(x, y);
        }

        ctx.lineTo(W, H + 60);
        ctx.lineTo(0, H + 60);
        ctx.closePath();

        const grad = ctx.createLinearGradient(0, baseY - H * 0.06, 0, baseY + H * 0.22);
        grad.addColorStop(0, RIBBON_COLORS[i % RIBBON_COLORS.length]);
        grad.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = grad;
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [speed]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ display: "block", width: "100%", height: "100%", opacity }}
      aria-hidden="true"
    />
  );
}
