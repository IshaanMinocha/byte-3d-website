/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        subhead: ['Protest Riot', 'sans-serif'],
        heading: ['Trispace', 'sans-serif'],
        paratext: ['Poppins', 'sans-serif']
      },
      backgroundImage: {},
      colors: {
        light: '#F6F5F3',
        dark: '#0A0A0A',
        purple: '#D00858',
        yellow: '#FFB502',
        violet: '#30003A'
      }
    }
  },
  plugins: [require("daisyui")],
}
