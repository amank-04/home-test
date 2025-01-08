// import { useEffect, useState } from "react";
import features from "../data/features.json";
import InfoCard from "./InfoCard";
import specialFeatures from "../data/specialFeatures.json";
import {
  TeamIcon,
  AnalyticsIcon,
  InovationIcon,
  MentorIcon,
  MindsetIcon,
  StrengthIcon,
  TechIcon,
  UsersIcon,
} from "../icons/specialFeatureIcons";
import { useEffect, useState } from "react";
import FeaturesGrid from "@/components/FeaturesGrid";

export default function FeaturesList() {
  return (
    <div className="px-8">
      {features.map((feature) => (
        <InfoCard key={feature.title} {...feature} />
      ))}
      <SpecialFeatures />
      <FeaturesGrid />
    </div>
  );
}

function SpecialFeatures() {
  const SpecialFeaturesIcon = [
    <TeamIcon />,
    <MentorIcon />,
    <AnalyticsIcon />,
    <TechIcon />,
    <UsersIcon />,
    <MindsetIcon />,
    <StrengthIcon />,
    <InovationIcon />,
  ];

  const [currentIndex, SetCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      SetCurrentIndex((idx) =>
        idx === specialFeatures.length - 3 ? idx : idx + 1,
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-8 border-t-2 border-main/80 p-7">
      <h2 className="border-l-[6px] border-main pl-3 text-3xl font-semibold text-white">
        What we are Special ?
      </h2>
      <div className="grid h-fit grid-flow-col gap-2 overflow-hidden">
        {specialFeatures.map(({ title, description }, index) => (
          <div
            key={index}
            className="group flex size-96 flex-col items-center space-y-5 border border-gray-600 from-[#BE0431] to-[#DE2234] p-10 transition-all duration-700 hover:bg-gradient-to-t"
            style={{
              translate: `-${100 * currentIndex + "%"}`,
            }}
          >
            {SpecialFeaturesIcon[index % SpecialFeaturesIcon.length]}

            <p className="font-semibold text-white">{title}</p>
            <p className="text-center text-white/60 group-hover:text-white">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
