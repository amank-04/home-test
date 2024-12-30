import {
  VRSupportedIcon,
  MultiDimensionIcon,
  ConsoleIcon,
  LocationIcon,
} from "../icons/TopFeaturesIcons";
import topFeatures from "../data/topFeatures.json";

export default function TopFeatures() {
  const Icons = [
    <VRSupportedIcon key="VRSupportedIcon" className="size-24" />,
    <MultiDimensionIcon key="MultiDimensionIcon" className="size-24" />,
    <ConsoleIcon key="ConsoleIcon" className="size-24" />,
    <LocationIcon key="LocationIcon" className="size-24" />,
  ];

  return (
    <div className="grid grid-cols-1 border-b border-l border-t border-white/20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {topFeatures.map(({ description, title }, index) => (
        <div
          key={index}
          className="flex flex-col items-center space-y-5 border-b border-white/20 px-12 py-16 text-center text-white md:border-r"
        >
          {Icons[index]}
          <h3 className="text-3xl font-bold uppercase">{title}</h3>
          <p className="text-lg text-[#BABABA]">{description}</p>
        </div>
      ))}
    </div>
  );
}
