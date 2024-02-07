/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "3rem",
      },
    },
    fontSize: {
      body1: ["20px", "30px"],
      body2: ["12px", "18px"],
      heading1: ["157px", "171px"],
      heading2: ["120px", "132px"],
      heading3: ["50px", "55px"],
      heading4: ["32px", "48px"],
      heading5: ["24px", "36px"],
      label1: ["14px", "15px"],
      "4xl": ["36px", "40px"],
    },
    extend: {
      opacity: {
        15: ".15",
      },
      transitionProperty: {
        backgroundPosition: "background-position",
        maxHeight: "max-height",
      },
    },
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".05em",
      widest: ".4em",
    },
    fontFamily: {
      sans: ["n27"],
      mono: ["IBMPlexMono"],
    },
    colors: {
      transparent: "transparent",
      blue: {
        DEFAULT: "#4453D6",
        dark: "#2330a1",
      },
      turquoise: "#2DF2FF",
      dark1: "#000914",
      dark2: "#021023",
      white: "#ffffff",
    },
  },
  plugins: [],
};
