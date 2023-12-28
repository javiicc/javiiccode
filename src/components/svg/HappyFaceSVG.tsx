export default function BlogSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7"
      fill="currentColor"
      viewBox="0 0 21 21"
    >
      <g fill="none" fillRule="evenodd" transform="translate(2 2)">
        <circle
          cx="8.5"
          cy="8.5"
          r="8"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="6" cy="6" r="1" fill="currentColor" />
        <circle cx="11" cy="6" r="1" fill="currentColor" />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.5 9.5c.603 1.333 1.603 2 3 2s2.397-.667 3-2"
        />
      </g>
    </svg>
  );
}
