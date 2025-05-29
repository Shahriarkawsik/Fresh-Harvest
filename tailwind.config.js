/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        greenText: "#749B3F",
      },
      fontFamily: {
        rubik: ["var(--font-rubik)"],
      },
    },
  },
  plugins: [],
};
