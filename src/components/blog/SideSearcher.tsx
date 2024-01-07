import "../buttons/tagColors.css";
import CrayongTag from "../buttons/CrayongTag";
import Search from "./Search";

const SideSearcher = ({
  tags,
  posts,
}: {
  tags: Array<string>;
  posts: Array<any>;
}) => {
  // console.log(tags);
  return (
    <div
      className="rounded-xl custom-section
        w-[100%] min-h-[185px]
        flex flex-col items-center justify-start
        shadow-[0px_8px_16px_8px_rgba(0,0,0,0.3)]"
    >
      {/* lg:h-[900px] */}
      <div className="h-[50px]"></div>
      <Search placeholder="Search anything..." posts={posts} />
      <div className="min-h-[50px] w-[85%] flex items-center justify-center mb-[20px]">
        <ul className="tags flex flex-wrap items-center justify-center gap-2">
          {tags.map((tag) => (
            <li key={tag}>
              <CrayongTag tag={tag} />
            </li>
          ))}
        </ul>
      </div>
      {/* <div>FEATURED</div> */}
    </div>
  );
};

export default SideSearcher;
