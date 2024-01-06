"use client";

import YouTubeBtn from "@/components/buttons/YouTubeBtn";
import GitHubSVG from "@/components/svg/GitHubSVG";
// import HuggingFaceSVG from "@/components/svg/HuggingFaceSVG";
import LinkedInSVG from "@/components/svg/LinkedInSVG";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import DEVSVG from "@/components/svg/DEVSVG";

export default function ButtonsHP() {
  const resumeRef = useRef(null);
  const githubRef = useRef(null);
  const linkedinRef = useRef(null);
  const devRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(resumeRef.current, { opacity: 0, duration: 2 });
      gsap.from(resumeRef.current, {
        x: -100,
        duration: 1,
      });
      gsap.from(githubRef.current, { opacity: 0, duration: 2 });
      gsap.from(githubRef.current, {
        y: -40,
        duration: 1,
      });
      gsap.from(linkedinRef.current, { opacity: 0, duration: 2 });
      gsap.from(linkedinRef.current, {
        y: 40,
        duration: 1,
      });
      gsap.from(devRef.current, { opacity: 0, duration: 2 });
      gsap.from(devRef.current, {
        y: -40,
        duration: 1,
      });
    });
    return () => ctx.revert(); // <- cleanup!
  }, []); // , [titleRef]

  return (
    <div className="w-[100%] pt-2 flex items-start justify-center">
      <div className="w-[80%] max-w-sm gap-8  flex justify-between items-center sm:flex-row flex-col">
        <Link ref={resumeRef} href="/resumes/resume.pdf" target={"_blank"}>
          <YouTubeBtn>{`Resume`}</YouTubeBtn>
        </Link>
        <div className="sm:w-[60%] w-[90%]  max-w-48  gap-1 flex justify-around sm:pl-2">
          <Link
            href="https://github.com/javiicc"
            target={"_blank"}
            ref={githubRef}
            className="h-8 w-8 flex items-center justify-center"
          >
            <GitHubSVG />
          </Link>
          <Link
            href="https://www.linkedin.com/in/javier-castano-candela/"
            target={"_blank"}
            ref={linkedinRef}
            className="h-8 w-8 flex items-center justify-center"
          >
            <LinkedInSVG />
          </Link>
          <Link
            href="https://dev.to/javiicc"
            target={"_blank"}
            ref={devRef}
            className="h-8 w-8 flex items-center justify-center"
          >
            <DEVSVG />
          </Link>
          {/* <Link
            href="https://huggingface.co/javiicc"
            target={"_blank"}
            ref={huggingfaceRef}
            className="h-8 w-8 flex items-center justify-center"
          >
            <HuggingFaceSVG />
          </Link> */}
        </div>
      </div>
    </div>
  );
}
