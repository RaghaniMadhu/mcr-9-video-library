import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import { VideosContext } from "../../contexts/VideosContext";
import VideoCard from "../../components/video-card/VideoCard";

function VideosListing() {
  const { category } = useParams();
  const { videos } = useContext(VideosContext);

  const videosToShow = videos.filter((vid) => vid.category === category);

  return (
    <div className="flex-row-center justify-space-evenly">
      <Sidebar />
      <div>
        <h2>{category}</h2>
        <div className="flex-row flex-wrap gap-1-point-5">
          {videosToShow.map((eachVideo) => (
            <VideoCard key={eachVideo._id} videoData={eachVideo} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default VideosListing;
