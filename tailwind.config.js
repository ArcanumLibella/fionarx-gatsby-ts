// const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          ultraDark: '#210044',
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
        xl: '6vw', // 64px
        '2xl': '5.5rem', // 88px
        '3xl': '6rem', // 96px
        '4xl': '7.5rem', // 120px
        '5xl': '9rem', // 144px
      },
      backgroundImage: {
        'midnight': "linear-gradient(to right top, rgb(17, 24, 39), rgb(88, 28, 135), rgb(124, 58, 237))')",
        'twilight': "linear-gradient(81.95deg, #410087 -30.67%, #E94057 43.66%, #F27121 96.52%)",
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
  plugins: [],
}
