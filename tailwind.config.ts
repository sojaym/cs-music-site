import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./releases/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        panel: "#101010",
        panel2: "#171717",
        line: "rgba(255,255,255,0.13)",
        soft: "#f2f2f2",
        muted: "#a6a6a6",
        quiet: "#707070",
        violet: "#8b3dff",
        magenta: "#d94fd4",
        signal: "#64d68a",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "Helvetica", "sans-serif"],
      },
      boxShadow: {
        modal: "0 40px 120px rgba(0,0,0,0.55)",
      },
    },
  },
  plugins: [],
};

export default config;
