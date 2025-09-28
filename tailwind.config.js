/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Kde Tailwind hledá třídy, aby je zahrnul do buildu
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffe8d8ff", // vlastní barevné proměnné
        secondary: "#00154f",
        tercialy: "#f4af1b",
        shadow: "#5c5c5cff",
        background: "#e9fdea",
        primaryFont: "#f4af1b",
        secondaryFont: "#f2bc94",
        tercialyFont: "black",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"], // vlastní font stack
      },
      spacing: {
        128: "32rem", // vlastní rozměry
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem", // vlastní zaoblení rohů
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-250px * 7))" },
        },
      },
      animation: {
        scroll: "scroll 40s linear infinite",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"), // plugin pro hezčí formuláře <input type="text" className="form-input mt-1 block w-full" />
    require("@tailwindcss/typography"), // plugin pro lepší typografii (prose třídy) className="prose"
    require("@tailwindcss/aspect-ratio"), // plugin pro poměr stran obrázků className="aspect-w-16 aspect-h-9"
  ],
};
