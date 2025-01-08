import helloBanner from "../images/hello-banner.png";

export default function Hello() {
  return (
    <div className="p-6 font-sans text-white">
      <div className="flex flex-col items-center lg:flex-row lg:items-start">
        {/* Image */}
        <div className="pl-6 lg:w-1/2">
          <img
            src={helloBanner}
            alt="Virtual Stadium"
            className="w-full rounded-lg shadow-lg lg:w-4/5"
          />
        </div>
        {/* Text Content */}
        <div className="space-y-4 p-6 lg:w-1/2">
          <h1 className="text-4xl font-bold">We GAMERS TAG</h1>
          <h2 className="text-2xl font-semibold">PRIVATE LIMITED INDIA</h2>
          <p className="leading-relaxed tracking-widest text-gray-300">
            We are Gamers Tag, a vibrant startup founded in 2021 in the
            beautiful city of Kochi, Kerala, India. Dedicated to transforming
            the gaming and esports industry, we are fueled by the passion of
            gamers and guided by the expertise of experienced leaders and top
            talent from across the globe. Together with our community, we are
            shaping the future of gaming through innovation, excellence, and a
            shared vision for greatness.
          </p>
        </div>
      </div>
    </div>
  );
}
