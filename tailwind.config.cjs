/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#111827',
        brand: '#0F172A',
        mint: '#334155',
        sun: '#F8FAFC',
        pop: '#64748B',
        paper: '#F8FAFC',
        night: '#020617',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Manrope"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '0.9' },
        },
        rise: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        sweep: {
          '0%': { transform: 'translateX(-20%)' },
          '100%': { transform: 'translateX(120%)' },
        },
        pulseRing: {
          '0%': { boxShadow: '0 0 0 0 rgba(148, 163, 184, 0.35)' },
          '70%': { boxShadow: '0 0 0 18px rgba(148, 163, 184, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(148, 163, 184, 0)' },
        },
        drift: {
          '0%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-12px) translateX(6px)' },
          '100%': { transform: 'translateY(0px) translateX(0px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(120%)' },
        },
        bob: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.8' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 4s ease-in-out infinite',
        rise: 'rise 700ms ease-out both',
        sweep: 'sweep 3s linear infinite',
        pulseRing: 'pulseRing 2.8s ease-out infinite',
        drift: 'drift 7s ease-in-out infinite',
        shimmer: 'shimmer 2.8s linear infinite',
        bob: 'bob 3.6s ease-in-out infinite',
        pulseSoft: 'pulseSoft 5s ease-in-out infinite',
        marquee: 'marquee 20s linear infinite',
      },
      boxShadow: {
        soft: '0 20px 60px -30px rgba(15, 23, 42, 0.5)',
        card: '0 12px 40px -20px rgba(15, 23, 42, 0.35)',
      },
      backgroundImage: {
        'hero-grad': 'radial-gradient(circle at 20% 20%, rgba(100, 116, 139, 0.25), transparent 55%), radial-gradient(circle at 80% 0%, rgba(148, 163, 184, 0.18), transparent 50%), linear-gradient(135deg, #020617 0%, #0F172A 45%, #020617 100%)',
        'mesh': 'radial-gradient(circle at 10% 20%, rgba(148, 163, 184, 0.18), transparent 35%), radial-gradient(circle at 80% 30%, rgba(100, 116, 139, 0.14), transparent 40%), radial-gradient(circle at 40% 80%, rgba(248, 250, 252, 0.08), transparent 45%)',
        'grid-fade': 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
