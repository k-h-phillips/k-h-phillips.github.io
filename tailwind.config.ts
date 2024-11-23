import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
  }
};
export default config;
