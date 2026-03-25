import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Stitch design system
        "ps-bg":          "#071325",
        "ps-surface":     "#071325",
        "ps-container":   "#101c2e",
        "ps-container-hi":"#1f2a3d",
        "ps-container-hx":"#2a3548",
        "ps-container-lo":"#030e20",
        "ps-bright":      "#2e394d",
        "ps-red":         "#c8102e",
        "ps-red-light":   "#ffb3b1",
        "ps-gold":        "#e6c364",
        "ps-gold-dark":   "#785d00",
        "ps-on-surface":  "#d7e3fc",
        "ps-muted":       "#e5bdbb",
        "ps-outline":     "#5c403f",
      },
      fontFamily: {
        headline: ["var(--font-space-grotesk)", "Space Grotesk", "sans-serif"],
        body:     ["var(--font-public-sans)",   "Public Sans",   "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg:      "0.25rem",
        xl:      "0.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
