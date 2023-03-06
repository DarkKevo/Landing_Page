/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}', './pages/**/*.{html,js}', './components/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'dark-nav': '#202040',
        'dark-nav-500': '#343467',
        'purple-g': '#B030B0',
        'gray-g': '#602080',
        'blue-dark': '#161643',
        'code-base': '#09091d'
      },
    },
  },
  plugins: [],
};
