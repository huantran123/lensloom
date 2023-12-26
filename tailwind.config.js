// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './components/**/*.{js,ts,jsx,tsx,mdx}',
//     './app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
//         'gradient-conic':
//           'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
//       },
//     },
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'urbanist': ['Urbanist', 'sans-serif'],
        'satoshi': ['Satoshi', 'sans-serif'],
      },
      colors: {
        'gray': {
          100: '#FFFFFF',
          200: '#EBF0F1',
          300: '#CFD5D8',
          400: '#B3B7B8',
          500: '#6A6D6E',
          600: '#323334',
          700: '#111212',
        },
        'yellow': {
          100: '#FFFAEC',
          200: '#FFF1CD',
          300: '#FFE4A1',
          400: '#F7D170',
          500: '#EDAB00',
          600: '#CD9301',
          700: '#8A6E28',
        },
        'blue': {
          100: '#F8FAFC',
          200: '#D5EAFB',
          300: '#ABDFFD',
          400: '#74BCFF',
          500: '#438DFB',
          600: '#0F62DE',
          700: '#0A469E',
        },
        'red': '#DA2A2A',
        'green': '#5CB147',
        'orange': '#F68C3F',
        'purple': '#8D65FF',
        'primary': '#EDAB00',
      },
      backgroundColor: {
        'base': '#F8FAFC',
      }
    },
  },
  plugins: [],
}