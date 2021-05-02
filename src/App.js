import React from "react";
import NavBar from "./components/NavBar";
import AudioPlayer from "./components/AudioPlayer";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <AudioPlayer></AudioPlayer>
      </header>
    </div>
  );
}

export default App;
