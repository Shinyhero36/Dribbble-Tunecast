import PlayerBottomBar from "./components/PlayerBottomBar";
import SideBar from "./components/Sidebar";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Header from "./components/Header";
import { Playback } from "./types/types";
import PodcastScreen from "./screens/PodcastScreen";

const App = () => {
  const currentPlayback: Playback = {
    title: "USB-C iPhone Confirmation & More!",
    podcastName: "Waveform: The MKBHD Podcast",
    cover: "https://i.scdn.co/image/ab6765630000ba8a96811325d5319bb441eee468",
    currentMinute: 12,
    duration: 32,
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeScreen currentPlayback={currentPlayback} />,
    },
    {
      path: "podcast/:id",
      element: <PodcastScreen />,
    },
  ]);

  return (
    <>
      <div className="flex">
        <SideBar />
        <main className="w-full bg-[#f9f9f9] pb-20">
          <div className="mx-auto w-full p-6 sm:px-8 sm:py-8">
            {/* Header */}
            <Header />
            {/* Content */}
            <RouterProvider router={router} />
          </div>
        </main>
      </div>
      <PlayerBottomBar playback={currentPlayback} />
    </>
  );
};

export default App;
