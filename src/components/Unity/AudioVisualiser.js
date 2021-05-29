import React, { useEffect } from "react";
import { UnityContext } from "react-unity-webgl";
import "./AudioVisualiser.css";

import UnityGame from "./UnityGame";

const unityContext = new UnityContext({
    loaderUrl: "Build/audio_vis.loader.js",
    dataUrl: "Build/audio_vis.data",
    frameworkUrl: "Build/audio_vis.framework.js",
    codeUrl: "Build/audio_vis.wasm",
});

export default function AudioVisualiser({ samples }) {
    useEffect(() => {
        let freqString = samples.toString();
        unityContext.send("Game", "SetFrequencySamples", freqString);
    }, [samples]);

    return (
        <UnityGame
            context={unityContext}
            height="100vh"
            width="100vw"
        />
    );
}