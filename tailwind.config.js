/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        darkblue : "#004191",
        paleblue : "#00BEFF",
        darkish: "#333333",
        greyish : "#dddddd",
        twitter : "#52a8e7",
        linkedin: "#0077b7"
      },
      fontFamily : {
        inter: ["Inter", 'sans-serif' ],
      }
    },
  },
  plugins: [],
}
