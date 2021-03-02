import { useState } from "react";
import cover from "../assets/images/cover/queen.jpeg";
import { stop, play, next, prev, pause } from "../assets/images/buttons";

import ControlButton from "./components/ControlButton";

const Controls = () => {
  const [isPaused, setIsPaused] = useState(false);

  const handlePlay = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className="control-container">
      <img src={cover} alt="Cover" className="current" />
      <div className="buttons-container">
        <ControlButton>
          <img src={prev} alt="Prev" className="button-icon" />
        </ControlButton>
        <ControlButton>
          <img src={stop} alt="Control Icon" className="button-icon" />
        </ControlButton>
        <ControlButton onClick={() => handlePlay()}>
          <img
            src={isPaused ? pause : play}
            alt="Play/Pause"
            className="button-icon"
          />
        </ControlButton>
        <ControlButton>
          <img src={next} alt="Next" className="button-icon" />
        </ControlButton>
      </div>
    </div>
  );
};

export default Controls;
