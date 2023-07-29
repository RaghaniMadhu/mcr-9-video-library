import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Explore from "./pages/explore/Explore";
import Playlists from "./pages/playlists/Playlists";
import WatchLater from "./pages/watch-later/WatchLater";
import VideosListing from "./pages/videos-listing/VideosListing";

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
      </Routes>
    </div>
  );
}

export default App;
