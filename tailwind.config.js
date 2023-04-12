module.exports = {
  mode: 'jit',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      maxHeight: {
        '86p': '86%',
      },
      height: {
        '14p': '14%',
        '86p': '86%',
        '[300px]': '300px',
        '[150px]': '150px',
      },
      minHeight: {
        '14p': '14%',
        '86p': '86%',
        '[300px]': '300px',
      },
      width: {
        92: '23em',
        '50%': '50%',
        '[150px]': '150px',
      },
      zIndex: {
        '100': '100'
      }
    },
  },

  daisyui: {
    themes: ['halloween'],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
