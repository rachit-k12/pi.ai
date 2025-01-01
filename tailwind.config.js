import {nextui} from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0D3C26',
          50: '#F5EADC',
          100: '#E6E2E0',
          200: '#DEC9B0',
          300: '#C9B597',
          400: '#8d6d42',
          500: '#0D3C26',
          600: '#0A2E1D',
          700: '#072013',
          800: '#051F13',
          900: '#031209',
        },
        secondary: {
          DEFAULT: '#FAF3EA',
          50: '#FFFFFF',
          100: '#FDF7F5',
          200: '#FAF3EA',
          300: '#F5EADC',
          400: '#E6E2E0',
          500: '#6B6255',
        },
        accent: {
          DEFAULT: '#038247',
          green: '#038247',
          blue: '#58A6FE',
          yellow: '#FFC42F',
        }
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};