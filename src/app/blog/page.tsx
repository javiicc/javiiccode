import "@styles/app/blog/page.css";
import meta from "@/lib/config/metadata";
import TopBar from "@/components/blog/TopBar";
import SideSearcher from "@/components/blog/SideSearcher";
import Posts from "@/components/blog/Posts";

import { getAllArticles } from "../../lib/articles/parsers";
import { getAllTags } from "@/lib/tags/tags";

export const metadata = {
  title: "javiiccode's blog 🤓",
  description: `Notes about software and tech written by ${meta.author.name}. ${meta.description}`,
  keywords: [...meta.keywords, "blog", "articles", "notes"],
};

export default async function Blog() {
  const posts = await getAllArticles();
  // Get tags from posts and pass them to SideSearcher
  const allTags = getAllTags(posts);
  console.log(allTags);

  return (
    <div
      className="min-h-screen font-mono w-[85%] mt-16 gap-8
      container-blog"
    >
      <div className="topbar">
        <TopBar term={"Latest"} />
      </div>
      <div className="sidemenu lg:h-[900px] lg:sticky lg:top-[73px]">
        <SideSearcher tags={allTags} />
      </div>
      <div className="posts flex flex-col pt-8 pb-8">
        <Posts posts={posts} />
        {/* tag=[tag] */}
      </div>
    </div>
  );
}
