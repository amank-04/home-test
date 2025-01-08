import FeaturesGrid from "@/components/FeaturesGrid";

export default function WhyUs() {
  return (
    <div className="px-10 text-primary-gray">
      <div className="-space-y-1">
        <p className="h-2.5 w-24 rounded-full bg-[#AC101A]" />
        <p className="h-1 w-52 translate-x-1 bg-[#AC101A]" />
      </div>
      <p className="p-3 text-3xl">
        <span className="font-bold text-white">Why</span>
        <span> us ?</span>
      </p>
      <FeaturesGrid />
    </div>
  );
}
