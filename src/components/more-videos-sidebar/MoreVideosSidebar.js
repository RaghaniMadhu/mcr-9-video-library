import React, { useContext } from "react";
import { VideosContext } from "../../contexts/VideosContext";
import SuggestionsVideoCard from "./SuggestionsVideoCard";

function MoreVideosSidebar({ videoId }) {
  const { videos } = useContext(VideosContext);

  const videoSuggestions = videos.filter(({ _id }) => _id !== videoId);

  return (
    <div>
      <h3>More Videos:</h3>
      <div>
        {videoSuggestions.map((video) => (
          <SuggestionsVideoCard key={video._id} videoData={video} />
        ))}
      </div>
    </div>
  );
}

export default MoreVideosSidebar;
