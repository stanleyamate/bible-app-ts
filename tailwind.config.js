/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      height: {
        'h-100':'80vh'
      },
      fontFamily:{
      'Cormorant':['Cormorant', 'serif']
    }, backgroundImage: {
      'not-found': "url('./img/page-not-found.png')"
    }
    },
  },
  plugins: [],
}
