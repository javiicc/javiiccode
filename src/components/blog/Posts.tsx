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
  if (!posts || posts.length === 0) {
    return (
      <h2 className="mt-10 text-center">
        Uh Oh! Sorry, no posts seem to be available :-(
      </h2>
    );
  }

  const lastPost = posts[0];
  const restPosts = posts.slice(1);

  return (
    <ul key={"post-array"} className="w-[100%]">
      {/* h-[100%] */}
      <div
        key={lastPost.slug.concat("-", lastPost.date)}
        className="max-h-[300px] w-[100%] mb-16
        "
      >
        {/* flex items-center justify-center */}
        <LastPostCard className={""} post={lastPost} />
      </div>
      <div className="container-posts">
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
