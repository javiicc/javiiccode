"use client";

import ExpInfoCard from "./ExpInfoCard";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import SpotlightProxContainer from "@/components/spotlight/SpotlightProxContainer";
import SpotlightProxCard from "@/components/spotlight/SpotlightProxCard";
import ExperienceMSG from "./ExperienceMSG";
import AWSSVG from "@/components/svg/AWSSVG";

const ExperienceInfo = () => {
  const ghdSoftRef = useRef(null);
  const ghdDSRef = useRef(null);
  const exp1Ref = useRef(null);
  const exp2Ref = useRef(null);
  const exp3Ref = useRef(null);
  const exp4Ref = useRef(null);
  const exp5Ref = useRef(null);
  const exp6Ref = useRef(null);
  const exp7Ref = useRef(null);
  const exp8Ref = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(ghdSoftRef.current, { opacity: 0, duration: 1 });
      gsap.from(ghdSoftRef.current, {
        x: -100,
        duration: 1.5,
      });
      gsap.from(ghdDSRef.current, { opacity: 0, duration: 1 });
      gsap.from(ghdDSRef.current, {
        x: -150,
        duration: 1.7,
      });
      gsap.from(exp1Ref.current, { opacity: 0, duration: 1 });
      gsap.from(exp1Ref.current, {
        x: 100,
        duration: 1.5,
      });
      gsap.from(exp5Ref.current, { opacity: 0, duration: 1 });
      gsap.from(exp5Ref.current, {
        x: 100,
        duration: 1.5,
      });
      gsap.from(exp2Ref.current, { opacity: 0, duration: 1 });
      gsap.from(exp2Ref.current, {
        x: 150,
        duration: 1.7,
      });
      gsap.from(exp4Ref.current, { opacity: 0, duration: 1 });
      gsap.from(exp4Ref.current, {
        x: 150,
        duration: 1.7,
      });
      gsap.from(exp3Ref.current, { opacity: 0, duration: 1 });
      gsap.from(exp3Ref.current, {
        x: 250,
        duration: 2.2,
      });
      gsap.from(exp6Ref.current, { opacity: 0, duration: 1 });
      gsap.from(exp6Ref.current, {
        y: 150,
        duration: 1.5,
      });
      gsap.from(exp7Ref.current, { opacity: 0, duration: 1 });
      gsap.from(exp7Ref.current, {
        y: 180,
        duration: 1.65,
      });
      gsap.from(exp8Ref.current, { opacity: 0, duration: 1 });
      gsap.from(exp8Ref.current, {
        y: 200,
        duration: 1.8,
      });
    });
    return () => ctx.revert(); // <- cleanup!
  }, []);

  return (
    <div className="text-base p-6 h-[100%]">
      <SpotlightProxContainer className={""}>
        {/* SECTION 1 */}
        <div className="w-[100%] flex md:flex-row flex-col justify-around items-center">
          <div className="md:w-[50%] w-[100%] flex items-center justify-center">
            <div
              ref={ghdSoftRef}
              className="w-[90%] pt-4 rounded-xl flex items-center justify-center"
            >
              <SpotlightProxCard className={"custom-card-glows"}>
                <ExpInfoCard
                  startDate={"03/01/2023"}
                  endDate={Date()}
                  position={"Software Engineer"}
                  institution={"Ghenova Digital"}
                  institutionPath={"https://ghenovadigital.com/"}
                  dateText={"March 2023 - undefined"}
                  place={"# Seville, Andalusia, Spain"}
                  logoPath={"/images/ghd-logo.png"}
                />
              </SpotlightProxCard>
            </div>
          </div>
          <div className="md:w-[50%] w-[100%] pt-10 md:py-2 px-2 flex flex-col items-center justify-around gap-10">
            <div ref={exp1Ref}>
              <ExperienceMSG
                className=""
                msg="Design and implementation of backend applications and APIs for
              Machine Learning based products. Python 🐍 (A very little bit of Java and SpringBoot)"
              />
            </div>
            <div ref={exp2Ref}>
              <SpotlightProxCard className={"custom-card-glows"}>
                <div className="h-[100%] w-[100%] p-4 rounded-xl flex items-center justify-centers text-center">
                  <p>Deployment of services on </p>&nbsp;
                  <AWSSVG />
                </div>
              </SpotlightProxCard>
            </div>
          </div>
        </div>
        {/* SECTION 2 */}
        <div className="w-[100%] p-4 flex md:flex-row flex-col justify-around items-center">
          <div
            ref={exp3Ref}
            className="w-[100%] pt-6 md:py-2 flex flex-col md:flex-row items-center justify-around gap-10"
          >
            <ExperienceMSG
              className=""
              msg="Front&#8208;End with Next.js (React), TypeScript, and Flutter (Dash)"
            />
          </div>
        </div>
        {/* SECTION 3 */}
        <div className="w-[100%] flex md:flex-row flex-col justify-around items-center">
          <div className="md:w-[50%] w-[100%] flex items-center justify-center">
            <div
              ref={ghdDSRef}
              className="w-[90%] pt-6 md:pt-2 pb-4 md:pb-2  rounded-xl flex items-center justify-center"
            >
              <SpotlightProxCard className={"custom-card-glows"}>
                <ExpInfoCard
                  startDate={"03/07/2022"}
                  endDate={"03/01/2023"}
                  position={"Data Scientist"}
                  institution={"Ghenova Digital"}
                  institutionPath={"https://ghenovadigital.com/"}
                  dateText={"March 2022 - March 2023"}
                  place={"# Seville, Andalusia, Spain"}
                  logoPath={"/images/ghd-logo.png"}
                />
              </SpotlightProxCard>
            </div>
          </div>
          <div className="md:w-[50%] w-[100%] px-2 pt-6 md:py-2 flex flex-col items-center justify-around gap-10">
            <div ref={exp4Ref}>
              <ExperienceMSG
                className=""
                msg="Development of AI&#8208;based systems (NLP 🤖) to empower software products with Machine Learning"
              />
            </div>
            <div ref={exp5Ref}>
              <ExperienceMSG
                className=""
                msg="Collaboration with several companies in a very long R&D project 🤝"
              />
            </div>
          </div>
        </div>
        {/* SECTION 4 */}
        <div className="w-[100%] p-4 flex md:flex-row flex-col justify-around items-center">
          <div className="w-[100%] pt-6 md:py-2 flex flex-col md:flex-row items-center justify-around gap-10">
            <div ref={exp6Ref}>
              <ExperienceMSG
                className=""
                msg="Development of AI conversational systems for virtual assistants capable of managing knowledge of different topics"
              />
            </div>
            <div ref={exp7Ref}>
              <ExperienceMSG
                className=""
                msg="Development of Information Retrieval systems and language models to extract information from non-structured data"
              />
            </div>
            <div ref={exp8Ref}>
              <ExperienceMSG
                className=""
                msg="Development of Natural Language Processing data analysis features and Web Scraping software for a Business Intelligence platform, Data Augmentation, classification AI models, and a lot of exciting stuff"
              />
            </div>
          </div>
        </div>
      </SpotlightProxContainer>
    </div>
  );
};

export default ExperienceInfo;
