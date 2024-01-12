"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { NavigateSVG, EnterSVG } from "../svg/KeySVG";
import ClickOutsideDetector from "./ClickOutsideDetector";

export default function Search({
  placeholder,
  posts,
}: {
  placeholder: string;
  posts: Array<any>;
}) {
  const [inputValue, setInputValue] = useState("");
  const [matchedPosts, setMatchedPosts] = useState(Array<any> || undefined);
  const [filteredPostsN, setFilteredPostsN] = useState(Number);
  const [cursor, setCursor] = useState(0);
  const router = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    let filteredPosts = posts?.filter((post) => {
      return post.title.toLowerCase().includes(term.toLowerCase());
    });
    setFilteredPostsN(filteredPosts.length);

    let n = 0;
    filteredPosts.forEach((filtPost: any) => {
      filtPost.index = n;
      n++;
    });

    if (term.length) {
      setCursor(0);
      setMatchedPosts(filteredPosts);
    } else {
      setMatchedPosts([]);
    }
  }, 200);

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
    handleSearch(e.target.value);
  };

  function handleKeyDown(e: any) {
    if (e.keyCode === 38 && cursor > 0) {
      setCursor(cursor - 1);
    } else if (e.keyCode === 40 && cursor < posts.length - 1) {
      setCursor(cursor + 1);
    } else if (e.key === "Escape") {
      setInputValue("");
      setMatchedPosts([]);
    } else if (e.key === "Enter" && cursor != -1 && cursor < filteredPostsN) {
      router.push(`/blog/${matchedPosts[cursor].slug}`);
      e.preventDefault();
    }
  }

  function handleHover(e: any) {
    setCursor(-1);
  }

  function handleOutsideClick() {
    setInputValue("");
    setMatchedPosts([]);
  }

  return (
    <ClickOutsideDetector onOutsideClick={handleOutsideClick}>
      <form className="max-h-[350px] w-[90%] flex flex-col items-start justify-start mb-[20px]">
        <input
          type="text"
          className="input input-bordered input-success w-[100%] rounded-3xl max-h-[40px] relative"
          placeholder={placeholder}
          onInput={handleInputChange}
          onKeyDown={handleKeyDown}
          value={inputValue}
        />
        {matchedPosts.length > 0 && (
          <ul
            className="w-[90%] absolute top-[95px] border rounded-xl pt-[4px]
          border-green-600 bg-base-300 searchBar-results"
          >
            {matchedPosts.map(({ title, slug, date }, i) => (
              <li
                onMouseEnter={handleHover}
                key={slug.concat("-", date)}
                className={`hover:searchBar-result-selected py-1 px-2 rounded-md m-[6px]
              ${
                cursor === i ? "searchBar-result-selected" : "searchBar-result"
              }`}
              >
                <Link
                  href={`/blog/${slug}`}
                  className={`flex items-center justify-between`}
                >
                  <p className={``}>{title}</p>
                  <EnterSVG color={"currentColor"} className="" />
                </Link>
              </li>
            ))}
            <div className="flex items-center justify-start pl-2 pb-2 pt-1">
              <div className="border rounded-md border-green-600 m-1 p-[2px]">
                <NavigateSVG />
              </div>
              <span className="pr-2 text-green-600 text-sm">Navigate</span>
              <div className="border rounded-md border-green-600 m-1 p-[2px]">
                <EnterSVG color={"currentColor"} className="" />
              </div>
              <span className="text-green-600 text-sm">Go</span>
            </div>
          </ul>
        )}
      </form>
    </ClickOutsideDetector>
  );
}
