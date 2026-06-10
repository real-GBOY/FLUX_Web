/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        flux: {
          black: '#0A0A0A',
          dark: '#121212',
          darker: '#0D0D0D',
          gray: '#1A1A1A',
          light: '#2A2A2A',
          accent: '#00FF88',
          accentDark: '#00CC6A',
          accentLight: '#33FFA3',
          text: '#E5E5E5',
          muted: '#888888',
        },
      },
      fontFamily: {
        heading: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
