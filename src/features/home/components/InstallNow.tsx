export default function InstallNow() {
  const leftPhone =
    "https://wdtapexx.wpengine.com/wp-content/uploads/2024/05/apps-mob-02.png";
  const rightPhone =
    "https://wdtapexx.wpengine.com/wp-content/uploads/2024/05/apps-mob-01.png";

  const background =
    "https://wdtapexx.wpengine.com/wp-content/uploads/2024/05/Home-1-Services-02.jpg";

  return (
    <div
      className="relative aspect-video max-h-screen w-screen overflow-hidden bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Right */}
      <div className="absolute right-10 top-1/4 w-[35%] space-y-4">
        <h2 className="text-5xl font-bold uppercase">
          welcome to super gaming app
        </h2>
        <h4>
          welcome to the Biggest and best gaming platform in the world, this
          platform is build by one of the leading talented team. This app
          provides some of the unique gaming and esports features for each
          stakeholders.
        </h4>
        <div className="flex items-center space-x-5">
          <img
            src="https://wdtapexx.wpengine.com/wp-content/uploads/2024/05/Google-play.png"
            alt="Google Play"
            width={150}
            height={150}
          />

          <img
            src="https://wdtapexx.wpengine.com/wp-content/uploads/2024/05/App-store.png"
            alt="App Store"
            width={135}
            height={135}
          />
        </div>
      </div>

      {/* Left */}
      <div className="absoulte flex aspect-square size-[35rem] translate-x-1/3 translate-y-1/2">
        <img src={leftPhone} alt="left-phone-image" className="z-10" />
        <img
          src={rightPhone}
          className="-translate-x-20 translate-y-[15%]"
          alt="right-phone-image"
        />
      </div>
    </div>
  );
}
