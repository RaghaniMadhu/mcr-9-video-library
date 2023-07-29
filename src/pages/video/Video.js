import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { MdWatchLater, MdOutlineWatchLater } from "react-icons/md";
import { VideosContext } from "../../contexts/VideosContext";
import Sidebar from "../../components/sidebar/Sidebar";
import MoreVideosSidebar from "../../components/more-videos-sidebar/MoreVideosSidebar";
import { CategoryContext } from "../../contexts/CategoryContext";
import AddToPlaylistModal from "../../components/playlistModal/AddToPlaylistModal";

function Video() {
  const { videoId } = useParams();
  const {
    videos,
    watchLaterVideos,
    addToWatchLaterVideos,
    removeFromWatchLaterVideos,
  } = useContext(VideosContext);

  const reqdVideo = videos.find(({ _id }) => _id === parseInt(videoId));

  const isItAWatchLaterVideo = watchLaterVideos.includes(parseInt(videoId));

  const { categories } = useContext(CategoryContext);
  const reqdCategory = categories.find(
    ({ category }) => category === reqdVideo.category
  );

  return (
    <div className="flex-row-center justify-space-evenly">
      <Sidebar />
      <div className="flex-column gap-1">
        <iframe
          src={reqdVideo.src}
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="video"
        />
        <div className="flex-row justify-space-between">
          <div className="flex-row gap-point-5">
            <img
              src={reqdCategory.thumbnail}
              alt={reqdVideo.category}
              className="profile-img"
            />
            <p className="margin-block-1">{reqdVideo.title}</p>
          </div>
          <div className="flex-row gap-1">
            {isItAWatchLaterVideo ? (
              <MdWatchLater
                className="watch-later-icon"
                onClick={(e) => {
                  removeFromWatchLaterVideos(parseInt(videoId));
                  e.stopPropagation();
                }}
              />
            ) : (
              <MdOutlineWatchLater
                className="watch-later-icon"
                onClick={(e) => {
                  addToWatchLaterVideos(parseInt(videoId));
                  e.stopPropagation();
                }}
              />
            )}
            <AddToPlaylistModal videoId={reqdVideo._id} />
          </div>
        </div>
      </div>
      <MoreVideosSidebar videoId={videoId} />
    </div>
  );
}

export default Video;
