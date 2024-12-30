import footerspans from "@/data/footerLinks.json";
import {
  DiscordLogoIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="text-white">
      <div className="flex flex-col space-y-10 border-x border-[#3B3D3A] px-5 pb-10 pt-20 lg:flex-row lg:justify-between lg:space-y-0">
        {/* Left */}
        <div className="flex flex-col items-center space-y-5 text-center lg:block lg:w-1/3 lg:text-left">
          <h2 className="text-nowrap text-5xl font-bold">Gamers Tag</h2>
          <p className="font-semibold text-[#858585]">
            Sed libero odio, sollicitudin a porttitor ac, tempor eu nisi. Nulla
            sit amet suscipit dolormentum mauris in, rutrum augue.
          </p>

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

        {/* Right */}
        <div className="grid grid-cols-1 gap-10 px-5 sm:grid-cols-2 md:grid-cols-3">
          {footerspans.map((span) => (
            <CategoryspanListing key={span.title} {...span} />
          ))}
        </div>
      </div>

      <ul className="flex justify-between text-nowrap border-x border-y border-[#3B3D3A] p-5 text-center text-lg font-semibold text-[#858585]">
        <li className="hidden space-x-5 sm:flex">
          <span className="cursor-pointer hover:text-main">Privacy Policy</span>
          <span className="cursor-pointer hover:text-main">
            Terms & Conditions
          </span>
        </li>
        <li>
          ©{" "}
          <span className="cursor-pointer hover:text-main">Designthemes</span>{" "}
          all rights Reserved
        </li>
        <SocialLinks />
      </ul>
    </footer>
  );
}

function CategoryspanListing({
  title,
  links,
}: {
  title: string;
  links: { name: string; link: string }[];
}) {
  return (
    <div className="space-y-5">
      <h3 className="text-xl font-bold uppercase">{title}</h3>
      <ul className="space-y-5">
        {links.map(({ name }) => (
          <li key={name}>
            <span className="cursor-pointer font-semibold text-[#858585] hover:text-main">
              {name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLinks() {
  return (
    <ul className="hidden gap-5 *:cursor-pointer lg:flex">
      <li>
        <InstagramLogoIcon className="size-10 border border-[#3B3D3A] p-1 text-main hover:border-main" />
      </li>
      <li>
        <TwitterLogoIcon className="size-10 border border-[#3B3D3A] p-1 text-main hover:border-main" />
      </li>
      <li>
        <DiscordLogoIcon className="size-10 border border-[#3B3D3A] p-1 text-main hover:border-main" />
      </li>
      <li>
        <FaYoutube className="size-10 border border-[#3B3D3A] p-1 text-main hover:border-main" />
      </li>
    </ul>
  );
}