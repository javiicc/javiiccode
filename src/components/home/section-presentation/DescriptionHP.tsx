"use client";

// import { Keyframes, Frame } from "react-keyframes";

// const sleepDuration = 1700;

// function randn_bm() {
//   let u = 0,
//     v = 0;
//   while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
//   while (v === 0) v = Math.random();

//   let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
//   num = num / 10.0 + 0.5; // Translate to 0 -> 1
//   if (num > 1 || num < 0) return randn_bm(); // resample between 0 and 1
//   return num;
// }
// const getTypingDuration = () => 200 * randn_bm();

// const Line = ({ text }: { text: string }) => <>{text}</>;

export default function DescriptionHP({ text }: { text: string }) {
  //   const renderLine = (text: string) => {
  //     const frames = [];
  //     // starting frame
  //     frames.push(
  //       <Frame
  //         duration={sleepDuration}
  //         key={`${text}-first`}
  //         component={undefined}
  //       >
  //         {/* key={`${text}-first`} */}
  //         <Line text={""} />
  //         {/* {text} */}
  //       </Frame>
  //     );

  //     // typing out the line
  //     for (let i = 0; i < text.length; i++) {
  //       const duration = frames.length > 0 ? getTypingDuration() : sleepDuration;
  //       // || renderedLines.length > 0

  //       frames.push(
  //         <Frame duration={duration} key={`${text}-${i}`} component={undefined}>
  //           <Line text={text.slice(0, i + 1)} />
  //         </Frame>
  //       );
  //     }
  //     const keyFrames = (
  //       <Keyframes
  //         component="p"
  //         // onEnd={() => {
  //         //   if (newRender) {
  //         //     setRenderedLines((renderedLines) => [...renderedLines, text]);
  //         //     setLineCount((c) => c + 1);
  //         //   }
  //         // }}
  //       >
  //         {frames}
  //       </Keyframes>
  //     );

  //     return keyFrames;
  //   };

  //   return (
  //     <div className="border border-gray-100   flex items-center justify-center text-center">
  //       {renderLine(text)}
  //     </div>
  //   );
  return (
    <div className="font-mono flex items-center justify-center text-center pt-4 sm:text-lg text-sm">
      <span className="text-default">{text}</span>
    </div>
  );
}
