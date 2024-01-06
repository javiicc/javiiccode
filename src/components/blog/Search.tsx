"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Search({
  placeholder,
  posts,
}: {
  placeholder: string;
  posts: Array<any>;
}) {
  const [matchedPosts, setMatchedPosts] = useState(Array<any> || undefined);
  const [active, setActive] = useState(false);
  const [cursor, setCursor] = useState(0);
  const router = useRouter();

  function handleSearch(term: string) {
    // console.log(term);
    setMatchedPosts(
      posts?.filter((post) => {
        return post.title.toLowerCase().includes(term);
      })
    );
    if (term.length) {
      setCursor(0);
      setActive(true);
    } else {
      setActive(false);
    }
    // console.log(matchedPosts);
  }

  function handleKeyDown(e: any) {
    if (e.keyCode === 38 && cursor > 0) {
      setCursor(cursor - 1);
    } else if (e.keyCode === 40 && cursor < posts.length - 1) {
      setCursor(cursor + 1);
    }
  }

  function handleKeyUp(e: any) {
    if (e.key === "Enter") {
      //   console.log(":)");
      //   console.log(matchedPosts[cursor]);
      router.push(`/blog/${matchedPosts[cursor].slug}`);
    }
  }

  return (
    <div
      className="max-h-[350px] w-[90%] flex flex-col items-start justify-start mb-[20px] pt-12
      "
    >
      <input
        className="input input-bordered input-success w-[100%] rounded-3xl max-h-[40px] relative"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        onKeyDown={handleKeyDown}
        onKeyUp={(e) => {
          handleKeyUp(e);
        }}
      />
      {active && matchedPosts.length > 0 && (
        <ul
          className="w-[90%] absolute top-[100px] border rounded-xl 
          border-green-600 bg-base-300
            "
        >
          {matchedPosts.map(({ title, slug, date }, i) => (
            <li
              key={slug.concat("-", date)}
              className={`hover:bg-base-100 py-1 px-2 rounded-md m-1
              ${cursor === i ? "bg-black text-cyan-400" : "bg-gray-300"}`}
            >
              <Link href={"/"}>{title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
