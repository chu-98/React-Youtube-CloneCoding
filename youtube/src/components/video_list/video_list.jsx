import React from "react";
import VideoItem from "../video_item/video_item";

const VideoList = ({ videos, onVideoClick }) => (
  <ul>
    {videos.map(video => (
      <VideoItem video={video} key={video.id} onVideoClick={onVideoClick} />
    ))}
  </ul>
);

export default VideoList;
