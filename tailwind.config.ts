import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      main: '#5a4a42',
      primary: "#d3cbc0",
      background: "#1c1c1e",
      hover: "#a29f9b",
    },
  },
  plugins: [],
};
export default config;
