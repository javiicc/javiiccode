"use client";

import "./navigation.css";
import { useState } from "react";
import Link from "next/link";
import CodeSymbolSVG from "../svg/CodeSymbolSVG";
import Javiiccode from "../website-name/javiiccode";
import ThemeSwitcher from "./ThemeSwitcher";
import HomeSVG from "../svg/HomeSVG";
import BlogSVG from "../svg/BlogSVG";
import GreetSVG from "../svg/GreetSVG";
import { CustomLink } from "./CustomLink";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="nav-header bg-base-300 backdrop-blur-md 
      border-b border-stone-700 rounded bg-opacity-90
      flex items-center justify-center sticky top-0 z-30 w-full pt-6 pb-6"
    >
      <Link
        className="btn btn-ghost relative md:absolute md:left-[5%] text-xl gap-0 cursor-pointer font-mono"
        href="/"
      >
        <CodeSymbolSVG />
        <Javiiccode />
      </Link>
      <div className="flex justify-center items-center">
        <nav className="flex items-center justify-around ">
          <ul className="nav-links gap-4">
            <li key="home">
              <CustomLink
                href="/"
                title="home"
                className="flex flex-row items-center justify-center"
                svg={<HomeSVG />}
              />
            </li>
            <li key="blog">
              <CustomLink
                href="/blog"
                title="blog"
                className="flex flex-row items-center justify-center"
                svg={<BlogSVG />}
              />
            </li>
            <li key="contact">
              <CustomLink
                href="/contact"
                title="say hello!"
                className="flex flex-row items-center justify-center"
                svg={<GreetSVG />}
              />
            </li>
          </ul>
          <button
            className={`burger absolute left-[7%] md:grid py-2 rounded-md ${
              isOpen
                ? "bg-base-content bg-opacity-30 border border-opacity-0"
                : ""
            }`}
            onClick={handleClick}
          >
            <div
              className={`line1 transition-all duration-300 ease-out bg-base-content ${
                isOpen ? "rotate-45 translate-y-[4px]" : "-translate-y-[2px]"
              }`}
            ></div>
            <div
              className={`line2 transition-all duration-300 ease-out bg-base-content ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></div>
            <div
              className={`line3 transition-all duration-300 ease-out bg-base-content ${
                isOpen ? "-rotate-45 -translate-y-[4px]" : "translate-y-[2px]"
              }`}
            ></div>
          </button>
        </nav>
      </div>
      <div className="absolute lg:right-[5%] right-[7%] text-xl gap-0 cursor-pointer">
        <ThemeSwitcher />
      </div>
      {/* <div className="absolute lg:right-[5%] right-[7%] text-xl gap-0 cursor-pointer bg-slate-100">
        <ToggleTheme />
      </div> */}
      {isOpen ? (
        <div
          className="absolute top-[73px] w-[100%] bg-base-300 border-stone-700
          block md:hidden border-b rounded-b-lg backdrop:blur-[2px] opacity-90"
        >
          <ul className="w-full flex flex-col items-center justify-center gap-3 my-3">
            <li key="home" onClick={handleClick}>
              <CustomLink
                href="/"
                title="home"
                className="flex flex-row items-center justify-center "
                svg={<HomeSVG />}
              />
            </li>
            <li key="blog" onClick={handleClick}>
              <CustomLink
                href="/blog"
                title="blog"
                className="flex flex-row items-center justify-center"
                svg={<BlogSVG />}
              />
            </li>
            <li key="contact" onClick={handleClick}>
              <CustomLink
                href="/contact"
                title="say hello!"
                className="flex flex-row items-center justify-center"
                svg={<GreetSVG />}
              />
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
};

export default NavBar;
