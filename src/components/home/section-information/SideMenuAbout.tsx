import AboutButton from "./AboutButton";
import ExperienceButton from "./ExperienceButton";
import EducationButton from "./EducationButton";

const SideMenuAbout = ({
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
    <div className="about-buttons-sidemenu">
      <div className="class-javier">
        <span className="class-javier__class ">class&nbsp;&nbsp;</span>
        <span className="class-javier__javier ">Javier</span>
        <span className="class-javier__parl ">(</span>
        <span className="class-javier__human ">IHuman</span>
        <span className="class-javier__parr ">)</span>:
      </div>
      <div className="class-javier-methods">
        <AboutButton
          className={setBackgroundFocus("about") ? "bg-gray-700" : ""}
          buttonText={"about"}
          setAboutContent={setAboutContent}
        />
        <ExperienceButton
          className={setBackgroundFocus("experience") ? "bg-gray-700" : ""}
          buttonText={"experience"}
          setAboutContent={setAboutContent}
        />
        <EducationButton
          className={setBackgroundFocus("education") ? "bg-gray-700" : ""}
          buttonText={"education"}
          setAboutContent={setAboutContent}
        />
      </div>
    </div>
  );
};

export default SideMenuAbout;
