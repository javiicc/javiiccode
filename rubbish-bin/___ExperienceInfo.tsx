// "use client";

// import "./ExperienceInfo.css";
// import InfoCard from "../src/components/home/section-information/experience/InfoCard";
// import { useRef, useEffect } from "react";
// import { gsap, Elastic } from "gsap";
// import { SpotlightScroll } from "@/components/spotlight/spotlightScroll";

// const ExperienceInfo = () => {
//   // const ghdRef = useRef(null);
//   // const titleRef = useRef(null);
//   // const work1Ref = useRef(null);
//   // const work2Ref = useRef(null);
//   // const work3Ref = useRef(null);
//   // const work4Ref = useRef(null);
//   // const work5Ref = useRef(null);
//   // const work6Ref = useRef(null);
//   // const cardsContainer = useRef<HTMLDivElement>(null);

//   // const applyOverlayMask = (e: PointerEvent) => {
//   //   // const documentTarget = e.currentTarget as Element;

//   //   if (!cardsContainer.current) {
//   //     return;
//   //   }

//   //   const x = e.pageX - cardsContainer.current.offsetLeft;
//   //   const y = e.pageY - cardsContainer.current.offsetTop - 80;

//   //   cardsContainer.current.setAttribute(
//   //     "style",
//   //     `--x: ${x}px; --y: ${y}px; --opacity: 1`
//   //   );
//   // };

//   // const applyOverlayMaskScroll = (e: any) => {
//   //   // const documentTarget = e.currentTarget as Element;

//   //   console.log(":)");

//   //   if (!cardsContainer.current) {
//   //     return;
//   //   }

//   //   console.log(":)");
//   //   console.log(cardsContainer.current.scrollTop);

//   //   const x = e.pageX - cardsContainer.current.offsetLeft;
//   //   const y = e.pageY - cardsContainer.current.offsetTop - 80;

//   //   cardsContainer.current.setAttribute(
//   //     "style",
//   //     `--x: ${x}px; --y: ${y}px; --opacity: 1`
//   //   );
//   // };

//   // useEffect(() => {
//   //   document.body.addEventListener("pointermove", (e) => {
//   //     applyOverlayMask(e);
//   //   });

//   //   return () => {
//   //     document.body.removeEventListener("pointermove", (e) => {
//   //       applyOverlayMask(e);
//   //     });
//   //   };
//   // }, []);

//   // useEffect(() => {
//   //   document.body.addEventListener("scroll", (e) => {
//   //     applyOverlayMaskScroll(e);
//   //   });

//   //   return () => {
//   //     document.body.removeEventListener("scroll", (e) => {
//   //       applyOverlayMaskScroll(e);
//   //     });
//   //   };
//   // }, []);

//   // useEffect(() => {
//   //   let ctx = gsap.context(() => {
//   //     // gsap.from(ghdRef.current, { opacity: 0, duration: 2 });
//   //     // gsap.from(ghdRef.current, {
//   //     //   x: -90,
//   //     //   duration: 1,
//   //     // });
//   //     gsap.from(titleRef.current, { opacity: 0, duration: 2 });
//   //     gsap.from(titleRef.current, {
//   //       x: 90,
//   //       duration: 1,
//   //     });
//   //     gsap.from(work1Ref.current, { opacity: 0, duration: 1, delay: 1 });
//   //     gsap.from(work2Ref.current, { opacity: 0, duration: 1, delay: 1.1 });
//   //     gsap.from(work3Ref.current, { opacity: 0, duration: 1, delay: 1.2 });
//   //     gsap.from(work4Ref.current, { opacity: 0, duration: 1, delay: 1.3 });
//   //     gsap.from(work5Ref.current, { opacity: 0, duration: 1, delay: 1.4 });
//   //     gsap.from(work6Ref.current, { opacity: 0, duration: 1, delay: 1.5 });
//   //   });
//   //   return () => ctx.revert(); // <- cleanup!
//   // }, []);

//   // <SpotlightScroll
//   //           className="w-[90%] rounded-xl overflow-hidden flex items-center justify-center
//   //           relative shadow-[0px_8px_16px_8px_rgba(0,0,0,0.3)]"
//   //           mainCard="custom-card h-[100%] w-[100%] rounded-xl transition-colors"
//   //           twinCard="twin-props-info-section h-[100%] w-[100%] rounded-xl transition-colors text-transparent"
//   //         ></SpotlightScroll>

