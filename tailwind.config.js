/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#CBA135",
        gray: "#555",
        "light-gray": "#DAE7E1",
        "subtitle-gray": "#a0a0a0",
        "transparent-gray": "rgb(0, 0, 0, 0.5)",
        "slightly-transparent": "rgb(255,255,255,0.95)",
      },
    },
  },
  plugins: [],
};
