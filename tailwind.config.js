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
        '[85%]': '85%',
        '[75%]': '75%',
        '[99%]': '99%',
      },
      minHeight: {
        '14p': '14%',
        '86p': '86%',
        '[300px]': '300px',
        '[32px]': '32px',
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
    themes: [ {'light': {
      ...require('daisyui/src/colors/themes')['[data-theme=light]'],
      'tbody tr:hover th': {
        'background': '#eef2ff',
        'color': '#44403c'
      }
    }}],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
