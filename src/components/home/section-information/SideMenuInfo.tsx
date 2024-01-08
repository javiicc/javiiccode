import AboutButton from "./AboutButton";
import ExperienceButton from "./ExperienceButton";
import EducationButton from "./EducationButton";

const SideMenuInfo = ({
  setAboutContent,
  aboutContent,
}: {
  setAboutContent: any;
  aboutContent: any;
}) => {
  function setBackgroundFocus(content: any) {
    if (content === aboutContent) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div
      className="lg:w-[320px] w-[320px] 
      lg:absolute lg:top-60
      flex flex-col items-center justify-center pb-8 pt-12
      "
    >
      <div className="class-javier pb-2 lg:pr-8">
        <span className="class-javier__class">class&nbsp;</span>
        <span className="class-javier__javier">Javier</span>
        <span className="class-javier__par">(</span>
        <span className="class-javier__parent">IHuman</span>
        <span className="class-javier__par">)</span>
      </div>
      {/* <span className="w-[200px] border-b border-gray-400 opacity-50" /> */}
      <div className="w-[100%]">
        <ExperienceButton
          className={setBackgroundFocus("experience") ? "btn-focus-class" : ""}
          buttonText={"experience"}
          setAboutContent={setAboutContent}
        />
        <EducationButton
          className={setBackgroundFocus("education") ? "btn-focus-class" : ""}
          buttonText={"education"}
          setAboutContent={setAboutContent}
        />
        <AboutButton
          className={setBackgroundFocus("about") ? "btn-focus-class" : ""}
          buttonText={"about"}
          setAboutContent={setAboutContent}
        />
      </div>
    </div>
  );
};

export default SideMenuInfo;
