import ThemeSwitcher from "./ThemeSwitcher";
import BlogSVG from "../svg/BlogSVG";
import CodeSymbolSVG from "../svg/CodeSymbolSVG";
import GreetSVG from "../svg/GreetSVG";
import HomeSVG from "../svg/HomeSVG";
import MenuSVG from "../svg/MenuSVG";
import Javiiccode from "../website-name/javiiccode";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-300 border-b border-stone-700 rounded bg-opacity-90 font-mono">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <MenuSVG />
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/">
                <HomeSVG />
                home
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <BlogSVG />
                blog
              </Link>
            </li>
            <li>
              <a>
                <GreetSVG />
                say hello!
              </a>
            </li>
          </ul>
        </div>
        {/* <Link
          className="flex flex-row justify-center items-center gap-4 text-xl"
          href={""}
        > */}
        <a className="btn btn-ghost text-xl" href={""}>
          {/* 2xl:ml-28 text-xl    min-w-28*/}
          {/* <button>
          <Link href={""} className="flex items-center just"> */}
          <CodeSymbolSVG />
          <Javiiccode />
          {/* </Link>
        </button> */}
        </a>
        {/* </Link> */}
      </div>
      {/* big */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">
              <HomeSVG />
              home
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <BlogSVG />
              blog
            </Link>
          </li>
          <li>
            <a>
              <GreetSVG />
              say hello!
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {/* 2xl:mr-28 */}
        <ThemeSwitcher />
      </div>
    </div>
  );
}
