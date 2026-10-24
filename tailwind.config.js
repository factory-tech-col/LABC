/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    \"./index.html\",
    \"./src/**/*.{js,ts,jsx,tsx}\",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
