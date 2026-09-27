/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",          // aapka single HTML
    "./age-calculator.html",
    // agar baad mein aur files aayein to yahan add kar dena
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f0f7ff',
         100: '#e0effe',
         500: '#2563eb',
         600: '#1d4ed8',
         700: '#1e40af',
         900: '#1e3a8a',
        }
      }
    },
  },
  plugins: [],
}