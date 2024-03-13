import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/beeps/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/componyents/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/wibs/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pictuwes/**/*.{jpg,jpeg,png}",
    "./src/stywes/**/*.scss",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
