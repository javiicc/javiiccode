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

      let opacity = 0.05;
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
      <div className="glows"></div>
      {children}
    </div>
  );
};

export default SpotlightProxCard;

// <div class="container">
//       <article>
//         <div class="glows"></div>
//         <span class="header">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
//             <path fill-rule="evenodd" d="M17.303 5.197A7.5 7.5 0 006.697 15.803a.75.75 0 01-1.061 1.061A9 9 0 1121 10.5a.75.75 0 01-1.5 0c0-1.92-.732-3.839-2.197-5.303zm-2.121 2.121a4.5 4.5 0 00-6.364 6.364.75.75 0 11-1.06 1.06A6 6 0 1118 10.5a.75.75 0 01-1.5 0c0-1.153-.44-2.303-1.318-3.182zm-3.634 1.314a.75.75 0 01.82.311l5.228 7.917a.75.75 0 01-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 01-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 01-1.247-.606l.569-9.47a.75.75 0 01.554-.68z" clip-rule="evenodd" />
//           </svg>
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
//             <path fill-rule="evenodd" d="M17.303 5.197A7.5 7.5 0 006.697 15.803a.75.75 0 01-1.061 1.061A9 9 0 1121 10.5a.75.75 0 01-1.5 0c0-1.92-.732-3.839-2.197-5.303zm-2.121 2.121a4.5 4.5 0 00-6.364 6.364.75.75 0 11-1.06 1.06A6 6 0 1118 10.5a.75.75 0 01-1.5 0c0-1.153-.44-2.303-1.318-3.182zm-3.634 1.314a.75.75 0 01.82.311l5.228 7.917a.75.75 0 01-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 01-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 01-1.247-.606l.569-9.47a.75.75 0 01.554-.68z" clip-rule="evenodd" />
//           </svg>
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
//             <path fill-rule="evenodd" d="M17.303 5.197A7.5 7.5 0 006.697 15.803a.75.75 0 01-1.061 1.061A9 9 0 1121 10.5a.75.75 0 01-1.5 0c0-1.92-.732-3.839-2.197-5.303zm-2.121 2.121a4.5 4.5 0 00-6.364 6.364.75.75 0 11-1.06 1.06A6 6 0 1118 10.5a.75.75 0 01-1.5 0c0-1.153-.44-2.303-1.318-3.182zm-3.634 1.314a.75.75 0 01.82.311l5.228 7.917a.75.75 0 01-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 01-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 01-1.247-.606l.569-9.47a.75.75 0 01.554-.68z" clip-rule="evenodd" />
//           </svg>
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
//             <path fill-rule="evenodd" d="M17.303 5.197A7.5 7.5 0 006.697 15.803a.75.75 0 01-1.061 1.061A9 9 0 1121 10.5a.75.75 0 01-1.5 0c0-1.92-.732-3.839-2.197-5.303zm-2.121 2.121a4.5 4.5 0 00-6.364 6.364.75.75 0 11-1.06 1.06A6 6 0 1118 10.5a.75.75 0 01-1.5 0c0-1.153-.44-2.303-1.318-3.182zm-3.634 1.314a.75.75 0 01.82.311l5.228 7.917a.75.75 0 01-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 01-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 01-1.247-.606l.569-9.47a.75.75 0 01.554-.68z" clip-rule="evenodd" />
//           </svg>
//         </span>
//         <span class="badge">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
//             <path fill-rule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clip-rule="evenodd" />
//           </svg>
//           <span>Pointer tracking glows</span>
//         </span>
//         <h2>Wherever you go,<br>it follows</h2>
//         <a href="">Learn more</a>
//       </article>
//       <article>
//         <div class="glows"></div>
//         <span class="header">

//         </span>
//         <span class="badge">

//           <span>Pointer tracking glows</span>
//         </span>
//         <h2>Activate by,<br>getting closer</h2>
//         <a href="">Learn more</a>
//       </article>
//     </div>
