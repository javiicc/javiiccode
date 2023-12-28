"use client";

import "./Mouse.css";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Mouse = () => {
  const mouseRef = useRef(null);
  const arrowScrollRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(mouseRef.current, { opacity: 0, duration: 3 });
      gsap.from(mouseRef.current, { y: -100, duration: 1 });
      gsap.fromTo(
        mouseRef.current,
        { opacity: 1 },
        {
          scrollTrigger: {
            trigger: mouseRef.current,
            start: "top center",
            end: "top 25%",
            markers: true,
            scrub: 2,
            toggleActions: "play none reverse none",
          },
          ease: "none",
          opacity: 0,
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="mouse_scroll" ref={mouseRef}>
      <div className="mouse">
        <div className="wheel"></div>
      </div>
      <div>
        <span className="m_scroll_arrows unu" ref={arrowScrollRef}></span>
        <span className="m_scroll_arrows doi" ref={arrowScrollRef}></span>
        <span className="m_scroll_arrows trei" ref={arrowScrollRef}></span>
      </div>
    </div>
  );
};

export default Mouse;
