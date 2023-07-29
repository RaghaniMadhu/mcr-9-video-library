import React, { useContext } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { VideosContext } from "../../contexts/VideosContext";
import VideoCard from "../../components/video-card/VideoCard";

function WatchLater() {
  const { videos, watchLaterVideos } = useContext(VideosContext);

  const watchLaterVideosToShow = videos.filter(({ _id }) =>
    watchLaterVideos.includes(_id)
  );

  return (
    <div className="flex-row-center justify-space-evenly">
      <Sidebar />
      <div>
        <h2>Watch Later</h2>
        {watchLaterVideos.length === 0 ? (
          <h3>Please Add Videos To Watch Later</h3>
        ) : (
          <div className="flex-row flex-wrap gap-1-point-5">
            {watchLaterVideosToShow.map((eachVideo) => (
              <VideoCard key={eachVideo._id} videoData={eachVideo} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default WatchLater;
