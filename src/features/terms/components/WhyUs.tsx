import features from "../data/features.json";

type FeatureType = {
  title: string;
  description: string;
  subtitle: string;
};

export default function WhyUs() {
  const extra = {
    subtitle: "Our vision",
    description:
      "Our vision to host your brand with the biggest, greatest, and Fastest Esports Tournament at world class level.",
  };

  return (
    <div className="px-10 text-primary-gray">
      <div className="-space-y-1">
        <p className="h-2.5 w-24 rounded-full bg-main" />
        <p className="h-1 w-52 bg-main" />
      </div>
      <p className="p-3 text-3xl">
        <span className="font-bold text-white">Why</span>
        <span> us ?</span>
      </p>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {features.map((feature) => (
          <Feature key={feature.title} {...feature} />
        ))}
        <div className="space-y-2 border-t-2 border-main text-center">
          <h3 className="py-2 text-center align-middle text-3xl font-bold uppercase tracking-widest">
            <p>biggest</p>
            <p>greatest</p>
            <p>fastest</p>
          </h3>

          <p className="font-semibold capitalize text-white">
            {extra.subtitle}
          </p>
          <p className="text-sm text-primary-gray">{extra.description}</p>
        </div>
      </div>
    </div>
  );
}

function Feature({ title, description, subtitle }: FeatureType) {
  return (
    <div className="space-y-2 border-t-2 border-main text-center">
      <h3 className="py-5 text-center align-middle text-6xl font-bold uppercase tracking-widest">
        {title}
      </h3>

      <p className="font-semibold capitalize text-white">{subtitle}</p>
      <p className="text-sm text-primary-gray">{description}</p>
    </div>
  );
}
