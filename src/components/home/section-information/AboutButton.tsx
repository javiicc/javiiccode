import HappyFaceSVG from "../../svg/HappyFaceSVG";

const AboutButton = ({
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
      hover:btn-focus-class hover:cursor-pointer hover:border`}
      onClick={() => setAboutContent("about")}
    >
      <span className="">self.</span>
      <span className="class-method">{buttonText}</span>
      <span className="class-method-par">(</span>
      <HappyFaceSVG />
      <span className="class-method-par">)</span>
    </button>
  );
};
export default AboutButton;
