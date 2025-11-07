/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F7941D',
        accent: '#E57C00',
        'accent-bg': '#FFF4E5',
        'gray-line': 'rgba(0,0,0,0.08)',
        'hover-highlight': 'rgba(247, 148, 29, 0.12)',
      },
      fontFamily: {
        sans: ['Pretendard', 'Noto Sans KR', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}





