import FollowUs from "@/components/FollowUs";
import navigationLinks from "@/data/links.json";

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
    <>
      {/* Upper bar */}
      <div className="flex items-center justify-between border-b border-gray-800 px-10 py-3 text-sm">
        <FollowUs />
        <h2 className="text-gray-500">
          this is playerx, a theme for games clans & esports
        </h2>
      </div>

      {/* Lower bar */}
      <div className="flex justify-between py-5">
        {navigationLinks.map(({ links, section }) => (
          <NavigationSection key={section} links={links} section={section} />
        ))}
      </div>
    </>
  );
}

function NavigationSection({ links, section }: Section) {
  return (
    <div className="group relative w-1/6 uppercase text-white">
      <h2 className="underline-url p-5">{section}</h2>

      <ul className="absolute z-50 left-0 hidden min-w-full translate-y-5 space-y-5 overflow-hidden text-nowrap bg-black/70 p-5 opacity-0 group-hover:block group-hover:opacity-100">
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
