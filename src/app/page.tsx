import InfoSection from "@/components/home/section-information/InfoSection";
import Presentation from "@/components/home/section-presentation/Presentation";
import ArrowDownSVG from "@/components/home/section-scroll/ArrowDownSVG";

export default function Home() {
  return (
    <div className="min-h-screen font-mono lg:w-[90%] w-[85%] flex flex-col items-center gap-20     border border-cyan-600">
      <div className="flex flex-col items-center h-[90vh] mx-auto xl:px-24 lg:px-16 p-8 max-w-7xl relative">
        <Presentation />
        <ArrowDownSVG />
      </div>
      <div className="flex justify-center items-center h-[80vh] w-[100%] mx-auto xl:px-16 lg:px-8 px-4 pb-20 max-w-7xl">
        <InfoSection />
      </div>
    </div>
  );
}
