/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      Primary: "#5C7F67",
      Secondary: "#ECF4E7",
      Black: "#100F0F",
      Third: "#F87272",
      Neutral: "#5D5656",
      BackgroundColor: "#E9E7E7",
      PrimaryFocus: "#496552",
      PrimaryContent: "#C7FFD9",
      PrimarySecondary: "#BAD7A8",
      NeutralFocus: "#4A4545",
      accent: "#FAE5E5",
    },
    fontSize: {
      H1: [
        "90.44px",
        {
          lineHeight: "144px",
        },
      ],
      H2: [
        "63.96px",
        {
          lineHeight: "112px",
        },
      ],
      H3: [
        "45.23px",
        {
          lineHeight: "30px",
        },
      ],
      H4: [
        "31.99px",
        {
          lineHeight: "30px",
        },
      ],
      H5: [
        "22.62px",
        {
          lineHeight: "30px",
        },
      ],
      H6: [
        "16px",
        {
          lineHeight: "30px",
        },
      ],
    },
  },
  plugins: [],
};
