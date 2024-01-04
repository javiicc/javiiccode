import "./navigation.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const CustomLink = ({
  href,
  title,
  className,
  svg,
}: {
  href: string;
  title: string;
  className: string;
  svg: any;
}) => {
  const pathname = usePathname();

  // console.log("pathname", pathname);
  // console.log("href", href);

  return (
    <div className="w-full mx-1 youtube-btn before:bg-base-300 relative rounded-[10px] before:content-[''] before:absolute before:inset-[0px] before:rounded-[8px] before:duration-[0ms] hover:before:opacity-80">
      <Link
        href={href}
        className={`${className} relative group p-[2px] gap-1 rounded-[10px]
      
      ${
        // hover:bg-emerald-200 hover:bg-opacity-20
        pathname === href ||
        (pathname.includes("blog") && href.includes("blog")) ||
        (pathname.includes("thanks") && href.includes("contact")) ||
        (pathname.includes("search") && href.includes("blog"))
          ? ""
          : ""
        // bg-slate-500 bg-opacity-30
        // ? "font-bold text-picton-blue brightness-120 "
        // : "font-[500] text-slate-200 opacity-80 brightness-120 hover:opacity-100 hover:brightness-200"
      }`}
      >
        {svg}
        <span
          className={`hover:transition-all flex items-center justify-center mt-1`}
          // ${
          //   pathname === href ||
          //   (pathname.includes("blog") && href.includes("blog")) ||
          //   (pathname.includes("thanks") && href.includes("contact")) ||
          //   (pathname.includes("search") && href.includes("blog"))
          //     ? ""
          //     : ""
          //   // ? "font-bold text-picton-blue brightness-120 "
          //   // : "font-[500] text-slate-200 opacity-80 brightness-120 hover:opacity-100 hover:brightness-200"
          // }
        >
          {title}
        </span>
        {/* <span
        className={`navbar-btn-effect absolute top-0 left-0 w-[100%] h-[100%] z-[-1] 
        border-b-2 border-b-picton-blue rounded-xl ${
          pathname === href ||
          (pathname.includes("blog") && href.includes("blog")) ||
          (pathname.includes("thanks") && href.includes("contact")) ||
          (pathname.includes("search") && href.includes("blog"))
            ? "navbar-btn-focused"
            : ""
        }`}
      ></span> */}
      </Link>
    </div>
  );
};
