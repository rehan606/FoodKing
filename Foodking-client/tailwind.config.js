/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // ✅ Add this line
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Oswald": ["Oswald", "serif"],
        "Inter": ["Inter", "serif"],
        "Roboto": ["Roboto", "serif"]
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
