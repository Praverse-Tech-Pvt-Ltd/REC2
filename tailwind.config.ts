import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body:    ["var(--font-body)", "sans-serif"],
      },
      colors: {
        navy:     "var(--navy)",
        "navy-mid": "var(--navy-mid)",
        surface:  "var(--surface)",
        muted:    "var(--muted)",
        border:   "var(--border)",
      },
    },
  },
  plugins: [],
};
export default config;
