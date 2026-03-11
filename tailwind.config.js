/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:           '#0c0b09',
        surface:      '#141210',
        card:         '#1a1814',
        moss:         '#576238',
        'moss-light': '#7a8a4e',
        eggshell:     '#F0EADC',
        'egg-dim':    '#b8ae9e',
        slate:        '#8a8070',
        'slate-light':'#b0a898',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans:    ['"DM Sans"', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        blink: {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
}
