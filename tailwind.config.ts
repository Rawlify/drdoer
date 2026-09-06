import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#e6f9fd",
          100: "#cbf2fa",
          200: "#9ae5f6",
          300: "#57d2f0",
          400: "#20bde3", // Original primary cyan
          500: "#0ea5c6", // Original dark cyan
          600: "#0b84a3",
          700: "#0d6a84",
          800: "#13576c",
          900: "#14485b",
          950: "#072f3d",
        },
        navy: {
          800: "#1e293b",
          900: "#0f172a",
          950: "#080d1a",
        },
        accent: {
          purple: "#7c3aed",
          indigo: "#6366f1",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glass: "0 10px 30px rgba(0, 0, 0, 0.05)",
        "glass-hover": "0 15px 45px rgba(32, 189, 227, 0.15)",
        "layered": "0 20px 50px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.05)",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.03)" },
        },
      },
      animation: {
        shimmer: "shimmer 2s infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
