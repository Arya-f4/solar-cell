/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        'custom-large': '25rem',
        'custom-large-medium': '20rem',
        'custom-medium': '15rem',
        'custom-small': '14rem',

      },
      screens: {
        cs: "900px",
        xs: "640px",
      },
      height: {

        'custom-large': '40rem',
        'custom-medium': '30rem',
        'custom-small': '20rem',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
