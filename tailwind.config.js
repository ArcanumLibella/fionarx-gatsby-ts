// const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          ultraDark: '#1A0035',
          // ultraDark: '#210044',
          dark: '#3C0D6E',
          DEFAULT: '#410087',
          light: '#7729CC',
          ultraLight: '#E4D8F0',
        },
        white: {
          DEFAULT: '#FBF7FF'
        },
        tomato: {
          DEFAULT: '#E94057'
        },
        orange: {
          DEFAULT: '#F27121'
        },
      },
      fontFamily: {
        brother: ['Brother', 'Impact', 'sans-serif'],
        goku: ['Goku', 'Impact', 'sans-serif'],
        body: ['Josefin Sans', 'sans-serif'],
        // body: ['Josefin Sans', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        // xxs: '.5rem', // 8px
        xs: '.625rem', // 10px
        // tiny: '.75rem', // 12px
        sm: '.875rem', // 14px
        base: '1rem', // 16px
        md: '1.125rem', // 18px
        lg: '2rem', // 32px
        xl: '8vh',
        xxl: '10vh',
        xxxl: '12vh',
      },
      backgroundImage: {
        'midnight': "linear-gradient(to bottom left, #210044, #3C0D6E, #1A0035)",
        'twilight': "linear-gradient(81.95deg, #410087 -30.67%, #E94057 43.66%, #F27121 96.52%)",
      },
      width: {
        12: '48px'
      },
      zIndex: {
        100: 100
      },
      textFillColor: theme => theme('borderColor'),
      textStrokeColor: theme => theme('borderColor'),
      textStrokeWidth: theme => theme('borderWidth'),
      paintOrder: {
        'fsm': { paintOrder: 'fill stroke markers' },
        'fms': { paintOrder: 'fill markers stroke' },
        'sfm': { paintOrder: 'stroke fill markers' },
        'smf': { paintOrder: 'stroke markers fill' },
        'mfs': { paintOrder: 'markers fill stroke' },
        'msf': { paintOrder: 'markers stroke fill' },
      },
    },
  },
  plugins: [
    require('tailwindcss-text-fill-stroke')(), // no options to configure
  ],
}
