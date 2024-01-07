import "@styles/app/blog/page.css";

import TopBar from "@/components/blog/TopBar";
import SideSearcher from "@/components/blog/SideSearcher";
import Posts from "@/components/blog/Posts";

import { getAllArticles, getOnePost } from "@/lib/articles/parsers";
import { getAllTags } from "@/lib/tags/tags";

// export const metadata = {
//   title: "Blog",
//   description: `Notes about AI and software written by ${meta.author.name}. ${meta.description}`,
//   keywords: [...meta.keywords, "blog", "articles"],
// };

export default async function BlogTag({ params }: { params: any }) {
  const { tag } = params;
  const posts = await getAllArticles();
  const allTags = getAllTags(posts);

  const taggedPosts = posts.filter((post) => {
    return post.tags.includes(tag);
  });

  if (taggedPosts.length === 0 || taggedPosts === undefined) {
    return (
      <div
        className="font-mono w-[85%] mt-16 gap-8
        container-blog flex justify-center"
      >
        <div className="topbar">
          <TopBar term={"Latest"} />
        </div>
        <div className="sidemenu lg:h-[900px] lg:sticky lg:top-[73px]">
          <SideSearcher tags={allTags} posts={posts} />
        </div>
        <h2 className="mt-10 text-center">
          Uh Oh! Sorry, no posts seem to be available :-(
        </h2>
      </div>
    );
  }

  return (
    <div
      className="font-mono w-[85%] mt-16 gap-8
      container-blog flex justify-center"
    >
      <div className="topbar">
        <TopBar term={"Latest"} />
      </div>
      <div className="sidemenu lg:h-[900px] lg:sticky lg:top-[73px]">
        <SideSearcher tags={allTags} posts={posts} />
      </div>
      <div className="posts flex flex-col pt-4 pb-16">
        <Posts posts={taggedPosts} />
      </div>
    </div>
  );
}
