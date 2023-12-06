/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/index.css",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      dela:["Dela Gothic One", "Montserrat", "cursive"],
      fireshibold:["Nunito", "sans-serif"],
      fireshipnormal:["Nunito", "sans-serif"],
      poppins:["Poppins", "sans-serif"],
      caprasimo:["Titan One", "sans-serif"]
    }
  },
  plugins: [],
}

