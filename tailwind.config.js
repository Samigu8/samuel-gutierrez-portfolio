/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // <-- 🔥 enables dark mode via class instead of media query
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8",
        secondary: "#374151",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
