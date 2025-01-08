import { useState } from "react";
import HomePage from "./features/home/Home";
import TermsPage from "./features/terms/TermsPage";
import AboutUsPage from "./features/about-us/AboutUsPage";

export default function App() {
  const [page, setPage] = useState<"home" | "terms" | "about">("about");
  const togglePage = () =>
    setPage(() =>
      page === "home" ? "terms" : page === "terms" ? "about" : "home",
    );

  return (
    <div className="">
      <button
        className="absolute left-1/3 top-3 z-20 font-bold uppercase text-main"
        onClick={togglePage}
      >
        {page}
      </button>
      {page === "home" ? (
        <HomePage />
      ) : page === "terms" ? (
        <TermsPage />
      ) : (
        <AboutUsPage />
      )}
    </div>
  );
}
