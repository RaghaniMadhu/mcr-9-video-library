import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import { VideosContext } from "../../contexts/VideosContext";

function PlaylistCard({ playlistData }) {
  const navigate = useNavigate();
  const { deleteAPlaylist } = useContext(VideosContext);

  return (
    <div
      style={{ position: "relative" }}
      className="cursor-pointer"
      onClick={() => {
        navigate("/playlists-listing/" + playlistData.id);
      }}
    >
      <img src="https://picsum.photos/300/178" alt={playlistData.title} />
      <h4 className="margin-block-0">{playlistData.title}</h4>
      <p className="margin-block-0">{playlistData.description}</p>
      <MdDeleteOutline
        style={{ position: "absolute", bottom: "0", right: "0" }}
        className="watch-later-icon"
        onClick={(e) => {
          deleteAPlaylist(playlistData.id);
          e.stopPropagation();
        }}
      />
    </div>
  );
}

export default PlaylistCard;
