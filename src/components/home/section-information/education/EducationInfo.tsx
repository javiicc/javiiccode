"use client";

import EduInfoCard from "./EduInfoCard";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import SpotlightProxContainer from "@/components/spotlight/SpotlightProxContainer";
import SpotlightProxCard from "@/components/spotlight/SpotlightProxCard";

const EducationInfo = () => {
  const kschoolRef = useRef(null);
  const usRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(kschoolRef.current, { opacity: 0, duration: 1.5 });
      gsap.from(kschoolRef.current, {
        x: -90,
        duration: 1.2,
      });
      gsap.from(usRef.current, { opacity: 0, duration: 1.5 });
      gsap.from(usRef.current, {
        x: 90,
        duration: 1.2,
      });
    });
    return () => ctx.revert(); // <- cleanup!
  }, []);

  return (
    <div className="text-base px-6 lg:my-10 mt-6 md:flex md:items-center md:justify-center">
      <SpotlightProxContainer
        className={
          "md:h-[90%] md:flex md:flex-col md:items-center md:justify-around"
        }
      >
        <div ref={kschoolRef} className="w-[100%] lg:py-0 pb-2">
          <SpotlightProxCard className={"custom-card-glows w-full"}>
            <EduInfoCard
              startDate={"02/02/2021"}
              endDate={"02/02/2022"}
              position={"Master of Data Science"}
              institution={"KSchool"}
              institutionPath={"https://kschool.com/"}
              dateText={"Feb 2021 - Feb 2022"}
              place={"# Streaming"}
              logoPath={"/images/kschool-logo.png"}
            />
          </SpotlightProxCard>
        </div>
        <div ref={usRef} className="w-[100%] pt-2 pb-6 md:pb-0 lg:py-0">
          <SpotlightProxCard className={"custom-card-glows w-full"}>
            <EduInfoCard
              startDate={"2015"}
              endDate={"2020"}
              position={"BSc Finance and Accounting"}
              institution={"University of Seville"}
              institutionPath={"https://ftf.us.es/"}
              dateText={"2015 - 2020"}
              place={"# Seville, Andalusia, Spain"}
              logoPath={"/images/us.png"}
            />
          </SpotlightProxCard>
        </div>
      </SpotlightProxContainer>
    </div>
  );
};

export default EducationInfo;
