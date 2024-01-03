import "@styles/app/blog/page.css";

import TopBar from "@/components/blog/TopBar";
import SideSearcher from "@/components/blog/SideSearcher";
import Posts from "@/components/blog/Posts";

import { getAllArticles, getOnePost } from "../../lib/articles/parsers";
import { getAllTags } from "@/lib/tags/tags";

// export const metadata = {
//   title: "Blog",
//   description: `Notes about AI and software written by ${meta.author.name}. ${meta.description}`,
//   keywords: [...meta.keywords, "blog", "articles"],
// };

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
      {/* border border-cyan-600 */}
      <div className="topbar">
        {/* border border-red-700 */}
        <TopBar term={"Latest"} />
      </div>
      <div className="sidemenu lg:h-[900px]">
        {/* border border-pink-300 */}
        <SideSearcher tags={allTags} />
      </div>
      <div className="posts flex flex-col pt-8 pb-8">
        {/* border border-green-600 */}
        <Posts posts={posts} />
      </div>
    </div>
  );
}
