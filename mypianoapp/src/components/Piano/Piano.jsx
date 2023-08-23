import React, { useRef, useState } from "react";
import styles from "./piano.module.css";
import WhiteKeys from "../WhiteKeys/WhiteKeys";
import BlackKeys from "../BlackKeys/BlackKeys";
import Keyboard from "../Keyboard/Keyboard";
import { useRecordContext } from "../RecordContext/RecordContext";

const Piano = () => {
  const { playlist, audioRef, playAudio } = useRecordContext();

  return (
    <>
      <div className={styles.piano}>
        <Keyboard />
        <WhiteKeys playAudio={playAudio} />
        <BlackKeys playAudio={playAudio} />
      </div>
      <audio ref={audioRef} />

      {playlist.length > 0 && <div>Your playlist:{playlist.join(", ")}</div>}
    </>
  );
};

export default Piano;
