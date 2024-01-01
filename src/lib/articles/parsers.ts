import { promises } from "fs";
import path from "path";

// Use gray-matter to parse the post metadata section
import matter from "gray-matter";

import config from "../config";
// import config from "@/lib/config";

import { serialize } from "next-mdx-remote/serialize";

// // remark plugin to support GFM (autolink literals, footnotes, strikethrough, tables, tasklists)
// import remarkGfm from "remark-gfm";
// // rehype plugin to add `id` attributes to headings
// import rehypeSlug from "rehype-slug";
// // rehype plugin to highlight code blocks in HTML with Prism (via refractor) with additional line highlighting and line numbers functionalities
// import rehypePrism from "rehype-prism-plus";

export async function getArticleSlugs() {
  const fullPath = path.join(process.cwd(), "./src/articles");
  // console.log(`fullPath :: ${fullPath}`);
  const articles = await promises.readdir(fullPath);
  // console.log(`articles :: ${articles}`);

  if (!articles) {
    return [];
  } else if (articles.length === 0) {
    return [];
  }

  const slugs = articles
    .filter((file) => /\.mdx?$/.test(file))
    .map((file) => file.replace(/\.mdx?$/, ""));
  // console.log(`slugs :: ${slugs}`);
  return slugs;
}

export async function getAllArticles() {
  const slugs = await getArticleSlugs();
  // ---
  const articles = [];
  for (const slug of slugs) {
    const { frontMatter } = await getArticleData({ slug });
    articles.push(frontMatter);
  }
  let sortedArticles = articles.sort((a, b) => (a.date > b.date ? -1 : 1));

  return sortedArticles;
}

export async function wait(ms: any) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getLastNArticle(n: any) {
  const articles = await getAllArticles();
  const piece = articles.slice(0, n);
  // console.log(`--- piece ${piece}`);
  return piece;
}

const articlesCache = new Map();
async function getArticleData({ slug }: { slug: any }) {
  if (articlesCache.has(slug)) {
    return articlesCache.get(slug);
  }
  const fullPath = path.join(process.cwd(), "./src/articles", `${slug}.mdx`);
  console.log(`fullPath :: ${fullPath}`);
  const raw = await promises.readFile(fullPath, "utf8");
  // console.log(`raw :: ${raw}`);
  const parsedData = parseArticleData({ raw, slug });
  // console.log(`parsedData :: ${parsedData}`);

  articlesCache.set(slug, parsedData);

  return parsedData;
}

export async function getOnePost() {
  const slug = "embedding-vectors-in-NLP-word-and-sentence-embeddings";
  const fullPath =
    "/home/javiicc/repos/javiiccode/src/articles/embedding-vectors-in-NLP-word-and-sentence-embeddings.mdx";
  console.log(`fullPath :: ${fullPath}`);
  const raw = await promises.readFile(fullPath, "utf8");
  console.log(`raw :: ${raw}`);

  const parsedData = parseArticleData({ raw, slug });
  // console.log(`parsedData :: ${parsedData}`);

  const { frontMatter }: any = parsedData;
  // console.log(`frontMatter :: ${frontMatter}`);

  return frontMatter;
  // return raw;
}

function parseArticleData({ raw, slug = "" }: { raw: any; slug: any }) {
  // Use gray-matter to parse the post metadata section
  const { data, content } = matter(raw);

  const baseUrl = new URL(config.baseUrl);
  const articlePath = `/articles/${slug}`;
  const permalink = new URL(articlePath, baseUrl).toString();

  return {
    frontMatter: {
      ...data,
      // title: removeMarkdown(data.title),
      slug, // postId
      permalink: permalink,
      // date: data?.date ? new Date(data.date)?.toISOString() : new Date().toISOString(),
      // readingTime: Math.ceil(readingTime(content).minutes)
      // subtitle: frontmatter.subtitle,
      // description: frontmatter.description,
      // author: frontmatter.author,
      // date: frontmatter.date,
      // read_time: frontmatter.read_time,
      // last_update: frontmatter.last_update,
      // thumbnail: frontmatter.thumbnail,
      // tags: frontmatter.tags,
    },
    content,
  };
}

