/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        firstGradientPattern: '#ff7272',
      },
      backgroundImage: {
        secondGradientPattern:
          'linear-gradient(280deg, rgba(147, 184, 255, 1) 14%, rgba(100, 255, 248, 1) 53%, rgba(82, 255, 221, 1) 100%)',
      },
      colors: {
        primary: '#1E293B',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
