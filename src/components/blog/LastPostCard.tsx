"use client";

// import "./PostCard.css";
// import CrayongTag from "../CrayongTag";
import { useRouter } from "next/navigation";
// import { getTagColor } from "@lib/tags/tags";
import { dateForHumans } from "../../lib/helpers/date";
import Image from "next/image";

const LastPostCard = ({
  className,
  post,
}: {
  className: string;
  post: any;
}) => {
  const router = useRouter();
  const {
    slug,
    articleId,
    title,
    subtitle,
    description,
    author,
    date,
    read_time,
    last_update,
    thumbnail,
    tags,
  } = post;

  const authorInTitle = author.split(" ")[0] + " " + author.split(" ")[1];

  return (
    <div
      className={`${className} last-post-section custom-card rounded-xl
        w-[100%] flex justify-center md:flex-row flex-col
        hover:scale-[1.02] duration-200
        hover:shadow-[0px_8px_16px_8px_rgba(0,0,0,0.3)]
        `}
      onClick={() => router.push(`/blog/${slug}`)}
    >
      <div
        className="md:w-[60%] w-[100%] md:h[100%] md:min-h-[300px] min-h-[195px]
        flex items-center justify-center overflow-hidden rounded-xl"
      >
        <Image
          className="rounded-xl hover:scale-105 duration-500 md:min-h-[300px] h-[195px] object-cover"
          src={thumbnail}
          width={650}
          height={650}
          alt="Post thumbnail"
          // fill={true}
        />
      </div>
      <div
        className="md:w-[40%] w-[100%] md:h[100%] 
        p-4 "
      >
        <h2
          className="font-serif font-semibold text-xl max-h-[130px] overflow-hidden 
          text-default"
        >
          {title}
        </h2>
        <p
          className="mt-3 flex items-center font-mono 
          text-default-desc text-xs text-center"
        >
          By&nbsp;{authorInTitle}
          <span className="mx-2 text-lg">•</span>
          <span>{dateForHumans(date)}</span>
        </p>
      </div>
    </div>
  );
};

export default LastPostCard;