export async function getArticle({ slug }: { slug: any }) {
  const { frontMatter, content } = await getArticleData({ slug });
  const compiledSource = await compileSource({ content });
  const article = {
    frontMatter,
    source: compiledSource,
  };

  return article;
}

async function compileSource({ content }: { content: any }) {
  const { compiledSource } = await serialize(content, {
    parseFrontmatter: false,
    // mdxOptions: {
    //   remarkPlugins: [[remarkGfm]],
    //   rehypePlugins: [[rehypeSlug], [rehypePrism, { ignoreMissing: true }]],
    // },
  });

  return compiledSource;
}

///////////////////////////////////////////////////////////////////////////////////
// import { compileMDX } from "next-mdx-remote/rsc";
// import rehypeAutolinkHeadings from "rehype-autolink-headings/lib";
// import rehypeHighlight from "rehype-highlight/lib";
// import rehypeSlug from "rehype-slug";
// import Video from "@/app/components/Video";
// import CustomImage from "@/app/components/CustomImage";

// export async function getPostByName(fileName) {
//   // console.log(`fileName ${fileName}`);
//   const res = await fetch(
//     `https://raw.githubusercontent.com/javiicc/test-blogpostsp/main/${fileName}`,
//     {
//       headers: {
//         Accept: "application/vnd.github+json",
//         Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
//         "X-GitHub-Api-Version": "2022-11-28",
//       },
//     }
//   );
//   // console.log(`res ${res}`);

//   if (!res.ok) return undefined;

//   const rawMDX = await res.text();
//   // console.log(`rawMDX ${rawMDX}`);

//   // console.log("BEFORE");
//   if (rawMDX === "404: Not Found") return undefined;
//   // console.log("AFTER");

//   const { frontmatter, content } = await compileMDX({
//     source: rawMDX,
//     // components: {
//     //   Video,
//     //   CustomImage,
//     // },
//     options: {
//       parseFrontmatter: true,
//       mdxOptions: {
//         rehypePlugins: [
//           rehypeHighlight,
//           rehypeSlug,
//           [
//             rehypeAutolinkHeadings,
//             {
//               behavior: "wrap",
//             },
//           ],
//         ],
//       },
//     },
//   });

//   const postId = fileName.replace(/\.mdx$/, "");
//   // console.log(`postId in getPostByName ${postId}`);

//   console.log(`tags in getPostByName : ${frontmatter.tags}`);

//   const blogPostObj = {
//     meta: {
//       postId,
//       title: frontmatter.title,
//       subtitle: frontmatter.subtitle,
//       description: frontmatter.description,
//       author: frontmatter.author,
//       date: frontmatter.date,
//       read_time: frontmatter.read_time,
//       last_update: frontmatter.last_update,
//       thumbnail: frontmatter.thumbnail,
//       tags: frontmatter.tags,
//     },
//     content,
//   };

//   return blogPostObj;
// }

// export async function getPostsMeta() {
//   const res = await fetch(
//     "https://api.github.com/repos/javiicc/test-blogpostsp/git/trees/main?recursive=1",
//     {
//       headers: {
//         Accept: "application/vnd.github+json",
//         Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
//         "X-GitHub-Api-Version": "2022-11-28",
//       },
//     }
//   );
//   console.log(`res ${res}`);

//   if (!res.ok) return undefined;

//   const repoFiletree = await res.json();

//   console.log(`repoFiletree ${repoFiletree}`);

//   const filesArray = repoFiletree.tree
//     .map((obj) => obj.path)
//     .filter((path) => path.endsWith(".mdx"));

//   const posts = [];

//   for (const file of filesArray) {
//     const post = await getPostByName(file);
//     if (post) {
//       const { meta } = post;
//       posts.push(meta);
//     }
//   }

