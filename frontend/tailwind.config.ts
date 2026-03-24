import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          ruby: "#E0115F",
          sapphire: "#0F52BA",
          gold: "#D4AF37",
          dark: "#1A1A1A",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
