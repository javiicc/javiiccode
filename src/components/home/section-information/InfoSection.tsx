"use client";

// import "./home_AboutInfo.css";
import { useState } from "react";
import SideMenuInfo from "./SideMenuInfo";
import MacButtons from "./MacButtons";
import AboutInfo from "./AboutInfo";
import ExperienceInfo from "./ExperienceInfo";
import EducationInfo from "./EducationInfo";
import { Spotlight } from "@/components/spotlight/spotlight";

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
    // <Spotlight
    //   className="h-[100%] w-[100%] rounded-xl overflow-hidden
    //   relative shadow-[0px_8px_16px_8px_rgba(0,0,0,0.3)]"
    //   // flex lg:justify-center lg:flex-row flex-col
    //   // overflow-hidden
    //   mainCard={"custom-card h-[100%] rounded-xl transition-colors"}
    //   twinCard={
    //     "twin-props h-[100%] rounded-xl transition-colors text-transparent"
    //   }
    // >
    <div
      className="h-[100%] w-[100%] overflow-auto
        flex lg:justify-center lg:flex-row flex-col
        border rounded-xl info-section-bc info-section
        backdrop-blur-[2px] text-xl 
        shadow-[0px_8px_16px_8px_rgba(0,0,0,0.3)]
        "
    >
      <div
        className="lg:min-w-[320px] lg:max-w-[320px] lg:h-[100%]
          flex justify-center items-center
          lg:border-r lg:border-b-0 border-b lg:rounded-l-xl lg:rounded-t-none rounded-t-xl
          info-section-bc info-section-menu
          "
      >
        <MacButtons />
        <SideMenuInfo
          setAboutContent={handleClick}
          aboutContent={aboutContent}
        />
      </div>

      <div
        className="w-[100%] h-[100%] info-section-content overflow-hidden
          lg:rounded-r-xl lg:rounded-b-none rounded-b-xl
        "
        // info-section-content  overflow-hidden
      >
        {getContent()}
      </div>
    </div>
    // </Spotlight>
  );
};

export default InfoSection;

// const InfoSection = () => {
//   const [aboutContent, setAboutContent] = useState("about");

//   function handleClick(displayComponent: any) {
//     setAboutContent(displayComponent);
//   }

//   function getContent() {
//     if (aboutContent === "experience") {
//       return <ExperienceInfo />;
//     } else if (aboutContent === "education") {
//       return <EducationInfo />;
//     } else {
//       return <AboutInfo />;
//     }
//   }

//   return (
//     <div
//       className="h-[100%] w-[100%] overflow-hidden
//       flex lg:justify-center lg:flex-row flex-col
//       shadow-[0px_8px_16px_8px_rgba(0,0,0,0.3)]"
//     >
//       <Spotlight
//         className="h-[100%] lg:w-[320px]
//         flex lg:justify-center lg:flex-row flex-col
//         relative"
//         mainCard={"custom-card h-[100%] rounded-xl transition-colors"}
//         twinCard={
//           "twin-props h-[100%] rounded-xl transition-colors text-transparent"
//         }
//       >
//         <div
//           className="lg:w-[320px] h-[100%]
//           "
//         >
//           <MacButtons />
//           <SideMenuInfo
//             setAboutContent={handleClick}
//             aboutContent={aboutContent}
//           />
//         </div>
//       </Spotlight>
//       <Spotlight
//         mainCard={"custom-card h-[100%] rounded-xl transition-colors"}
//         twinCard={
//           "twin-props h-[100%] rounded-xl transition-colors text-transparent"
//         }
//         className={"w-[100%] h-[100%]"}
//       >
//         <div
//           className="w-[100%] h-[100%] info-section-content
//         "
//         >
//           eeeeeeeee
//         </div>
//       </Spotlight>
//     </div>
//   );
// };
