"use client";

import { motion } from "framer-motion";

type Props = {
  text: string;
  className?: string;
  charDelay?: number;
  initialDelay?: number;
};

export default function SplitText({
  text,
  className,
  charDelay = 0.04,
  initialDelay = 0.1,
}: Props) {
  return (
    <span className={className} aria-label={text}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            delay: initialDelay + i * charDelay,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : undefined }}
        >
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </span>
  );
}
