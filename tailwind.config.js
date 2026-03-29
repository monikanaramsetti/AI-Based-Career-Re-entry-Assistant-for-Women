/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#831843', // Deep Rose / Burgundy (Premium, mature)
          pink: '#F43F5E',   // Vibrant Rose (Energetic, feminine)
          blue: '#FFF1F2',   // Soft Rose Blush (Warm, elegant background)
        }
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
