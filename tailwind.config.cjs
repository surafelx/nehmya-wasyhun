/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        'secondary-gray': '#1A1C1D',
        'secondary-black': '#050709',
      },
    },
  },
  plugins: [],
};
