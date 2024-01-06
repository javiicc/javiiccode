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
        w-[100%] lg:h-[900px] min-h-[150px] 
        flex flex-col items-center
        shadow-[0px_8px_16px_8px_rgba(0,0,0,0.3)]"
    >
      {/* <div className="h-[100px] w-[90%] flex flex-col items-start justify-end mb-[20px]"> */}
      {/* <input
          type="text"
          placeholder="Search anything..."
          className="input input-bordered input-success w-[100%]
          rounded-3xl max-h-[40px]"
        /> */}
      <Search placeholder="Search anything..." posts={posts} />
      {/* </div> */}
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
