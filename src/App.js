import React from "react";
import { useRoutes } from "hookrouter"
import NavBar from "./components/NavBar";

import Home from "./components/Home"
import Games from "./components/Games";
import Art from "./components/Art";

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
        {routeResult}
      </header>
    </div>
  );
}

export default App;
