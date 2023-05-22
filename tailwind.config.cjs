/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        headline: ['Montserrat-ExtraLight'],
        montneg: ['Montserrat-Negrita'],
        montnegruesa: ['Montserrat-Medium'],
        rubik: ['RubikDistressed-Regular'],

      },
      colors: {
        rojoHebe: '#dc3545',
        blancoHebe: '#FFFEFE',
        negroHebe: '#212529',
        grisHebe: '#3d3636',
        grisHover:'#4D4D4D',
      }

    },
  },
  plugins: [],
}
