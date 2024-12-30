import { InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitch, FaYoutube } from "react-icons/fa6";

export default function FollowUs() {
  return (
    <nav className="flex items-center space-x-10">
      <h5 className="text-gray-500">follow us on: </h5>
      <div className="flex items-center space-x-5 *:cursor-pointer *:duration-300 *:transition-colors">
        <FaFacebookSquare className="text-white hover:text-main" />
        <TwitterLogoIcon className="text-white hover:text-main" />
        <FaYoutube className="text-white hover:text-main" />
        <InstagramLogoIcon className="text-white hover:text-main" />
        <FaTwitch className="text-white hover:text-main" />
      </div>
    </nav>
  );
}
