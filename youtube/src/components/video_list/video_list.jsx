import React from "react";
import VideoItem from "../video_item/video_item";

const VideoList = ({ videos, onVideoClick, display }) => (
  <ul>
    {videos.map(video => (
      <VideoItem
        video={video}
        key={video.id}
        onVideoClick={onVideoClick}
        display={display}
      />
    ))}
  </ul>
);

export default VideoList;
