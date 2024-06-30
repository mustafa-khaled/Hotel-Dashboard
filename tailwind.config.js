/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        colorGrey: "var(--color-grey-50)",
        colorGrey2: "var(--color-grey-0)",
        borderColor: "var(--color-grey-100)",
        textColor: "var(--color-grey-900)",
        colorBrand: "var(--color-brand-600)",
        hoverBrand: "var(--color-brand-500)",
      },
    },
  },
  plugins: [],
};
