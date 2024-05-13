/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: ["../../index.html", "../../scripts/*.js"],
  theme: {
    container: {
      // ...defaultTheme.container,
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '12rem',
      },
    },
    fontSize: {
      xs: '0.64',
      sm: '0.8rem',
      base: '1rem',
      lg: '1.25rem',
      xl: '1.563rem',
      '2xl': '1.953rem',
      '3xl': '2.441rem',
      '4xl': '3.052rem',
      '5xl': '3.815rem',
      '6xl': '4.769rem',
    },
    extend: {
      fontFamily: {
        'serif': ['"Lora"', ...defaultTheme.fontFamily.serif],
        'sans': ['"Rubik"', ...defaultTheme.fontFamily.sans],
        'mono': ['"Roboto Mono"', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        periwinkle: {
          300: '#F8F9FC',
          400: '#F2F3F8',
          500: '#C9D3FF',
          600: '#9FB1FF',
          700: '#748EFF',
          750: '#4D61B4',
          800: '#4B5894',
          900: '#474E69',
        },
        onyx: {
          500: '#F8F8F8',
          600: '#E2E2E3',
          700: '#BCBDBF',
          800: '#85858A',
          850: '#4C4E55',
          900: '#35373F',
          950: '#2E3036',
        }
      },
      backgroundImage: {
          // 'gradient-radial': 'radial-gradient(ellipse at top left, var(--gradient-color-stops))',
        'hero-gradient': 'radial-gradient(ellipse at top left, #C9D3FF 0%, #C9D3FF00 70%, #ffffff00 100%)',
        'hero-gradient-dark-mode': 'radial-gradient(ellipse at top left, #474E69 0%, #35373F 70%, #35373F  100%)',
        // 'hero-gradient-dark-mode': 'radial-gradient(ellipse at top left, #35373F 0%, #474E69 70%, #474E69  100%)',
      }
      
    },
  },
  plugins: [],
}