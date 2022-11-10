import { ReactNode, useState } from "react";
import { Playback } from "../types/types";
import {
  BackwardIcon,
  ForwardIcon,
  HeartIcon,
  PlayIcon,
  PlusCircleIcon,
  RepeatIcon,
  ShuffleIcon,
  SpeakerIcon,
  SpeakerMuteIcon,
} from "./Icons";

interface Props {
  playback: Playback;
}

const Control = ({
  children,
  className,
}: {
  children?: ReactNode | ReactNode[];
  className?: string;
}) => {
  return (
    <button
      className={
        "delay-250 transition ease-in-out hover:scale-105 " + (className ?? "")
      }
    >
      {children}
    </button>
  );
};

const PlayerBottomBar = ({ playback }: Props) => {
  const [volume, setVolume] = useState(75);
  const onVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setVolume(+e.target.value);

  return (
    <div className="fixed bottom-0 left-0 h-20 w-full bg-white">
      {/* ProgressBar */}
      <div className="h-1 bg-gray-200 sm:h-2">
        <div
          className="h-1 bg-orange-500 sm:h-2"
          style={{
            width: `${(playback.currentMinute / playback.duration) * 100}%`,
          }}
        />
      </div>

      <div className="flex flex-row justify-between">
        {/* Player */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={playback.cover}
              alt={playback.title}
              className="h-20 w-20"
            />
            <div className="ml-4">
              <h3 className="text-sm font-semibold text-gray-800">
                {playback.title}
              </h3>
              <p className="text-sm text-gray-400">{playback.podcastName}</p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          {/* Shuffle */}
          <Control className="hidden sm:block">
            <ShuffleIcon className="h-6 w-6 text-gray-400" />
          </Control>
          {/* Previous - Play/Pause - Next */}
          <div className="flex items-center justify-between gap-1 pr-4 sm:pr-0">
            {/* Previous */}
            <Control>
              <BackwardIcon className="h-6 w-6 text-gray-400" />
            </Control>

            {/* Play/Pause */}
            <Control className="rounded-full bg-orange-500 p-1">
              <PlayIcon className="h-6 w-6 text-white" />
            </Control>

            {/* Next */}
            <Control>
              <ForwardIcon className="h-6 w-6 text-gray-400" />
            </Control>
          </div>
          {/* Repeat */}
          <Control className="hidden sm:block">
            <RepeatIcon className="h-6 w-6 text-gray-400" />
          </Control>
        </div>

        {/* Like button and volume controler */}
        <div className="hidden items-center justify-between gap-4 pr-10 sm:flex">
          <div className="items-centeer flex justify-center gap-2">
            <Control>
              <HeartIcon className="h-6 w-6 text-gray-400" />
            </Control>
            <Control>
              <PlusCircleIcon className="h-6 w-6 text-gray-400" />
            </Control>
          </div>
          <div className="flex items-center justify-center gap-2">
            {volume === 0 ? (
              <SpeakerMuteIcon className="h-6 w-6 text-gray-400" />
            ) : (
              <SpeakerIcon className="h-6 w-6 text-gray-400 sm:h-6" />
            )}
            <input
              type={"range"}
              min={0}
              max={100}
              value={volume}
              onChange={onVolumeChange}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerBottomBar;
