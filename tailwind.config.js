/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        sky: "url('/src/assets/Register Page Images/Mobile background Image/image2.webp')",
        building:
          "url('/src/assets/Register Page Images/Mobile background Image/image3.webp')",
      },
    },
  },
  plugins: [],
}
