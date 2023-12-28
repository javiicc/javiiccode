import YouTubeBtn from "@/components/buttons/YouTubeBtn";
import GitHubSVG from "@/components/svg/GitHubSVG";
import HuggingFaceSVG from "@/components/svg/HuggingFaceSVG";
import LinkedInSVG from "@/components/svg/LinkedInSVG";
import Link from "next/link";

export default function ButtonsHP() {
  return (
    <div className=" w-[100%] pt-8 flex items-center justify-center">
      <div className="w-[80%] max-w-sm gap-8  flex justify-between items-center sm:flex-row flex-col">
        <Link href="/resumes/resume.pdf" target={"_blank"}>
          <YouTubeBtn>{`Resume`}</YouTubeBtn>
        </Link>
        <div className="sm:w-[60%] w-[90%]  max-w-48  gap-1 flex justify-between sm:pl-2">
          <Link href="https://github.com/javiicc" target={"_blank"}>
            <GitHubSVG />
          </Link>
          <LinkedInSVG />
          <HuggingFaceSVG />
        </div>
      </div>
    </div>
  );
}
