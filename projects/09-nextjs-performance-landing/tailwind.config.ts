import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        surface: {
          dark: '#070a13',
          'dark-card': '#0e1424',
          'dark-elevated': '#161f36',
          'dark-border': '#1e2942',
          light: '#f8fafc',
          'light-card': '#ffffff',
          'light-elevated': '#f1f5f9',
          'light-border': '#e2e8f0',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'var(--font-cairo)', 'system-ui', 'sans-serif'],
        arabic: ['var(--font-cairo)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-brand': '0 0 30px -5px rgba(99, 102, 241, 0.45)',
        'glow-cyan': '0 0 30px -5px rgba(6, 182, 212, 0.45)',
        'glow-emerald': '0 0 30px -5px rgba(16, 185, 129, 0.45)',
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.35)',
        'glass-card-light': '0 8px 30px 0 rgba(148, 163, 184, 0.15)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
