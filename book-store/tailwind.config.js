/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        background: 'var(--color-background)',
        text: 'var(--color-text)',
        btn: 'var(--color-btn)',
        card: 'var(--color-card)',
        input: 'var(--color-input)',
        btn2: 'var(--color-btn2)',
        cardtext: 'var(--color-cardtext)',
        description: 'var(--color-description)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
