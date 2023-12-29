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
      className={`py-4 lg:pl-12 w-[100%] ${className}
      flex items-center lg:justify-start justify-center
      hover:btn-focus-class hover:cursor-pointer `}
      onClick={() => setAboutContent("education")}
    >
      <span className="">self.</span>
      <span className="class-method">{buttonText}</span>
      <span className="class-method-par">(</span>
      <EducationSVG />
      <span className="class-method-par">)</span>
    </button>
  );
};

export default EducationButton;
