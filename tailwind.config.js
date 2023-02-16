/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        text: 'text 2s ease infinite',
        'text-gradient': 'text-gradient 6s ease infinite',
        'text-moving-background': 'text-moving-background 4s ease infinite'
      },
      keyframes: {
        'text-moving-background': {
          '0%, 100%': {
            'background-size': '300% 300%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '300% 300%',
            'background-position': 'right center',
          }
        }
      },
    },
  },
  plugins: [],
}