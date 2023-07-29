import { createContext, useState } from "react";
import { videosData } from "../db/videosData";

export const VideosContext = createContext();

function VideosContextProvider({ children }) {
  const [videos, setVideos] = useState(videosData);
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

  return (
    <VideosContext.Provider
      value={{
        videos,
        setVideos,
        watchLaterVideos,
        addToWatchLaterVideos,
        removeFromWatchLaterVideos,
      }}
    >
      {children}
    </VideosContext.Provider>
  );
}

export default VideosContextProvider;
