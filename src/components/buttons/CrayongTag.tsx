// import { getTagColor, tagColor } from "@/lib/tags/tags";
import Link from "next/link";

const CrayongTag = ({ tag }: { tag: string }) => {
  return (
    <Link
      href={`/blog/tags/${tag}`}
      className={`${tag} border-opacity-50 rounded-md p-[4px]`}
    >
      <span className={`hashtag-color`}>#</span>
      <span className="">{tag}</span>
    </Link>
  );
};

export default CrayongTag;
