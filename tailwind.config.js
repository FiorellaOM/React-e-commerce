/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        pandatheme: {
          primary: "#059669",

          secondary: "#78716c",

          accent: "#d1fae5",

          neutral: "#191D24",

          background: "#E5DFDC",

          info: "#f9eee9",

          success: "#d1fae5",

          warning: "#fef08a",

          error: "#fda4af",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
