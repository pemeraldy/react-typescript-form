const colors = require('tailwindcss/colors');
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      lime: colors.lime,
      blue: colors.blue,
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.blue,
      yellow: colors.amber,
      gray: colors.gray,
      white: colors.white,
      indigo: colors.indigo
    },
    extend: {},
    fontFamily:{
      'poppins':['Poppins'],
      'oswald':['Oswold', 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
