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
          <img src="/logo.svg" className="size-24" alt="logo" />
          <h2 className="text-nowrap text-5xl font-bold">Gamers Tag</h2>
          <p className="font-semibold text-[#858585]">
            Welcome to the Ultimate Gaming Super App Step into the future of
            gaming with the world's largest gaming and esports platform.
          </p>
        </div>

        {/* Right */}
        <div className="grid grid-cols-1 gap-20 px-5 sm:grid-cols-2 md:grid-cols-3">
          {footerspans.map((span) => (
            <CategoryspanListing key={span.title} {...span} />
          ))}
        </div>
      </div>

      <div className="flex justify-between border-x border-y border-[#3B3D3A] p-5 text-lg font-semibold uppercase text-[#858585]">
        <span />
        <span className="">gamers tag | 2025</span>
        <SocialLinks />
      </div>
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
    <div className="flex space-x-5 capitalize">
      <span className="h-8 w-1.5 bg-main" />
      <div className="space-y-5">
        <h3 className="text-2xl font-bold">{title}</h3>
        <ul className="space-y-5">
          {links.map(({ name }) => (
            <li key={name}>
              <span className="cursor-pointer text-[#858585] hover:text-main">
                {name}
              </span>
            </li>
          ))}
        </ul>
      </div>
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
