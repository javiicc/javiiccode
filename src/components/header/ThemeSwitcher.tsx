"use client";

import { useState, useEffect } from "react";
import { getThemeFromLocalStorage } from "@/lib/helpers/localStorage";
import { useTheme } from "next-themes";
import SunSVG from "../svg/SunAndMoon";
import MoonSVG from "../svg/MoonSVG";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // ----------------------------------------------------------------
  // DOCS
  // 1. mounted = False
  // 2. theme = undefined

  // 1. Set mounted true when ThemeSwitcher is rendered
  // 2. checked = false or true depending on initial theme !?!

  // 1. onClick set theme = dark if checked = true, else theme = light
  // ----------------------------------------------------------------

  useEffect(() => {
    setMounted(true);
    let localTheme = getThemeFromLocalStorage();
    setTheme(localTheme);
  }, [setTheme, theme]);

  // if (!mounted) {
  //   return <div>...</div>;
  // }

  const handleToggle = (e: any) => {
    // console.log(`theme bf : ${theme}`);

    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // https://blog.stackademic.com/how-to-implement-light-dark-theme-in-nextjs-98ac7be7de90

  return (
    <div>
      <label className="cursor-pointer grid place-items-center">
        <input
          type="checkbox"
          value="synthwave"
          className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
          onChange={handleToggle}
          checked={theme === "light" ? false : true}
        />
        <svg
          className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
        </svg>
        {/* <SunSVG className="col-start-1 row-start-1 stroke-base-100 fill-base-100" /> */}
        <svg
          className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
        {/* <MoonSVG /> */}
      </label>
    </div>
  );
};

export default ThemeSwitcher;
