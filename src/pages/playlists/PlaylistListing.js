import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import Sidebar from "../../components/sidebar/Sidebar";
import { VideosContext } from "../../contexts/VideosContext";
import VideoCard from "../../components/video-card/VideoCard";

function PlaylistListing() {
  const { playlistId } = useParams();
  const { videos, playlists, removeAVideoFromPlaylist } =
    useContext(VideosContext);

  const reqdPlaylist = playlists.find(
    (playlist) => playlist.id === parseInt(playlistId)
  );

  const reqdVideos = videos.filter((vid) =>
    reqdPlaylist.videos.includes(vid._id)
  );

  return (
    <div className="flex-row-center justify-space-evenly">
      <Sidebar />
      <div>
        <h2>{reqdPlaylist.title}</h2>
        <div className="flex-row flex-wrap gap-1-point-5">
          {reqdVideos.map((eachVideo) => (
            <div style={{ position: "relative" }}>
              <MdDeleteOutline
                style={{ position: "absolute", bottom: "0" }}
                className="watch-later-icon"
                onClick={() => {
                  removeAVideoFromPlaylist(parseInt(playlistId), eachVideo._id);
                }}
              />
              <VideoCard key={eachVideo._id} videoData={eachVideo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlaylistListing;
