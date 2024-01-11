import config from "./index";

const author = {
  name: "Javier Castano",
  github: "@javiicc",
  email: "javier.data.scientist@outlook.com",
  website: "https://javiiccode.com",
};

const defaultTitle = "javiiccode";
const defaultDescription = "javiiccode's blog <3";

const metadata = {
  title: {
    default: defaultTitle,
  },
  description: defaultDescription,
  keywords: [
    "javier castano",
    "javier castaño",
    "javiercastano",
    "data scientist",
    "nlp",
    "natural language processing",
    "software developer",
    "software engineer",
    "artificial intelligence",
    "data science",
    "python",
    "tech",
  ],
  author,
  authors: [author],
  colorSchema: "dark",
  metadataBase: new URL(config.baseUrl),
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: config.baseUrl,
    siteName: defaultTitle,
    locale: "en-US",
    type: "website",
  },
};

// export const viewport = {
//   width: 1,
//   themeColor: "dark",
// };

export default metadata;

// import config from "./index";

// const author = {
//   name: "Javier Castano",
//   github: "@javiicc",
//   email: "javier.data.scientist@outlook.com",
//   website: "https://javiiccode.com",
// };

// const defaultTitle = "javiiccode";
// const defaultDescription = "javiiccode's blog <3";

// const metadata = {
//   title: {
//     // template: "%s - javiiccode",
//     default: defaultTitle,
//   },
//   description: defaultDescription,
//   keywords: [
//     "javier castano",
//     "javier castaño",
//     "javiercastano",
//     "data scientist",
//     "nlp",
//     "natural language processing",
//     "software developer",
//     "software engineer",
//     "artificial intelligence",
//     "data science",
//     "python",
//     "tech",
//   ],
//   author,
//   authors: [author],
//   colorSchema: "dark",
//   metadataBase: new URL(config.baseUrl),
//   openGraph: {
//     title: defaultTitle,
//     description: defaultDescription,
//     url: config.baseUrl,
//     siteName: defaultTitle,
//     // images: [
//     //   {
//     //     url: "https://javiercastano.dev/card.png",
//     //     width: 512,
//     //     height: 512,
//     //     alt: "Javier Castano",
//     //   },
//     // ],
//     locale: "en-US",
//     type: "website",
//   },
//   // icons: {
//   //   icon: "/favicon-16x16.png",
//   //   shortcut: "/favicon.ico",
//   //   apple: "/apple-touch-icon.png",
//   // },
//   // manifest: "/site.webmanifest",
// };

// export const viewport = {
//   width: 1,
//   themeColor: "dark",
// };

// export default metadata;
