/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'purple-bg': '#240d52',
        'orange-primary': '#ec7627',
        'teal-accent': '#3aa7a4',
        'cream-bg': '#f6e3b9',
        'brown-text': '#43210b',
        'orange-light': '#f27d1c',
        'feedback-correct': '#d2f0c0',
        'feedback-incorrect': '#fdd2cf',
      },
      fontFamily: {
        display: ['Fredoka', 'sans-serif'],
        body: ['Fredoka', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'wiggle-once': 'wiggle 0.7s ease-in-out 1.7',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
};