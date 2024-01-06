// import { getSortedPostsData } from "../lib/posts";
import { getAllArticles, getArticleSlugs } from "@/lib/articles/parsers";

const URL = "https://javiiccode.com";

export default async function sitemap() {
  //   const posts = await getAllArticles();
  //   console.log(`POSTS ------- ${posts}`);
  const slugs = await getArticleSlugs();
  //   console.log(`SLUGS ------- ${slugs}`);
  //   console.log(slugs);
  //   console.log(slugs[0]);
  //   console.log(typeof slugs[0]);
  //   console.log(`SLUGS ------- ${typeof slugs}`);

  // let posts = {}
  // if (!slugs) {
  //   posts = {}
  // } else if (posts.length === 0) {
  //   posts = {}
  // } else {
  //   posts = slugs.map((slug) => ({
  //     url: `${URL}/blog/${slug}`,
  //   }));
  // }

  // if (slugs.length === 0) {
  //   const posts = {};
  // } else {
  //   const posts = slugs.map((slug) => ({
  //     url: `${URL}/blog/${slug}`,
  //   }));
  // }
  const posts = slugs.map((slug) => ({
    url: `${URL}/blog/${slug}`,
  }));

  // lastModified: date,
  //   console.log("--------------------------");
  //   console.log(posts);
  //   console.log("--------------------------");

  const routes = ["", "/blog", "/contact"].map((route) => ({
    url: `${URL}${route}`,
  }));
  // lastModified: new Date().toISOString(),

  return [...routes, ...posts];
}
