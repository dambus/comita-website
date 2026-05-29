/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0d2a5e',
        'cyan-brand': '#5bc4f5',
        'gray-bg': '#f4f6fa',
      },
      fontFamily: {
        heading: ['Barlow Condensed', 'sans-serif'],
        body: ['Barlow', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
