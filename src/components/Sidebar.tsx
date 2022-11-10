import { Link } from "react-router-dom";
import { BookmarkIcon, BrandIcon, CatergoryIcon, HomeIcon } from "./Icons";

const SideBar = () => {
  const playlists = [
    "Meditations",
    "About space",
    "Bookcast",
    "Design Practice",
    "Motivating&focus",
  ];

  return (
    <aside className="hidden w-[320px] bg-[#f2f1f5] sm:block">
      <div className="px-6 pt-8">
        <div className="fixed w-[calc(320px-6rem)] ">
          {/* Header */}
          <a href="/" className="flex items-end gap-2 pl-2">
            <BrandIcon className="h-8 w-8 text-gray-800" />
            <span className="text-2xl font-bold text-gray-800">Tunecast</span>
          </a>
          {/* Menu */}
          <div className="mt-8">
            <span className="pl-2 text-xl text-gray-400">Menu</span>
            <ul className="mt-6 space-y-2 font-semibold text-gray-800">
              {/* Home */}
              <li className="flex items-center gap-2 rounded-xl p-2 hover:bg-white hover:text-orange-500">
                <HomeIcon className="h-6 w-6" />
                <span className="text-lg">Home</span>
              </li>
              {/* Caterogies */}
              <li className="flex items-center gap-2 rounded-xl p-2 hover:bg-white hover:text-orange-500">
                <CatergoryIcon className="h-6 w-6" />
                <span className="text-lg">Categories</span>
              </li>
              {/* Saved */}
              <li className="flex items-center gap-2 rounded-xl p-2 hover:bg-white hover:text-orange-500">
                <BookmarkIcon className="h-6 w-6" />
                <span className="text-lg">Saved</span>
              </li>
            </ul>
          </div>
          {/* Playlists */}
          <div className="mt-8">
            <span className="pl-2 text-xl text-gray-400">Playlists</span>
            <ul className="mt-6 space-y-3 pl-2 font-medium text-gray-800">
              {playlists.map((playlist) => (
                <li key={playlist} className="hover:text-orange-500">
                  <a href="#" className="text-lg">
                    {playlist}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
