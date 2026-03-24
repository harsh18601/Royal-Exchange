import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          ruby: "#E0115F",
          sapphire: "#0F52BA",
          gold: "#D4AF37",
          dark: "#1A1A1A",
          black: "#050505",
          silver: "#C0C0C0",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Outfit", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
      backgroundImage: {
        "luxury-gradient": "linear-gradient(to bottom, #050505, #1A1A1A)",
        "ruby-gradient": "linear-gradient(135deg, #E0115F 0%, #800936 100%)",
        "gold-gradient": "linear-gradient(135deg, #D4AF37 0%, #996515 100%)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
