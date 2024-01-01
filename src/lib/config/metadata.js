import config from "./index";
const author = {
  name: "Javier Castano",
  github: "@javiicc",
  email: "javier.data.scientist@outlook.com",
  website: "https://javiercastano.dev",
};

const defaultTitle = "Javier Castano | Software & AI";
const defaultDescription =
  "Hi! I'm Javier Castano, a Data Scientist and Software Developer dedicated to creating products with code and AI.";
const metadata = {
  title: {
    template: "%s - Javier Castano | Software & AI",
    default: defaultTitle,
  },
  description: defaultDescription,
  keywords: [
    "javier castano",
    "javiercastano",
    "data scientist",
    "nlp",
    "natural language processing",
    "software developer",
    "software engineer",
    "artificial intelligence",
    "data science",
    "python",
    "react",
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
    images: [
      {
        url: "https://javiercastano.dev/card.png",
        width: 512,
        height: 512,
        alt: "Javier Castano",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  icons: {
    icon: "/favicon-16x16.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#38BDF8",
  manifest: "/site.webmanifest",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default metadata;
