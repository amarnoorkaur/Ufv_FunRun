/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ufv-green': '#006341',
        'ufv-lightGreen': '#0B9E43',
        'ufv-dark': '#121212',
        'ufv-light': '#f8f9fa',
      },
      fontFamily: {
        'heading': ['Inter', 'system-ui', 'sans-serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Georgia', 'serif'],
        'mono': ['Monaco', 'monospace'],
      },
      borderRadius: {
        'ufv': '8px',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
}
