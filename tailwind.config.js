/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        sky: "url('/src/assets/Register Page Images/Mobile background Image/image2.webp')",
        building:
          "url('/src/assets/Register Page Images/Mobile background Image/image3.webp')",
        newsLetter: "url('/src/assets/Background Images/img1.jpg')",
        news1: "url('/src/assets/Background Images/img2.png')",
        landing: "url('/src/assets/landing.jpg')",
        navbar: "url('/src/assets/navbar.jpg')",
      },
    },
  },
  plugins: [],
}
