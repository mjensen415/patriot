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
        background: "var(--background)",
        foreground: "var(--foreground)",
        patriot: {
          red: '#B22222',
          navy: '#1B2A4A',
          gold: '#C8960C',
          cream: '#F9F6F1',
        }
      },
      fontFamily: {
        heading: ['var(--font-oswald)', 'Oswald', 'sans-serif'],
        body: ['var(--font-open-sans)', 'Open Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;
