import TieSVG from "../../svg/TieSVG";

const ExperienceButton = ({
  className,
  buttonText,
  setAboutContent,
}: {
  className: string;
  buttonText: string;
  setAboutContent: any;
}) => {
  return (
    <button
      className={`about-selfs py-4 flex items-center justify-start   pl-16 hover:bg-gray-700 hover:cursor-pointer
      ${className}`}
      onClick={() => setAboutContent("experience")}
    >
      <div className="pr-2">
        <TieSVG />
      </div>
      <span className="text-slate-200">self.</span>
      <span className="text-[#49c6ec]">{buttonText}</span>
      <span className="text-blue-300">()</span>
    </button>
  );
};

export default ExperienceButton;
