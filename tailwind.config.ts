import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      fontFamily: {
        heading: ['"Montserrat Variable"', "Montserrat", "sans-serif"],
        body: ['"Open Sans"', "sans-serif"],
      },
      // Cores extraídas do logotipo da Monte Sinai.
      colors: {
        brand: {
          navy: "#1d2c5e",
          "navy-dark": "#141f45",
          teal: "#1e625e",
          orange: "#f39a1e",
          lime: "#c6c92f",
        },
        ink: "#16203f",
        muted: "#5b6478",
        surface: "#f4f6fa",
        line: "#e1e5ee",
      },
      keyframes: {
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
} satisfies Config;
