import React, { useContext, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { VideosContext } from "../../contexts/VideosContext";
import VideoCard from "../../components/video-card/VideoCard";

function Explore() {
  const { videos } = useContext(VideosContext);
  const [searchText, setSearchText] = useState("");

  const videosToShow =
    searchText.length > 0
      ? videos.filter(({ title }) => title.includes(searchText))
      : videos;

  return (
    <div className="flex-row-center justify-space-evenly">
      <Sidebar />
      <div>
        <h2>Explore</h2>
        <input
          type="text"
          placeholder="Search Video By Title"
          className="search-bar"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <div className="flex-row flex-wrap gap-1-point-5">
          {videosToShow.map((eachVideo) => (
            <VideoCard key={eachVideo._id} videoData={eachVideo} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Explore;
