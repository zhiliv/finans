module.exports = {
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
        '86p': '86%'
      },
      height: {
        '14p': '14%',
        '86p': '86%'
      },
      minHeight: {
        '14p': '14%',
        '86p': '86%'
      },
      width: {
        '92': '23em'
      }
    },
  },
  daisyui: {
    themes: ['halloween'],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
