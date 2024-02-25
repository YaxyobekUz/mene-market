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
            50: '#EFF5FB',
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
            50: '#FAFAFA',
            500: '#949494',
          },
        },

        'secondary': {
          'green': {
            500: '#0CD691',
          }
        }
      },

      backgroundImage: {
        'radial-gradient_blue-500': 'radial-gradient(84.43% 74.8% at 50% 50%, #1A3EDD 0%, #000 99.99%, rgba(217, 217, 217, 0.00) 100%)',
        'linear-gradient_blue-500': 'linear-gradient(105deg, #08C8F9 0%, #1A3EDD 100%)',
        'linear-gradient_black-800': ' linear-gradient(175.70deg, rgba(6, 11, 40, 0.74) 7.924%,rgba(14, 21, 58, 0.71) 119.932%)',
        'sidebar': 'linear-gradient(157.20deg, rgba(6, 11, 38, 0.94) 31.974%,rgba(26, 31, 55, 0) 100%)',
        'jellyfish': "url(../src/assets/images/other/jellyfish.jpg)",
      },





      // sizes
      width: {
        296: '296px',
      },

      height: {
        644: '644px',
        520: '520px',
        440: '440px',
        296: '296px',
      },




      // font
      fontSize: {
        32: '32px',
        28: '28px',
        13: '13px',
      },

      lineHeight: {
        22.5: '22.5px',
        3.5: '14px',
        6.5: '26px',
      },




      // border
      borderRadius: {
        20: '20px',
        18: '18px',
      },





      // flex & grid
      gap: {
        30: '30px',
      }
    },


    // backdrop
    backdropBlur: {
      120: '120px',
    },


    screens: {
      '1024': '1024px',
      '1124': '1124px',
      '860': '860px',
      '768': '768px',
      '640': '640px',
      '540': '540px',
      '490': '490px',
      '450': '450px',
      '375': '375px',
    }
  },
  plugins: [],
}