/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        skeleton: "#b7b5b3",
        line: "#D8D8D8",
        active: "#D0021B",
        graybg: "#EFEEEF",
        selected: "#D1D6D634",
        slide: "#F7F7F7",
      },
    },
  },
  plugins: [],
};
