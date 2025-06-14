/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#166534', // Forest Green
        secondary: '#A7F3D0', // Mint
        accent: '#9CA3AF', // Cool Gray
        highlight: '#FACC15', // Lemon Yellow
        background: '#ECFDF5', // Light Mint
        'primary-dark': '#14532D',
        'primary-light': '#22C55E',
        'secondary-dark': '#6EE7B7',
        'accent-dark': '#6B7280',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}