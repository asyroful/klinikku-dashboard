/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors: {
      primary: '#0063ED',
      surface: '#CCE0FB',
      hover: '#0052C5',
    },
    extend: {
      backgroundColor: ['active']
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
