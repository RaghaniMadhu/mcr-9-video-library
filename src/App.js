import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Explore from "./pages/explore/Explore";
import Playlists from "./pages/playlists/Playlists";
import WatchLater from "./pages/watch-later/WatchLater";
import VideosListing from "./pages/videos-listing/VideosListing";
import Video from "./pages/video/Video";
import PlaylistListing from "./pages/playlists/PlaylistListing";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/explore" element={<Explore />}></Route>
        <Route path="/playlists" element={<Playlists />}></Route>
        <Route path="/watch-later" element={<WatchLater />}></Route>
        <Route
          path="/video-listing/:category"
          element={<VideosListing />}
        ></Route>
        <Route path="/video/:videoId" element={<Video />}></Route>
        <Route
          path="/playlists-listing/:playlistId"
          element={<PlaylistListing />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
