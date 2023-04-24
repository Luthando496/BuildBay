/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        castoro: ['Castoro Titling'],
        playfair: ['Playfair Display'],
        roboto: ['Roboto'],
      },
    },
  },
  plugins: [],
}