/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
        'potta-one': ['Potta One', 'cursive'],
        'moo-lah-lah': ['Moo Lah Lah', 'cursive'],
      },
      colors: {
        'yellow-liz': '#ffbb0c',
        'blue-liz': '#4266f4',
        'gray-light-liz': '#c7c9e2',
        'gray-dark-liz': '#8a8c97',
        'black-liz': '#242731',
        'white-liz': '#efefef'       
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
