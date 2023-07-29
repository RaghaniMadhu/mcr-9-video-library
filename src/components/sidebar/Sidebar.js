import React from "react";
import {
  MdOutlineExplore,
  MdOutlinePlaylistAdd,
  MdHome,
  MdWatchLater,
} from "react-icons/md";
import { NavLink } from "react-router-dom";
function Sidebar() {
  const getActiveStyle = ({ isActive }) => ({
    fontSize: isActive ? "large" : "",
    color: isActive ? "#1d4ed8" : "#000",
  });

  return (
    <aside className="flex-column aside-div">
      <div className="flex-column-center justify-space-between height-100">
        <div className="flex-column explore-links-div">
          <NavLink to="/" className="flex-row navlink" style={getActiveStyle}>
            <MdHome className="github-icons" /> Home
          </NavLink>
          <NavLink
            to="/explore"
            className="flex-row navlink"
            style={getActiveStyle}
          >
            <MdOutlineExplore className="github-icons" /> Explore
          </NavLink>
          <NavLink
            to="/playlists"
            className="flex-row navlink"
            style={getActiveStyle}
          >
            <MdOutlinePlaylistAdd className="github-icons" />
            Playlists
          </NavLink>
          <NavLink
            to="/watch-later"
            className="flex-row navlink"
            style={getActiveStyle}
          >
            <MdWatchLater className="github-icons" /> Watch Later
          </NavLink>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
