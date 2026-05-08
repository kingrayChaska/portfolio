/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        card: "var(--card)",
        moss: "var(--moss)",
        "moss-light": "var(--moss-light)",
        eggshell: "var(--eggshell)",
        "egg-dim": "var(--egg-dim)",
        slate: "var(--slate)",
        "slate-light": "var(--slate-light)",
        "text-muted": "var(--text-muted)",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "serif"],
        sans: ['"DM Sans"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      keyframes: {
        blink: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};
