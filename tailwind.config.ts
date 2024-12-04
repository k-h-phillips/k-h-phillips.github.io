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
        dark_mauve: "var(--plum)",
        peach: "var(--peach)",
        light_mauve: "var(--mauve)",
        dusty_blue: "var(--dusty-blue)",
        oyster: "var(--linen)",
        sage: "var(--sage)",
      }
    },
  },
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
              foreground: "#5B454C",
              DEFAULT: "#BF8776",
            },
            danger: {
              foreground: "#5B454C",
              DEFAULT: "#DC5B6F",
            },
          },
        },
      },
    }),
  ]
};
export default config;
