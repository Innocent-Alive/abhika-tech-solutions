/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',
        accent: 'var(--color-accent)',
        light: 'var(--color-light)',
        lightest: 'var(--color-lightest)',
        background: 'var(--color-background)',
        text: 'var(--color-text)',
      },
      fontFamily: {
        header: ['Raleway', 'sans-serif'],
      },

    },
  },
  plugins: [],
}
