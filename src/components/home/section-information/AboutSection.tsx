"use client";

import "./home_AboutInfo.css";
import { useState } from "react";
import SideMenuAbout from "./SideMenuAbout";
import MacButtons from "./MacButtons";
import AboutInfo from "./AboutInfo";
import ExperienceInfo from "./ExperienceInfo";
import EducationInfo from "./EducationInfo";

const AboutSection = () => {
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
    <div className="about-section shadow-[20px_20px_50px_rgba(0,0,0,0.5)]">
      <div className="about-section__left">
        <MacButtons />
        <SideMenuAbout
          setAboutContent={handleClick}
          aboutContent={aboutContent}
        />
      </div>
      <div className="about-section__right">{getContent()}</div>
    </div>
  );
};

export default AboutSection;
