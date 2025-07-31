/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './public/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        border: '#e5e7eb',
      },
      borderColor: theme => ({
        border: theme('colors.border'),
      }),
    },
  },
  plugins: [],
}
