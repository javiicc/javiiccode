import Presentation from "@/components/home/section-presentation/Presentation";
import ArrowDownSVG from "@/components/home/section-scroll/ArrowDownSVG";

export default function Home() {
  return (
    <div className="min-h-screen font-mono lg:[90%] w-[85%] flex flex-col items-center gap-10     border border-cyan-600">
      <div className="flex flex-col items-center  mx-auto max-w-7xl h-[90vh] relative xl:px-24 lg:px-16 p-8">
        <Presentation />
        <ArrowDownSVG />
      </div>
    </div>
  );
}
