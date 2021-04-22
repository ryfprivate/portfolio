import React, { useRef } from "react";
import AudioVisualiser from "./components/AudioVisualiser";
import NavBar from "./components/NavBar";
import AudioPlayer from "./components/AudioPlayer";

import './App.css';

function App() {
  const audioRef = useRef(null);

  return (
    <div className="App">
      <header className="App-header">
        <NavBar><AudioPlayer audioRef={audioRef} /></NavBar>
        <AudioVisualiser audioRef={audioRef} />
      </header>
    </div>
  );
}

export default App;
