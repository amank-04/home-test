import helloBanner from "@/assets/images/hello-banner.png";
export default function Hello() {
  return (
    <div className="p-6 font-sans text-white">
      <div className="flex flex-col items-center md:flex-row md:items-start">
        {/* Image */}
        <div className="p-6 md:w-1/2">
          <img
            src={helloBanner}
            alt="Virtual Stadium"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        {/* Text Content */}
        <div className="space-y-4 p-6 md:w-1/2">
          <h1 className="text-4xl font-bold">Hello!</h1>
          <h2 className="text-2xl font-semibold">
            Brand, College University or Organization
          </h2>
          <p className="leading-relaxed tracking-widest text-gray-300">
            Looking for a the best way to attract gamers for your brand ? Build
            a World-class virtual stadium to hosting professional esports
            tournaments effortlessly with
            <span className="font-semibold text-white">
              {" "}
              GAMERS TAG’s Pro SaaS Esports Tournament hosting.{" "}
            </span>
            Meet one of the world’s best esports tournament hosting platforms,
            this advanced SaaS features Host you end-to-end tournaments
            seamlessly, ensuring that every participant experiences the thrill
            of competition in a virtual stadium tailored just for them. You’ve
            got the warriors and hunters, and we bring you the ultimate
            battleground for your organization. Picture the whole world in your
            virtual stadium, united with tailored features for every
            stakeholders such as creators, organizers, streamers, esports
            athletes, gamers, sponsors, fans, and public users.
          </p>
        </div>
      </div>
    </div>
  );
}
