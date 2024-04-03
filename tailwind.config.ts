/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: 'class',
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px"
    },
    extend: {
      colors: {
        primaryColor: '#efb863',
        secondaryColor: '#4483bb',
        textColor: '#6c4526'
      },
      keyframes: {
        move: {
          "0%": {
            "transform": "translateY(0)"
          },
          "50%": {
            "transform": "translateY(-60px)"
          },
          "100%": {
            "transform": "translateY(0)"
          }
        }
      },
      animation: {
        'movingY': 'move 4s linear infinite'
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem'
      }
    },
    fontFamily: {
      lemonMilk: ['LEMON MILK', 'sans-serif'],
    }
  },
  plugins: [],
}