module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // screens: {
    //   'xxl': '1920px', // For very large screens
    // },
    extend: {
      colors: {
        purple: {
          ultraDark: '#1A0035',
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
      },
      fontSize: {
        xxs: '.5rem', // 8px
        xs: '.625rem', // 10px
        tiny: '.75rem', // 12px
        sm: '.875rem', // 14px
        base: '1rem', // 16px
        md: '1.125rem', // 18px
        lg: '2rem', // 32px
        // xl: '8vw',
        // '2xl': '8vh',
        // '3xl': '10vh',
        // '4xl': '12vh',
      },
      backgroundImage: {
        'midnight': "linear-gradient(to bottom left, #210044, #3C0D6E, #1A0035)",
        'twilight': "linear-gradient(81.95deg, #410087 -30.67%, #E94057 43.66%, #F27121 96.52%)",
      },
      maxWidth: {
        '8/12': '66%'
      },
      height: {
        12: '48px',
      },
      width: {
        12: '48px',
        54: '216px',
      },
      zIndex: {
        100: 100
      },
      keyframes: {
        movement: {
          '0%, 100%': { transform: 'translateY(4%) rotateY(4deg)' },
          '50%': { transform: 'translateY(8%) rotateY(12deg)' },
          '100%': { transform: 'translateY(4%) rotateY(4deg)' },
        },
        transform: {
          '0%, 100%': { borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%' },
          '14%': { borderRadius: '40% 60% 54% 46% / 49% 60% 40% 51%' },
          '28%': { borderRadius: '54% 46% 38% 62% / 49% 70% 30% 51%' },
          '42%': { borderRadius: '61% 39% 55% 45% / 61% 38% 62% 39%' },
          '56%': { borderRadius: '61% 39% 67% 33% / 70% 50% 50% 30%' },
          '70%': { borderRadius: '50% 50% 34% 66% / 56% 68% 32% 44%' },
          '84%': { borderRadius: '46% 54% 50% 50% / 35% 61% 39% 65%' },
        },
        transform3s: {
          '0%, 100%': { borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%' },
          '14%': { borderRadius: '40% 60% 54% 46% / 49% 60% 40% 51%' },
          '28%': { borderRadius: '54% 46% 38% 62% / 49% 70% 30% 51%' },
          '42%': { borderRadius: '61% 39% 55% 45% / 61% 38% 62% 39%' },
          '56%': { borderRadius: '61% 39% 67% 33% / 70% 50% 50% 30%' },
          '70%': { borderRadius: '50% 50% 34% 66% / 56% 68% 32% 44%' },
          '84%': { borderRadius: '46% 54% 50% 50% / 35% 61% 39% 65%' },
        },
        transform8s: {
          '0%, 100%': { borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%' },
          '14%': { borderRadius: '40% 60% 54% 46% / 49% 60% 40% 51%' },
          '28%': { borderRadius: '54% 46% 38% 62% / 49% 70% 30% 51%' },
          '42%': { borderRadius: '61% 39% 55% 45% / 61% 38% 62% 39%' },
          '56%': { borderRadius: '61% 39% 67% 33% / 70% 50% 50% 30%' },
          '70%': { borderRadius: '50% 50% 34% 66% / 56% 68% 32% 44%' },
          '84%': { borderRadius: '46% 54% 50% 50% / 35% 61% 39% 65%' },
        }
      },
      animation: {
        'movement': 'movement 4s ease-in-out infinite both',
        'transform': 'transform 17s ease-in-out infinite both alternate',
        'transform3s': 'transform 17s ease-in-out infinite both alternate 3s',
        'transform8s': 'transform 17s ease-in-out infinite both alternate 8s',
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
