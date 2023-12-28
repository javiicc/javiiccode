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
      className={`about-selfs hover:bg-gray-700 hover:cursor-pointer ${className}`}
      onClick={() => setAboutContent("about")}
    >
      <div className="pr-2">
        <HappyFaceSVG />
      </div>
      <span className="text-slate-200">self.</span>
      <span className="text-[#49c6ec]">{buttonText}</span>
      <span className="text-blue-300">()</span>
    </button>
  );
};
export default AboutButton;
