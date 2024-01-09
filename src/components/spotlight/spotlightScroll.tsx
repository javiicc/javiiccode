"use client";

import { useEffect, useRef } from "react";

export const SpotlightScroll = ({
  children,
  mainCard,
  twinCard,
  //   className,
}: {
  children: React.ReactNode;
  mainCard: string;
  twinCard: string;
  //   className: string;
}) => {
  return (
    <>
      <div className="">
        <div className={`${mainCard}`}>{children}</div>
      </div>
      <div
        className="select-none pointer-events-none absolute inset-0"
        style={{
          opacity: "var(--opacity, 0)",
          mask: `
                radial-gradient(
                  25rem 25rem at var(--x) var(--y), 
                  #000 1%,
                  transparent 50%
                )`,
          WebkitMask: `
                radial-gradient(
                  25rem 25rem at var(--x) var(--y),
                  #000 1%,
                  transparent 50%
                )`,
        }}
      >
        <div className={`${twinCard}`}>{children}</div>
      </div>
    </>
  );
};
