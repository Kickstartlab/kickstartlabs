module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: {
          "100": "#393A3C",
          "900": "#19191B",
          "200": "#000",
        },
        zinc: {
          "100": "#00BCD4",
          "700": "#5454D4",
        }
      },
      fontFamily: {
        'nutino-sans': ["'Nunito Sans', sans-serif"],
        'montserrat': ["'Montserrat', sans-serif"],
        'romantic-couple': ["'Sacramento', cursive"],
      },
      dropShadow: {
        '3xl': '(0px 4px 4px rgba(0, 0, 0, 0.25));',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
