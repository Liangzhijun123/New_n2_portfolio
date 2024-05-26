/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'open-sans-hebrew': ['Open Sans Hebrew', 'sans-serif'],
        'brush-script-mt': ['Brush Script MT', 'cursive'],
        'raleway' : ['Raleway', 'sans-serif'],
        'radley': ['Radley', 'serif'],
        'arial': ['Arial', 'sans-serif'],
        'roboto-mono': ['Roboto Mono', 'monospace'],
      },
      boxShadow: {
        nav: '0px 4px 21.9px rgba(104, 119, 149, 0.5)',
      },
      letterSpacing: {
        'huge': '114px',
      },
    },
  },
  plugins: [],
}

