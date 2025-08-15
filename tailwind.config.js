/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'ui-sans-serif', 'system-ui'],
        display: ['Space Grotesk', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        accent: {
          500: '#7CFFB2',
          700: '#5BE296'
        },
        neon: '#39FF14'
      },
      boxShadow: {
        neon: '0 0 10px rgba(57,255,20,0.8), 0 0 25px rgba(57,255,20,0.6)',
      }
    },
  },
  plugins: [],
}
