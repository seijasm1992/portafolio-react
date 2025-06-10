/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        10: 'repeat(10, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
};
