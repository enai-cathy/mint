import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // gridTemplateColumns: {
      //   "13": "repeat(13, minmax(0, 1fr))",
      // },
      colors: {
        charcoal: "#0F172A",
        skyblue: "#38BDF8",
        gold: "#FACC15",
        slate: "#64748B",
      },
    },
    keyframes: {
      shimmer: {
        "100%": {
          transform: "translateX(100%)",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
