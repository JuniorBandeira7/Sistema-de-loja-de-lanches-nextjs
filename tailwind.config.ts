import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "one": "#C43325",
        "two": "#9C3F36",
        "three": "#F01805",
        "four": "#703F3A",
        "five": "#453130",
        "six": "#332C2C"
      },
    },
  },
  plugins: [],
};
export default config;
