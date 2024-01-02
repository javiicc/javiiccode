"use client";

import "./prose.css";
// import * as s from "./Article.module.css";
import ArticleContent from "./content/ArticleContent";
// import SideBar from "@components/articles/SideBar.jsx";
// import "./holiTheme.css";
import { dateForHumans } from "../../lib/helpers/date";
import SideBar from "./SideBar";
// import CrayongTag from "@components/blog/CrayongTag";

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
  // const sections = frontMatter.sections;

  // console.log(`source :: ${frontMatter}`);
  // console.log(`source :: ${source}`);
  // let keys = Object.keys(source);
  // console.log("-----------");
  // console.log(keys); //["name", "age", "greet"]
  // console.log("-----------");

  return (
    <div className="w-[100%] flex flex-row justify-center">
      <section
        className="min-h-screen w-[100%] max-w-[1000px]
        pl-[5%] xl:pr-[2%] pr-[5%] pt-[5%] prose"
      >
        {/* s.container */}
        <header className="w-[100%]">
          <h1>{frontMatter.title}</h1>
          <h3>{frontMatter.subtitle}</h3>

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
          {/* s.root */}
          <ArticleContent source={source} />
        </div>
      </section>
      <SideBar items={headings} />
    </div>
  );
}
