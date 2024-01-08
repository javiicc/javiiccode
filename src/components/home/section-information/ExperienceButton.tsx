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
      className={`py-4 lg:pl-[55px] pl-[65px] w-[100%] ${className}
      flex items-center justify-start  rounded-xl
      hover:btn-focus-class hover:cursor-pointer 
      `}
      onClick={() => setAboutContent("experience")}
    >
      <span className="">self.</span>
      <span className="class-method">{buttonText}</span>
      <span className="class-method-par">(</span>
      <TieSVG />
      <span className="class-method-par">)</span>
    </button>
  );
};

export default ExperienceButton;
