import EducationSVG from "../svg/EducationSVG";
import FacebookSVG from "../svg/Facebook";
import GitHubSVG from "../svg/GitHubSVG";
import GlobeSVG from "../svg/GlobeSVG";
import HappyFaceSVG from "../svg/HappyFaceSVG";
import HuggingFaceSVG from "../svg/HuggingFaceSVG";
import LinkedInSVG from "../svg/LinkedInSVG";
import MediumSVG from "../svg/MediumSVG";
import SendMsgSVG from "../svg/SendSVG";
import TieSVG from "../svg/TieSVG";
import XSVG from "../svg/XSVG";
import YouTubeSVG from "../svg/YouTubeSVG";

export default function Footer() {
  return (
    <footer
      className="footer footer-center p-10 text-base-content
      rounded border-t border-stone-700
      backdrop-blur-md bg-base-300"
    >
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4 items-center">
          <a>
            <XSVG />
          </a>
          <a>
            <YouTubeSVG />
          </a>
          <a>
            <FacebookSVG />
          </a>
          <a>
            <MediumSVG />
          </a>
          <a>
            <HuggingFaceSVG />
          </a>
          <a>
            <GitHubSVG />
          </a>
          {/* <a>
            <LinkedInSVG />
          </a>
          <a>
            <GlobeSVG />
          </a>
          <a>
            <SendMsgSVG />
          </a>
          <a>
            <TieSVG />
          </a>
          <a>
            <EducationSVG />
          </a>
          <a>
            <HappyFaceSVG />
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
