import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Art from "./components/Art";
import Games from "./components/Games";
import AudioPlayer from "./components/AudioPlayer";
import AudioVisualiser from "./components/AudioVisualiser"
import DiscoCruiser from "./components/Games/DiscoCruiser"

import './App.css';

function App() {
  const [samples, setSamples] = useState([]);
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavBar />
          <Switch>
            <Route path="/art">
              <Art></Art>
            </Route>
            <Route path="/games">
              <Games></Games>
            </Route>
            <Route path="/">
              <AudioPlayer setSamples={setSamples}></AudioPlayer>
              <AudioVisualiser samples={samples}></AudioVisualiser>
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
