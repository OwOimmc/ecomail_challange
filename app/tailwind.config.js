/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'components/**/*.{vue,js,ts}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'composables/**/*.{js,ts}',
    'plugins/**/*.{js,ts}',
    'App.{js,ts,vue}',
    'app.{js,ts,vue}',
    'Error.{js,ts,vue}',
    'error.{js,ts,vue}',
    'content/**/*.md'
  ],
  theme: {
    screens: {
      // xxs: '22em',
      // xxs: '25em',
      // xs: '32em',

      sm: '54.2em',
      md: '60em',
      lg: '81em',

      xl: '90em'
      // xxl: '104em',
      // xxxl: '121em',
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif']
    },
    fontSize: {
      base: ['1.6rem']
    },
    colors: {
      white: '#fff',
      black: '#000',

      green: '#7FC109',
      mint: '#AAE8C3',
      teal: '#61908E',
      emerald: '#024E40'
    },

    backgroundImage: {
      'g-yellow':
        'linear-gradient(180deg, #FEE694 0%, rgba(254, 230, 148, 0) 100%)',
      'g-gray': 'linear-gradient(180deg, #FFF 0%, #E7E7E7 100%)'
    },
    boxShadow: {
      none: '0 0 #0000'
    },

    spacing: {
      0: 0,
      16: '1.6rem',
      28: '2.8rem',
      32: '3.2rem',
      48: '4.8rem',
      60: '6rem',
      120: '12rem',
      160: '16rem'
    }
  },
  plugins: [require('@tailwindcss/container-queries')]
}
