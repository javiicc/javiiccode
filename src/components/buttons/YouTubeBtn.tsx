const YouTubeBtn = ({ children }: { children: string }) => {
  return (
    <div
      className="youtube-btn youtube-btn-bf relative py-[10px] px-[24px] rounded-[10px] font-semibold text-xl 
      before:content-[''] before:absolute before:inset-[1px] before:rounded-[9px] before:duration-[500ms] hover:before:opacity-80"
    >
      <span className="relative z-[1] opacity-90 youtube-btn-bg-color">
        {children}
      </span>
    </div>
  );
};

export default YouTubeBtn;
