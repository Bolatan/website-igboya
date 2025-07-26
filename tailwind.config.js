/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#1a5e1a',
        'dark-green': '#0f4010',
        'light-green': '#2e8a2e',
        'earthy-brown': '#8B4513',
        'light-brown': '#A0522D',
        'gold': '#FFD700',
        'cream': '#FFFDD0',
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'raleway': ['Raleway', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/hero-bg.jpg')",
      },
    },
  },
  plugins: [],
}