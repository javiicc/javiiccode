"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ArrowDownSVG() {
  const arrowRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // gsap.from(arrowRef.current, { opacity: 0, duration: 3 });
      // gsap.from(arrowRef.current, { y: -100, duration: 1 });
      gsap.fromTo(
        arrowRef.current,
        { opacity: 1 },
        {
          scrollTrigger: {
            trigger: arrowRef.current,
            start: "top 80%",
            end: "top 70%",
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
    <div className="absolute flex-grow flex items-center justify-between bottom-0 right-0 w-full">
      <div className="mx-auto self-start animate-bounce">
        <svg
          aria-hidden="true"
          focusable="false"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          className="w-14 h-14"
          ref={arrowRef}
        >
          <g>
            <path
              fill="#38bdf8"
              fillOpacity="40%"
              d="M160 256.14l-56.51 56.47-96.44-96.15a23.77 23.77.0 01-.18-33.61l.18-.18 22.59-22.51a23.94 23.94.0 0133.85.0z"
            ></path>
            <path
              fill="currentcolor"
              d="M313 182.57 290.21 160a23.94 23.94.0 00-33.85.0L103.47 312.61 143 352l.06.06a24 24 0 0033.93-.16L313 216.36l.18-.17a23.78 23.78.0 00-.18-33.62z"
            ></path>
          </g>
        </svg>
      </div>
    </div>
  );
}
