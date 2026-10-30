/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ff6f00',
          hover: '#e66400',
          light: '#fff4eb',
          50: '#fff8f0',
          100: '#ffeed6',
          500: '#ff6f00',
          600: '#e66400',
          700: '#cc5900',
        },
        navy: {
          DEFAULT: '#0f4a73',
          dark: '#0a3350',
          light: '#e6f0f7',
        },
        accent: {
          green: '#10b981',
          teal: '#0d9488',
        }
      },
      fontFamily: {
        quicksand: ['var(--font-quicksand)', 'Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

