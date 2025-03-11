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
        pri: '#0076BE',
        icon: '#0076be',
        feature: '#f1f5f6',
        lightgray: '#8e9a9d',
        neutral: 'gray',
        hover: '#4E1CFF',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      container: {
        center: true,
        paddingInline: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
    },
  },
  plugins: [],
};
