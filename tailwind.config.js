const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // false or 'media'
  theme: {
    extend: {
      colors: {
        lime: colors.lime,
        emerald: colors.emerald
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
