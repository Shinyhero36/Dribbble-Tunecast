import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronIcon, HeartIcon } from "../components/Icons";
import PlayerCard from "../components/PlayerCard";
import { Playback, Podcast } from "../types/types";
import { avatarURL } from "../utils";

interface HomeProps {
  currentPlayback?: Playback;
}

const HomeScreen = ({ currentPlayback }: HomeProps) => {
  const forYou: Podcast[] = [
    {
      title: "Waveform: The MKBHD Podcast",
      author: "Marques Brownlee",
      cover: "https://i.scdn.co/image/ab6765630000ba8a96811325d5319bb441eee468",
      episode: 10,
      id: "6o81QuW22s5m2nfcXWjucc",
      description:
        "A tech podcast for the gadget lovers and tech heads among us from the mind of Marques Brownlee, better known as MKBHD. MKBHD has made a name for himself on YouTube reviewing everything from the newest smartphones to cameras to electric cars. Pulling from over 10 years of experience covering the tech industry, MKBHD and co-host Andrew Manganelli will keep you informed and entertained as they take a deep dive into the latest and greatest in tech and what deserves your hard earned cash. New episodes every week. Waveform is part of the Vox Media Podcast Network.",
    },
    {
      title: "Popcorn",
      author: "DomingoTV",
      cover: "https://i.scdn.co/image/ab6765630000ba8adac23d37e5fba6e0cbcda1e7",
      episode: 10,
      id: "2OmoGL1JstslNihvKivfPa",
      description:
        "Bienvenue dans Popcorn, le talk show sucré-salé présenté par Domingo et son équipe de chroniqueurs. Des débats, de l'actualité internet et des sujets de société à retrouver tous les mardis 20h en direct sur twitch.tv/domingo.",
    },
    {
      title: "Linux, Daily.",
      author: "Niccolò Venerandi",
      cover: "https://i.scdn.co/image/ab6765630000ba8a124c6cb47e1beb4862b42511",
      episode: 10,
      id: "7wirPTEusTbNTmtQe0Iteu",
      description:
        "A short podcast published daily Monday through Friday that talks about the very latest developments in the Linux world!",
    },
    {
      title: "11 minutes",
      author: "YUNGBLUD · Travis Barker · Halsey",
      cover: "https://i.scdn.co/image/ab67616d0000b273200aac9c99ae5499bfd43500",
      episode: 10,
      id: "7jY0r3cjoRY6M3IqRb1m7H",
      description:
        "11 minutes is a podcast hosted by YUNGBLUD and Travis Barker. Each week, they will be joined by a special guest to discuss a variety of topics, including music, art, culture, and more. The podcast will be released every Friday.",
    },
    {
      title: "Hated by life itself",
      author: "Raon Lee",
      cover: "https://i.scdn.co/image/ab67616d0000b273ca41741a191650f7c762a811",
      episode: 10,
      id: "68NCW98pAKEIm6SdHy4xSq",
      description:
        "Hated by life itself is a podcast hosted by Raon Lee. Each week, they will be joined by a special guest to discuss a variety of topics, including music, art, culture, and more. The podcast will be released every Friday.",
    },
  ];

  const trendingAuthors = [
    "Helen Mile",
    "Yasmine Booker",
    "Aiza Shea",
    "Martin Kowalski",
    "Liam Smith",
  ];

  return (
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
          {forYou.map((podcast) => (
            <Link
              to={`/podcast/${podcast.id}`}
              key={podcast.title}
              state={{ podcast }}
            >
              <div className="group flex gap-4 rounded-xl p-0 group-hover:bg-white sm:block sm:gap-0 sm:p-4 sm:hover:shadow-md">
                <div className="relative">
                  <img
                    src={podcast.cover}
                    alt={podcast.title}
                    className="w-16 rounded-xl sm:w-full"
                  />
                  <span className="absolute top-[15px] right-[15px] hidden rounded-full bg-white bg-opacity-80 p-2 hover:text-orange-500 sm:block">
                    <HeartIcon className="h-6 w-6" />
                  </span>
                  <span className="absolute bottom-[15px] left-[15px] hidden rounded-xl bg-gray-100 bg-opacity-80 px-1 py-1 sm:block">
                    {podcast.episode} episode{podcast.episode > 1 && "s"}
                  </span>
                </div>
                <div className="pt-0 sm:pt-4">
                  <h3 className="text-sm font-semibold text-gray-700 sm:text-xl">
                    <a href="#" className="group-hover:text-orange-400">
                      {podcast.title}
                    </a>
                  </h3>
                  <p className="text-sm text-gray-400 sm:text-lg">
                    By {podcast.author}
                  </p>
                </div>
              </div>
            </Link>
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
            {currentPlayback && <PlayerCard playback={currentPlayback} />}
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
  );
};

export default HomeScreen;
