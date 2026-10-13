import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors
        navy: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#bae2ff',
          300: '#7dd3ff',
          400: '#3cbfff',
          500: '#00bcd4',
          600: '#004B87', // Main navy
          700: '#003d6b',
          800: '#003054',
          900: '#002438',
        },
        cyan: {
          50: '#f0fdfe',
          100: '#e0fafc',
          200: '#b2f5f9',
          300: '#7ff1f6',
          400: '#22e3ec',
          500: '#06d6d6',
          600: '#00bcd4', // Main cyan
          700: '#0891a2',
          800: '#0e7490',
          900: '#155e75',
        },
        // Neutral palette
        neutral: {
          50: '#f8f9fa',
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
        // Semantic colors
        success: '#4caf50',
        error: '#f44336',
        warning: '#ff9800',
        info: '#2196f3',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['Poppins', ...defaultTheme.fontFamily.sans],
        mono: ['Fira Code', ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        // H1 - 48px bold
        'h1': ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        // H2 - 40px bold
        'h2': ['40px', { lineHeight: '1.25', fontWeight: '700' }],
        // H3 - 32px semibold
        'h3': ['32px', { lineHeight: '1.3', fontWeight: '600' }],
        // H4 - 24px semibold
        'h4': ['24px', { lineHeight: '1.35', fontWeight: '600' }],
        // H5 - 20px semibold
        'h5': ['20px', { lineHeight: '1.4', fontWeight: '600' }],
        // H6 - 16px semibold
        'h6': ['16px', { lineHeight: '1.5', fontWeight: '600' }],
        // Body
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-base': ['16px', { lineHeight: '1.5', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        // Label
        'label-lg': ['14px', { lineHeight: '1.5', fontWeight: '600' }],
        'label-sm': ['12px', { lineHeight: '1.5', fontWeight: '600' }],
        // Overline
        'overline': ['11px', { lineHeight: '1.6', fontWeight: '600', letterSpacing: '0.5px' }],
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '20px',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
      },
    },
  },
  plugins: [],
} satisfies Config
