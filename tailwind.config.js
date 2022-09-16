/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#ff695f",
        secondary: "#03a4ed",
      },
      content: {
        servicesLeftDots: 'url("/img/services-left-dots.png")',
        servicesRightDots: 'url("/img/services-right-dots.png")',
        plansLeftVector: 'url("/img/plan-left-dec.png")',
      },
    },
  },
  plugins: [],
};
