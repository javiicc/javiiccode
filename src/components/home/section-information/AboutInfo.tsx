"use client";

import "./AboutInfo.css";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const AboutInfo = () => {
  const upTag1Ref = useRef(null);
  const upTag2Ref = useRef(null);
  const upTag3Ref = useRef(null);
  const upTag4Ref = useRef(null);
  const downTag1Ref = useRef(null);
  const downTag2Ref = useRef(null);
  const downTag3Ref = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({ duration: 0.01, delay: 0.5 });

      gsap.from(upTag1Ref.current, { opacity: 0, duration: 0.3 });
      gsap.from(upTag1Ref.current, {
        y: 30,
        duration: 0.6,
      });
      gsap.from(downTag1Ref.current, { opacity: 0, duration: 0.3 });
      gsap.from(downTag1Ref.current, {
        y: -30,
        duration: 0.6,
      });
      gsap.from(upTag2Ref.current, { opacity: 0, duration: 0.3 });
      gsap.from(upTag2Ref.current, {
        y: 30,
        duration: 0.6,
      });
      gsap.from(downTag2Ref.current, { opacity: 0, duration: 0.3 });
      gsap.from(downTag2Ref.current, {
        y: -30,
        duration: 0.6,
      });
      gsap.from(upTag3Ref.current, { opacity: 0, duration: 0.3 });
      gsap.from(upTag3Ref.current, {
        y: 90,
        duration: 0.6,
      });
      gsap.from(downTag3Ref.current, { opacity: 0, duration: 0.3 });
      gsap.from(downTag3Ref.current, {
        y: -90,
        duration: 0.6,
      });
      gsap.from(upTag4Ref.current, { opacity: 0, duration: 0.3 });
      gsap.from(upTag4Ref.current, {
        y: 90,
        duration: 0.6,
      });
      tl.from(text1Ref.current, { opacity: 0 });
      tl.from(text2Ref.current, { opacity: 0, delay: 0.07 }, "<");
      tl.from(text3Ref.current, { opacity: 0, delay: 0.07 }, "<");
    });
    return () => ctx.revert(); // <- cleanup!
  }, []); // , [titleRef]

  return (
    <div className="about-info">
      <div>
        <div className="about-tag-top" ref={upTag1Ref}>
          &lt;h1&gt;
        </div>
        <h1 ref={text1Ref}>Hi, I&#39;m Javier!</h1>
        <div className="about-tag-bottom" ref={downTag1Ref}>
          &lt;/h1&gt;
        </div>
      </div>
      <div className="about-info__1">
        <div className="about-tag-top" ref={upTag2Ref}>
          &lt;h3&gt;
        </div>
        <h3 ref={text2Ref}>About my work at GHD</h3>
        <div className="about-tag-bottom" ref={downTag2Ref}>
          &lt;/h3&gt;
        </div>
        <div className="about-tag-top" ref={upTag3Ref}>
          &lt;p&gt;
        </div>
        <p ref={text3Ref}>
          {/* Ghenova Digital gave me the opportunity to work as{" "}
          <span className="bold">Software Developer</span> to acquire new skills
          that would allow me to perform better and be present in all stages of
          the creation and deployment of the product. During these months
          I&#39;ve been mainly building wonderful{" "} */}
          As <span className="bold">Software Developer</span> I build wonderful{" "}
          <span className="bold">backend</span> applications with{" "}
          <span className="bold">Django</span>,{" "}
          <span className="bold">Flask</span>, and{" "}
          <span className="bold">FastAPI</span>. I&#39;ve also collaborated in
          the development of a couple of <span className="bold">frontend</span>{" "}
          applications with <span className="bold">Next.js (React)</span>,{" "}
          <span className="bold">TypeScript</span>, and{" "}
          <span className="bold">Flutter (Dash)</span>. I&#39;m currently
          focused on <span className="bold">backend</span> development and
          learning about <span className="bold">DevOps</span> workflows. Among
          my main concerns are the design and implementation of mechanisms that
          improve code <span className="bold">stability</span>,{" "}
          <span className="bold">performance</span>, and{" "}
          <span className="bold">reusability</span>, as well as{" "}
          <span className="bold">product lifecycle</span>, and{" "}
          <span className="bold">scalability</span>.
        </p>
        <div className="about-tag-bottom" ref={downTag3Ref}>
          &lt;/p&gt;
        </div>
        <div className="about-tag-top" ref={upTag4Ref}>
          &lt;p&gt;
        </div>
        <p>
          As <span className="bold">Data Scientist</span> I worked mainly in{" "}
          <span className="bold">Natural Language Processing</span> systems to
          empower products with <span className="bold">AI</span>. I worked on
          projects for private clients as well as R&D ones in collaboration with
          other companies. During my work I&#39;ve collaborated with other teams
          in the company to develop <span className="bold">agents</span> capable
          of communicating knowledge on particular topics, NLP based{" "}
          <span className="bold">Information Retrieval</span> systems,{" "}
          <span className="bold">data augmentation</span> and{" "}
          <span className="bold">analysis</span>,{" "}
          <span className="bold">web scraping</span>, and a lot of other
          exciting stuff.
        </p>
        <div className="about-tag-bottom">&lt;/p&gt;</div>
      </div>
      <div className="about-info__1">
        <div className="about-tag-top">&lt;h3&gt;</div>
        <h3>Why Data Science</h3>
        <div className="about-tag-bottom">&lt;/h3&gt;</div>
        <div className="about-tag-top">&lt;p&gt;</div>
        <p>
          My interest in the wonderful world of data was born during my studies
          in <span className="bold">Finance and Accounting</span>. I fell in
          love with <span className="bold">statistics</span> and{" "}
          <span className="bold">probability theory</span>,{" "}
          <span className="bold">risk assessment</span>, and{" "}
          <span className="bold">financial mathematics</span>, so I looked for a
          career that allowed me to develop these skills further. My priority
          was to start a career in{" "}
          <span className="bold">Actuarial Sciences</span>, until I was
          introduced to the power of <span className="bold">Data Science</span>{" "}
          and <span className="bold">AI</span> ✨
        </p>
        <div className="about-tag-bottom">&lt;/p&gt;</div>
      </div>
      <div className="about-info__1">
        <div className="about-tag-top">&lt;h3&gt;</div>
        <h3>A little about me</h3>
        <div className="about-tag-bottom">&lt;/h3&gt;</div>
        <div className="about-tag-top">&lt;p&gt;</div>
        <p>
          I consider myself a <span className="bold">hard-working</span> and{" "}
          <span className="bold">persevering</span> individual, driven by an
          innate <span className="bold">passion</span> for growth and{" "}
          <span className="bold">continuous improvement</span>. My consistent{" "}
          <span className="bold">focus</span> on achieving goals and objectives,
          as well as my ability to tackle challenges with{" "}
          <span className="bold">determination</span>, has enabled me to achieve
          outstanding results in each of my previous roles. Maintaining{" "}
          <span className="bold">motivation</span> and focus throughout long and
          demanding projects has allowed me to overcome obstacles and meet tight
          deadlines. I firmly believe that{" "}
          <span className="bold">perseverance</span> is key to progress.
        </p>
        <div className="about-tag-bottom">&lt;/p&gt;</div>
        <div className="about-tag-top">&lt;p&gt;</div>
        <p>
          I was born in <span className="bold">Huelva</span>, Andalusia,
          Southern Spain (<span className="bold">36 °C</span> at the time of
          writing this &#127774;&#128517;). I spent most of my life there until
          I moved to <span className="bold">Seville</span> for university.
          During the last few years I&#39;ve had the opportunity to travel and
          live in different parts of the world (and hopefully many more in the
          future), such as the <span className="bold">Yucatan Peninsula</span>{" "}
          in <span className="bold">Mexico</span>,{" "}
          <span className="bold">Manchester (UK)</span>,{" "}
          <span className="bold">Cork (Ireland)</span>,{" "}
          <span className="bold">Portugal</span>,{" "}
          <span className="bold">San Francisco</span> and{" "}
          <span className="bold">Las Vegas (USA)</span>, and{" "}
          <span className="bold">Brussels (Belgium)</span>.
        </p>
        <div className="about-tag-bottom">&lt;/p&gt;</div>
        <div className="about-tag-top">&lt;p&gt;</div>
        <p>
          I enjoy spending my free time hanging out with friends, doing sports
          (mostly going for a run and surfing), being in nature, walking{" "}
          <span className="bold">Apollo</span> (my syster&#39;s dog,{" "}
          <span className="bold">@apolo.the.husky</span> on IG), and learning to
          cook. &#129316;
        </p>
        <div className="about-tag-bottom">&lt;/p&gt;</div>
      </div>
    </div>
  );
};

export default AboutInfo;
