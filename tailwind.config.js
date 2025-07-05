/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#1A1C1D',
        gold: '#B5A581'
      }
    }
  },
  plugins: []
}