//   return (
//     <div className="w-[100] text-base px-4 py-8">
//       <div
//         className="w-[100%] flex md:flex-row flex-col justify-around items-center"
//         // border border-yellow-300
//         // ref={ghdRef}
//       >
//         <div className="h-[100%] md:w-[50%] w-[100%] flex items-center justify-center">
//           {/* border border-cyan-400 */}
//           <div className="w-[90%] rounded-xl overflow-hidden flex items-center justify-center">
//             <InfoCard
//               startDate={"03/07/2022"}
//               endDate={Date()}
//               position={"Software Engineer"}
//               institution={"Ghenova Digital"}
//               institutionPath={"https://ghenovadigital.com/"}
//               dateText={"March 2022 - undefined"}
//               place={"# Seville, Andalusia, Spain"}
//               logoPath={"/images/ghd-logo.png"}
//             />
//           </div>
//         </div>
//         <div className="md:w-[50%] w-[100%] py-10 md:py-2 flex flex-col items-center justify-around gap-10 border border-cyan-400">
//           <div className="h-[100%] w-[100%] p-4">
//             <p>
//               Design and development of backend applications and APIs for
//               Machine Learning based products.
//             </p>
//           </div>
//           <div className="h-[100%] w-[100%] p-4">
//             <p>
//               Deployment on AWS ... applications and APIs for Machine Learning
//               based products.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* <div classNameName="experience-info__desc">
//         <div ref={titleRef}>
//           <h3>My work at Ghenova Digital</h3>
//         </div>
//         <ul>
//           <li key={"1a"} ref={work1Ref}>
//             Development of software products powered by{" "}
//             <span className="bold">Artificial Intelligence</span> with a{" "}
//             <span className="bold">product mindset</span>, as well as{" "}
//             <span className="bold">R&D</span> projects in collaboration with
//             other companies.
//           </li>
//           <li key={"2a"} ref={work2Ref}>
//             Development of <span className="bold">AI conversational</span>{" "}
//             systems for virtual assistants capable of managing knowledge of
//             different topics.
//           </li>
//           <li key={"3a"} ref={work3Ref}>
//             Development of <span className="bold">Information Retrieval</span>{" "}
//             systems and language models to extract information from
//             non-structured data.
//           </li>
//           <li key={"4a"} ref={work4Ref}>
//             Development of{" "}
//             <span className="bold">Natural Language Processing</span> data
//             analysis features and <span className="bold">Web Scraping</span>{" "}
//             software for a Business Intelligence platform,{" "}
//             <span className="bold">Data Augmentation</span>,{" "}
//             <span className="bold">classification AI models</span>, and a lot of
//             exciting stuff.
//           </li>
//           <li key={"5a"} ref={work5Ref}>
//             <span className="bold">Back&#8209;End</span> development with{" "}
//             <span className="bold">django</span>,{" "}
//             <span className="bold">FastAPI</span>, and{" "}
//             <span className="bold">Flask</span>.{" "}
//             <span className="bold">Microservices</span> and{" "}
//             <span className="bold">APIs</span>.{" "}
//             <span className="bold">TDD</span>.
//           </li>
//           <li key={"6a"} ref={work6Ref}>
//             <span className="bold">Front&#8209;End</span> with{" "}
//             <span className="bold">Next.js (React)</span>,{" "}
//             <span className="bold">TypeScript</span>, and{" "}
//             <span className="bold">Flutter (Dash)</span>.
//           </li>
//         </ul>
//       </div> */}
//     </div>
//   );
// };

// export default ExperienceInfo;

// {
//   /* <InfoCard
//           startDate={"03/07/2022"}
//           endDate={Date()}
//           position={"Data Scientist & Software Developer"}
//           institution={"Ghenova Digital"}
//           institutionPath={"https://ghenovadigital.com/"}
//           dateText={"March 2022 - undefined"}
//           place={"# Seville, Andalusia, Spain"}
//           logoPath={"/images/GHD-logo.jpeg"}
//         /> */
// }
