import { useEffect, useState } from "react";
import "./app.css";
import VideoList from "./compoments/video_list/video_list";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAbecGEB1yQG7jIvGlbWzF6tpME3gHSRZ0",
      requestOptions
    )
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log("error", error));
  }, []);
  console.log(videos);
  return <VideoList videos={videos} />;
}

export default App;
