import React from "react";
import { VideoContainer } from "./styles";

const Video = (props: any) => {
  return (
    <VideoContainer>
      <video loop controls autoPlay muted src={props.videoSrc} />
    </VideoContainer>
  );
};

export default Video;
