import { createContext, useState } from "react";
import { videosData } from "../db/videosData";

export const VideosContext = createContext();

function VideosContextProvider({ children }) {
  const [videos, setVideos] = useState(videosData);
  const [playlists, setPlaylists] = useState([]);

  const [watchLaterVideos, setWatchLaterVideos] = useState(
    localStorage.getItem("watchLaterVideos")
      ? [
          ...localStorage
            .getItem("watchLaterVideos")
            .split(",")
            .map((eachId) => parseInt(eachId)),
        ]
      : []
  );

  const addToWatchLaterVideos = (id) => {
    const modifiedWatchLaterVideos = [...watchLaterVideos, id];
    setWatchLaterVideos(modifiedWatchLaterVideos);
    localStorage.setItem("watchLaterVideos", modifiedWatchLaterVideos);
  };

  const removeFromWatchLaterVideos = (id) => {
    const modifiedWatchLaterVideos = watchLaterVideos.filter(
      (_id) => _id !== id
    );
    setWatchLaterVideos(modifiedWatchLaterVideos);
    localStorage.setItem("watchLaterVideos", modifiedWatchLaterVideos);
  };

  const createAPlaylist = ({ title, description, videos }) => {
    const modifiedPlaylist = [
      ...playlists,
      { id: playlists.length, title, description, videos },
    ];
    setPlaylists(modifiedPlaylist);
    localStorage.setItem("playlists", modifiedPlaylist);
  };

  const deleteAPlaylist = (id) => {
    const modifiedPlaylist = playlists.filter((playlist) => playlist.id !== id);
    setPlaylists(modifiedPlaylist);
    localStorage.setItem("playlists", modifiedPlaylist);
  };

  const addAVideoToPlaylist = (playlistId, videoId) => {
    const modifiedPlaylist = playlists.map((eachPlaylist) =>
      eachPlaylist.id === playlistId
        ? { ...eachPlaylist, videos: [...eachPlaylist.videos, videoId] }
        : eachPlaylist
    );
    setPlaylists(modifiedPlaylist);
    localStorage.setItem("playlists", modifiedPlaylist);
  };

  const removeAVideoFromPlaylist = (playlistId, videoId) => {
    const modifiedPlaylist = playlists.map((eachPlaylist) =>
      eachPlaylist.id === playlistId
        ? {
            ...eachPlaylist,
            videos: eachPlaylist.videos.filter((id) => id !== videoId),
          }
        : eachPlaylist
    );
    setPlaylists(modifiedPlaylist);
    localStorage.setItem("playlists", modifiedPlaylist);
  };

  return (
    <VideosContext.Provider
      value={{
        videos,
        setVideos,
        watchLaterVideos,
        addToWatchLaterVideos,
        removeFromWatchLaterVideos,
        playlists,
        createAPlaylist,
        deleteAPlaylist,
        addAVideoToPlaylist,
        removeAVideoFromPlaylist,
      }}
    >
      {children}
    </VideosContext.Provider>
  );
}

export default VideosContextProvider;
