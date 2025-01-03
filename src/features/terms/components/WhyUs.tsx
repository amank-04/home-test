import features from "../data/features.json";

type FeatureType = {
  title: string;
  description: string;
  subtitle: string;
};

export default function WhyUs() {
  return (
    <div className="text-primary-gray px-10">
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
      </div>
    </div>
  );
}

function Feature({ title, description, subtitle }: FeatureType) {
  return (
    <div className="space-x-4 border-t-2 border-main">
      <h3 className="min-h-36 py-5 text-center text-3xl font-bold uppercase tracking-widest">
        {title}
      </h3>

      <p className="font-semibold capitalize text-white">{subtitle}</p>
      <p className="text-primary-gray text-sm">{description}</p>
    </div>
  );
}
