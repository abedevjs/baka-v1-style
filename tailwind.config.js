/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      'xl': {'max': '1440px'},
      'lg': {'max': '976px'},
      'md': {'max': '768px'},
      'sm': {'max': '480px'},
    },
    // container: {
    //   center: true,
    //   padding: '2rem',
    // },
    extend: {
      colors: {
        primaryBlue: '#0343FF',
        primaryBlueBold: '#2e4057',
        secondaryYellow: '#f4D03f',
        secondaryYellowTint: '#fbf0c0',
        secondaryGrey: '#f5f5f5',
        bodyBackColor: '#f7f8fe',
        textColor: '#0b2471',
        random: '#40A1FF',
      },
    },
    
    fontFamily: {
      sans: ['Lexend', 'sans-serif'],
    },
  },
  plugins: [],
}

