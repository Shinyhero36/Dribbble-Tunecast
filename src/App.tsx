import { useEffect, useState } from "react";
import {
  BrandIcon,
  HomeIcon,
  BookmarkIcon,
  CatergoryIcon,
  ChevronIcon,
  SearchIcon,
  HeartIcon,
} from "./components/Icons";
import PlayerBottomBar from "./components/PlayerBottomBar";
import PlayerCard, { Playback } from "./components/PlayerCard";
import ProfileCard from "./components/ProfileCard";

const App = () => {
  const playlists = [
    "Meditations",
    "About space",
    "Bookcast",
    "Design Practice",
    "Motivating&focus",
  ];

  const forYou = [
    {
      title: "Waveform: The MKBHD Podcast",
      author: "Marques Brownlee",
      cover: "https://i.scdn.co/image/ab6765630000ba8a96811325d5319bb441eee468",
      episode: 10,
    },
    {
      title: "Popcorn",
      author: "DomingoTV",
      cover: "https://i.scdn.co/image/ab6765630000ba8adac23d37e5fba6e0cbcda1e7",
      episode: 10,
    },
    {
      title: "Linux, Daily.",
      author: "Niccolò Venerandi",
      cover: "https://i.scdn.co/image/ab6765630000ba8a124c6cb47e1beb4862b42511",
      episode: 10,
    },
    {
      title: "11 minutes",
      author: "YUNGBLUD · Travis Barker · Halsey",
      cover: "https://i.scdn.co/image/ab67616d0000b273200aac9c99ae5499bfd43500",
      episode: 10,
    },
    {
      title: "Hated by life itself",
      author: "Raon Lee",
      cover: "https://i.scdn.co/image/ab67616d0000b273ca41741a191650f7c762a811",
      episode: 10,
    },
  ];

  const trendingAuthors = [
    "Helen Mile",
    "Yasmine Booker",
    "Aiza Shea",
    "Martin Kowalski",
    "Liam Smith",
  ];

  const currentPlayback: Playback = {
    title: "USB-C iPhone Confirmation & More!",
    podcastName: "Waveform: The MKBHD Podcast",
    cover: "https://i.scdn.co/image/ab6765630000ba8a96811325d5319bb441eee468",
    currentMinute: 12,
    duration: 32,
  };

  const avatarURL = (name: string): string => {
    const encodedName = name.replaceAll(" ", "%20");
    return `https://avatars.dicebear.com/api/adventurer-neutral/${encodedName}.svg`;
  };

  return (
    <>
      <div className="flex">
        <aside className="hidden w-[320px] bg-[#f2f1f5] sm:block">
          <div className="px-6 pt-8">
            <div className="fixed w-[calc(320px-6rem)] ">
              {/* Header */}
              <div className="flex items-end gap-2 pl-2">
                <BrandIcon className="h-8 w-8 text-gray-800" />
                <span className="text-2xl font-bold text-gray-800">
                  Tunecast
                </span>
              </div>
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
        <main className="w-full bg-[#f9f9f9] pb-20">
          <div className="mx-auto w-full p-6 sm:px-8 sm:py-8">
            {/* Header */}
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
            {/* Content */}
            <div className="mt-8">
              {/* For You */}
              <div>
                <div className="flex justify-between px-0 sm:px-2">
                  <h2 className="text-xl font-bold text-gray-800 sm:text-3xl">
                    For You
                  </h2>
                  <button>
                    <ChevronIcon.Right className="h-5 w-5 text-gray-800 sm:h-6 sm:w-6" />
                  </button>
                </div>
                {/* Buttons with new, playlists and episodes */}
                <div className="flex items-center gap-4 px-0 sm:px-2">
                  <button className="text-sm font-semibold text-orange-500 sm:text-lg">
                    new
                  </button>
                  <button className="text-sm: font-semibold text-gray-400 sm:text-lg">
                    playlists
                  </button>
                  <button className="text-sm: font-semibold text-gray-400 sm:text-lg">
                    episodes
                  </button>
                </div>
                <div className="mt-4 grid grid-cols-1 gap-y-4 sm:mt-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 xl:grid-cols-5 xl:gap-8">
                  {forYou.map((item) => (
                    <div
                      key={item.title}
                      className="group flex gap-4 rounded-xl p-0 group-hover:bg-white sm:block sm:gap-0 sm:p-4 sm:hover:shadow-md"
                    >
                      <div className="relative">
                        <img
                          src={item.cover}
                          alt={item.title}
                          className="w-16 rounded-xl sm:w-full"
                        />
                        <span className="absolute top-[15px] right-[15px] hidden rounded-full bg-white bg-opacity-80 p-2 hover:text-orange-500 sm:block">
                          <HeartIcon className="h-6 w-6" />
                        </span>
                        <span className="absolute bottom-[15px] left-[15px] hidden rounded-xl bg-gray-100 bg-opacity-80 px-1 py-1 sm:block">
                          {item.episode} episode{item.episode > 1 && "s"}
                        </span>
                      </div>
                      <div className="pt-0 sm:pt-4">
                        <h3 className="text-sm font-semibold text-gray-700 sm:text-xl">
                          <a href="#" className="group-hover:text-orange-400">
                            {item.title}
                          </a>
                        </h3>
                        <p className="text-sm text-gray-400 sm:text-lg">
                          By {item.author}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Continue Listening & Trending Authors */}
              <div className="mt-8 grid-cols-2 gap-8 md:grid">
                <div>
                  <div className="flex justify-between px-0 sm:px-2">
                    <h2 className="text-xl font-bold text-gray-800 sm:text-3xl">
                      Continue listening
                    </h2>
                    <button>
                      <ChevronIcon.Right className="h-5 w-5 text-gray-800 sm:h-6 sm:w-6" />
                    </button>
                  </div>
                  <div className="mt-4 pl-0 sm:pl-2">
                    <PlayerCard playback={currentPlayback} />
                  </div>
                </div>

                <div>
                  <div className="mt-8 flex justify-between px-0 sm:mt-0 sm:px-2">
                    <h2 className="text-xl font-bold text-gray-800 sm:text-3xl">
                      Trending authors
                    </h2>
                    <button>
                      <ChevronIcon.Right className="h-5 w-5 text-gray-800 sm:h-6 sm:w-6" />
                    </button>
                  </div>
                  <div className="mt-4 grid grid-cols-5">
                    {trendingAuthors.map((author) => (
                      <div className="text-center" key={author}>
                        <img
                          src={avatarURL(author)}
                          alt={author}
                          className="mx-auto h-16 w-16 rounded-full md:h-12 md:w-12 lg:h-24 lg:w-24"
                        />
                        <div>
                          <span className="text-gray-400">{author}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Trending Podcasts */}
              <div className="mt-8">
                <div className="flex justify-between px-0 sm:px-2">
                  <h2 className="text-xl font-bold text-gray-800 sm:text-3xl">
                    Trending podcasts
                  </h2>
                  <button>
                    <ChevronIcon.Right className="h-5 w-5 text-gray-800 sm:h-6 sm:w-6" />
                  </button>
                </div>
                <div className="mt-4 grid grid-cols-1 gap-y-4 sm:mt-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 xl:grid-cols-5 xl:gap-8">
                  {forYou.map((item) => (
                    <div
                      key={item.title}
                      className="group flex gap-4 rounded-xl p-0 group-hover:bg-white sm:block sm:gap-0 sm:p-4 sm:hover:shadow-md"
                    >
                      <div className="relative">
                        <img
                          src={item.cover}
                          alt={item.title}
                          className="w-16 rounded-xl sm:w-full"
                        />
                        <span className="absolute top-[15px] right-[15px] hidden rounded-full bg-white bg-opacity-80 p-2 hover:text-orange-500 sm:block">
                          <HeartIcon className="h-6 w-6" />
                        </span>
                        <span className="absolute bottom-[15px] left-[15px] hidden rounded-xl bg-gray-100 bg-opacity-80 px-1 py-1 sm:block">
                          {item.episode} episode{item.episode > 1 && "s"}
                        </span>
                      </div>
                      <div className="pt-0 sm:pt-4">
                        <h3 className="text-sm font-semibold text-gray-700 sm:text-xl">
                          <a href="#" className="group-hover:text-orange-400">
                            {item.title}
                          </a>
                        </h3>
                        <p className="text-sm text-gray-400 sm:text-lg">
                          By {item.author}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <PlayerBottomBar playback={currentPlayback} />
    </>
  );
};

export default App;
