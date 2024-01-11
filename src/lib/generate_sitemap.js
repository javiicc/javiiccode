import { getAllArticles } from "./articles/parsers";
import { writeFileSync } from "fs";
// import { globby } from "globby";
import prettier from "prettier";

// const posts = await getAllArticles();
// if (!posts) return [];
{
  /* <loc>${`${EXTERNAL_DATA_URL}/${post.slug}`}</loc> */
}

// const EXTERNAL_DATA_URL = "https://javiercastano.dev/blog";

async function generateSiteMap() {
  const posts = await getAllArticles();
  //   if (!posts) return [];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       <!--We manually set the two URLs we know already-->
       <url>
         <loc>https://javiiccode.com</loc>
       </url>
       <url>
         <loc>https://javiiccode.com/blog</loc>
       </url>
       ${posts
         .map(({ post }) => {
           return `
         <url>
             <loc>${`https://javiiccode.com/blog/${post.slug}`}</loc>
         </url>
       `;
         })
         .join("")}
     </urlset>
   `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: "html",
  });

  // eslint-disable-next-line no-sync
  writeFileSync("public/sitemap.xml", formatted);
}

generateSiteMap();

// function SiteMap() {
//   // getServerSideProps will do the heavy lifting
// }

// export async function getServerSideProps({ res }) {
//   // We make an API call to gather the URLs for our site
//   // const request = await fetch(EXTERNAL_DATA_URL);
//   // const posts = await request.json();
//   const posts = await getAllArticles();

//   // We generate the XML sitemap with the posts data
//   const sitemap = generateSiteMap(posts);

//   res.setHeader("Content-Type", "text/xml");
//   // we send the XML to the browser
//   res.write(sitemap);
//   res.end();

//   return {
//     props: {},
//   };
// }

// export default SiteMap;
