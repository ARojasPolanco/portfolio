/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
      'sen': ['Sen', 'sans-serif'],
      'inter': ['Inter', 'sans-serif']
    },
    colors: {
      'primary-100': '#0D6E6E',
      'primary-200': '#4a9d9c',
      'primary-300': '#afffff',
      'accent-100': '#FF3D3D',
      'accent-200': '#ffe0c8',
      'white': '#FFFFFF',
      'text-200': '#e0e0e0',
      'bg-100': '#0D1F2D',
      'bg-200': '#1d2e3d',
      'bg-300': '#333e48',
      'light-gray': '#656669',
      'light-blue-sky': '#3d6ce3',
      'very-light-blue': '#82c6e6',
      'black': '#000000'
    }
  },
  plugins: [],
}
