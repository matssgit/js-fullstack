/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Open Sans", "serif"],
    },
    extend: {
      colors: {
        gray: {
          100: "#1F2523",
          200: "#4D5C57",
          300: "#CDD5D2",
          400: "#E4ECE9",
          500: "#F9FBFA",
        },
        green: {
          100: "#1F8459",
          200: "#2CB178",
        },

        danger: "#B51919",
      },
      fontSize: {
        xxs: 10,
      },
    },
  },
  plugins: [],
}
