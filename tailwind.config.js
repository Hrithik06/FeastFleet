/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        
      },
      backgroundImage: {
        'grocery': "url('icons/grocery_building.png')",
      },
    },
  },
  plugins: [],
}


