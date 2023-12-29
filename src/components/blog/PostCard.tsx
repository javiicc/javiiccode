"use client";

// import "./PostCard.css";
// import CrayongTag from "../CrayongTag";
import { useRouter } from "next/navigation";
// import { getTagColor } from "@lib/tags/tags";
// import { dateForHumans } from "@lib/helpers/date";
import Image from "next/image";

const PostCard = ({ className, post }: { className: string; post: any }) => {
  const router = useRouter();
  //   const {
  //     slug,
  //     articleId,
  //     title,
  //     subtitle,
  //     description,
  //     author,
  //     date,
  //     read_time,
  //     last_update,
  //     thumbnail,
  //     tags,
  //   } = post;

  //   const authorInTitle = author.split(" ")[0] + " " + author.split(" ")[1];

  return (
    <div
      className={`${className}
      border rounded-xl border-red-600 
      w-[100%] h-[200px] 
      flex items-center
      shadow-[20px_20px_50px_rgba(0,0,0,0.5)]
      `}
      //   onClick={() => router.push(`/blog/${slug}`)}
    >
      POST CARD
    </div>
  );
};

export default PostCard;

{
  /* <div className="post-thumbnail">
        <Image src={thumbnail} width={500} height={500} alt="Post thumbnail" />
      </div>
      <div className="post-title p-4">
        <h2 className="font-serif font-semibold text-xl max-h-[130px] overflow-hidden">
          {title}
        </h2>
        <p className="mt-3 flex items-center font-mono text-xs text-gray-400">
          By&nbsp;{authorInTitle}
          <span className="mx-2 text-lg">•</span>
          <span>{dateForHumans(date)}</span>
        </p>
      </div> */
}
