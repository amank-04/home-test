import { cn } from "@/lib/utils";

export default function FlowerIcon({
  className,
  color,
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      fill={color ?? "var(--main)"}
      className={cn(className)}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 128 128"
      xmlSpace="preserve"
      stroke={color ?? "var(--main)"}
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path d="M98.3,68.4l-0.2,0l-16.5-4.4l15.6-3.6l1.1-0.1c0,0,16.7-3.5,14.3-16.3c-0.3-1.9-1.1-3.9-2.3-6.1c-10-18.1-25.3-1.1-25.3-1.1 l-0.5,0.6L72.9,48.9l5-16.5c0,0,6.9-21.1-13.4-21.5c-0.1,0-0.2,0-0.3,0c-0.1,0-0.1,0-0.1,0c-20.7-0.4-13.5,21.3-13.5,21.3L55.1,49 L43.6,36.7l-0.3-0.3c0,0-8.4-9.3-17-6.6c-2.9,0.9-5.8,3.1-8.4,7.4C7.3,54.9,29.7,59.6,29.7,59.6l0.2,0l16.5,4.4l-15.7,3.6l-1.1,0.1 c0,0-16.7,3.5-14.3,16.3c0.3,1.8,1.1,3.9,2.3,6.1c10,18.1,25.3,1.1,25.3,1.1l0.4-0.6l11.7-11.7l-5,16.4c0,0-6.9,21.1,13.4,21.5 c0.1,0,0.2,0,0.3,0c0,0,0.1,0,0.1,0c20.7,0.4,13.6-21.4,13.6-21.4L72.9,79l11.4,12.2l0.3,0.4c0,0,7.1,7.8,14.9,7.1 c3.6-0.3,7.3-2.4,10.5-7.9C120.7,73.1,98.3,68.4,98.3,68.4"></path>{" "}
      </g>
    </svg>
  );
}
