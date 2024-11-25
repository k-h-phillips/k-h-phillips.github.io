// tailwind.config.js
import {nextui} from "@nextui-org/react";
import type { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        dark_mauve: "var(--dark-mauve)",
        peach: "var(--peach)",
        light_mauve: "var(--light-mauve)",
        dusty_blue: "var(--dusty-blue)",
        oyster: "var(--oyster)"
      }
    },
    plugins: [],
  },
  darkMode: "class",
  plugins: [nextui()]
};
export default config;
