import { useState } from "react";
import { InfiniteMovingTexts } from "./components/infinite-moving-texts";
import Hero from "./features/home/components/Hero";
import InstallNow from "./features/home/components/InstallNow";
import JoinAdventure from "./features/home/components/JoinAdventure";
import Slider from "./features/home/components/Slider";
import TopFeatures from "./features/home/components/TopFeatures";
import WeAreUnique from "./features/home/components/WeAreUnique";
import terms from "@/features/terms/data/termsData.json";
import Welcome from "./features/terms/components/Welcome";
import Hello from "./features/terms/components/Hello";
import Term from "./features/terms/components/Term";
import Button from "./components/Button";
import WhyUs from "./features/terms/components/WhyUs";

export default function App() {
  const [page, setPage] = useState<"home" | "terms">("terms");
  const togglePage = () => setPage(() => (page === "home" ? "terms" : "home"));

  return (
    <div className="">
      <button
        className="absolute left-1/3 top-3 z-20 font-bold uppercase text-main"
        onClick={togglePage}
      >
        {page}
      </button>
      {page === "home" ? <HomePage /> : <TermsPage />}
    </div>
  );
}

const HomePage = () => {
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
};

const TermsPage = () => {
  return (
    <div className="space-y-5 text-white">
      <Welcome />
      <Hello />
      <div className="pr-16">
        <div className="border-primary-gray space-y-4 border-b py-16 text-center tracking-widest">
          <h2 className="text-5xl font-bold uppercase">
            all in one esports tournament hosting
          </h2>
          <p className="text-primary-gray text-sm capitalize">
            " why juggle multiple platforms when you can do it all in one ?
            welcome to the future of laziness "
          </p>
          <Button>host now</Button>
          <Button>we host for you</Button>
        </div>
        {terms.map(({ section, title, description }) => (
          <Term
            key={section}
            section={section}
            title={title}
            description={description}
          />
        ))}{" "}
      </div>

      <WhyUs />
    </div>
  );
};
