import { type Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
  ],

  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        // primary: '#FFCB12',
        header: "#0D0D0D",
        // primary: "#9F792E",
        primary: "#FAD02C",
        secondary: "#fde9ea",
        third: "#dfdfdf",
        forth: "#e6e6e6",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",
      },
      fontFamily: {
        varela: [""],
        // Leckerli: ["Varela", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('/src/assets/images/home.jpeg')",
        // signup: "url('/public/assets/images/signupimage.jpeg')",
        // signin: "url('/public/assets/images/signin.jpeg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
