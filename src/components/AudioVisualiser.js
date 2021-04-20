import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

import songFile from '../audio/Lady.mp3';

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

const audio = new Audio(songFile);

function TogglePlay() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function test(amount) {
    unityContext.send("AudioPeer", "PlayAudio");
}

function AudioVisualiser() {
    return (
        <div>
            <Unity
                unityContext={unityContext}
                style={{
                    height: "100vh",
                }} />
            <button onClick={() => TogglePlay()} >Click</button>
        </div>
    );
}

export default AudioVisualiser;