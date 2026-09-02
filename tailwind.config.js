/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#183C35',
          light: '#23564C',
          dark: '#0F2823',
        },
        cream: {
          DEFAULT: '#FFF8EA',
          light: '#FFFCF5',
          dark: '#F5E8CE',
        },
        sage: {
          DEFAULT: '#A8C3A0',
          light: '#E2EFE0',
          dark: '#7A9B72',
        },
        terracotta: {
          DEFAULT: '#D98262',
          light: '#E9A68D',
          dark: '#B85E3E',
        },
        gold: {
          DEFAULT: '#E9C46A',
          light: '#F4DC9A',
          dark: '#C8A03E',
        },
        ink: {
          DEFAULT: '#24312D',
          light: '#425550',
          dark: '#141D1A',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        handwriting: ['Kalam', 'Caveat', 'cursive'],
      },
      boxShadow: {
        'photo': '0 8px 24px -4px rgba(36, 49, 45, 0.12), 0 2px 6px -1px rgba(36, 49, 45, 0.08)',
        'photo-hover': '0 16px 32px -4px rgba(36, 49, 45, 0.18), 0 4px 12px -2px rgba(36, 49, 45, 0.12)',
        'tactile': '0 6px 0px 0px #0F2823',
        'tactile-active': '0 2px 0px 0px #0F2823',
        'terracotta-tactile': '0 6px 0px 0px #B85E3E',
        'sage-tactile': '0 6px 0px 0px #7A9B72',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(2deg)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.85, transform: 'scale(1.03)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 3s ease-in-out infinite',
        'sway': 'sway 6s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
