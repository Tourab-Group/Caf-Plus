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
        primaryColor: '#4484bc',
        primaryColorLight: "#010d78",
        secondaryColor: '#edcf2b',
        paragraphColor: '#c0c0c0',      
        whiteColor: '#fff',
        blackColor: "#000",
        greenColor: "#007936",
        redColor: "#cc3433",
        darkColor: '#6c4526',
        darkColorLight: "#efb863",
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
      oswald: ['Oswald', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif']
    }
  },
  plugins: [],
}