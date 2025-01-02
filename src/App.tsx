import { InfiniteMovingTexts } from "./components/infinite-moving-texts";
import Hero from "./features/home/components/Hero";
import InstallNow from "./features/home/components/InstallNow";
import JoinAdventure from "./features/home/components/JoinAdventure";
import Slider from "./features/home/components/Slider";
import TopFeatures from "./features/home/components/TopFeatures";
import WeAreUnique from "./features/home/components/WeAreUnique";

export default function App() {
  return (
    <div className="space-y-10">
      <Slider />
      <Hero />
      <InfiniteMovingTexts
        className="z-10 cursor-pointer border border-[#3B3D3A]"
        items={[{ title: "Realistic Game Graphics" }]}
        direction="left"
        speed="slow"
        showIcon
        pauseOnHover
      />
      <JoinAdventure />
      <TopFeatures />
      <WeAreUnique />`
      <InstallNow />
    </div>
  );
}
