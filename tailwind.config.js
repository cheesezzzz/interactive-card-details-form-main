/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        'gradient1': 'hsl(249, 99%, 64%)', 
        'gradient2':  'hsl(278, 94%, 30%)',
        'newviolet': {
          100: 'hsl(270, 3%, 87%)',
          200: 'hsl(279, 6%, 55%)',
          300: 'hsl(278, 68%, 11%)',
        },
      },

      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif']
      }
    },
  },
  plugins: [],
}
