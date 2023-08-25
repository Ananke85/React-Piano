import React, { useState } from "react";
import styles from "./piano.module.css";
import WhiteKeys from "../WhiteKeys/WhiteKeys";
import BlackKeys from "../BlackKeys/BlackKeys";
import Keyboard from "../Keyboard/Keyboard";
import { useRecordContext } from "../RecordContext/RecordContext";

const Piano = () => {
  const { playlist, audioRef } = useRecordContext();
  const [selectedPlaylistIndex, setSelectedPlaylistIndex] = useState(null);

  const play = (index) => {
    setSelectedPlaylistIndex(index);
  };

  return (
    <>
      <div className={styles.pianoContainer}>
        <div className={styles.piano}>
          <Keyboard selectedPlaylistIndex={selectedPlaylistIndex} />
          <WhiteKeys />
          <BlackKeys />
        </div>
        <audio ref={audioRef} />
        {Array.isArray(playlist) && playlist.length > 0 && (
          <div className={styles.songsList}>
            <h3> Your playlist:</h3>
            {playlist.map((list, index) => (
              <div key={index} onClick={() => play(index)}>
                <div
                  className={`${styles.songs} ${
                    selectedPlaylistIndex === index ? styles.selectedSong : ""
                  }`}
                >
                  Song {index + 1}: {list.join(", ")}
                </div>
              </div>
            ))}
          </div>
        )}{" "}
      </div>
    </>
  );
};

export default Piano;
