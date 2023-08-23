import React, { useState } from "react";
import styles from "./keyboard.module.css";
import { useRecordContext } from "../RecordContext/RecordContext";

const Keyboard = () => {
  const {
    recordedNotes,
    setRecordedNotes,
    isRecording,
    setIsRecording,
    isPlaying,
    setIsPlaying,
    playRecordedNotes, 
  } = useRecordContext();

  const startRecording = () => {
    setRecordedNotes([]);
    setIsRecording(true);
    console.log("recording")
  };

  const stopRecording = () => {
    setIsRecording(false);
  };

  const startPlaying = () => {
    setIsPlaying(true);
    playRecordedNotes()
    console.log("playing")
  };

  const stopPlaying = () => {
    setIsPlaying(false);
  };

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


{/* <div className={styles.keyboardContainer}>
      <button>
        <span className="icon-media-pause"></span>
      </button>
      <button onClick={isPlaying ? stopPlaying : startPlaying}>
        <span className={`icon-media-${isPlaying ? "pause" : "play"}`}></span>
      </button>
      <button>
        <span className="icon-media-stop"></span>
      </button>
      <h2>Play with music</h2>
      <button>
        <span className="icon-media-record"></span>
      </button>
      <button onClick={isRecording ? stopRecording : startRecording}>
        <span
          className={`icon-media-${isRecording ? "stop" : "record"}`}
        ></span>
      </button>
      <button>
        <span className="icon-media-play"></span>
      </button>
    </div> */}
