/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#023e8a',
          50: '#e6ecf3',
          100: '#ccd8e8',
          200: '#b3c5dc',
          300: '#9ab2d0',
          400: '#819fc5',
          500: '#678bb9',
          600: '#4e78ad',
          700: '#3565a1',
          800: '#1b5196',
          900: '#023e8a',
          dark: {
            DEFAULT: '#011f45',
            100: '#023e8a',
            200: '#02387c',
            300: '#02326e',
            400: '#012b61',
            500: '#011f45',
            600: '#011937',
            700: '#011329',
            800: '#000c1c',
            900: '#00060e',
          },
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '2rem',
          md: '4rem',
          lg: '5rem',
          xl: '5rem',
        },
      },
    },
  },
  plugins: [],
}
