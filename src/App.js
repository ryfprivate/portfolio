import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

import './App.css';

// const unityContext = new UnityContext({
//   loaderUrl: "Build/fireworks.loader.js",
//   dataUrl: "Build/fireworks.data",
//   frameworkUrl: "Build/fireworks.framework.js",
//   codeUrl: "Build/fireworks.wasm",
// });
const unityContext = new UnityContext({
  loaderUrl: "Build/simple_bridge.loader.js",
  dataUrl: "Build/simple_bridge.data",
  frameworkUrl: "Build/simple_bridge.framework.js",
  codeUrl: "Build/simple_bridge.wasm",
});

function test(amount) {
  unityContext.send("AudioPeer", "PlayAudio");
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <iframe src="https://i.simmer.io/@ryfie/fireworks"
          style={{ width: "100vw", height: "100vh", border: 0 }} ></iframe> */}
        <Unity
          unityContext={unityContext}
          style={{
            height: "100vh",
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
        <button onClick={() => test(100)} >Click</button>
      </header>
    </div>
  );
}

export default App;
