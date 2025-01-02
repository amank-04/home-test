import FollowUs from "@/components/FollowUs";
import navigationLinks from "@/data/links.json";
import logo from "@/../public/logo.svg";

type NavLink = {
  name: string;
  url: string;
};

type Section = {
  section: string;
  links: NavLink[];
};

export default function Navbar() {
  return (
    <nav className="relative hidden sm:block">
      {/* Upper bar */}
      <div className="flex items-center justify-between border-b border-gray-800 px-2 py-3 text-xs md:px-5 md:text-sm">
        <FollowUs />
        <h2 className="text-gray-500">
          this is playerx, a theme for games clans & esports
        </h2>
      </div>

      {/* Lower bar */}
      <div className="flex justify-between">
        <div className="flex w-2/5">
          {navigationLinks.slice(0, 3).map(({ links, section }) => (
            <NavigationSection key={section} links={links} section={section} />
          ))}
        </div>

        <img
          src={logo}
          className="absolute -top-1 right-1/2 z-20 size-28 translate-x-1/2 bg-background"
          alt="logo"
        />
        <div className="flex w-2/5">
          {navigationLinks.slice(3).map(({ links, section }) => (
            <NavigationSection key={section} links={links} section={section} />
          ))}
        </div>
      </div>
    </nav>
  );
}

function NavigationSection({ links, section }: Section) {
  return (
    <div className="group relative w-full text-nowrap py-5 uppercase text-white">
      <h2 className="relative block cursor-pointer text-center font-semibold text-white before:absolute before:-bottom-5 before:block before:h-1 before:w-full before:origin-bottom-right before:scale-x-0 before:bg-main before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100">
        {section}
      </h2>

      <ul className="absolute left-0 z-50 hidden min-w-full translate-y-5 space-y-5 overflow-hidden bg-black/70 p-5 opacity-0 group-hover:block group-hover:opacity-100">
        {links.map(({ name, url }) => (
          <li
            className="group/links flex cursor-pointer items-center text-xs hover:space-x-3 hover:to-main"
            key={name + url}
          >
            <span className="h-1 w-0 bg-main transition-all duration-200 group-hover/links:w-5" />
            <a href={url}>{name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
