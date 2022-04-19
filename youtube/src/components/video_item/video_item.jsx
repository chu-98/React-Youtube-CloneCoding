import React from "react";
import styles from "./video_item.module.css";

const VideoItem = ({ video, video: { snippet }, onVideoClick }) => (
  <li className={styles.video} onClick={() => onVideoClick(video)}>
    <img
      className={styles.thumbnail}
      src={snippet.thumbnails.medium.url}
      alt="video thumbnail"
    />
    <div>
      <p className={styles.title}>{snippet.title}</p>
      <p className={styles.channel}>{snippet.channelTitle}</p>
    </div>
  </li>
);

export default VideoItem;
