// import "./ArticleContent.css";

import { MDXRemote } from "next-mdx-remote";
// import * as components from "@components/articles/mdx";

export default function ArticleContent({ source }: { source: any }) {
  // console.log(`SOURCE: ${source}`);
  return (
    <>
      <div className="">
        {/* content */}
        <MDXRemote
          compiledSource={source}
          // components={components}
          scope={undefined}
          frontmatter={undefined}
        />
      </div>
    </>
  );
}
