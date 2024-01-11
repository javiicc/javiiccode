import Link from "next/link";
// import EducationSVG from "../svg/EducationSVG";
// import FacebookSVG from "../svg/Facebook";
import GitHubSVG from "../svg/GitHubSVG";
// import GlobeSVG from "../svg/GlobeSVG";
// import HappyFaceSVG from "../svg/HappyFaceSVG";
// import HuggingFaceSVG from "../svg/HuggingFaceSVG";
import LinkedInSVG from "../svg/LinkedInSVG";
import MediumSVG from "../svg/MediumSVG";
// import SendMsgSVG from "../svg/SendSVG";
// import TieSVG from "../svg/TieSVG";
// import XSVG from "../svg/XSVG";
// import YouTubeSVG from "../svg/YouTubeSVG";
import DEVSVG from "../svg/DEVSVG";

export default function Footer() {
  return (
    <footer
      className="footer footer-center p-10 text-base-content
      rounded border-t border-stone-700
      backdrop-blur-md bg-base-300"
    >
      <nav className="grid grid-flow-col gap-4">
        <Link href={"/"} className="link link-hover">
          Home
        </Link>
        {/* <Link href={"/contact"} className="link link-hover">
          Contact
        </Link> */}
        <Link href={"/blog"} className="link link-hover">
          Blog
        </Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-8 items-center">
          <Link
            href="https://www.linkedin.com/in/javier-castano-candela/"
            target={"_blank"}
          >
            <LinkedInSVG />
          </Link>
          <Link href="https://github.com/javiicc" target={"_blank"}>
            <GitHubSVG />
          </Link>
          <Link href={"https://medium.com/@javiicc"} target={"_blank"}>
            <MediumSVG />
          </Link>
          <Link href="https://dev.to/javiicc" target={"_blank"}>
            <DEVSVG />
          </Link>
          {/* <a>
            <XSVG />
          </a>
          <a>
            <YouTubeSVG />
          </a>
          <a>
            <FacebookSVG />
          </a> */}
          {/* <a>
            <HuggingFaceSVG />
          </a> */}
        </div>
      </nav>
      <aside>
        {/* <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          Javiiccode Services Ltd
        </p> */}
        <div className="flex items-center">
          Copyright © {new Date().getFullYear()} - Built with&nbsp;
          <span className="text-2xl text-red-700 font-medium">&#9825;</span>
          &nbsp;by&nbsp;
          {/* <Link
            href="https://www.linkedin.com/in/javier-casta%C3%B1o-candela/"
            className="footer-name-link"
            target={"_blank"}
          > */}
          Javier
          {/* </Link> */}
        </div>
      </aside>
    </footer>
  );
}
