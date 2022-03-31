module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
      },
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
        // xxs: '.5rem', // 8px
        xs: '.625rem', // 10px
        "xxs": '1rem', // 16px
        tiny: '.75rem', // 12px
        sm: '.875rem', // 14px
        "xsm": '1.25rem', // 20px
        normal: '1rem', // 16rem
        "mbase": '.875rem', // 14px
        base: '1.25rem', // 20px
        "xbase": '1.5rem', // 24px
        "mmd": '1.5rem', // 24px
        md: '2rem', // 32px
        "xmd": '2.25rem', // 36px
        "mlg": '1.5rem', // 24px
        lg: '2.5rem', // 40px
        "xlg": '3.5rem', // 56px
        "mxl": '3rem', // 48px
        xl: '5rem', // 80px
        "xxl": '8rem', // 128px
      },
      letterSpacing: {
        tightest: '-0.5rem', // -8px
        tight: '-0.2rem', // -2px
        widest: '0.5rem', // 8px
      },
      backgroundImage: {
        'midnight': "linear-gradient(to bottom left, #1A0035, #3C0D6E, #1A0035)",
        'twilight': "linear-gradient(81.95deg, #410087 -30.67%, #E94057 43.66%, #F27121 96.52%)",
      },
      minWidth: {
        '240': '240px',
      },
      maxWidth: {
        '4/12': '33%',
        '8/12': '66%',
        '800': '800px',
        '1200': '1200px',
      },
      height: {
        12: '48px',
      },
      width: {
        12: '48px',
        54: '216px',
      },
      spacing: {
        '1/10': '10%',
        '1/5': '20%',
        '2/5': '40%',
      },
      zIndex: {
        "-1": -1,
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
        transform5s: {
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
        'transform5s': 'transform 17s ease-in-out infinite both alternate 5s',
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
