/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    screens: {},
    extend: {
      colors: {
        "svg-fill": "var(--svg-fill-color)",
        "instagram-blue": "#405DE6",
      },
    },
  },
  plugins: [require("daisyui")],
};
