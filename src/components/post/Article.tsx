"use client";

import "../buttons/tagColors.css";
import ArticleContent from "./content/ArticleContent";
import SideBar from "./SideBar";
import { dateForHumans } from "../../lib/helpers/date";
import CrayongTag from "../buttons/CrayongTag";

export default function Article({
  frontMatter,
  source,
  headings,
}: {
  frontMatter: any;
  source: any;
  headings: any;
}) {
  const last_update = frontMatter.last_update;

  console.log(`frontMatter :: ${frontMatter.tags[0]}`);

  return (
    <div className="w-[100%] flex flex-row justify-center">
      <section
        className="min-h-screen w-[100%] max-w-[1000px]
        pl-[5%] xl:pr-[2%] pr-[5%] pt-[5%]"
      >
        <header className="post-header w-[100%] pb-6">
          <h1 className="text-5xl font-semibold my-3">{frontMatter.title}</h1>
          <h2 className="text-3xl my-3">{frontMatter.subtitle}</h2>
          <div
            className="min-h-[80px] flex flex-col sm:flex-row items-center
            pt-[12px] pb-[14px] gap-2 border-t border-b border-[#3c3f42] mb-4"
          >
            <div className="min-w-[195px] w-[100%] sm:w-auto flex flex-col justify-start">
              <div className="font-semibold">
                <p>{frontMatter.author}</p>
              </div>
              <div className="">
                <span>{dateForHumans(frontMatter.date)}</span>
              </div>
              {last_update.length > 0 ? (
                <div className="">
                  <span>
                    Last update: {dateForHumans(frontMatter.last_update)}
                  </span>
                </div>
              ) : (
                ""
              )}
            </div>
            <ul className="tags w-[100%] flex flex-wrap items-center justify-center sm:justify-end gap-2">
              {frontMatter.tags.map((tag: string) => (
                <li key={tag}>
                  <CrayongTag tag={tag} />
                </li>
              ))}
            </ul>
          </div>
        </header>
        <div className={""}>
          <ArticleContent source={source} />
        </div>
      </section>
      <SideBar items={headings} />
    </div>
  );
}
