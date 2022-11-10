import { ChevronIcon, SearchIcon } from "./Icons";
import ProfileCard from "./ProfileCard";

const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-between gap-8">
        {/* Chevrons */}
        <div className="flex gap-4">
          <a href="#" className="text-gray-800 hover:text-orange-500">
            <ChevronIcon.Left className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400">
            <ChevronIcon.Right className="h-6 w-6" />
          </a>
        </div>
        {/* Search Bar */}
        <div className="hidden w-full items-center gap-4 rounded-full bg-white px-4 py-3 font-medium text-gray-400 md:flex">
          <SearchIcon className="h-6 w-6" />
          <input
            type={"text"}
            className="h-full w-full text-lg focus:outline-none"
            placeholder="Search"
          />
        </div>
        {/* Profile */}
        <ProfileCard name="Julia" />
      </div>
      {/* Search bar on mobile viewport */}
      {/* Search Bar */}
      <div className="mt-2 flex w-full items-center gap-4 rounded-full bg-white px-4 py-3 font-medium text-gray-400 md:hidden">
        <SearchIcon className="h-6 w-6" />
        <input
          type={"text"}
          className="h-full w-full text-lg focus:outline-none"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default Header;
