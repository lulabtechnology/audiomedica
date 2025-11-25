import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#2563EB",      // azul principal (similar al logo)
          blueDark: "#1D4ED8",
          gray: "#4B5563",
          light: "#F3F4F6"
        }
      },
      boxShadow: {
        soft: "0 20px 45px rgba(15, 23, 42, 0.35)"
      },
      borderRadius: {
        "3xl": "1.75rem"
      }
    }
  },
  plugins: []
};

export default config;
