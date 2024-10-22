/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        "home": "url('/img/fundoimg.jpg')"
      }
    },
  },
  plugins: [],
}

