import { useRef, useEffect } from "react";

const ClickOutsideDetector = ({
  children,
  onOutsideClick,
}: {
  children: any;
  onOutsideClick: any;
}) => {
  const wrapperRef = useRef<any>(null);

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        onOutsideClick();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [onOutsideClick]);

  return (
    <div className="w-full flex flex-col items-center" ref={wrapperRef}>
      {children}
    </div>
  );
};

export default ClickOutsideDetector;
