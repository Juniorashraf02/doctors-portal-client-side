module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#794BAA",
          secondary: "#9164BD",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      // "dark",
      "cupcake",
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
