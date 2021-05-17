import React, { useState, useEffect } from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import CircularProgress from '@material-ui/core/CircularProgress';

const unityContext = new UnityContext({
    loaderUrl: "Build/audio_vis.loader.js",
    dataUrl: "Build/audio_vis.data",
    frameworkUrl: "Build/audio_vis.framework.js",
    codeUrl: "Build/audio_vis.wasm",
});


export default function AudioVisualiser({ samples }) {
    const [loaded, setLoaded] = useState(false);

    unityContext.on("loaded", () => {
        setLoaded(true);
    });

    useEffect(() => {
        let freqString = samples.toString();
        console.log(freqString);
        unityContext.send("Game", "SetFrequencySamples", freqString);
    }, [samples]);

    return (
        <div>
            {loaded ?
                "" :
                <CircularProgress
                    style={{ position: "fixed", marginTop: "25%", marginLeft: "50%" }}
                />}
            <Unity
                unityContext={unityContext}
                style={{
                    height: "100vh",
                    width: "100vw"
                }} />
        </div>
    );
}
