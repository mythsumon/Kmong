/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cool-tone modern palette
        primary: '#4F9FFF',
        secondary: '#7C83FD',
        background: '#F8FAFF',
        surface: '#FFFFFF',
        border: '#E2E8F0',
        headline: '#1E293B',
        body: '#334155',
        muted: '#64748B',
        success: '#10B981',
        warning: '#FBBF24',
        error: '#EF4444',
        'footer-bg': '#E9EEFF',
        'hover-glow': 'rgba(79,159,255,0.25)',
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #4F9FFF 0%, #7C83FD 100%)',
        'gradient-hero': 'linear-gradient(135deg, #4F9FFF 0%, #7C83FD 100%)',
      },
      fontFamily: {
        sans: ['Pretendard', 'Noto Sans KR', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'custom': '12px',
      },
      transitionDuration: {
        'smooth': '250ms',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(79, 159, 255, 0.08)',
        'soft-lg': '0 4px 16px rgba(79, 159, 255, 0.12)',
        'glow': '0 0 20px rgba(79, 159, 255, 0.25)',
      },
    },
  },
  plugins: [],
}





