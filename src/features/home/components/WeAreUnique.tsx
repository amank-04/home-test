import Button from "@/components/Button";
import FlowerIcon from "../icons/Icons";
import { ConsoleIcon, VRSupportedIcon } from "../icons/TopFeaturesIcons";

export default function WeAreUnique() {
  const Icons = [
    <VRSupportedIcon key="VRSupportedIcon" className="size-16" />,
    <ConsoleIcon key="ConsoleIcon" className="size-16" />,
  ];

  const features = [
    { title: "visual asthetics", description: "gdsg dgsdg gsdg hthhfdh" },
    { title: "enhanced sound", description: "gdsg dgsdg gsdg hthhfdh" },
  ];

  const highlights = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "Lorem ipsum dolor sit amet consectetur",
    "eius qui cum provident ad in? Repudiandae",
  ];

  const leftImage =
    "https://wdtapexx.wpengine.com/wp-content/uploads/2024/05/left-filler-img-01.jpg";
  const rightImage =
    "https://wdtapexx.wpengine.com/wp-content/uploads/2024/05/left-filler-img-02.jpg";

  return (
    <div className="flex flex-col-reverse items-center space-x-16 px-10 text-right lg:flex-row">
      {/* Left Part */}
      <div className="space-y-5 text-sm font-semibold uppercase text-white">
        <h2 className="text-main">how we are unique</h2>
        <h3 className="text-5xl font-bold">Lorem ipsum dolor consectetur</h3>
        <p className="text-xs capitalize text-[#ACAEAB]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          soluta nostrum eveniet dolores mollitia ut vitae, eius qui cum
          provident ad in? Repudiandae, consectetur est illum deserunt facilis
          velit officiis.
        </p>
        <div className="flex items-end justify-between space-x-5 py-5">
          {features.map(({ description, title }, index) => (
            <div className="flex flex-col items-end space-y-2">
              {Icons[index]}
              <h3 className="text-2xl font-bold">{title}</h3>
              <p className="text-xs capitalize text-[#ACAEAB]">{description}</p>
            </div>
          ))}
        </div>

        <ul className="space-y-4">
          {highlights.map((highlight) => (
            <li className="flex justify-end space-x-2 text-xs capitalize">
              <span>{highlight}</span>
              <FlowerIcon className="size-5" />
            </li>
          ))}
          <li />
        </ul>

        <Button>download now</Button>
        <Button>contact us</Button>
      </div>

      {/* Right Part */}
      <div className="flex w-full items-center justify-center space-x-5">
        <img className="w-1/2" src={leftImage} alt="left-image" />
        <img className="w-1/2" src={rightImage} alt="right-image" />{" "}
      </div>
    </div>
  );
}
