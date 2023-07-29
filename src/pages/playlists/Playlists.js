import React, { useContext } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import PlaylistModal from "../../components/playlistModal/PlaylistModal";
import { VideosContext } from "../../contexts/VideosContext";
import PlaylistCard from "../../components/playlist-card/PlaylistCard";

function Playlists() {
  const { playlists } = useContext(VideosContext);

  return (
    <div className="flex-row-center-center justify-space-evenly">
      <Sidebar />
      <div>
        <h2>Playlists</h2>
        <div className="flex-row amrgin-top-1 gap-1">
          {playlists.map((eachPlaylist) => (
            <PlaylistCard playlistData={eachPlaylist} />
          ))}
          <PlaylistModal />
        </div>
      </div>
    </div>
  );
}

export default Playlists;
