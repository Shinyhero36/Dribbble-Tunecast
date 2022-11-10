export type Playback = {
  title: string;
  podcastName: string;
  cover: string;
  currentMinute: number;
  duration: number;
};

export type Podcast = {
  title: string;
  author: string;
  cover: string;
  episode: number;
  id: string;
  description: string;
};