//   return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
// }

// const postsDirectory = path.join(process.cwd(), "app", "content");

// /**
//  *
//  *
//  *
//  */
// export function getSortedPostsData(n) {
//   // Get file names under /posts
//   const fileNames = fs.readdirSync(postsDirectory);
//   console.log("------------ fileNames ------------");
//   console.log(fileNames);
//   const allPostsData = fileNames.map((fileName) => {
//     // Remove ".md" from file name to get id
//     const postId = fileName.replace(/\.mdx$/, "");
//     // console.log("------------ postId ------------");
//     // console.log(postId);

//     // Read markdown file as string
//     const fullPath = path.join(postsDirectory, fileName);
//     // console.log("------------ fullPath ------------");
//     // console.log(fullPath);
//     const fileContents = fs.readFileSync(fullPath, "utf8");

//     // Use gray-matter to parse the post metadata section
//     const matterResult = matter(fileContents);

//     const blogPost = {
//       postId,
//       title: matterResult.data.title,
//       subtitle: matterResult.data.description,
//       description: matterResult.data.description,
//       author: matterResult.data.author,
//       date: matterResult.data.date,
//       read_time: matterResult.data.read_time,
//       last_update: matterResult.data.last_update,
//       thumbnail: matterResult.data.thumbnail,
//     };

//     // Combine the data with the id
//     return blogPost;
//   });
//   // Sort posts by date
//   let allSortedPostsMetadata = allPostsData.sort((a, b) =>
//     a.date < b.date ? 1 : -1
//   );

//   const lastNSortedPostsMetadata = getNLastElements(n, allSortedPostsMetadata);
//   // console.log(`allSortedPostsMetadata: ${allSortedPostsMetadata}`);
//   // console.log(
//   //   `typeof allSortedPostsMetadata: ${typeof allSortedPostsMetadata}`
//   // );
//   // console.log(allSortedPostsMetadata.slice(1));
//   return lastNSortedPostsMetadata;
// }

// function getNLastElements(n, allSortedPostsMetadata) {
//   if (n !== undefined) {
//     return allSortedPostsMetadata.slice(n);
//   } else {
//     return allSortedPostsMetadata;
//   }
// }

// /**
//  * Gets MDX post data from local storage and process it to HTML
//  * @param  {String} postId The post ID
//  * @return {Object}        The ID, metadata, and contents
//  */
// export async function getPost(postId) {
//   // console.log(`process.cwd(): ${process.cwd()}`);
//   // const postsDirectory = path.join(process.cwd(), "app", "content");
//   const fullPath = path.join(postsDirectory, postId + ".mdx");
//   const fileContents = fs.readFileSync(fullPath, "utf8");
//   // console.log("------------ fileContents ------------");
//   // console.log(fileContents);

//   // Use gray-matter to parse the post metadata section
//   const matterResult = matter(fileContents);
//   // console.log("------------ matterResult ------------");
//   // console.log(matterResult);

//   const processedContent = await remark()
//     .use(html)
//     .process(matterResult.content);
//   // console.log("------------ processedContent ------------");
//   // console.log(processedContent);

//   const contentHtml = processedContent.toString();

//   const blogPostWithHTML = {
//     postId,
//     title: matterResult.data.title,
//     subtitle: matterResult.data.subtitle,
//     author: matterResult.data.author,
//     date: matterResult.data.date,
//     contentHtml,
//   };

//   // Combine the data with the id
//   return blogPostWithHTML;
// }

// // FOR REMOTE FILES
// // if (!post) {
// //   throw new Error("Failed to fetch post data");
// // }
// //   const { content, frontmatter } = await compileMDX({
// //     source: post,
// //     options: { parseFrontmatter: true },
// //   });
// //   console.log("---------DATA---------");
// //   console.log(`frontmatter: ${frontmatter.title}`);
// //   console.log(`frontmatter: ${frontmatter.author}`);
// //   return [content, frontmatter];
