import "./Posts.css";

import { List } from "postcss/lib/list";
import LastPostCard from "./LastPostCard";
import PostCard from "./PostCard";

const Posts = ({
  posts,
  // tag,
}: {
  posts: Array<any> | undefined;
  // tag: string | undefined;
}) => {
  // Array<Object> | undefined
  // console.log("-----------");
  // console.log(posts);
  // console.log("-----------");
  if (!posts || posts.length === 0) {
    return (
      <h2 className="mt-10 text-center">
        Uh Oh! Sorry, no posts seem to be available :-(
      </h2>
    );
  }
  // if (posts.length === 0) {
  //   return (
  //     <h2 className="mt-10 text-center">
  //       Uh Oh! Sorry, no posts seem to be available :-(
  //     </h2>
  //   );
  // }
  const lastPost = posts[0];
  const restPosts = posts.slice(1);

  // console.log("-----------");
  // console.log(lastPost);
  // console.log("-----------");

  return (
    <ul
      key={"post-array"}
      className="w-[100%] h-[100%]
      border border-yellow-400"
    >
      <div
        key={lastPost.slug.concat("-", lastPost.date)}
        className="max-h-[300px] w-[100%] mb-16
        flex items-center justify-center"
      >
        <LastPostCard className={""} post={lastPost} />
      </div>
      <div className="container-posts     border border-cyan-400">
        {restPosts.map((post) => (
          <li key={post.slug.concat("-", post.date)} className="flex ">
            <PostCard className={""} post={post} />
          </li>
        ))}
      </div>
    </ul>
  );
};

export default Posts;
