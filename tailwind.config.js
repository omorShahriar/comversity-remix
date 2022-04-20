module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        themeBrown: "#f09959",
        themeBlue: {
          default: "#75a1de",
          light: "#e7f3fe",
        },
        themeGrey: {
          light: "#EBECEB",
          default: "#7c8076",
          dark: "#3e403b",
        },
        backgroundImage: {
          begin: "url('/begin.png')",
        },
      },
    },
  },
};
