"use client";

// import CrayongTag from "@components/blog/CrayongTag";
import ArticleContent from "./content/ArticleContent";
import SideBar from "./SideBar";
import { dateForHumans } from "../../lib/helpers/date";

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

  return (
    <div className="w-[100%] flex flex-row justify-center">
      <section
        className="min-h-screen w-[100%] max-w-[1000px]
        pl-[5%] xl:pr-[2%] pr-[5%] pt-[5%] 
         "
      >
        {/* s.container */}
        <header className="w-[100%]">
          <h1 className="text-5xl font-semibold">{frontMatter.title}</h1>
          <span className="text-3xl text-[#38bdf8cc]">
            {frontMatter.subtitle}
          </span>

          <div className={""}>
            {/* s.articleData */}
            <div className={""}>
              {/* s.articleData__left */}
              <div className={""}>
                {/* s.author */}
                <p>{frontMatter.author}</p>
              </div>
              <div className={""}>
                {/* s.date */}
                <span>{dateForHumans(frontMatter.date)}</span>
              </div>
              {last_update.length > 0 ? (
                <div className={""}>
                  {/* s.last_update */}
                  <span>
                    Last update: {dateForHumans(frontMatter.last_update)}
                  </span>
                </div>
              ) : (
                ""
              )}
            </div>
            {/* <div className={s.articleData__right}>
              {frontMatter.tags.map((tag, i) => (
                <li key={tag}>
                  <CrayongTag
                    // key={tag}
                    tagName={tag}
                    // hashtagColor={""}
                    // className={""}
                  />
                </li>
              ))}
            </div> */}
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
