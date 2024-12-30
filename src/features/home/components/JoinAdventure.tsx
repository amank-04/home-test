export default function JoinAdventure() {
  const data = [
    { value: "30K", title: "licensed games" },
    { value: "850+", title: "worldwide clients" },
    { value: "5M", title: "active users" },
    { value: "9/10", title: "5 star rating" },
  ];

  return (
    <div className="flex flex-col items-center border-x border-[#3B3D3A] py-20 xl:flex-row xl:space-x-14">
      {/* Left */}
      <div className="flex flex-1 flex-col items-center space-y-2 text-5xl font-bold uppercase text-[#3B3D3A]">
        <h3 className="">Leading Gaming</h3>
        <h3 className="">Hub</h3>
        <h3 className="text-[12rem]">2024</h3>
        <img
          src="https://wdtapexx.wpengine.com/wp-content/uploads/2024/05/Home-1-Section-2-02.jpg"
          alt="logo"
          className="z-10 object-cover"
          width={1000}
          height={1000}
        />
      </div>

      {/* Right */}
      <div className="flex-1 space-y-5 text-white">
        <p className="text-sm font-semibold uppercase text-main">
          Join the adventure
        </p>

        <h2 className="text-5xl font-bold uppercase">
          Welcome To Ultimate Gaming Destination
        </h2>

        <p className="font-semibold text-[#BABABA]">
          Risus pretium quam vulputate dignissim suspendisse in est ante in.
          Nullam non nisi est sit amet facilisis magna hac habitasse.
        </p>

        {/* Data */}
        <div className="grid grid-cols-2 border-b border-l border-[#3B3D3A]">
          {data.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col items-center space-y-2 border-r border-t border-[#3B3D3A] py-16"
            >
              <p className="text-7xl font-bold transition-colors duration-300 group-hover:text-main">
                {item.value}
              </p>
              <p className="font-semibold capitalize">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
