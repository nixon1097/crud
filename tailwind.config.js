/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},

      fontFamily: {
      'lora': ['Lora', 'sans-serif'],
      'firacode':['Fira Code', 'monospace'],
      'lato':['Lato', 'sans-serif'],
      'nunitosans':['Nunito Sans', 'sans-serif'],
      'roboto':['Roboto', 'sans-serif']
      },
    },
    
  plugins: [], 
  }

