"use client";

import { useEffect, useState } from "react";
import { SECTOR_COLORS } from "@/lib/data";

/**
 * Thin fixed progress bar. As the page scrolls, it reveals a left-anchored
 * slice of a viewport-fixed gradient spanning all six sector colors —
 * so scrolling the site literally moves you through the palette,
 * energy at the top through sport at the bottom.
 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrollable = el.scrollHeight - el.clientHeight;
      setProgress(scrollable > 0 ? (el.scrollTop / scrollable) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const gradient = `linear-gradient(90deg, ${Object.values(SECTOR_COLORS).join(", ")})`;

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[60] pointer-events-none">
      <div
        style={{
          width: `${progress}%`,
          height: "100%",
          backgroundImage: gradient,
          backgroundSize: "100vw 100%",
          backgroundAttachment: "fixed",
          transition: "width 60ms linear",
        }}
      />
    </div>
  );
}
