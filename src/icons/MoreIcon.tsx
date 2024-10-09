import type { SVGProps } from "react";

export function MoreIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M16.59 8.59L12 13.17L7.41 8.59L6 10l6 6l6-6z"
      ></path>
    </svg>
  );
}
