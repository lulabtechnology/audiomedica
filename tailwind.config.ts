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
          primary: "#2855C5",   // azul principal (logo)
          secondary: "#4B7BFF", // azul más claro
          accent: "#38BDF8",    // celeste toquecito
          dark: "#0F172A",      // casi negro
          light: "#F1F5F9"      // gris muy claro
        }
      },
      boxShadow: {
        soft: "0 22px 45px rgba(15, 23, 42, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
