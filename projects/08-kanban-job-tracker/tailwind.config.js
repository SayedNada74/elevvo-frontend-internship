/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        stage: {
          applied: {
            DEFAULT: '#06b6d4',
            light: '#e0f2fe',
            dark: 'rgba(6, 182, 212, 0.15)',
            border: '#0284c7'
          },
          interviewing: {
            DEFAULT: '#6366f1',
            light: '#ede9fe',
            dark: 'rgba(99, 102, 241, 0.15)',
            border: '#4f46e5'
          },
          offer: {
            DEFAULT: '#10b981',
            light: '#d1fae5',
            dark: 'rgba(16, 185, 129, 0.15)',
            border: '#059669'
          },
          rejected: {
            DEFAULT: '#f43f5e',
            light: '#ffe4e6',
            dark: 'rgba(244, 63, 94, 0.15)',
            border: '#e11d48'
          }
        },
        surface: {
          dark: '#0a0f1d',
          'dark-card': '#111827',
          'dark-elevated': '#1f293d',
          'dark-border': '#1e293b',
          light: '#f8fafc',
          'light-card': '#ffffff',
          'light-elevated': '#f1f5f9',
          'light-border': '#e2e8f0'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 20px -3px rgba(6, 182, 212, 0.35)',
        'glow-indigo': '0 0 20px -3px rgba(99, 102, 241, 0.35)',
        'glow-emerald': '0 0 25px -3px rgba(16, 185, 129, 0.45)',
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.25)',
        'glass-card-light': '0 8px 30px 0 rgba(148, 163, 184, 0.12)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.25s ease-out forwards',
        'scale-in': 'scaleIn 0.2s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
