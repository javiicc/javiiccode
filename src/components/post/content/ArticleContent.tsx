import { MDXRemote } from "next-mdx-remote";
import "./HoliTheme.css";
// import * as components from "../mdx";

export default function ArticleContent({ source }: { source: any }) {
  return (
    <>
      <div
        className="prose max-w-none custom-prose text-emera prose-figcaption:mt-0 
        text-eme"
      >
        <MDXRemote
          compiledSource={source}
          scope={undefined}
          frontmatter={undefined}
          // components={components}
        />
      </div>
    </>
  );
}
