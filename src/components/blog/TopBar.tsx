const TopBar = ({ term }: { term: string }) => {
  return (
    <div
      className="border rounded-xl border-red-600 
      w-[65%] h-[80px] flex items-center
      shadow-[20px_20px_50px_rgba(0,0,0,0.5)]"
    >
      <div
        className="p-5 text-3xl text-slate-200
        border border-cyan-300"
      >
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
