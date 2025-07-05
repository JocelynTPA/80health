/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        charcoal: '#1A1C1D',         // primary
        gold: '#B5A581',             // metallic accent
        burgundy: '#6F2C3F',         // refined highlight
        cream: '#F5F4F3',            // light neutral
        white: '#FFFFFF'             // pristine white
      },
    },
  },
  plugins: [],
}
