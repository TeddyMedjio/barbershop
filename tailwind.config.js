const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
        heading: ["Aoboshi One", "serif"],
      },
      colors: {
        gold: "#E4BC7D",
        "black-gray": "#0C0C0C",
        "light-gray": "#7C7C7C",
      },
    },
  },
  plugins: [],
};
