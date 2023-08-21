import { useState } from "react";
import styles from "./whiteKeys.module.css";
import do_sound from "../../assets/notes/do.wav";
import re from "../../assets/notes/re.wav";
import mi from "../../assets/notes/mi.wav";
import fa from "../../assets/notes/fa.wav";
import sol from "../../assets/notes/sol.wav";
import la from "../../assets/notes/la.wav";
import si from "../../assets/notes/si.wav";

const WhiteKeys = ({ playAudio }) => {
  const whiteNotes = ["DO", "RE", "MI", "FA", "SOL", "LA", "SI"];
  const whiteSounds = {
    DO: do_sound,
    RE: re,
    MI: mi,
    FA: fa,
    SOL: sol,
    LA: la,
    SI: si,
  };

  console.log("los sonidos", whiteSounds);
  const handleNoteClick = (note) => {
    console.log("tocando");
    playAudio(whiteSounds[note]);
  };

  return (
    <div className={styles.whiteKeys}>
      {whiteNotes.map((note) => (
        <button key={note} onClick={() => handleNoteClick(note)}>
          {note}
        </button>
      ))}
    </div>
  );
};

export default WhiteKeys;
