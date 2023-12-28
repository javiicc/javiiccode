"use client";

import "./ExperienceInfo.css";
import InfoCard from "./InfoCard";
import { useRef, useEffect } from "react";
import { gsap, Elastic } from "gsap";

const ExperienceInfo = () => {
  const ghdRef = useRef(null);
  const titleRef = useRef(null);
  const work1Ref = useRef(null);
  const work2Ref = useRef(null);
  const work3Ref = useRef(null);
  const work4Ref = useRef(null);
  const work5Ref = useRef(null);
  const work6Ref = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(ghdRef.current, { opacity: 0, duration: 2 });
      gsap.from(ghdRef.current, {
        x: -90,
        duration: 1,
      });
      gsap.from(titleRef.current, { opacity: 0, duration: 2 });
      gsap.from(titleRef.current, {
        x: 90,
        duration: 1,
      });
      gsap.from(work1Ref.current, { opacity: 0, duration: 1, delay: 1 });
      gsap.from(work2Ref.current, { opacity: 0, duration: 1, delay: 1.1 });
      gsap.from(work3Ref.current, { opacity: 0, duration: 1, delay: 1.2 });
      gsap.from(work4Ref.current, { opacity: 0, duration: 1, delay: 1.3 });
      gsap.from(work5Ref.current, { opacity: 0, duration: 1, delay: 1.4 });
      gsap.from(work6Ref.current, { opacity: 0, duration: 1, delay: 1.5 });
    });
    return () => ctx.revert(); // <- cleanup!
  }, []); // , [titleRef]

  return (
    <div className="experience-info">
      <div className="experience-info__ghd" ref={ghdRef}>
        <InfoCard
          startDate={"03/07/2022"}
          endDate={Date()}
          position={"Data Scientist & Software Developer"}
          institution={"Ghenova Digital"}
          institutionPath={"https://ghenovadigital.com/"}
          dateText={"March 2022 - undefined"}
          place={"# Seville, Andalusia, Spain"}
          logoPath={"/images/GHD-logo.jpeg"}
        />
      </div>
      <div className="experience-info__desc">
        <div ref={titleRef}>
          <h3>My work at Ghenova Digital</h3>
        </div>
        <ul>
          <li key={"1a"} ref={work1Ref}>
            Development of software products powered by{" "}
            <span className="bold">Artificial Intelligence</span> with a{" "}
            <span className="bold">product mindset</span>, as well as{" "}
            <span className="bold">R&D</span> projects in collaboration with
            other companies.
          </li>
          <li key={"2a"} ref={work2Ref}>
            Development of <span className="bold">AI conversational</span>{" "}
            systems for virtual assistants capable of managing knowledge of
            different topics.
          </li>
          <li key={"3a"} ref={work3Ref}>
            Development of <span className="bold">Information Retrieval</span>{" "}
            systems and language models to extract information from
            non-structured data.
          </li>
          <li key={"4a"} ref={work4Ref}>
            Development of{" "}
            <span className="bold">Natural Language Processing</span> data
            analysis features and <span className="bold">Web Scraping</span>{" "}
            software for a Business Intelligence platform,{" "}
            <span className="bold">Data Augmentation</span>,{" "}
            <span className="bold">classification AI models</span>, and a lot of
            exciting stuff.
          </li>
          <li key={"5a"} ref={work5Ref}>
            <span className="bold">Back&#8209;End</span> development with{" "}
            <span className="bold">django</span>,{" "}
            <span className="bold">FastAPI</span>, and{" "}
            <span className="bold">Flask</span>.{" "}
            <span className="bold">Microservices</span> and{" "}
            <span className="bold">APIs</span>.{" "}
            <span className="bold">TDD</span>.
          </li>
          <li key={"6a"} ref={work6Ref}>
            <span className="bold">Front&#8209;End</span> with{" "}
            <span className="bold">Next.js (React)</span>,{" "}
            <span className="bold">TypeScript</span>, and{" "}
            <span className="bold">Flutter (Dash)</span>.
          </li>
          {/* <li ref={work6Ref}>
            <span className="bold">DevOps</span> tasks on{" "}
            <span className="bold">AWS</span>.
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceInfo;
