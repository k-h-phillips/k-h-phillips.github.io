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
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            background: "#5B454C",
            foreground: "#F9F4EA",
            focus: "#464C49",
            primary: {
              foreground: "#3b2b31",
              DEFAULT: "#BF8776",
            },
            success: {
              foreground: "#3b2b31",
              DEFAULT: "#acba91",
            },
            danger: {
              foreground: "#3b2b31",
              DEFAULT: "#DC5B6F",
            },
          },
        },
      },
    }),
  ]
};
export default config;
