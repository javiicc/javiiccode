"use client";

import "./EducationInfo.css";
import InfoCard from "./InfoCard";
import { useRef, useEffect } from "react";
import { gsap, Elastic } from "gsap";

const EducationInfo = () => {
  const kschoolRef = useRef(null);
  const usRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(kschoolRef.current, { opacity: 0, duration: 2 });
      gsap.from(kschoolRef.current, {
        x: -90,
        duration: 1,
      });
      gsap.from(usRef.current, { opacity: 0, duration: 2 });
      gsap.from(usRef.current, {
        x: 90,
        duration: 1,
      });
    });
    return () => ctx.revert(); // <- cleanup!
  }, []); // , [titleRef]

  return (
    <div className="education-info">
      <div className="education-info__ghd">
        <div className="info-card" ref={kschoolRef}>
          <InfoCard
            startDate={"02/02/2021"}
            endDate={"02/02/2022"}
            position={"Master of Data Science"}
            institution={"KSchool"}
            institutionPath={"https://kschool.com/"}
            dateText={"Feb 2021 - Feb 2022"}
            place={"# Streaming"}
            logoPath={"/images/kschool-logo.png"}
          />
        </div>
        <div className="info-card" ref={usRef}>
          <InfoCard
            startDate={"2015"}
            endDate={"2020"}
            position={"BSc Finance and Accounting"}
            institution={"University of Seville"}
            institutionPath={"https://ftf.us.es/"}
            dateText={"2015 - 2020"}
            place={"# Seville, Andalusia, Spain"}
            logoPath={"/images/us.png"}
          />
        </div>
      </div>
    </div>
  );
};

export default EducationInfo;
