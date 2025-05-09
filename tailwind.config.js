/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'studio': { 'min': '1260px', 'max': '1300px' },
        'ipadmac': { 'min': '1120px', 'max': '1150px' },
        'ipadair': { 'min': '820px', 'max': '950px' },
        'ipad': { 'min': '450px', 'max': '810px' },
      },
    },
  },
  plugins: [],
}

