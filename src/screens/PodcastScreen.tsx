import { useLocation } from "react-router-dom";
import { Podcast } from "../types/types";

const PodcastScreen = () => {
  const location = useLocation();
  const podcast = location.state?.podcast as Podcast;

  const arrayFromOneTo = (n: number) => {
    return Array.from(Array(n).keys());
  };

  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Info */}
        <div>
          <img
            src={podcast.cover}
            alt={podcast.title}
            className="h-96 w-full rounded-lg object-cover"
          />
          <div className="mt-4">
            <div className="flex justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
                  {podcast.title}
                </h2>
                <p className="text-sm text-gray-400 sm:text-lg">
                  By {podcast.author}{" "}
                  <span className="text-gray-800">
                    {podcast.episode} episode{podcast.episode > 1 ? "s" : ""}
                  </span>
                </p>
              </div>

              {/* Follow and share button */}
              <div className="flex items-center gap-2">
                <button className="rounded-lg bg-orange-500 px-3 py-2 font-semibold text-white hover:bg-orange-400">
                  Follow
                </button>
                <button className="px-3 py-2 font-semibold hover:rounded-lg hover:bg-gray-200">
                  Share
                </button>
              </div>
            </div>
          </div>

          {/* About */}
          <div className="mt-4">
            <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
              About
            </h2>
            <p className="mt-2 text-sm text-gray-400 sm:text-lg">
              {podcast.description}
            </p>
          </div>
        </div>
        {/* Episodes */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
            Episodes
          </h2>
          <div className="mt-4">
            {arrayFromOneTo(podcast.episode).map((i) => (
              <div
                className="mt-4 flex items-center gap-4 rounded-lg bg-white hover:bg-orange-100"
                key={i}
              >
                <img
                  src={podcast.cover}
                  alt={podcast.title}
                  className="h-20 w-20 rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 sm:text-lg">
                    Episode {i + 1}
                  </h3>
                  <p className="text-sm text-gray-400 sm:text-lg"></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastScreen;
