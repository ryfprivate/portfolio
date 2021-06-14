import React, { useState } from "react"
import { useRoutes } from "hookrouter"
import Header from "./components/Header"

import Home from "./components/Home"
import Games from "./components/Games"

// Unity games
import DiscoCruiser from "./components/Unity/DiscoCruiser"
import Test from "./components/Unity/Test"

import './App.css';

const routes = {
  '/': () => (scrollActions) => <Home scrollActions={scrollActions} />,
  '/games': () => (scrollActions) => <Games />,
  '/disco-cruiser': () => (scrollActions) => <DiscoCruiser />,
  '/disco-cruiser-2': () => (scrollActions) => <Test />
}

function App() {
  const [showHeader, setShowHeader] = useState(false)
  const routeResult = useRoutes(routes)

  const scrollActions = (data) => {
    if (data.scrollTop > 50) {
      setShowHeader(true)
    } else {
      setShowHeader(false)
    }
  }

  return (
    <div className="App">
      <Header show={showHeader} />
      {routeResult(scrollActions)}
    </div>
  );
}

export default App;
