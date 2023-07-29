import React from "react";
import { useNavigate } from "react-router-dom";

function SuggestionsVideoCard({ videoData }) {
  const navigate = useNavigate();

  return (
    <div
      className="suggestions-video-card cursor-pointer flex-row gap-point-5"
      onClick={() => {
        navigate("/video/" + videoData._id);
      }}
    >
      <div>
        <img src={videoData.thumbnail} alt={videoData.title} />
      </div>
      <div className="flex-row gap-point-5">
        <div className="flex-column gap-point-2">
          <p className="margin-block-0 font-weight-bold primary-color small">
            {videoData.title}
          </p>
          <p className="margin-block-0 primary-color small">
            {videoData.creator}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SuggestionsVideoCard;
