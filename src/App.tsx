import { useState } from "react";
import Menu from "./components/Menu";
import Video from "./components/Video";
import videos from "./data";
import "./styles.css";

const videoNames = Object.keys(videos);

export default function App() {
  const [videoSrc, setVideoSrc] = useState<string>(videos.spider);

  function onSelectVideo(video: string) {
    const videoSelected = videos[video];
    setVideoSrc(videoSelected);
  }

  return (
    <div className="App">
      <h1>Video Player Component</h1>
      <Menu onSelectVideo={onSelectVideo} videoValues={videoNames} />
      <Video videoSrc={videoSrc} />
    </div>
  );
}
