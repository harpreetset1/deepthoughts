/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'aurora-1':  'aurora1 9s ease-in-out infinite',
        'aurora-2':  'aurora2 12s ease-in-out infinite',
        'aurora-3':  'aurora3 15s ease-in-out infinite',
        'marquee':   'marquee 35s linear infinite',
        'fade-up':   'fadeUp 0.65s ease-out forwards',
        'float':     'float 5s ease-in-out infinite',
        'pulse-glow':'pulseGlow 2.5s ease-in-out infinite',
      },
      keyframes: {
        aurora1: {
          '0%, 100%': { transform: 'translate(0%, 0%)   scale(1)',    opacity: '0.65' },
          '33%':      { transform: 'translate(6%, -8%)  scale(1.12)', opacity: '0.85' },
          '66%':      { transform: 'translate(-4%, 5%)  scale(0.95)', opacity: '0.7'  },
        },
        aurora2: {
          '0%, 100%': { transform: 'translate(0%, 0%)   scale(1)',    opacity: '0.5' },
          '33%':      { transform: 'translate(-7%, 6%)  scale(0.9)',  opacity: '0.75' },
          '66%':      { transform: 'translate(5%, -5%)  scale(1.1)',  opacity: '0.6'  },
        },
        aurora3: {
          '0%, 100%': { transform: 'translate(0%, 0%)  scale(1)',     opacity: '0.4' },
          '50%':      { transform: 'translate(4%, -6%) scale(1.08)',  opacity: '0.65' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px 0px rgba(37,99,235,0.35)' },
          '50%':      { boxShadow: '0 0 40px 8px rgba(37,99,235,0.65)' },
        },
      },
    },
  },
  plugins: [],
}
