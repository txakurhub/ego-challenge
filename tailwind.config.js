/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        skeleton: "#b7b5b3",
        line: "#D8D8D8",
        active: "#D0021B",
      },
    },
  },
  plugins: [],
};
