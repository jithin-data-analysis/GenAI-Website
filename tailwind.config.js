/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#646cff',
        'muted-foreground': 'rgba(255, 255, 255, 0.7)',
        foreground: '#ffffff',
        background: '#242424',
      },
    },
  },
  plugins: [],
} 