import PlaylistHeader from "./components/PlaylistHeader";
import PlaylistItem from "./components/PlaylistItem";

import { headerInfo, tracks } from "../services/api";

const Player = () => {
  return (
    <div className="player-container">
      <PlaylistHeader {...headerInfo} />
      {tracks.map((track) => (
        <PlaylistItem {...track} />
      ))}
    </div>
  );
};

export default Player;
