/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue"
  ],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }
      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }
  
      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }
  
      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }
  
      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
      'mb': {'max': '501'},
      // => @media (max-width: 501px) { ... }
      'mobile': {'max': '401'},
      // => @media (max-width: 501px) { ... }
    },
    extend: {
      fontFamily: {
        noto: ["Noto Sans", "sans-serif"],
      },
      colors:{
        dark:{
          default: "#0F0F0F",
          200: "#2C2C2C",
          400: "#212121",
          600: "2C2C2C",
        },
        light: {
          default: "#FFFFFF",
          200: "#AAAAAA",
          600: "#777E83",
        },
        main: {
          default: "#8774E1"
        }
      },
    },
  },
  plugins: [],
}

