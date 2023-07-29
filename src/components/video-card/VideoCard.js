import React, { useContext } from "react";
import { MdWatchLater, MdOutlineWatchLater } from "react-icons/md";
import { CategoryContext } from "../../contexts/CategoryContext";
import { VideosContext } from "../../contexts/VideosContext";
import { useNavigate } from "react-router-dom";

function VideoCard({ videoData }) {
  const navigate = useNavigate();

  const { categories } = useContext(CategoryContext);
  const {
    watchLaterVideos,
    addToWatchLaterVideos,
    removeFromWatchLaterVideos,
  } = useContext(VideosContext);

  const reqdCategory = categories.find(
    ({ category }) => category === videoData.category
  );

  const isItAWatchLaterVideo = watchLaterVideos.includes(videoData._id);

  return (
    <div
      className="video-card cursor-pointer flex-column gap-point-5"
      onClick={() => {
        navigate("/video/" + videoData._id);
      }}
    >
      <div className="vid-img-div">
        <img
          src={videoData.thumbnail}
          alt={videoData.title}
          className="vid-img"
        />
        {isItAWatchLaterVideo ? (
          <MdWatchLater
            className="watch-later-video-card-icon"
            onClick={(e) => {
              removeFromWatchLaterVideos(videoData._id);
              e.stopPropagation();
            }}
          />
        ) : (
          <MdOutlineWatchLater
            className="watch-later-video-card-icon"
            onClick={(e) => {
              addToWatchLaterVideos(videoData._id);
              e.stopPropagation();
            }}
          />
        )}
      </div>
      <div className="flex-row gap-point-5">
        <img
          src={reqdCategory.thumbnail}
          alt={videoData.category}
          className="profile-img"
        />
        <div className="flex-column gap-point-2">
          <p className="margin-block-0 font-weight-bold">{videoData.title}</p>
          <p className="margin-block-0 font-weight-bold">
            {videoData.category}
          </p>
          <p className="margin-block-0">
            {videoData.views} views | {videoData.creator}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
