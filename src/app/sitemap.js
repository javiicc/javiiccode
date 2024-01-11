import { getArticleSlugs } from "@/lib/articles/parsers";

const URL = "https://javiiccode.com";

export default async function sitemap() {
  const slugs = await getArticleSlugs();

  const posts = slugs.map((slug) => ({
    url: `${URL}/blog/${slug}`,
  }));

  const routes = ["", "/blog"].map((route) => ({
    url: `${URL}${route}`,
  }));

  return [...routes, ...posts];
}
