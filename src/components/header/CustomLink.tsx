import "./navigation.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const CustomLink = ({
  href,
  title,
  className,
}: {
  href: string;
  title: string;
  className: string;
}) => {
  const pathname = usePathname();

  // console.log("pathname", pathname);
  // console.log("href", href);

  return (
    <Link href={href} className={`${className} relative group py-1 px-3`}>
      <span
        className={` hover:transition-all ${
          pathname === href ||
          (pathname.includes("blog") && href.includes("blog")) ||
          (pathname.includes("thanks") && href.includes("contact")) ||
          (pathname.includes("search") && href.includes("blog"))
            ? "font-bold text-picton-blue brightness-120 "
            : "font-[500] text-slate-200 opacity-80 brightness-120 hover:opacity-100 hover:brightness-200"
        } `}
      >
        {title}
      </span>
      <span
        className={`navbar-btn-effect absolute top-0 left-0 w-[100%] h-[100%] z-[-1] 
      border-b-2 border-b-picton-blue rounded-xl ${
        pathname === href ||
        (pathname.includes("blog") && href.includes("blog")) ||
        (pathname.includes("thanks") && href.includes("contact")) ||
        (pathname.includes("search") && href.includes("blog"))
          ? "navbar-btn-focused"
          : ""
      }`}
      ></span>
    </Link>
  );
};
