import { cn } from "@/lib/utils";

export function VRSupportedIcon({
  className,
  color,
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      className={cn(className)}
      fill={color || "var(--main)"}
      viewBox="0 0 512 264.47"
    >
      <path d="M38.69 108.45c2.32-31.07 10.99-62.24 34.46-62.24h155.39V8.3c0-4.57 3.73-8.3 8.3-8.3h35.94c5.96 0 10.83 4.89 10.83 10.82v35.39h152.78c24.57 0 34.14 31.61 36.86 62.67-3.32-7.75-7.47-14.52-12.45-19.88-7.84-8.42-17.6-13.38-29.33-13.38H78.2c-11.25 0-20.62 5.09-28.13 13.73-4.51 5.19-8.3 11.69-11.38 19.1zm-9.49 27.58H14.6c-8.03 0-14.6 6.57-14.6 14.6v46.73c0 8.03 6.57 14.6 14.6 14.6h14.6c-4.56-31.89-4.72-57.43 0-75.93zm453.6 0h14.6c8.03 0 14.6 6.57 14.6 14.6v46.73c0 8.03-6.57 14.6-14.6 14.6h-14.6c4.56-31.89 4.72-57.43 0-75.93zM78.2 83.51h353.27c19.69 0 32.68 17.79 39.21 42.15 3.09 11.54 4.75 24.63 4.98 37.97.23 13.32-.97 26.87-3.57 39.39-6.29 30.31-20.89 54.78-43.61 56.19-18.74 1.17-37.59 2.15-56.51 2.94-19.62.82-39.59.87-59.1 1.93-7.08.45-24.03 1.19-26.07-7.05-6.26-25.35-9.38-38.39-18.21-45.9-8.63-7.33-17.51-6.62-25.55 1.11-8.51 8.17-10.35 21.1-14.03 42.3-1.96 11.33-22.66 10.19-31.26 9.57-19.72-1.22-40.19-1.17-60.07-2-19.04-.8-38-1.78-56.85-2.94-21.65-1.32-35.33-25.34-41.19-55.26-2.45-12.52-3.55-26.14-3.29-39.53.25-13.42 1.87-26.61 4.82-38.25 6.25-24.6 18.57-42.62 37.03-42.62zm7.9 13.17h337.48c53.6 0 51.24 145.82-3.15 149.38-37.57 2.46-67.29 3.93-104.87 4.72-5.21.11-19.45.66-20.94-4.92-21.61-80.58-62.35-66.35-73.47-2.29-1.34 7.75-20.59 7.31-26.57 7.18-37.85-.79-67.85-2.26-105.7-4.73-51.72-3.39-52.42-149.34-2.78-149.34zM245.17 23.4h20.78a4.38 4.38 0 0 1 4.37 4.37v17.64h-28.5V26.75c0-1.84 1.51-3.35 3.35-3.35zM175.9 51.72h160.35c1.28 0 2.33 1.05 2.33 2.33v6.61c0 1.28-1.05 2.33-2.33 2.33H175.9a2.34 2.34 0 0 1-2.34-2.33v-6.61a2.34 2.34 0 0 1 2.34-2.33z" />
    </svg>
  );
}

export function MultiDimensionIcon({
  className,
  color,
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      className={cn(className)}
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke={color || "var(--main)"}
        strokeMiterlimit="10"
        strokeWidth="1.92"
      >
        <polygon points="19.67 9.6 19.67 18.23 12 14.4 12 5.77 19.67 9.6" />
        <polygon points="12 5.77 12 14.4 4.33 18.23 4.33 9.6 12 5.77" />
        <polygon points="19.67 18.23 12 22.06 4.33 18.23 12 14.4 19.67 18.23" />
        <line x1="0.5" y1="20.15" x2="8.17" y2="16.31" />
        <line x1="23.5" y1="20.15" x2="15.83" y2="16.31" />
        <line x1="12" y1="1.94" x2="12" y2="5.77" />
      </g>
    </svg>
  );
}

export function ConsoleIcon({
  className,
  color,
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn(className)}
      fill={color || "var(--main)"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 4C16 5.86658 14.7215 7.43455 12.9924 7.87594C12.9974 7.91659 13 7.95799 13 8V9.7973C13.0054 9.79921 13.0108 9.80113 13.0162 9.80307L20.1604 12.375C21.4569 12.8418 22.0701 14.0289 22 15.177V18.5585C22 19.8498 21.1737 20.9962 19.9487 21.4045L12.9487 23.7379C12.3329 23.9431 11.6671 23.9431 11.0513 23.7379L4.05132 21.4045C2.82629 20.9962 2 19.8498 2 18.5585V15.1769C1.92995 14.0287 2.54315 12.8417 3.83959 12.375L10.9838 9.80307C10.9892 9.80113 10.9946 9.79921 11 9.79731V8C11 7.95799 11.0026 7.91659 11.0076 7.87594C9.27853 7.43455 8 5.86658 8 4C8 1.79086 9.79086 0 12 0C14.2091 0 16 1.79086 16 4ZM11 11.9229L4.51703 14.2568C4.16878 14.3821 3.99464 14.6911 3.99461 15H4C4 15.3341 4.19728 15.6283 4.51702 15.7434L11.6613 18.3153C11.8802 18.3941 12.1198 18.3941 12.3387 18.3153L19.483 15.7434C19.8027 15.6283 20 15.3341 20 15H20.0054C20.0054 14.6911 19.8312 14.3821 19.483 14.2568L13 11.9229V15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15V11.9229ZM9.98005 4C9.98005 5.11559 10.8844 6.01995 12 6.01995C13.1156 6.01995 14.0199 5.11559 14.0199 4C14.0199 2.88441 13.1156 1.98005 12 1.98005C10.8844 1.98005 9.98005 2.88441 9.98005 4ZM4 18.5585V17.6829L10.9838 20.1971C11.6407 20.4335 12.3594 20.4335 13.0162 20.1971L20 17.6829V18.5585C20 18.9889 19.7246 19.3711 19.3162 19.5072L12.3162 21.8405C12.111 21.9089 11.889 21.9089 11.6838 21.8405L4.68377 19.5072C4.27543 19.3711 4 18.9889 4 18.5585Z"
          fill={color || "var(--main)"}
        ></path>{" "}
      </g>
    </svg>
  );
}

export function LocationIcon({
  className,
  color,
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      fill={color || "var(--main)"}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <defs>
          <style>
            {`.cls-1{fill:none;stroke:${color || "var(--main)"};stroke-miterlimit:10;stroke-width:1.95px;}.cls-2{fill:${color || "var(--main)"};}`}
          </style>
        </defs>
        <path
          className="cls-1"
          d="M15.91,11h4.88a2,2,0,0,1,2,2v7.81a2,2,0,0,1-2,2H14.93l-1.42-2.12a1.81,1.81,0,0,0-3,0L9.07,22.75H3.21a2,2,0,0,1-2-2V13a2,2,0,0,1,2-2H8.09"
        ></path>
        <line
          className="cls-1"
          x1="4.18"
          y1="14.93"
          x2="6.14"
          y2="14.93"
        ></line>
        <line
          className="cls-1"
          x1="4.18"
          y1="18.84"
          x2="6.14"
          y2="18.84"
        ></line>
        <path
          className="cls-1"
          d="M15.91,5.16C15.91,8.09,12,11,12,11S8.09,8.09,8.09,5.16a3.91,3.91,0,0,1,7.82,0Z"
        ></path>
        <circle className="cls-2" cx="12" cy="5.16" r="0.98"></circle>
      </g>
    </svg>
  );
}