import { Playback } from "../types/types";
import { PlayIcon } from "./Icons";

interface Props {
  playback: Playback;
}

const PlayerCard = ({ playback }: Props) => {
  return (
    <div className="flex overflow-hidden rounded-xl">
      <img
        src={playback.cover}
        alt={playback.title}
        className="h-20 w-20 sm:h-32 sm:w-32"
      />
      <div className="relative w-full bg-white">
        <div className="flex h-[calc(100%-0.25rem)] flex-col justify-between py-1 px-2 sm:h-[calc(100%-0.5rem)] sm:p-4">
          <div>
            <h2 className="text-xs font-semibold text-gray-800 sm:text-lg">
              {playback.title}
            </h2>
            <p className="text-sm font-medium text-gray-600">
              {playback.podcastName}
            </p>
          </div>
          <p className="text-xs font-semibold text-gray-600">
            {playback.currentMinute} minutes out of {playback.duration}
          </p>
        </div>

        {/* Play/Pause Button */}
        <button className="delay-250 absolute bottom-[15px] right-[15px] rounded-full bg-orange-500 p-1 transition ease-in-out hover:scale-105">
          <PlayIcon className="h-6 w-6 text-white sm:h-8 sm:w-8" />
        </button>

        {/* ProgressBar */}
        <div className="h-1 bg-gray-200 sm:h-2">
          <div
            className="h-1 bg-orange-500 sm:h-2"
            style={{
              width: `${(playback.currentMinute / playback.duration) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
