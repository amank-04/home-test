import { useState } from "react";
import { InfiniteMovingTexts } from "./components/infinite-moving-texts";
import Hero from "./features/home/components/Hero";
import InstallNow from "./features/home/components/InstallNow";
import Slider from "./features/home/components/Slider";
import terms from "@/features/terms/data/termsData.json";
import Welcome from "./features/terms/components/Welcome";
import Hello from "./features/terms/components/Hello";
import Term from "./features/terms/components/Term";
import Button from "./components/Button";
import WhyUs from "./features/terms/components/WhyUs";
import Problems from "./features/home/components/Problems";

export default function App() {
  const [page, setPage] = useState<"home" | "terms">("home");
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
};

const TermsPage = () => {
  return (
    <div className="space-y-10 text-white">
      <Welcome />
      <Hello />
      <div className="md:pr-16">
        <div className="space-y-4 border-b border-primary-gray py-16 text-center tracking-widest">
          <h2 className="text-5xl font-bold uppercase">
            all in one esports tournament hosting
          </h2>
          <p className="text-sm capitalize text-primary-gray">
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
