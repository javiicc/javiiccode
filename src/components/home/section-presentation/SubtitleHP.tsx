"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function SubtitleHP() {
  const subtitleRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(subtitleRef.current, { opacity: 0, duration: 2 });
      gsap.from(subtitleRef.current, {
        x: 150,
        duration: 1,
      });
    });
    return () => ctx.revert(); // <- cleanup!
  }, []); // , [subtitleRef]

  return (
    <div className="w-[100%] flex items-center justify-center text-center pb-2">
      <span
        ref={subtitleRef}
        className="xl:text-3xl text-2xl text-[#38bdf8cc] drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,0.8)]"
      >
        JAVIER CASTAÑO | Software Engineer & Data Scientist 👨‍💻
      </span>
    </div>
  );
}
