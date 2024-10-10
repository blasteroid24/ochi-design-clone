import { transform } from 'framer-motion';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      blehch:[ "Roboto", `system-ui`],
      bleach: ['"Noto Sans Warang Citi"', 'sans-serif'],
      },
      keyframes: {
        disappearAndReappear: {
          '0%': { transform: 'scaleX(1)' },
          '50%': { transform: 'scaleX(0)', transformOrigin: 'right' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
      },
      animation: {
        'disappear-reappear': 'disappearAndReappear 1s ease-in-out forwards',
      },
      keyframes: {
        arrowmagic: {
          '0%':{transform:'scale(0.2)'},
          '100%':{transform:'scale(1)'},
        },
      },
      animation: {
        'arrowmagic': 'arrowmagic 0.1s ease-in forwards',
      },
      keyframes: {
        scalemagic: {
          '0%':{transform:'scale(1)'},
          '100%':{transform:'scale(0.95)'},
        },
      },
      animation: {
        'scalemagic': 'scalemagic 1s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}

