const TopBar = ({ term }: { term: string }) => {
  return (
    <div
      className="rounded-xl custom-section
      w-[100%] h-[100%] max-h-[80px] flex items-center
      shadow-[0px_8px_16px_8px_rgba(0,0,0,0.3)]"
    >
      {/* custom-section */}
      <div className="p-5 text-3xl text-default">
        {/* border border-cyan-300 */}
        {term}
      </div>
    </div>
  );
};

export default TopBar;

{
  /* <div className="blog-filters__topbar shadow-[20px_20px_50px_rgba(0,0,0,0.5)]">
      <ul className="p-5 max-w-[100%] flex items-start gap-12 text-3xl text-slate-200">
        <li key="topbar">
          <button>
            {term}&nbsp;&nbsp;&nbsp;
            {term.includes("similarity") ? <span>&#128131;</span> : ""}
          </button>
        </li>
      </ul>
    </div> */
}
