/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",],
  theme: {
    extend: {
      boxShadow: {
        '10_30': '0 0px 20px rgba(0, 0, 0, 0.20)',
      },
      colors: {
        gray: {
            75: '#e2e8f0'
        },
        primary: {
            300: '#4299e1'
        }
      }
    }
  },
  plugins: [],
}

