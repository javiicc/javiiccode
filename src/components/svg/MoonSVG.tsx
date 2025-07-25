export default function MoonSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 col-start-2 row-start-1 stroke-base-100 fill-base-100"
      fill="none"
      viewBox="0 0 512 512"
      stroke="currentColor"
    >
      <defs>
        <linearGradient
          id="meteoconsFallingStarsFill0"
          x1="54.3"
          x2="187.2"
          y1="29"
          y2="259.1"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#86c3db" />
          <stop offset=".5" stop-color="#86c3db" />
          <stop offset="1" stop-color="#5eafcf" />
        </linearGradient>
        <linearGradient
          id="meteoconsFallingStarsFill1"
          x1="344.3"
          x2="375.7"
          y1="153.9"
          y2="208.3"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#fcd966" />
          <stop offset=".5" stop-color="#fcd966" />
          <stop offset="1" stop-color="#fccd34" />
        </linearGradient>
        <linearGradient
          id="meteoconsFallingStarsFill2"
          x1="294"
          x2="330"
          y1="112.8"
          y2="175.2"
          href="#meteoconsFallingStarsFill1"
        />
        <linearGradient
          id="meteoconsFallingStarsFill3"
          x1="356.3"
          x2="387.7"
          y1="194.8"
          y2="249.2"
          href="#meteoconsFallingStarsFill1"
        />
        <clipPath id="meteoconsFallingStarsFill4">
          <path fill="none" d="M512 27.5L240 189.1l16 48l40 32l216-96V27.5z" />
        </clipPath>
        <symbol id="meteoconsFallingStarsFill5" viewBox="0 0 270 270">
          <path
            fill="url(#meteoconsFallingStarsFill0)"
            stroke="#72b9d5"
            strokeLinecap="round"
            stroke-linejoin="round"
            strokeWidth="6"
            d="M252.3 168.6A133.4 133.4 0 0 1 118 36.2A130.5 130.5 0 0 1 122.5 3A133 133 0 0 0 3 134.6C3 207.7 63 267 137.2 267c62.5 0 114.8-42.2 129.8-99.2a135.6 135.6 0 0 1-14.8.8Z"
          >
            <animateTransform
              additive="sum"
              attributeName="transform"
              dur="6s"
              repeatCount="indefinite"
              type="rotate"
              values="-15 135 135; 9 135 135; -15 135 135"
            />
          </path>
        </symbol>
      </defs>
      <g clip-path="url(#meteoconsFallingStarsFill4)" opacity="0">
        <path
          fill="none"
          stroke="#fcd34d"
          strokeLinecap="round"
          stroke-miterlimit="10"
          strokeWidth="4"
          d="m332 193.1l-5.4 2.7"
        />
        <path
          fill="none"
          stroke="#fcd34d"
          stroke-dasharray="12.6 12.6"
          strokeLinecap="round"
          stroke-miterlimit="10"
          strokeWidth="4"
          d="M315.4 201.4L231 243.6"
        />
        <path
          fill="none"
          stroke="#fcd34d"
          strokeLinecap="round"
          stroke-miterlimit="10"
          strokeWidth="4"
          d="m225.4 246.4l-5.4 2.7"
        />
        <path
          fill="url(#meteoconsFallingStarsFill1)"
          stroke="#fcd34d"
          strokeLinecap="round"
          stroke-linejoin="round"
          strokeWidth="2"
          d="m329.1 165.3l18 18.3a1.8 1.8 0 0 1 .5 1.8l-6.5 24.9a1.8 1.8 0 0 0 3 1.7l18.4-18a1.8 1.8 0 0 1 1.7-.4l25 6.4a1.8 1.8 0 0 0 1.7-3l-18-18.4a1.8 1.8 0 0 1-.5-1.7l6.4-24.9a1.8 1.8 0 0 0-3-1.7l-18.3 18a1.8 1.8 0 0 1-1.7.4l-25-6.4a1.8 1.8 0 0 0-1.7 3Z"
        />
        <animateTransform
          id="meteoconsFallingStarsFill6"
          additive="sum"
          attributeName="transform"
          begin="0s; x1.end+2s"
          dur="1s"
          repeatCount="indefinite"
          type="translate"
          values="-126 48; 42 -30"
        />
        <animate
          id="meteoconsFallingStarsFill7"
          attributeName="opacity"
          begin="0s; y1.end+2s"
          calcMode="spline"
          dur="1s"
          keySplines=".42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1"
          keyTimes="0; .17; .67; 1"
          values="0; 1; 1; 0"
        />
      </g>
      <path
        fill="url(#meteoconsFallingStarsFill2)"
        stroke="#fcd34d"
        strokeLinecap="round"
        stroke-linejoin="round"
        strokeWidth="2"
        d="m282.8 162.8l25-6.4a1.8 1.8 0 0 1 1.7.5l18.3 18a1.8 1.8 0 0 0 3-1.7l-6.4-25a1.8 1.8 0 0 1 .5-1.7l18-18.4a1.8 1.8 0 0 0-1.8-3l-24.9 6.5a1.8 1.8 0 0 1-1.7-.5l-18.4-18a1.8 1.8 0 0 0-3 1.7l6.5 25a1.8 1.8 0 0 1-.5 1.7l-18 18.3a1.8 1.8 0 0 0 1.7 3Z"
      >
        <animateTransform
          additive="sum"
          attributeName="transform"
          calcMode="spline"
          dur="6s"
          keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
          repeatCount="indefinite"
          type="rotate"
          values="-15 312 144; 15 312 144; -15 312 144"
        />
        <animate
          attributeName="opacity"
          calcMode="spline"
          dur="6s"
          keySplines=".42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1"
          repeatCount="indefinite"
          values="1; .75; 1; .75; 1; .75; 1"
        />
      </path>
      <path
        fill="url(#meteoconsFallingStarsFill3)"
        stroke="#fcd34d"
        strokeLinecap="round"
        stroke-linejoin="round"
        strokeWidth="2"
        d="m337.3 223.7l24.8 7a1.8 1.8 0 0 1 1.3 1.2l6.9 24.8a1.8 1.8 0 0 0 3.4 0l7-24.8a1.8 1.8 0 0 1 1.2-1.3l24.8-6.9a1.8 1.8 0 0 0 0-3.4l-24.8-7a1.8 1.8 0 0 1-1.3-1.2l-6.9-24.8a1.8 1.8 0 0 0-3.4 0l-7 24.8a1.8 1.8 0 0 1-1.2 1.3l-24.8 6.9a1.8 1.8 0 0 0 0 3.4Z"
      >
        <animateTransform
          additive="sum"
          attributeName="transform"
          begin="-.67s"
          calcMode="spline"
          dur="6s"
          keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
          repeatCount="indefinite"
          type="rotate"
          values="-15 372 222; 15 372 222; -15 372 222"
        />
        <animate
          attributeName="opacity"
          begin="-.67s"
          calcMode="spline"
          dur="6s"
          keySplines=".42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1"
          repeatCount="indefinite"
          values="1; .75; 1; .75; 1; .75; 1"
        />
      </path>
      <use
        width="270"
        height="270"
        href="#meteoconsFallingStarsFill5"
        transform="translate(121 121)"
      />
    </svg>
  );
}
