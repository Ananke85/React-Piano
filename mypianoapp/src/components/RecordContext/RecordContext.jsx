import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import do_sound from "../../assets/notes/do.wav";
import re from "../../assets/notes/re.wav";
import mi from "../../assets/notes/mi.wav";
import fa from "../../assets/notes/fa.wav";
import sol from "../../assets/notes/sol.wav";
import la from "../../assets/notes/la.wav";
import si from "../../assets/notes/si.wav";
import do_octave from "../../assets/notes/do-stretched.wav";
import re_octave from "../../assets/notes/re-stretched.wav";
import fa_octave from "../../assets/notes/fa-stretched.wav";
import sol_octave from "../../assets/notes/sol-stretched.wav";
import la_octave from "../../assets/notes/la-stretched.wav";

const RecordContext = createContext();

export const useRecordContext = () => {
  return useContext(RecordContext);
};

export const RecordProvider = ({ children }) => {
  const [recordedNotes, setRecordedNotes] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const noteSounds = {
    DO: do_sound,
    RE: re,
    MI: mi,
    FA: fa,
    SOL: sol,
    LA: la,
    SI: si,
    "DO#": do_octave,
    "RE#": re_octave,
    "FA#": fa_octave,
    "SOL#": sol_octave,
    "LA#": la_octave,
  };

  const handleNotePlay = (note) => {
    if (isRecording) {
      setRecordedNotes((prevNotes) => {
        const newNotes = [...prevNotes, note];
        console.log("Recorded Notes:", newNotes); 
        setPlaylist(newNotes);
        return newNotes;
      });
    }
  };

  console.log("la playlist", playlist);

  const audioRef = useRef(null);
  const playAudio = (sound) => {
    audioRef.current.src = sound;
    audioRef.current.play();
  };

  const playRecordedNotes = () => {
    playlist.forEach((note, index) => {
      setTimeout(() => {
        console.log("Playing note:", note);
        playAudio(noteSounds[note]);
      }, index * 500);
    });
  };

  return (
    <RecordContext.Provider
      value={{
        recordedNotes,
        setRecordedNotes,
        isRecording,
        setIsRecording,
        handleNotePlay,
        isPlaying,
        setIsPlaying,
        playRecordedNotes,
        playlist,
        playAudio,
        audioRef,
      }}
    >
      {children}
    </RecordContext.Provider>
  );
};
