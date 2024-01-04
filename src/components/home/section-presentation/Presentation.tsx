"use client";
// import "./smoothlyGrowth.css";

import ButtonsHP from "./ButtonsHP";
import DescriptionHP from "./DescriptionHP";
import SubtitleHP from "./SubtitleHP";
import TitleHP from "./TitleHP";

export default function Presentation() {
  return (
    <div className="xl:w-[85%] xl:max-w-[885px] lg:w-[96%] lg:max-w-[695px] w-[96%] max-w-[695px] lg:pt-64 sm:pt-48 pt-8 m-[5%]">
      <TitleHP />
      <SubtitleHP />
      <DescriptionHP />
      <ButtonsHP />
    </div>
  );
}
