module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: (theme) => ({
      ...theme("colors"),
      darkBlue: "#0d262f",
      lightBlue: "#bdddff",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      darkBlue: "#0d262f",
      lightBlue: "#bdddff",
    }),
    borderColor: (theme) => ({
      ...theme("colors"),
      darkBlue: "#0d262f",
      lightBlue: "#bdddff",
    }),
    gradientColorStops: (theme) => ({
      ...theme("colors"),
      darkBlue: "#0d262f",
      lightBlue: "#bdddff",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
