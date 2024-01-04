// import { getTagColor, tagColor } from "@/lib/tags/tags";
import Link from "next/link";

const CrayongTag = ({ tag }: { tag: string }) => {
  return (
    <Link
      href={`/blog/tags/${tag}`}
      className={`${tag} border-opacity-50 rounded-md p-[4px] flex items-center justify-center`}
    >
      <span className="hashtag-color flex items-center justify-center">#</span>
      <span className="flex items-center justify-center">{tag}</span>
    </Link>
  );
};

export default CrayongTag;
