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
        secondary: "#28AE63",
        darkBg:"#002529"
      },
      backgroundImage: {
        "gradient-cover":
          "linear-gradient(90.21deg, rgba(25, 30, 41, 0.5) -5%, rgba(25, 61, 96, 0.5) 111.58%)"
        
      },
    },
  },
  plugins: [],
};
export default config;
