"use client";

import "./SpotlightProx.css";
import { useRef, useEffect } from "react";

const SpotlightProxCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const CONFIG = {
    proximity: 60,
    spread: 80,
    blur: 20,
    gap: 32,
    vertical: false,
    opacity: 0,
  };

  const PROXIMITY = 10;

  useEffect(() => {
    const update = (event: PointerEvent) => {
      if (!cardRef.current) {
        return;
      }
      // get the angle based on the center point of the card and pointer position
      // Check the card against the proximity and then start updating
      const CARD_BOUNDS = cardRef.current!.getBoundingClientRect();

      let opacity = 0;
      // Get distance between pointer and outerbounds of card
      if (
        event?.x > CARD_BOUNDS.left - CONFIG.proximity &&
        event?.x < CARD_BOUNDS.left + CARD_BOUNDS.width + CONFIG.proximity &&
        event?.y > CARD_BOUNDS.top - CONFIG.proximity &&
        event?.y < CARD_BOUNDS.top + CARD_BOUNDS.height + CONFIG.proximity
      ) {
        opacity = 1;
      }

      const CARD_CENTER = [
        CARD_BOUNDS.left + CARD_BOUNDS.width * 0.5,
        CARD_BOUNDS.top + CARD_BOUNDS.height * 0.5,
      ];
      let ANGLE =
        (Math.atan2(event?.y - CARD_CENTER[1], event?.x - CARD_CENTER[0]) *
          180) /
        Math.PI;
      ANGLE = ANGLE < 0 ? ANGLE + 360 : ANGLE;
      cardRef.current!.setAttribute(
        "style",
        `--start: ${ANGLE + 90}; --active: ${opacity}`
      );
    };

    document.body.addEventListener("pointermove", (e) => update(e));

    return () => {
      document.body.removeEventListener("pointermove", (e) => update(e));
    };
  }, [CONFIG.opacity, CONFIG.proximity]);

  return (
    <div ref={cardRef} className={`card-glows ${className}`}>
      <div className="glows after:bg-spotlight-glows before:bg-spotlight-glows"></div>
      {children}
    </div>
  );
};

export default SpotlightProxCard;
