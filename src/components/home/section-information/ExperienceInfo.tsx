"use client";

// import "./ExperienceInfo.css";
// import "./ProximityGlow.css";
import InfoCard from "./InfoCard";
import { useRef, useEffect } from "react";
import { gsap, Elastic } from "gsap";
import { SpotlightScroll } from "@/components/spotlight/spotlightScroll";
import SpotlightProxContainer from "@/components/spotlight/SpotlightProxContainer";
import SpotlightProxCard from "@/components/spotlight/SpotlightProxCard";
import ExperienceMSG from "./ExperienceMSG";
import AWSSVG from "@/components/svg/AWSSVG";

const ExperienceInfo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardARef = useRef<HTMLDivElement>(null);
  //   const cardBRef = useRef<HTMLDivElement>(null);

  //   const CONTAINER = document.querySelector(".container");
  //   const CARDS = document.querySelectorAll("article");

  const CONFIG = {
    proximity: 40,
    spread: 80,
    blur: 20,
    gap: 32,
    vertical: false,
    opacity: 0,
  };

  const PROXIMITY = 10;

  useEffect(() => {
    const update = (event: PointerEvent) => {
      if (!cardARef.current) {
        return;
      }
      // get the angle based on the center point of the card and pointer position
      // Check the card against the proximity and then start updating
      const CARD_BOUNDS = cardARef.current!.getBoundingClientRect();

      let opacity = 0;
      // Get distance between pointer and outerbounds of card
      if (
        event?.x > CARD_BOUNDS.left - CONFIG.proximity &&
        event?.x < CARD_BOUNDS.left + CARD_BOUNDS.width + CONFIG.proximity &&
        event?.y > CARD_BOUNDS.top - CONFIG.proximity &&
        event?.y < CARD_BOUNDS.top + CARD_BOUNDS.height + CONFIG.proximity
      ) {
        opacity = 1;
      }

      const CARD_CENTER = [
        CARD_BOUNDS.left + CARD_BOUNDS.width * 0.5,
        CARD_BOUNDS.top + CARD_BOUNDS.height * 0.5,
      ];
      let ANGLE =
        (Math.atan2(event?.y - CARD_CENTER[1], event?.x - CARD_CENTER[0]) *
          180) /
        Math.PI;
      ANGLE = ANGLE < 0 ? ANGLE + 360 : ANGLE;
      cardARef.current!.setAttribute(
        "style",
        `--start: ${ANGLE + 90}; --active: ${opacity}`
      );
    };

    document.body.addEventListener("pointermove", (e) => update(e));

    return () => {
      document.body.removeEventListener("pointermove", (e) => update(e));
    };
  }, [CONFIG.opacity, CONFIG.proximity]);

  return (
    <div className="text-base p-6">
      <SpotlightProxContainer className={""}>
        {/* SECTION 1 */}
        <div
          className="w-[100%] flex md:flex-row flex-col justify-around items-center"
          // ref={ghdRef}
        >
          <div className="md:w-[50%] w-[100%] flex items-center justify-center">
            {/* border border-cyan-400 */}
            <div className="w-[90%] pt-4 rounded-xl flex items-center justify-center">
              <SpotlightProxCard className={"custom-card-glows"}>
                <InfoCard
                  startDate={"03/07/2022"}
                  endDate={Date()}
                  position={"Software Engineer"}
                  institution={"Ghenova Digital"}
                  institutionPath={"https://ghenovadigital.com/"}
                  dateText={"March 2022 - undefined"}
                  place={"# Seville, Andalusia, Spain"}
                  logoPath={"/images/ghd-logo.png"}
                />
              </SpotlightProxCard>
            </div>
          </div>
          <div className="md:w-[50%] w-[100%] pt-10 md:py-2 px-2 flex flex-col items-center justify-around gap-10">
            <ExperienceMSG
              msg="Design and implementation of backend applications and APIs for
                  Machine Learning based products. Python 🐍 (A very little bit of Java and SpringBoot)"
            />
            <SpotlightProxCard className={"custom-card-glows"}>
              <div className="h-[100%] w-[100%] p-4 rounded-xl flex items-center justify-centers text-center">
                <p>Deployment of services on </p>&nbsp;
                <AWSSVG />
              </div>
            </SpotlightProxCard>
          </div>
        </div>
        {/* SECTION 2 */}
        <div
          className="w-[100%] p-4 flex md:flex-row flex-col justify-around items-center"
          // border border-yellow-300
          // ref={ghdRef}
        >
          <div className="w-[100%] pt-6 md:py-2 flex flex-col md:flex-row items-center justify-around gap-10">
            {/* <ExperienceMSG msg="Development of AI&#8208;based systems (NLP 🤖) to empower software products with Machine Learning" /> */}
            <ExperienceMSG msg="Front&#8208;End with Next.js (React), TypeScript, and Flutter (Dash)" />
            {/* <ExperienceMSG msg="" />
            <ExperienceMSG msg="" /> */}
          </div>
        </div>
        {/* SECTION 3 */}
        <div
          className="w-[100%] flex md:flex-row flex-col justify-around items-center"
          // border border-yellow-300
          // ref={ghdRef}
        >
          <div className="md:w-[50%] w-[100%] flex items-center justify-center">
            <div className="w-[90%] pt-6 md:pt-2 pb-4 md:pb-2  rounded-xl flex items-center justify-center">
              <SpotlightProxCard className={"custom-card-glows"}>
                <InfoCard
                  startDate={"03/07/2022"}
                  endDate={Date()}
                  position={"Data Scientist"}
                  institution={"Ghenova Digital"}
                  institutionPath={"https://ghenovadigital.com/"}
                  dateText={"March 2022 - undefined"}
                  place={"# Seville, Andalusia, Spain"}
                  logoPath={"/images/ghd-logo.png"}
                />
              </SpotlightProxCard>
            </div>
          </div>
          <div className="md:w-[50%] w-[100%] px-2 pt-6 md:py-2 flex flex-col items-center justify-around gap-10">
            {/* <ExperienceMSG msg="Development of software products powered by Artificial Intelligence and NLP ✨" /> */}
            <ExperienceMSG msg="Development of AI&#8208;based systems (NLP 🤖) to empower software products with Machine Learning" />
            <ExperienceMSG msg="Collaboration with several companies in a very long R&D project 🤝" />
          </div>
        </div>
        {/* SECTION 4 */}
        <div
          className="w-[100%] p-4 flex md:flex-row flex-col justify-around items-center"
          // border border-yellow-300
          // ref={ghdRef}
        >
          <div className="w-[100%] pt-6 md:py-2 flex flex-col md:flex-row items-center justify-around gap-10">
            <ExperienceMSG msg="Development of AI conversational systems for virtual assistants capable of managing knowledge of different topics" />
            <ExperienceMSG msg="Development of Information Retrieval systems and language models to extract information from non-structured data" />
            <ExperienceMSG msg="Development of Natural Language Processing data analysis features and Web Scraping software for a Business Intelligence platform, Data Augmentation, classification AI models, and a lot of exciting stuff" />
            {/* <ExperienceMSG msg="" />
            <ExperienceMSG msg="" /> */}
          </div>
        </div>
      </SpotlightProxContainer>
    </div>
  );
};

export default ExperienceInfo;
