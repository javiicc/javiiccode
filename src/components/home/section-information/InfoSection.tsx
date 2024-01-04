"use client";

// import "./home_AboutInfo.css";
import { useState } from "react";
import SideMenuInfo from "./SideMenuInfo";
import MacButtons from "./MacButtons";
import AboutInfo from "./AboutInfo";
import ExperienceInfo from "./ExperienceInfo";
import EducationInfo from "./EducationInfo";

const InfoSection = () => {
  const [aboutContent, setAboutContent] = useState("about");

  function handleClick(displayComponent: any) {
    setAboutContent(displayComponent);
  }

  function getContent() {
    if (aboutContent === "experience") {
      return <ExperienceInfo />;
    } else if (aboutContent === "education") {
      return <EducationInfo />;
    } else {
      return <AboutInfo />;
    }
  }

  return (
    <div
      className="h-[100%] w-[100%] overflow-hidden
      flex lg:justify-center lg:flex-row flex-col
      backdrop-blur-[2px] border rounded-xl text-xl 
      info-section info-section-bc
      shadow-[0px_8px_16px_8px_rgba(0,0,0,0.3)]"
    >
      <div
        className="lg:min-w-[320px] lg:max-w-[300px] min-h-80
        lg:border-r lg:border-b-0 border-b
        flex items-end
        info-section-menu info-section-bc
        "
      >
        <MacButtons />
        <SideMenuInfo
          setAboutContent={handleClick}
          aboutContent={aboutContent}
        />
      </div>
      <div
        className="w-[100%] h-[100%] overflow-hidden
        info-section-content
        "
      >
        eeeeeeeee
      </div>
    </div>
  );
};

export default InfoSection;

{
  /* <div className="about-section shadow-[20px_20px_50px_rgba(0,0,0,0.5)]">
      <div className="about-section__left">
        <MacButtons />
        <SideMenuAbout
          setAboutContent={handleClick}
          aboutContent={aboutContent}
        />
      </div>
      <div className="about-section__right">{getContent()}</div>
    </div> */
}
