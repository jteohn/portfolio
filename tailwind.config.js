/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#FFF",
      "grey-100": "#ECECEC",
      "grey-200": "#ACACAC",
      "grey-300": "#DEDCDC",
      "grey-400": "#818181",
      "grey-500": "#464646",
      "grey-600": "#222222",
      "grey-700": "#383838",
      "beige-200": "#FFECD3",
      "beige-300": "#D8C4A9",
      "beige-400": "#7A7369",
      "beige-500": "#9A8D79",
    },
    extend: {
      textDecorationThickness: {
        10: "15px",
      },
      textUnderlineOffset: {
        10: "-10px",
      },
    },
  },
  plugins: [require("daisyui")],
};
