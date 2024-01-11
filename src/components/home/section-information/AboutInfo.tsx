"use client";

import "./AboutInfo.css";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const AboutInfo = () => {
  const upTag1Ref = useRef(null);
  const upTag2Ref = useRef(null);
  const upTag3Ref = useRef(null);
  const upTag4Ref = useRef(null);
  const upTag5Ref = useRef(null);
  const downTag1Ref = useRef(null);
  const downTag2Ref = useRef(null);
  const downTag3Ref = useRef(null);
  const downTag4Ref = useRef(null);
  const downTag5Ref = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);
  const text4Ref = useRef(null);
  const text5Ref = useRef(null);

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
      gsap.from(downTag4Ref.current, { opacity: 0, duration: 0.3 });
      gsap.from(downTag4Ref.current, {
        y: -90,
        duration: 0.6,
      });
      gsap.from(upTag5Ref.current, { opacity: 0, duration: 0.3 });
      gsap.from(upTag5Ref.current, {
        y: 90,
        duration: 0.6,
      });
      gsap.from(downTag5Ref.current, { opacity: 0, duration: 0.3 });
      gsap.from(downTag5Ref.current, {
        y: -90,
        duration: 0.6,
      });
      tl.from(text1Ref.current, { opacity: 0 });
      tl.from(text2Ref.current, { opacity: 0, delay: 0.07 }, "<");
      tl.from(text3Ref.current, { opacity: 0, delay: 0.07 }, "<");
      tl.from(text4Ref.current, { opacity: 0, delay: 0.07 }, "<");
      tl.from(text5Ref.current, { opacity: 0, delay: 0.07 }, "<");
    });
    return () => ctx.revert(); // <- cleanup!
  }, []); // , [titleRef]

  return (
    <div className="about-info custom-prose">
      <div className="">
        <div className="about-tag-top" ref={upTag1Ref}>
          &lt;h2&gt;
        </div>
        <h2 ref={text1Ref}>A little about me</h2>
        <div className="about-tag-bottom" ref={downTag1Ref}>
          &lt;/h2&gt;
        </div>
        <div className="about-tag-top" ref={upTag2Ref}>
          &lt;p&gt;
        </div>
        <p ref={text2Ref}>
          I consider myself a <strong>hard-working</strong> and{" "}
          <strong>persevering</strong> individual, driven by an innate{" "}
          <strong>passion</strong> for growth and continuous improvement. I like
          to tackle challenges with <strong>determination</strong> and{" "}
          <strong>focus</strong> on goals. I firmly believe that{" "}
          <strong>perseverance</strong> is key to progress.
        </p>
        <div className="about-tag-bottom" ref={downTag2Ref}>
          &lt;/p&gt;
        </div>
        <div className="about-tag-top" ref={upTag3Ref}>
          &lt;p&gt;
        </div>
        <p ref={text3Ref}>
          My interest in the wonderful world of data was born during my studies
          in <strong>Finance and Accounting</strong>. I fell in love with{" "}
          <strong>statistics</strong>, <strong>probability theory</strong>, and{" "}
          <strong>risk assessment</strong>, so I looked for a career that
          allowed me to develop these skills further ✨
        </p>
        <div className="about-tag-bottom" ref={downTag3Ref}>
          &lt;/p&gt;
        </div>
        <div className="about-tag-top" ref={upTag4Ref}>
          &lt;p&gt;
        </div>
        <p ref={text4Ref}>
          I was born in Huelva, Andalusia, Southern <strong>Spain</strong> (
          <strong>36 °C</strong> at the time of writing this
          &#127774;&#128517;). I spent most of my life there until I moved to{" "}
          <strong>Seville</strong> for university. During the last few years
          I&#39;ve had the opportunity to travel and live in different parts of
          the world (and hopefully many more in the future), such as the{" "}
          <strong>Yucatan Peninsula</strong> in <strong>Mexico</strong> 🌮,{" "}
          <strong>Manchester (UK)</strong>, <strong>Cork (Ireland)</strong>,{" "}
          <strong>Portugal</strong>, and <strong>Brussels (Belgium)</strong>.
        </p>
        <div className="about-tag-bottom" ref={downTag4Ref}>
          &lt;/p&gt;
        </div>
        <div className="about-tag-top" ref={upTag5Ref}>
          &lt;p&gt;
        </div>
        <p ref={text5Ref}>
          I enjoy spending my free time hanging out with friends, doing sports,
          being in nature, and walking <strong>Apollo</strong> 🐾 (my
          syster&#39;s dog, <strong>@apolo.the.husky</strong> on IG ).
        </p>
        <div className="about-tag-bottom" ref={downTag5Ref}>
          &lt;/p&gt;
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
