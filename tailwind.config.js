/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: "Inter, sans-serif",
    },
    extend: {
      colors: {
        primary: "#018B00",
        background: "#F2F6FE"
      },
      boxShadow: {
        box: "3px 31px 40px -42px rgba(0, 0, 0, 0.25)"
      }
    },
  },
  plugins: [],
};
