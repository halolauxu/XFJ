import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#EAFBF8",
          100: "#CFF5EE",
          200: "#A5EAE0",
          300: "#7ADCCC",
          400: "#5BC0BE",
          500: "#3FA7A5",
          600: "#2E8786",
          700: "#246A6A",
          800: "#1B5050",
          900: "#0F3838",
        },
        leaf: {
          400: "#85D6A4",
          500: "#6FCF97",
          600: "#4FB87B",
        },
        warm: {
          100: "#FFF6DD",
          200: "#FFE9A8",
          300: "#FFDC7A",
          400: "#F4A261",
        },
        lilac: {
          200: "#DCD2FF",
          300: "#BDB2FF",
          400: "#9F90FF",
        },
        ink: {
          900: "#2C3E50",
          700: "#46586A",
          500: "#6E7B8B",
          300: "#A4ADB8",
          200: "#CCD3DA",
          100: "#E5E9ED",
        },
        paper: {
          DEFAULT: "#FBFAF7",
          50: "#FFFFFF",
          100: "#FBFAF7",
          200: "#F4F1EB",
        },
      },
      fontFamily: {
        sans: [
          "PingFang SC",
          "Hiragino Sans GB",
          "Microsoft YaHei",
          "Helvetica Neue",
          "system-ui",
          "sans-serif",
        ],
        num: ["SF Pro Rounded", "Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
        chip: "12px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(46, 62, 80, 0.04), 0 4px 16px rgba(46, 62, 80, 0.06)",
        lift: "0 2px 4px rgba(46, 62, 80, 0.06), 0 12px 32px rgba(46, 62, 80, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
