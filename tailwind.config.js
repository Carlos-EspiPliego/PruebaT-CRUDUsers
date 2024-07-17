/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#151823',
        container: '#1E212F',
        line: '#2C2F3F',
        input: '#2F3349',
        inputstroke: '#434968',
        // Colores para el texto
        text: {
          body: '#A599AD',
          title: '#F2EDF6',
        },
        primary: {
          100: '#DFD1E9',
          200: '#C0A3D3',
          300: '#A075BE',
          400: '#8147A8',
          500: '#611992',
          600: '#571783',
          700: '#52157C',
          800: '#4E1475',
          900: '#49136D',
        }
      }
    },
  },
  plugins: [],
}