/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A1E5C',
        secondary: '#3F6CE0',
        accent: '#2EB97F',
        darkBg: '#050A1F',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #0A1E5C 0%, #050A1F 100%)',
      },
      boxShadow: {
        glow: '0 0 24px 4px #2EB97F55',
      },
      blur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
