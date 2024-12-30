import Button from "@/components/Button";
export default function InstallNow() {
  return (
    <div className="relative w-screen text-white">
      <img
        src="https://wdtapexx.wpengine.com/wp-content/uploads/2024/05/Home-1-Services-02.jpg"
        className="aspect-video h-[33rem] w-full object-cover"
      />

      <h2 className="absolute top-5 w-full text-center text-6xl font-bold capitalize">
        share your testimonIAL
      </h2>

      <div className="absolute right-10 top-1/4 w-1/3 space-y-4">
        <h2 className="text-sm font-semibold uppercase text-main">
          install now
        </h2>
        <h2 className="text-5xl font-bold uppercase">
          get our app now & play like a pro
        </h2>
        <h4 className="font-semibold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
          repellendus aut ullam! Saepe, dolor.
        </h4>
        <Button>Google Play</Button>
        <Button>App Store</Button>
      </div>
    </div>
  );
}
