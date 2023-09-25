import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      fontWeight: {
        "300": "300",
        "600": "600",
        "800": "800",
      },
      colors: {
        "dark-gray": "hsl(0, 0%, 52%)",
        "dark-blue": "hsl(209, 23%, 22%)",
        "light-gray-bg": "hsl(0, 0%, 98%)",
        "dark-blue-bg": "hsl(208, 26%, 13%)",
        "dark-blue-text": "hsl(200, 15%, 8%)",
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [],
} satisfies Config;
