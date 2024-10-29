/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily:{
      'sans':['Poppins', 'sans-serif']
    },     
    extend: {
      backgroundImage:{
        "home": "url('/img/fundoimg.jpg')",
        "video": "url('/img/cafeteria-1920w.png')",
        "img1": "url('/img/coffee.jpeg')"
        
      }
    },
  },
  plugins: [],
}

