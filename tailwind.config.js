/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "400px",
        ms: "500px",
        "2.5xl": "1440px",
        "3xl": "1800px",
        "4xl": "2500px",
        "6xl": "3200px",
        "10xl": "4500px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      padding: {
        px35: "35px",
        px76: "76px",
        px58: "58px",
        px17: "17px",
        px25: "25px",
        px55: "55px",
      },
      fontFamily: {},
      textColor: {
        darkblue: "var(#0F1629, #0F1629)",
        grey: "#3E424A",
        lightblue: "#0052FE",
      },
      boxShadow: {},
      fontSize: {
        px15: "15px",
        px18: "18px",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
