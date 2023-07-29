import React, { useContext, useState } from "react";
import Modal from "react-modal";
import { MdOutlineAddCircleOutline, MdHighlightOff } from "react-icons/md";
import { VideosContext } from "../../contexts/VideosContext";

function PlaylistModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [newPlaylist, setNewPlaylist] = useState({
    title: "",
    description: "",
    videos: [],
  });

  const { createAPlaylist } = useContext(VideosContext);

  const cancelHandler = () => {
    setNewPlaylist({
      title: "",
      description: "",
      videos: [],
    });
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const saveHandler = () => {
    createAPlaylist(newPlaylist);
    setIsOpen(false);
    setNewPlaylist({
      title: "",
      description: "",
      videos: [],
    });
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  Modal.setAppElement("body");

  return (
    <div>
      <MdOutlineAddCircleOutline
        className="watch-later-icon"
        onClick={() => {
          openModal();
        }}
      />
      <Modal isOpen={isOpen} style={customStyles}>
        <div className="flex-column gap-point-5">
          <MdHighlightOff
            className="watch-later-icon primary-color new-playlist-cancel"
            onClick={() => {
              cancelHandler();
            }}
          />
          <h2 className="margin-block-0">Create New Playlist</h2>
          <input
            type="text"
            placeholder="Playlist Title"
            className="new-playlist-title-desc"
            onChange={(e) => {
              setNewPlaylist((prev) => ({ ...prev, title: e.target.value }));
            }}
          />
          <input
            type="text"
            placeholder="Playlist Description"
            className="new-playlist-title-desc"
            onChange={(e) => {
              setNewPlaylist((prev) => ({
                ...prev,
                description: e.target.value,
              }));
            }}
          />
          <button
            className="big-button-secondary font-size-large"
            onClick={() => {
              saveHandler();
            }}
          >
            Create New Playlist
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default PlaylistModal;
