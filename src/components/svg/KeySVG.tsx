export const NavigateSVG = () => {
  return (
    <svg
      className="h-5 w-5 icon flat-line"
      fill="currentColor"
      viewBox="0 0 24 24"
      id="up-down-arrow"
      data-name="Flat Line"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polyline
        id="primary"
        points="11 7 8 4 5 7"
        // style="fill: none;
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></polyline>
      <polyline
        id="primary-2"
        data-name="primary"
        points="13 17 16 20 19 17"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></polyline>
      <path
        id="primary-3"
        data-name="primary"
        d="M8,20V4m8,0V20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></path>
    </svg>
  );
};

export const EnterSVG = ({
  color,
  className,
}: {
  color: string;
  className: string;
}) => {
  return (
    <svg
      className={`h-5 w-5 ${className}`}
      fill={`${color}`}
      viewBox="0 0 24 24"
      id="up-down-arrow"
      data-name="Flat Line"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />

      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        {" "}
        <title>ic_fluent_arrow_enter_24_filled</title>{" "}
        <desc>Created with Sketch.</desc>{" "}
        <g
          id="🔍-System-Icons"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          {" "}
          <g
            id="ic_fluent_arrow_enter_24_filled"
            fill={`${color}`}
            fillRule="nonzero"
          >
            {" "}
            <path
              d="M21,4 C21.5128358,4 21.9355072,4.38604019 21.9932723,4.88337887 L22,5 L22,11.5 C22,13.3685634 20.5357224,14.8951264 18.6920352,14.9948211 L18.5,15 L5.415,15 L8.70710678,18.2928932 C9.06759074,18.6533772 9.09532028,19.2206082 8.79029539,19.6128994 L8.70710678,19.7071068 C8.34662282,20.0675907 7.77939176,20.0953203 7.38710056,19.7902954 L7.29289322,19.7071068 L2.29289322,14.7071068 C2.25749917,14.6717127 2.22531295,14.6343256 2.19633458,14.5953066 L2.12467117,14.4840621 L2.12467117,14.4840621 L2.07122549,14.371336 L2.07122549,14.371336 L2.03584514,14.265993 L2.03584514,14.265993 L2.0110178,14.1484669 L2.0110178,14.1484669 L2.00397748,14.0898018 L2.00397748,14.0898018 L2,14 L2.00278786,13.9247615 L2.00278786,13.9247615 L2.02024007,13.7992742 L2.02024007,13.7992742 L2.04973809,13.6878575 L2.04973809,13.6878575 L2.09367336,13.5767785 L2.09367336,13.5767785 L2.14599545,13.4792912 L2.14599545,13.4792912 L2.20970461,13.3871006 L2.20970461,13.3871006 L2.29289322,13.2928932 L2.29289322,13.2928932 L7.29289322,8.29289322 C7.68341751,7.90236893 8.31658249,7.90236893 8.70710678,8.29289322 C9.06759074,8.65337718 9.09532028,9.22060824 8.79029539,9.61289944 L8.70710678,9.70710678 L5.415,13 L18.5,13 C19.2796961,13 19.9204487,12.4051119 19.9931334,11.64446 L20,11.5 L20,5 C20,4.44771525 20.4477153,4 21,4 Z"
              id="🎨-Color"
            >
              {" "}
            </path>{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>
  );
};
