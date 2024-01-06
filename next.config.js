// // next.config.js

// // const withMDX = require("@next/mdx")
// import nextMDX from "@next/mdx";
// // remark/rehype markdown plugins
// // import remarkGfm from "remark-gfm";
// // import rehypeSlug from "rehype-slug";
// // import rehypePrism from "rehype-prism-plus";
// // import remarkPrism from "remark-prism";

// const withMDX = nextMDX({
//   extension: /\.mdx?$/,
//   options: {
//     // If you use remark-gfm, you'll need to use next.config.mjs
//     // as the package is ESM only
//     // https://github.com/remarkjs/remark-gfm#install
//     remarkPlugins: [],
//     rehypePlugins: [],
//     // remarkPlugins: [[remarkGfm]],
//     // rehypePlugins: [[rehypePrism, { ignoreMissing: true }]],
//     // If you use `MDXProvider`, uncomment the following line.
//     // providerImportSource: "@mdx-js/react", -> If you use it you'll need "use client" and you won't be able to use metadata
//   },
// });

// const contentSecurityPolicy = `
//   default-src 'self' https://*.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com https://*.vercel-insights.com https://vercel.live;
//   base-uri 'self';
//   block-all-mixed-content;
//   connect-src 'self' https://*.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com https://*.vercel-insights.com https://vercel.live;
//   font-src 'self' https://fonts.gstatic.com https://*.vercel.com https://vercel.live;
//   frame-ancestors 'self';
//   img-src 'self' data: https://i.scdn.co https://avatars.githubusercontent.com https://*.googletagmanager.com https://*.google-analytics.com https://*.vercel.com https://*.vercel-insights.com https://vercel.live https://*.google.com https://*.google.it https://*.githubassets.com https://*.githubusercontent.com https://*.github.com https://*.gstatic.com;
//   object-src 'none';
//   script-src 'self' 'unsafe-eval' 'unsafe-inline' https://*.googletagmanager.com https://*.google-analytics.com https://*.vercel-insights.com https://vercel.live;
//   script-src-attr 'none';
//   style-src 'self' 'unsafe-inline' https://fonts.googleapis.com
// `;
const contentSecurityPolicy = `
  default-src 'self' https://*.vercel-insights.com https://vercel.live;
  base-uri 'self';
  block-all-mixed-content;
  connect-src 'self' https://*.vercel-insights.com https://vercel.live;
  font-src 'self' https://fonts.gstatic.com https://*.vercel.com https://vercel.live;
  frame-ancestors 'self';
  img-src 'self' data: https://avatars.githubusercontent.comhttps://*.vercel.com https://*.vercel-insights.com https://vercel.live https://*.google.com https://*.google.it https://*.githubassets.com https://*.githubusercontent.com https://*.github.com https://*.gstatic.com;
  object-src 'none';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' https://*.vercel-insights.com https://vercel.live;
  script-src-attr 'none';
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com
`;

// Security Headers
const securityHeaders = [
  // Content Security Policy
  {
    key: "Content-Security-Policy",
    value: contentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
  },
  // XSS Protection
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  // No Sniff
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // Force HTTPS
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
  // Referrer Policy
  {
    key: "Referrer-Policy",
    value: "same-origin",
  },
  // Frame Options
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  // reactStrictMode: true,
  // experimental: {
  //   mdxRs: false,
  // },
  // experimental: {
  //   // experimentalReact: true,
  //   serverActions: true,
  // },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;

// // Merge MDX config with Next.js config
// // module.exports = withMDX(nextConfig);
// export default withMDX(nextConfig);

// https://www.youtube.com/watch?v=n2CV6f0vFr4&ab_channel=HamedBahram
