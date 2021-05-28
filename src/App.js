import React from "react";
import { useRoutes } from "hookrouter"
import NavBar from "./components/NavBar";

import Home from "./components/Home"
import Games from "./components/Games";

// Unity games
import DiscoCruiser from "./components/Unity/DiscoCruiser";

import './App.css';

const routes = {
  '/': () => <Home />,
  '/games': () => <Games />,
  '/disco-cruiser': () => <DiscoCruiser />
}

function App() {
  const routeResult = useRoutes(routes)
  return (
    <div className="App">
      <NavBar />
      {routeResult}
    </div>
  );
}

export default App;
