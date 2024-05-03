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
      setRecordedNotes((prevNotes) => [...prevNotes, note]);
    }
  };

  useEffect(() => {
    if (!isRecording && recordedNotes.length > 0) {
      if (playlist.length === 0) {
        setPlaylist([recordedNotes]);
      } else {
        setPlaylist((prevPlaylists) => [...prevPlaylists, recordedNotes]);
      }
      setRecordedNotes([]);
    }
  }, [isRecording, recordedNotes, playlist]);

  const audioRef = useRef(null);
  const playAudio = (sound) => {
    audioRef.current.src = sound;
    audioRef.current.play();
  };

  const playRecordedNotes = (notes) => {
    // Stop any ongoing audio playback
    audioRef.current.pause();
    audioRef.current.currentTime = 0;

    const playNextNote = (index) => {
      if (index < notes.length) {
        const note = notes[index];
        playAudio(noteSounds[note]);
        audioRef.current.onended = () => {
          playNextNoteWithDelay(index + 1, delayBetweenNotes);
        };
      }
    };

    const playNextNoteWithDelay = (index, delay) => {
      setTimeout(() => {
        playNextNote(index);
      }, delay);
    };

    const delayBetweenNotes = 50; // Adjust this value for the desired tempo

    if (Array.isArray(notes[0])) {
      // If the array contains multiple songs
      notes.forEach((song, songIndex) => {
        playNextNoteWithDelay(0, songIndex * delayBetweenNotes * song.length);
      });
    } else {
      // If the array contains a single song
      playNextNoteWithDelay(0, delayBetweenNotes);
    }
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
