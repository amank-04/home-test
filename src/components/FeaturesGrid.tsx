import features from "../data/features.json";

type FeatureType = {
  title: string;
  description: string;
  subtitle: string;
};

export default function FeaturesGrid() {
  const extra = {
    subtitle: "Our vision",
    description:
      "Our vision to host your brand with the biggest, greatest, and Fastest Esports Tournament at world class level.",
  };

  return (
    <div className="mt-5 border-t-2 border-main/80 p-7">
      <h2 className="border-l-[6px] border-main pl-3 text-3xl font-semibold text-white">
        Our Mission
      </h2>

      <div className="mt-5 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {features.map((feature) => (
          <Feature key={feature.title} {...feature} />
        ))}
        <div className="space-y-2 border border-gray-600 from-[#BE0431] to-[#DE2234] p-10 text-center text-primary-gray hover:bg-gradient-to-t hover:text-white">
          <h3 className="py-2 text-center align-middle text-3xl font-bold uppercase tracking-widest">
            <p>biggest</p>
            <p>greatest</p>
            <p>fastest</p>
          </h3>

          <p className="font-semibold capitalize text-white">
            {extra.subtitle}
          </p>
          <p className="text-sm">{extra.description}</p>
        </div>
      </div>
    </div>
  );
}

function Feature({ title, description, subtitle }: FeatureType) {
  return (
    <div className="space-y-2 border border-gray-600 from-[#BE0431] to-[#DE2234] p-10 text-center text-primary-gray hover:bg-gradient-to-t hover:text-white">
      <h3 className="py-5 text-center align-middle text-6xl font-bold uppercase tracking-widest">
        {title}
      </h3>

      <p className="font-semibold capitalize text-white">{subtitle}</p>
      <p className="text-sm">{description}</p>
    </div>
  );
}
