/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        body:["Cinzel",'Inter','Raleway']
      }
    },
  },
  plugins: [require("daisyui")],
}


// module.exports = {
//   darkMode: 'class',
//   // ...
// }