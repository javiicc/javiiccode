// nextjs.org/docs/pages/building-your-application/routing/dynamic-routes
// https://nextjs.org/docs/app/building-your-application/routing

// import { getPostsMeta, getPostByName } from "@";
import { cache } from "react";
import dynamic from "next/dynamic";
import { getArticle, getAllArticles } from "../../../lib/articles/parsers";
import { notFound } from "next/navigation";
import Link from "next/link";
import meta from "../../../lib/config/metadata";

// revalidate = 0 => No cache, CHANGE it before launching
// export const revalidate = 0;

// const Article = dynamic(() => import("../../../components/articles/Article"), {
//   loading: () => <p>Loading...</p>,
// });

// export async function generateMetadata({ params }) {
//   const { slug } = params;
//   const { frontMatter } = await getArticle({ slug });

//   return {
//     ...meta,
//     title: frontMatter.title,
//     description: frontMatter.description,
//     keywords: frontMatter.tags,
//     openGraph: {
//       title: frontMatter.title,
//       description: frontMatter.description,
//       type: "article",
//       article: {
//         authors: [frontMatter.author],
//         tags: frontMatter.tags,
//         publishedTime: frontMatter.date,
//         modifiedTime: frontMatter.date,
//       },
//       // images: [
//       //   {
//       //     url: urlJoin(config.baseUrl, frontMatter.thumbnail),
//       //     alt: frontMatter.title,
//       //   },
//       // ],
//     },
//   };
// }

// export const dynamicParams = false;

/// DYNAMIC PAGES
// Return a list of `params` to populate the [slug] dynamic segment
// https://nextjs.org/docs/app/api-reference/functions/generate-static-params
export async function generateStaticParams() {
  const posts = await getAllArticles();
  if (!posts) return [];

  const dynamicSegments = posts.map((post) => ({
    slug: post.slug,
  }));

  return dynamicSegments;
}

const fetchArticle = cache(async ({ slug }: { slug: string }) => {
  const { frontMatter, source } = await getArticle({ slug });
  return { frontMatter, source };
});

/// METADATA
// export async function generateMetadata({ params }) {
//   // ------------------------------- postId

//   console.log(`postId in generateMetadata ${params.postId}`);
//   const post = await getPostByName(`${params.postId}.mdx`); //deduped!

//   // optionally access and extend (rather than replace) parent metadata
//   // const previousImages = (await parent).openGraph?.images || [];
//   if (!post) {
//     return {
//       title: "Post Not Found",
//     };
//   }

//   return {
//     // postId: postId,
//     title: post.meta.title,
//     // subtitle: post.subtitle,
//     // author: post.author,
//     // date: post.date,
//   };
// }

// Multiple versions of this page will be statically generated
export default async function BlogPostPage({ params }: { params: any }) {
  const { slug } = params;
  const { frontMatter, source } = await fetchArticle({ slug });

  if (!source) notFound();

  return (
    // <div className="w-[100%]">
    <Article frontMatter={frontMatter} source={source} />
    // </div>
  );
}
