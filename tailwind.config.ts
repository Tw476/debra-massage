import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#f8f4ed",
        linen: "#eee4d7",
        sage: "#8fa58f",
        eucalyptus: "#526a5e",
        clay: "#b98d76",
        ink: "#1f2923"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Cormorant Garamond", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(41, 51, 44, 0.12)"
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        rise: "rise 700ms ease-out both"
      }
    }
  },
  plugins: []
};

export default config;
