"use client";

import { useState } from "react";
import Image from "next/image";

const ImageSpinner = ({
  src,
  width,
  height,
  alt,
  className,
  classNameWrapper,
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
  className: string;
  classNameWrapper: string;
}) => {
  const [loading, setLoading] = useState(true);

  //   const handleLoad = () => {
  //     setLoading(false);
  //   };

  //   const handleLoad = (image: any) => image.classList.remove("opacity-0");

  return (
    <div className={`${classNameWrapper}`}>
      {/* {loading && <div className="spinner">Loading...</div>} */}
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        className={`${className}`}
        // onLoad={handleLoad}
      />
    </div>
  );
};

export default ImageSpinner;
