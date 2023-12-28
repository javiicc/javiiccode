"use client";

import ButtonsHP from "./ButtonsHP";
import DescriptionHP from "./DescriptionHP";
import SubtitleHP from "./SubtitleHP";
import TitleHP from "./TitleHP";

export default function Presentation() {
  return (
    <div className="xl:w-[60%] w-[70%]   sm:pt-64 pt-8    m-[5%]">
      <TitleHP />
      <SubtitleHP />
      <DescriptionHP
        text={`Hi! I'm Javier Castano, a Data Scientist and Software Developer
        dedicated to creating products with code and AI. I love learning new
        things and I've created this site to record and share some of them.
        I hope you find my blog helpful :-)`}
      />
      <ButtonsHP />
    </div>
  );
}
