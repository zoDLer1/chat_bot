/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",],
  theme: {
    extend: {
      boxShadow: {
        '10_30': '0 0px 20px rgba(0, 0, 0, 0.20)',
        '70_20': '0 10px 70px 0 rgb(0 0 0 / 20%)'
      },
    }
  },
  plugins: [],
}

