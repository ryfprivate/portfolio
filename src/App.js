import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

import './App.css';

const unityContext = new UnityContext({
  loaderUrl: "Build/fireworks.loader.js",
  dataUrl: "Build/fireworks.data",
  frameworkUrl: "Build/fireworks.framework.js",
  codeUrl: "Build/fireworks.wasm",
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <iframe src="https://i.simmer.io/@ryfie/fireworks"
          style={{ width: "100vw", height: "100vh", border: 0 }} ></iframe> */}
        <Unity
          unityContext={unityContext}
          style={{
            height: "80vh",
          }} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
