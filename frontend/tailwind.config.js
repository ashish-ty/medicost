/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
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