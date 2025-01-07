"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingTexts = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  showIcon = false,
  useBorderedText = false,
  className,
}: {
  items: {
    quote?: string;
    name?: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  showIcon?: boolean;
  useBorderedText?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn("scroller relative z-20 w-full overflow-hidden", className)}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <React.Fragment key={idx}>
            <li
              className={`relative rounded-2xl border-slate-700 ${
                !useBorderedText && "px-4"
              }`}
              key={item.title}
            >
              <blockquote>
                <div
                  aria-hidden="true"
                  className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                ></div>
                <span className="relative z-20 text-sm font-normal leading-[1.6] text-gray-100">
                  {item.quote}
                </span>
                <div className="relative z-20 flex items-center">
                  <span className="mb-2 flex flex-col items-center justify-center">
                    <span className="text-sm font-normal leading-[1.6] text-gray-400">
                      {item.name}
                    </span>
                    <span
                      className={cn(
                        "text-4xl font-semibold text-primary-gray md:text-5xl lg:text-7xl",
                        "space-x-10",
                        useBorderedText
                          ? "border-1 mr-2 rounded-full border border-solid border-white border-opacity-20 px-12 py-5 text-3xl md:text-5xl lg:text-7xl"
                          : "",
                      )}
                    >
                      {item.title}
                    </span>
                  </span>
                </div>
              </blockquote>
            </li>

            {idx !== items.length * 2 - 1 && showIcon && (
              <li className="flex items-center">
                <img src="/logo.svg" alt="star" className="z-10 size-24" />
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};
