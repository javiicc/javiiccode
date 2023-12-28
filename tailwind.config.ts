import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  // theme: {
  //   extend: {
  //     fontFamily: {
  //       sans: ["Montserrat", ...tailwind_theme.fontFamily.sans],
  //       mono: ["Victor Mono", ...tailwind_theme.fontFamily.mono],
  //       // or name them
  //       // 'victor-mono': ['Victor Mono'],
  //       // poppins: ['Poppins'],
  //     },
  //   },
  // },
  screens: {
    //   "2xl": { max: "1535px" },
    //   // => @media (max-width: 1535px) { ... }
    //   xl: { max: "1279px" },
    //   // => @media (max-width: 1279px) { ... }
    //   lg: { max: "1023px" },
    //   // => @media (max-width: 1023px) { ... }
    //   md: { max: "767px" },
    //   // => @media (max-width: 767px) { ... }
    //   sm: { max: "639px" },
    //   // => @media (max-width: 639px) { ... }
    xs: { max: "479px" },
    // => @media (max-width: 479px) { ... }
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          // primary: "#0000ff",
          // secondary: "#0074ff",
          // accent: "#7f3100",
          // neutral: "#22272a",
          // "base-100": "rgba(242, 252, 250, 1)",
          // info: "#00a9c3",
          // success: "#00ee68",
          // warning: "#bd8700",
          // error: "#b91c1c",
          body: {
            "background-color": "oklch(100% 0 0)",
            "background-image":
              "linear-gradient(to right, rgb(64, 64, 64, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgb(64, 64, 64, 0.03) 1px, transparent 1px)",
            "background-attachment": "fixed",
            "background-size": "50px 50px",
            // opacity: 1,
          },
          ".text-default": {
            color: "rgba(0, 0, 0, 0.8)",
          },
          ".youtube-btn": {
            // font-family: "Roboto", sans-serif;
            background:
              "linear-gradient(13deg, #09a571, #6ad8b3, #0ef1b9, #4dbdfd)",
          },
          ".youtube-btn::before": {
            background: "#e4e4e4",
          },
          ".youtube-btn-bg-color": {
            color: "rgba(3, 46, 46, 1)",
          },
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          // fontFamily: "Montserrat",
          // primary: "#0000ff",
          // secondary: "#00d800",
          // accent: "#007ad1",
          // neutral: "#332d1c",
          "base-300": "rgba(0, 0, 0)",
          // info: "#00adf1",
          // success: "#009670",
          // warning: "#ff8500",
          // error: "#ff7d8f",
          body: {
            "background-color": "rgba(0, 0, 0)",
            "background-image":
              "linear-gradient(to right, rgb(7, 7, 7, 0.85) 1px, transparent 1px), linear-gradient(to bottom, rgb(7, 7, 7, 0.85) 1px, transparent 1px)",
            "background-attachment": "fixed",
            "background-size": "50px 50px",
          },
          ".text-default": {
            color: "rgba(208, 231, 255, 0.8)",
          },
          ".youtube-btn": {
            // font-family: "Roboto", sans-serif;
            background:
              "linear-gradient(13deg, #09a571, #6ad8b3, #0ef1b9, #4dbdfd)",
          },
          ".youtube-btn::before": {
            background: "#272727",
          },
          ".youtube-btn-bg-color": {
            color: "rgba(240, 255, 255, 1)",
          },
          // ".youtube-btn": {
          //   // "font-family": "Mono sans-serif",
          //   position: "relative",
          //   "text-decoration": "none",
          //   background:
          //     "linear-gradient(13deg, #09a571, #6ad8b3, #0ef1b9, #4dbdfd)",
          //   padding: "10px 22px",
          //   "border-radius": "10px",
          //   "font-size": "1.25em",
          // },
        },
      },
    ],
  },
};
export default config;
