/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dark1: "#707070",
      },
    },
  },
  plugins: [require("daisyui")],
};
