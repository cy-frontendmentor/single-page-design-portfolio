/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "745px",
      lg: "1049px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-plusJakartaSans)"],
      },
      colors: {
        "blue-galactic": "#755CD3",
        "yellow-summer": "#F6A560",
        pink: "#F39E9E",
        "red-light": "#EB7565",
        cyan: "#61C4B7",
        "dark-purple": "#552049",
        black: "#030303",
        "brown-medium": "#7A746E",
        "cream-light": "#FFF7F0",
      },
    },
  },
  plugins: [],
};
