/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#1A1B1E",
        secondary: "#4E4F51",
        tertiary: "#282A2E",
      },
    },
  },
  plugins: [],
};
