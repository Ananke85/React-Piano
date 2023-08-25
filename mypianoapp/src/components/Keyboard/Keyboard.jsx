import React, { useEffect } from "react";
import styles from "./keyboard.module.css";
import { useRecordContext } from "../RecordContext/RecordContext";

const Keyboard = ({ selectedPlaylistIndex }) => {
  const {
    setRecordedNotes,
    recordedNotes,
    isRecording,
    setIsRecording,
    isPlaying,
    setIsPlaying,
    playRecordedNotes,
    playlist,
    audioRef,
  } = useRecordContext();

  const startRecording = () => {
    setRecordedNotes([]);
    setIsRecording(true);
  };

  const stopRecording = () => {
    setIsRecording(false);
  };

  const startPlaying = () => {
    setIsPlaying(true);

    if (selectedPlaylistIndex !== null) {
      const selectedSong = playlist[selectedPlaylistIndex];
      playRecordedNotes(selectedSong);
      // Pass an array with the selected song to play
    } else {
      playRecordedNotes(recordedNotes);
    }
  };

  const stopPlaying = () => {
    setIsPlaying(false);
  };

  // Listen to the 'ended' event to change the icon when playback finishes
  useEffect(() => {
    const audioElement = audioRef.current;
    audioElement.addEventListener("ended", () => {
      setIsPlaying(false);
    });

    return () => {
      audioElement.removeEventListener("ended", () => {
        setIsPlaying(false);
      });
    };
  }, []);

  return (
    <div className={styles.keyboardContainer}>
      <button onClick={isPlaying ? stopPlaying : startPlaying}>
        <span className={`icon-media-${isPlaying ? "pause" : "play"}`}></span>
      </button>

      <h2>Play with music</h2>

      <button onClick={isRecording ? stopRecording : startRecording}>
        <span
          className={`icon-media-${isRecording ? "stop" : "record"}`}
        ></span>
      </button>
    </div>
  );
};

export default Keyboard;
