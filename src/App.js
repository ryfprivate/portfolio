import React, { useState } from "react"
import { useRoutes } from "hookrouter"

import Header from "./components/Header"

import Home from "./components/Home"

// Unity games
import GamePage from "./components/GamePage"
import DiscoCruiser from "./components/Unity/DiscoCruiser/DiscoCruiser"

import './App.css';

const routes = {
  '/disco-cruiser': () => (setShowHeader) => <GamePage name='disco-cruiser' />,
  '/': () => (setShowHeader) => <Home startLevel='/' setShowHeader={setShowHeader} />,
  '/:level': ({ level }) => (setShowHeader) => <Home startLevel={`/${level}`} setShowHeader={setShowHeader} />,
}

function App() {
  const [showHeader, setShowHeader] = useState(false)
  const routeResult = useRoutes(routes)

  return (
    <div className="App">
      <Header show={showHeader} />
      {routeResult(setShowHeader)}
    </div>
  );
}

export default App;
