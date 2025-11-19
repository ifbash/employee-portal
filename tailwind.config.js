/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#32B8C6',
          hover: '#2DA6B2',
          active: '#1A6873',
        },
        accent: '#21808D',
        cream: {
          50: '#FCFCF9',
          100: '#FFFFFF',
        },
        slate: {
          900: '#1F2121',
          800: '#262828',
          700: '#626C71',
          500: '#A7A9A9',
        },
        success: '#32B8C6',
        warning: '#E68161',
        error: '#C0152F',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
