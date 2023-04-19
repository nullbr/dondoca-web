/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "signature-gold": "#CBA135",
        gray: "#52525b",
        "light-gray": "#DAE7E1",
        "slightly-transparent": "rgb(255,255,255,0.95)",
      },
    },
    screens: {
      md1200: { max: "1200px" },
      md1000: { max: "1000px" },
      min800: { max: "800px" },
      min620: { max: "620px" },
      min540: { max: "540px" },
      min450: { max: "450px" },
      min375: { max: "375px" },
    },
  },
  plugins: [],
};
