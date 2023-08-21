import React, { useRef, useState } from "react";
import styles from "./piano.module.css";
import WhiteKeys from "../WhiteKeys/whiteKeys";
import BlackKeys from "../BlackKeys/BlackKeys";
import Keyboard from "../Keyboard/Keyboard";

const Piano = () => {
  const audioRef = useRef(null);
  const playAudio = (sound) => {
    audioRef.current.src = sound;
    audioRef.current.play();
  };

  return (
    <div className={styles.piano}>
      {/* <h2>Play with music</h2> */}
      <Keyboard />
      <WhiteKeys playAudio={playAudio} />
      <BlackKeys playAudio={playAudio} />
      <audio ref={audioRef} />
    </div>
  );
};

export default Piano;
