import EducationSVG from "../../svg/EducationSVG";

const EducationButton = ({
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
      onClick={() => setAboutContent("education")}
    >
      <div className="pr-2">
        <EducationSVG />
      </div>
      <span className="text-slate-200">self.</span>
      <span className="text-[#49c6ec]">{buttonText}</span>
      <span className="text-blue-300">()</span>
    </button>
  );
};

export default EducationButton;
