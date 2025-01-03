/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        secondary: '#10143b',
        primary: '#018AFF',
        danger: '#e74c3c',
        light_blue: '#1fa2ff',
        dark_blue: '#001F91',
      },
    },
  },
  plugins: [],
};
