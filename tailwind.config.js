/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      sm: "598px",
      md: "880px",
      lg: "1043px",
      xl: "1451px",
    },
    extend: {
      fontFamily: {
        inter: ["Inter"],
      },
      gridTemplateRows: {
        one: "repeat(1, minmax(0, auto))",
        two: "repeat(2, minmax(0, auto))",
        three: "repeat(3, minmax(0, auto))",
        five: "repeat(5, minmax(0, auto))",
      },
      gridTemplateColumns: {
        one: "repeat(1, minmax(0, auto))",
        two: "repeat(2, minmax(0, auto))",
        three: "repeat(3, minmax(0, auto))",
        five: "repeat(5, minmax(0, auto))",
      },
    },
  },
  plugins: [],
};
