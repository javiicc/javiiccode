"use client";

import { useState } from "react";
import SideMenuInfo from "../sidemenu/SideMenuInfo";
import MacButtons from "../sidemenu/MacButtons";
import AboutInfo from "../AboutInfo";
import ExperienceInfo from "./ExperienceInfo";
import EducationInfo from "../education/EducationInfo";

const InfoSection = () => {
  const [aboutContent, setAboutContent] = useState("experience");

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
      className="h-[100%] w-[100%] overflow-hidden text-xl
      border rounded-xl info-section-bc info-section
      flex lg:justify-center lg:flex-row flex-col
      shadow-[0px_8px_16px_8px_rgba(0,0,0,0.3)]"
    >
      <div
        className="lg:min-w-[320px] lg:max-w-[320px] lg:h-[100%] relative
        flex justify-center items-center info-section-bc info-section-menu
        lg:border-r lg:border-b-0 border-b lg:rounded-l-xl lg:rounded-t-none rounded-t-xl"
      >
        <MacButtons />
        <SideMenuInfo
          setAboutContent={handleClick}
          aboutContent={aboutContent}
        />
      </div>

      <div
        className="w-[100%] h-[100%] info-section-content overflow-y-auto
        lg:rounded-r-xl lg:rounded-b-none rounded-b-xl overflow-x-hidden
        flex md:flex-center justify-center"
      >
        {getContent()}
      </div>
    </div>
  );
};

export default InfoSection;
