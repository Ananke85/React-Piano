import { useState } from "react";
import styles from "./blackKeys.module.css";
import do_octave from "../../assets/notes/do-stretched.wav";
import re_octave from "../../assets/notes/re-stretched.wav";
import fa_octave from "../../assets/notes/fa-stretched.wav";
import sol_octave from "../../assets/notes/sol-stretched.wav";
import la_octave from "../../assets/notes/la-stretched.wav";
import { useRecordContext } from "../RecordContext/RecordContext";

const BlackKeys = () => {
  const { handleNotePlay, isRecording, playAudio } = useRecordContext();
  const [clickedKey, setClickedKey] = useState("");
  const columnLeftNotes = ["DO#", "RE#"];
  const columnRightNotes = ["FA#", "SOL#", "LA#"];
  const blackSoundsLeft = {
    "DO#": do_octave,
    "RE#": re_octave,
  };

  const blackSoundsRight = {
    "FA#": fa_octave,
    "SOL#": sol_octave,
    "LA#": la_octave,
  };

  const handleNoteClickLeft = (note) => {
    playAudio(blackSoundsLeft[note]);
    setClickedKey(note);
    if (isRecording) {
      handleNotePlay(note);
    }
    setTimeout(() => {
      setClickedKey("");
    }, 500);
  };
  const handleNoteClickRight = (note) => {
    playAudio(blackSoundsRight[note]);
    setClickedKey(note);
    if (isRecording) {
      handleNotePlay(note);
    }
    setTimeout(() => {
      setClickedKey("");
    }, 500);
  };

  return (
    <div className={styles.blackKeys}>
      <div className={styles.columnLeft}>
        {columnLeftNotes.map((note) => (
          <button
            key={note}
            onClick={() => handleNoteClickLeft(note, blackSoundsLeft[note])}
            className={clickedKey === note ? styles.clicked : ""}
          >
            {note}
          </button>
        ))}
      </div>

      <div className={styles.columnRight}>
        {columnRightNotes.map((note) => (
          <button
            key={note}
            onClick={() => handleNoteClickRight(note, blackSoundsRight[note])}
            className={clickedKey === note ? styles.clicked : ""}
          >
            {note}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlackKeys;
