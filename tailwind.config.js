/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#1d1d1f',
        gold: '#f5c518'
      }
    }
  },
  plugins: []
}
