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
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
    },
    keyframes: {
      shimmer: {
        "100%": {
          transform: "translateX(100%)",
        },
      },
      float: {
        "0%, 100%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-8px)" },
      },
    },
      animation: {
        float: "float 2s ease-in-out infinite",
      },
    
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
export default config;
