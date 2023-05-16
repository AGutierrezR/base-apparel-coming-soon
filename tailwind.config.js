/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./*.html'],
  theme: {
    fontFamily: {
      sans: ['Josefin Sans', 'san-serif'],
    },
    fontWeight: {
      light: '300',
      normal: '400',
      semibold: '600',
    },
    colors: {
      'desaturated-red': 'hsl(0, 36%, 70%)',
      'soft-red': 'hsl(0, 93%, 68%)',
      'dark-grayish-red': 'hsl(0, 6%, 24%)',
      transparent: 'transparent',
    },
    boxShadowColor: {
      button: 'hsla(0, 44%, 60%, 0.25)',
    },
    backgroundImage: {
      pattern:
        'url(/images/bg-pattern-desktop.svg), linear-gradient(135deg, hsl(0, 0%, 100%) 0%, hsl(0, 100%, 98%) 100%)',
      'gradient-1':
        'linear-gradient(135deg, hsl(0, 0%, 100%) 0%, hsl(0, 100%, 98%) 100%)',
      'gradient-2':
        'linear-gradient(135deg, hsl(0, 80%, 86%) 0%, hsl(0, 74%, 74%) 100%)',
    },
    extend: {
      spacing: {
        18: '4.5rem',
      },
    },
  },
  plugins: [],
}
