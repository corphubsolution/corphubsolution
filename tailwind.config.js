/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#071C3C',
          800: '#052447',
          700: '#0A2E56',
          600: '#123B70',
          500: '#1A4D8F',
        },
        orange: {
          600: '#E05E00',
          500: '#FF6B00',
          400: '#FF8A33',
          300: '#FFAD6B',
        },
        offwhite: '#F3F7FA',
        brand: {
          navy: '#071C3C',
          blue: '#123B70',
          orange: '#FF6B00',
        }
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'sans-serif'],
        heading: ['Barlow', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.5rem,6vw,5.5rem)', { lineHeight: '1.0', letterSpacing: '-0.02em' }],
        '7xl': ['4.5rem', { lineHeight: '1.0' }],
        '6xl': ['4rem', { lineHeight: '1.05' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        'content': '1200px',
      },
      borderRadius: {
        'sm': '4px',
        DEFAULT: '4px',
        'md': '6px',
        'lg': '8px',
      },
      boxShadow: {
        'card': '0 2px 12px rgba(7,28,60,0.08)',
        'card-hover': '0 8px 24px rgba(7,28,60,0.16)',
        'orange': '0 4px 20px rgba(255,107,0,0.35)',
        'header': '0 2px 16px rgba(7,28,60,0.24)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom, rgba(7,28,60,0.7) 0%, rgba(7,28,60,0.85) 100%)',
        'section-gradient': 'linear-gradient(135deg, #071C3C 0%, #123B70 100%)',
        'orange-gradient': 'linear-gradient(135deg, #FF6B00 0%, #E05E00 100%)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
