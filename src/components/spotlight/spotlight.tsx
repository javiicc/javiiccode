"use client";

import { useEffect, useRef } from "react";

export const Spotlight = ({
  children,
  mainCard,
  twinCard,
  className,
}: {
  children: React.ReactNode;
  mainCard: string;
  twinCard: string;
  className: string;
}) => {
  const cardsContainer = useRef<HTMLDivElement>(null);

  const applyOverlayMask = (e: PointerEvent | any) => {
    // const documentTarget = e.currentTarget as Element;

    if (!cardsContainer.current) {
      return;
    }

    const x = e.pageX - cardsContainer.current.offsetLeft;
    const y = e.pageY - cardsContainer.current.offsetTop - 80;

    cardsContainer.current.setAttribute(
      "style",
      `--x: ${x}px; --y: ${y}px; --opacity: 1`
    );
  };

  useEffect(() => {
    document.body.addEventListener("pointermove", (e) => {
      applyOverlayMask(e);
    });

    return () => {
      document.body.removeEventListener("pointermove", (e) => {
        applyOverlayMask(e);
      });
    };
  }, []);

  return (
    <>
      <div className={`${className}`} ref={cardsContainer}>
        <div className="">
          <div className={`${mainCard}`}>{children}</div>
        </div>
        {/* twin cards */}
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
          {/* card */}
          <div className={`${twinCard}`}>{children}</div>
        </div>
      </div>
    </>
  );
};
