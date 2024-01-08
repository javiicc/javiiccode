const TopBar = ({ term }: { term: string }) => {
  return (
    <div
      className="rounded-xl custom-section overflow-hidden
      w-[100%] h-[100%] max-h-[80px] flex items-center"
    >
      {/* shadow-[0px_8px_16px_8px_rgba(0,0,0,0.3)] */}
      <div className="p-5 text-3xl text-default">{term}</div>
    </div>
  );
};

export default TopBar;
