import Problems from "@/features/home/components/Problems";
import { InfiniteMovingTexts } from "@/components/infinite-moving-texts";
import Hero from "@/features/home/components/Hero";
import InstallNow from "@/features/home/components/InstallNow";
import Slider from "@/features/home/components/Slider";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <Slider />
      <Hero />
      <Problems />
      <InfiniteMovingTexts
        className="z-10 cursor-pointer border border-[#3B3D3A]"
        items={[{ title: "GAMERS TAG" }]}
        direction="left"
        speed="slow"
        showIcon
        pauseOnHover
      />
      {/* <JoinAdventure /> */}
      {/* <TopFeatures /> */}
      {/* <WeAreUnique /> */}
      <InstallNow />
    </div>
  );
}
