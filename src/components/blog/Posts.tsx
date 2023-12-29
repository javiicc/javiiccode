// import "./Posts.css";
// import PostCard from "@components/blog/preview/PostCard";
// import LastPostCard from "@components/blog/preview/LastPostCard";

import LastPostCard from "./LastPostCard";
import PostCard from "./PostCard";

const Posts = ({ posts }: { posts: any }) => {
  // console.log("-----------");
  // console.log(posts);
  // console.log("-----------");
  //   if (!posts) {
  //     return (
  //       <p className="mt-10 text-center">
  //         Uh Oh! Sorry, no posts seem to be available :-(
  //       </p>
  //     );
  //   }
  //   if (posts.length === 0) {
  //     return (
  //       <p className="mt-10 text-center">
  //         Uh Oh! Sorry, no posts seem to be available :-(
  //       </p>
  //     );
  //   }
  //   const lastPost = posts[0];
  //   const restPosts = posts.slice(1);

  return (
    <ul
      //   key={""}
      className="w-[100%]
      border border-yellow-400"
    >
      <li
        key={"thelastpost"}
        className="flex items-center justify-center h-[300px] w-[100%] mb-16"
      >
        <LastPostCard className={""} post={undefined} />
        {/* <LastPostCard className={"last-post"} post={lastPost} /> */}
      </li>
      <li
        key={""}
        className="flex items-center justify-center h-[200px] w-[100%]"
      >
        <PostCard className={""} post={undefined} />
        {/* <LastPostCard className={"last-post"} post={lastPost} /> */}
      </li>
      {/* {restPosts.map((post) => (
        <li key={post.aricleId} className="">
          <PostCard className={"flex-col rest-post-titles"} post={post} />
        </li>
      ))} */}
    </ul>
  );
};

export default Posts;
