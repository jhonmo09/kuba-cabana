/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        24: "24px",
      },
      rotate: {
        275: "275deg",
      },
      colors: {
        "custom-purple": "#93399E",
        "custom-brown": "#c9ab81",
      },
      width: {
        128: "60rem",
      },
      height: {
        128: "30rem",
        150: "33rem",
        180: "50rem",
      },
      backgroundColor: {
        "blue-custom": "#E8F8FD",
        "gray-custom": "#F6F6F6",
        "gray2-custom": "#ECEBFC",
        "gray3-custom": "#F1F1F1",
        "form-purple": "#8D85F0",
        "blue-dark": "#003D69",
      },
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
      },
      textColor: {
        "purple-custom": "#493DDA",
        "blue-dark": "#003D69",
      },
      fontSize: {
        // Establece los tamaños predeterminados para tus elementos de texto
        h1: "2rem", // 32px
        h2: "1.5rem", // 24px
        h3: "1.25rem", // 20px
        base: "1.2rem", // 16px
        text: "1.2rem", // 16px (texto normal)
        p: "2rem", // 16px (párrafos)
      },
      fontWeight: {
        h1: 800, // bold
        p: 800,
      },
      backgroundImage: {
        "gradient-custom":
          "linear-gradient(109.6deg, rgba(0, 0, 0, 0.93) 11.2%, rgb(63, 61, 61) 78.9%)",
      },
    },
  },
  variants: {},
  plugins: [],
};
