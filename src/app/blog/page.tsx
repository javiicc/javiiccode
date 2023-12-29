import "@styles/app/blog/page.css";
import LastPostCard from "@/components/blog/LastPostCard";
import PostCard from "@/components/blog/PostCard";
import Posts from "@/components/blog/Posts";
import TopBar from "@/components/blog/TopBar";

export default function Blog() {
  return (
    <div
      className="min-h-screen font-mono w-[85%] mt-16 gap-8
      container-blog
      border border-cyan-600"
    >
      {/* flex items-start justify-center */}
      <div className="topbar">{/* <TopBar term={"Latest"} /> */}</div>
      <div
        className="sidemenu
        border border-pink-300 h-[900px]"
      >
        {/* flex items-center justify-center */}
        SIDE MENU
      </div>
      <div
        className="posts
        border border-green-600"
      >
        {/* flex flex-col items-start justify-center */}
        {/* <Posts posts={undefined} /> */}
      </div>
    </div>
  );
}

// display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 10px;
//   grid-auto-rows: minmax(100px, auto);

{
  /* <div
        className="max-w-7xl w-[70%]
        posts border border-green-400"
      >
        <div className="top-bar-blog">top bar</div>
        <div className="side-menu-sm-device">small device side menu</div>
        <div className="post-1">post 1</div>
        <div className="post-2">post 2</div>
        <div className="post-3">post 3</div>
      </div>
      <div
        className="min-w-[300px] W-[25%]
        side-menu-blog"
      >
        SIDE MENU
      </div> */
}
