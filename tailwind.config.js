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
    themes: [ {
      'theme': {
        "primary": "#0d6efd",
        "secondary": "#4b5563",
        "accent": "#991b1b",
        "neutral": "#333c4d",
        "base-100": "#ffffff",
        "info": "#0dcaf0",
        "success": "#198754",
        "warning": "#ffc107",
        "error": "#dc3545",        
        '.btn-standart': {
          height: '38px',
        },
        '.input-standart': {
          height: '38px'
        },
        'tbody tr:hover th': {
          'background': '#f0fdf4',
          'color': '#44403c'
        }
      }
    } ],
  },
  plugins: [ require('@tailwindcss/typography'), require('daisyui') ],
}
