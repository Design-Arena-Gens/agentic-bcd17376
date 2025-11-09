import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f8ff',
          100: '#dff1ff',
          200: '#bfe4ff',
          300: '#8fd0ff',
          400: '#5ab7ff',
          500: '#2a98ff',
          600: '#1b74d1',
          700: '#165ca6',
          800: '#154f87',
          900: '#143e67',
        },
      },
      boxShadow: {
        card: '0 6px 20px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
} satisfies Config;
