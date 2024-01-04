import type { Config } from "tailwindcss";

const disabledCss = {
  "code::before": false,
  "code::after": false,
  "blockquote p:first-of-type::before": false,
  "blockquote p:last-of-type::after": false,
  pre: false,
  code: false,
  "pre code": false,
  "code:before": false,
  "code:after": false,
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  theme: {
    extend: {
      typography: {
        DEFAULT: { css: disabledCss },
        sm: { css: disabledCss },
        lg: { css: disabledCss },
        xl: { css: disabledCss },
        "2xl": { css: disabledCss },
      },
    },
  },
  // require("@tailwindcss/typography"),

  //     // sm: { // and this is for prose-sm.
  //     //   // css: {
  //     //   //    ....
  //     //   // },
  //     // },
  //   },
  // },
  // theme: {
  //   extend: {
  //     fontFamily: {
  //       // font-family: 'Montserrat', sans-serif;
  //       // Montserrat
  //       // sans: ["Montserrat", ...tailwind_theme.fontFamily.sans],
  //       // mono: ["Victor Mono", ...tailwind_theme.fontFamily.mono],
  //       // or name them
  //       // 'victor-mono': ['Victor Mono'],
  //       // poppins: ['Poppins'],
  //     },
  //   },
  // },
  // screens: {
  //   //   "2xl": { max: "1535px" },
  //   //   // => @media (max-width: 1535px) { ... }
  //   //   xl: { max: "1279px" },
  //   //   // => @media (max-width: 1279px) { ... }
  //   //   lg: { max: "1023px" },
  //   //   // => @media (max-width: 1023px) { ... }
  //   //   md: { max: "767px" },
  //   //   // => @media (max-width: 767px) { ... }
  //   //   sm: { max: "639px" },
  //   //   // => @media (max-width: 639px) { ... }
  //   xs: { max: "479px" },
  //   // => @media (max-width: 479px) { ... }
  // },

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
          ".text-default-desc": {
            color: "rgba(126, 133, 145, 1)",
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
          ".info-section": {
            background:
              "linear-gradient(13deg, rgba(9, 165, 113, 0.1), rgba(106, 216, 179, 0.1), rgba(14, 241, 185, 0.1), rgba(77, 189, 253, 0.1))",
          },
          ".info-section-bc": {
            "border-color": "rgba(42, 69, 85, 0.5)",
          },
          ".info-section-menu": {
            "background-color": "rgba(240, 205, 240, 0.2)",
          },
          ".info-section-content": {
            "background-color": "rgba(255, 255, 255, 0.2)",
          },
          ".class-javier__class": {
            color: "#08863c",
          },
          ".class-javier__javier": {
            color: "#1076c9",
          },
          ".class-javier__par": {
            color: "#809c00",
          },
          ".class-javier__parent": {
            color: "#d10cb7",
          },
          ".btn-focus-class": {
            "background-color": "rgba(244, 248, 240, 0.4)",
            "border-width": "1px",
            "border-color": "rgba(42, 69, 85, 0.2)",
          },
          ".class-method": {
            color: "#0090a3",
          },
          ".class-method-par": {
            color: "#6a2ecc",
          },
          // Common
          ".custom-card": {
            border: "1px solid rgba(53, 54, 53, 0.9)",
            background:
              "linear-gradient(13deg, rgba(9, 165, 113, 0.2), rgba(106, 216, 179, 0.2), rgba(14, 241, 185, 0.2), rgba(77, 189, 253, 0.2))",
            "background-color": "rgba(255, 255, 255, 0.7)",
            cursor: "pointer",
          },
          ".custom-section": {
            border: "1px solid rgba(53, 54, 53, 0.9)",
            // border: "1px solid rgba(53, 54, 53, 0.9)",
            // background:
            //   "linear-gradient(13deg, rgba(9, 165, 113, 0.1), rgba(106, 216, 179, 0.1), rgba(14, 241, 185, 0.1), rgba(77, 189, 253, 0.1))",
            // "background-color": "rgba(240, 205, 240, 0.2)",
            "background-color": "rgba(50, 50, 50, 0.1)",
            "backdrop-filter": "blur(2px)",
          },
          // blog
          ".sse": {
            color: "rgba(14, 165, 233, 1)",
          },
          ".crayong-color": {
            color: "rgba(15, 23, 42, 1)",
          },
          // Posts
          ".post-header": {
            h1: {
              color: "rgba(28, 25, 23, 1)",
            },
            h2: {
              color: "rgba(56, 100, 248, 1)",
            },
          },
          ".bg-post": {
            "background-color": "rgba(219, 234, 254, 1)",
          },
          // ".custom-prose p": {
          //   color: "rgba(15, 23, 42, 1)",
          // },
          // ".custom-prose strong": {
          //   color: "rgba(125, 211, 252, 1)",
          // },
          ".custom-prose": {
            p: {
              color: "rgba(15, 23, 42, 1)",
            },
            strong: {
              color: "rgba(3, 105, 161, 1)",
            },
            "h2, h3, h4, h5, h6": {
              color: "rgba(28, 25, 23, 1)",
            },
            li: {
              color: "rgba(15, 23, 42, 1)",
            },
            "a:hover": {
              color: "rgba(16, 185, 129, 1)",
            },
            "a:visited": {
              color: "rgba(5, 150, 105, 1)",
            },
            "figcaption p": {
              margin: "4px",
              color: "rgba(87, 83, 78, 1)",
            },
            "p code": {
              // color: "rgba(4, 120, 87, 1)",
              // "border-radius": "1.5rem",
              "background-color": "rgba(191, 219, 254, 1)",
              padding: "3px 8px",
            },
            // pre: {
            //   "background-color": "rgba(29, 59, 84, 1)",
            // },
            // "code-line": {
            //   "background-color": "transparent",
            // },
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
          ".text-default-desc": {
            color: "rgba(156, 163, 175, 1)",
          },
          // YouTube btn
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
          // Info section
          ".info-section-bc": {
            "border-color": "rgba(42, 69, 85, 0.5)",
          },
          ".info-section-menu": {
            "background-color": "rgba(15, 15, 15, 0.3)", // 0.5
          },
          ".info-section-content": {
            "background-color": "rgba(0, 0, 0, 0.3)", // 0.6
          },
          ".class-javier__class": {
            color: "#0fe468",
          },
          ".class-javier__javier": {
            color: "#78f3e9",
          },
          ".class-javier__par": {
            color: "#d6b007",
          },
          ".class-javier__parent": {
            color: "#dd6aa4",
          },
          ".btn-focus-class": {
            "background-color": "rgba(55, 65, 81, 1)",
            "border-width": "1px",
            "border-color": "rgba(244, 248, 240, 0.2)",
          },
          ".class-method": {
            color: "#49c6ec",
          },
          ".class-method-par": {
            color: "#93C5FD",
          },
          // Common
          // ".bg-custom-base": {
          //   "background-color": "rgba(204, 251, 241, 0.2)",
          // },
          ".custom-card": {
            border: "1px solid rgba(53, 54, 53, 0.9)",
            background:
              "linear-gradient(13deg, rgba(9, 165, 113, 0.1), rgba(106, 216, 179, 0.1), rgba(14, 241, 185, 0.1), rgba(77, 189, 253, 0.1))",
            "background-color": "rgba(0, 0, 0, 0.8)",
            cursor: "pointer",
          },
          ".custom-section": {
            border: "1px solid rgba(53, 54, 53, 0.9)",
            "background-color": "rgba(0, 0, 0, 0.6)",
            "backdrop-filter": "blur(2px)",
          },
          // blog
          "--fallback-su": "rgba(21, 128, 61, 1)",
          ".sse": {
            color: "#38bdf8",
          },
          ".crayong-color": {
            color: "rgba(219, 234, 254, 1)",
          },
          // Posts
          ".post-header": {
            h1: {
              color: "rgba(219, 234, 254, 1)",
            },
            h2: {
              color: "rgba(56, 189, 248, 0.8)",
            },
          },
          ".bg-post": {
            "background-color": "rgba(24, 24, 27, 1)",
            // "background-color": "rgba(30, 40, 60, 1)",
          },
          // ".custom-prose p": {
          //   color: "rgba(219, 234, 254, 1)",
          // },
          // ".custom-prose strong": {
          //   color: "rgba(125, 211, 252, 1)",
          // },
          ".custom-prose": {
            p: {
              color: "rgba(219, 234, 254, 1)",
            },
            strong: {
              color: "rgba(96, 165, 250, 1)",
            },
            "h2, h3, h4, h5, h6": {
              // color: "rgba(96, 165, 250, 1)",
              color: "rgba(224, 242, 254, 1)",
            },
            li: {
              color: "rgba(219, 234, 254, 1)",
            },
            "a:hover": {
              color: "rgba(5, 150, 105, 1)",
            },
            "a:visited": {
              color: "rgba(6, 95, 70, 1)",
            },
            "p code": {
              color: "rgba(4, 120, 87, 1)",
              // "border-radius": "1.5rem",
              "background-color": "rgba(41, 37, 36, 1)",
              padding: "3px 8px",
            },
            // // SideMenu
            // ".active-section": {
            //   color: "rgba(27, 248, 222, 1)",
            //   "font-weight": "bold",
            // },
          },
        },
      },
    ],
  },
};
export default config;
