/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // colors, bg images
      colors: {
        'primary': {
          'skyblue': {
            500: '#08C8F9',
          },

          'blue': {
            700: '#1A3EDD',
          },

          'red': {
            500: '#FE3A30',
          },

          'gold': {
            400: '#FFC436',
          },

          'black': {
            800: '#13181F',
          },

          'gray': {
            500: '#949494',
          },
        },
      },

      backgroundImage: {
        'linear-gradient_blue-500': 'linear-gradient(105deg, #08C8F9 0%, #1A3EDD 100%)',
      },


      // font
      fontSize: {
        32: '32px',
        13: '13px',
      },

      lineHeight: {
        22.5: '22.5px',
        3.5: '14px',
        6.5: '26px',
      },



      // border
      borderRadius: {
        18: '18px',
      },
    },
  },
  plugins: [],
}