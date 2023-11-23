/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        literata: ["Literata", "system-ui"],
        outfit: ["Outfit", "system-ui"],
      },
      colors: {
        "wild-sand": {
          DEFAULT: "#F7F7F7",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FFFFFF",
          400: "#FFFFFF",
          500: "#F7F7F7",
          600: "#DBDBDB",
          700: "#BFBFBF",
          800: "#A3A3A3",
          900: "#878787",
          950: "#797979",
        },
        woodsmoke: {
          DEFAULT: "#100F14",
          50: "#645E7D",
          100: "#5B5571",
          200: "#48435A",
          300: "#353243",
          400: "#23202B",
          500: "#100F14",
          600: "#000000",
          700: "#000000",
          800: "#000000",
          900: "#000000",
          950: "#000000",
        },
      },
    },
  },
  plugins: [],
};
