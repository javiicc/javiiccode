const InfoButton = ({
  className,
  buttonText,
  setAboutContent,
  svg,
}: {
  className: string;
  buttonText: string;
  setAboutContent: any;
  svg: any;
}) => {
  return (
    <button
      className={`py-4 lg:pl-[55px] md:pl-[65px] pl-[50px] w-[100%] ${className}
      flex items-center justify-start rounded-xl
      hover:btn-focus-class hover:cursor-pointer`}
      // hover:btn-focus-class hover:border
      onClick={() => setAboutContent(buttonText)}
    >
      <span className="">self.</span>
      <span className="class-method">{buttonText}</span>
      <span className="class-method-par">(</span>
      {svg}
      <span className="class-method-par">)</span>
    </button>
  );
};
export default InfoButton;
