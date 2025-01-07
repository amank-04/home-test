import { useEffect, useState } from "react";
import problemsList from "../data/problemsData.json";
import {
  DoingWrongIcon,
  MultipleOptionsIcon,
  PuzzleIcon,
  StackIcon,
  ThoughtsIcon,
  TiredIcon,
  TryingHardIcon,
} from "../icons/ProblemsIcon";

export default function Problems() {
  const ProblemIcons = [
    <DoingWrongIcon color="#fff" />,
    <MultipleOptionsIcon color="#fff" />,
    <PuzzleIcon color="#fff" />,
    <StackIcon color="#fff" />,
    <ThoughtsIcon color="#fff" />,
    <TiredIcon />,
    <TryingHardIcon />,
  ];

  const [currentIndex, SetCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      SetCurrentIndex((idx) =>
        idx === problemsList.length - 3 ? idx : idx + 1,
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center">
      <h3 className="text-6xl font-bold uppercase tracking-[.4rem] text-white">
        problem we are solving
      </h3>
      <p className="text-2xl tracking-[.2rem] text-white">
        There is lot to solve, Wait !! We are getting there ...
      </p>
      <div className="mt-10 grid h-fit grid-flow-col gap-2 overflow-hidden py-5">
        {problemsList.map((problem, index) => (
          <div
            key={index}
            className="group flex size-64 flex-col items-center space-y-5 border border-gray-600 from-[#BE0431] to-[#DE2234] p-10 transition-all duration-700 hover:bg-gradient-to-t"
            style={{
              translate: `-${100 * currentIndex + "%"}`,
            }}
          >
            <p className="mx-auto">
              {ProblemIcons[index % ProblemIcons.length]}
            </p>
            <p className="text-center font-light text-white group-hover:font-normal">
              {problem}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
