/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {},
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      primaryBlue: '#1E90FF',
      primaryBlueBold: '#2e4057',
      secondaryYellow: '#f4D03f',
      secondaryGrey: '#f5f5f5',
      bodyBackColor: '#f7f8fe',
    },
    fontFamily: {
      sans: ['Lexend', 'sans-serif'],
    },
  },
  plugins: [],
}

