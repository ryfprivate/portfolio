import React, { useState } from "react";
import { useRoutes, A } from "hookrouter"
import NavBar from "./components/NavBar";
import Art from "./components/Art";
import Games from "./components/Games";
import AudioPlayer from "./components/AudioPlayer";
import AudioVisualiser from "./components/AudioVisualiser"
import DiscoCruiser from "./components/Games/DiscoCruiser"
import Home from "./components/Home"

import './App.css';

const routes = {
  '/': () => <Home />,
  '/games': () => <Games />,
  '/art': () => <Art />
}

function App() {
  const routeResult = useRoutes(routes)
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <A href="/">HOme</A>
        {routeResult}
      </header>
    </div>
  );
}

export default App;
