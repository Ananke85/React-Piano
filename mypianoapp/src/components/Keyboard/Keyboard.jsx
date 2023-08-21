import React from "react";
import "./keyboard.css";

const Keyboard = () => {
  return (
    <div className="keyboardContainer">
      <button>
        <span className="icon-media-pause"></span>
      </button>

      <button>
        <span className="icon-media-stop"></span>
      </button>
      
      <h2>Play with music</h2>

      <button>
        <span className="icon-media-play"></span>
      </button>

      <button>
        <span className="icon-media-record"></span>
      </button>
    </div>
  );
};

export default Keyboard;
