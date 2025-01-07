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

  return (
    <div className="grid h-fit grid-flow-col gap-2 overflow-scroll py-5">
      {problemsList.map((problem, index) => (
        <div
          key={index}
          className="flex size-64 flex-col items-center space-y-5 border border-gray-600 from-[#BE0431] to-[#DE2234] p-10 hover:bg-gradient-to-t"
        >
          <p className="mx-auto">{ProblemIcons[index % ProblemIcons.length]}</p>
          <p className="text-center text-white">{problem}</p>
        </div>
      ))}
    </div>
  );
}
