import React, { useState, useEffect } from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import "./AudioVisualiser.css";

const unityContext = new UnityContext({
    loaderUrl: "Build/audio_vis.loader.js",
    dataUrl: "Build/audio_vis.data",
    frameworkUrl: "Build/audio_vis.framework.js",
    codeUrl: "Build/audio_vis.wasm",
});

export default function AudioVisualiser({ samples }) {
    const [progress, setProgress] = useState(0);
    const [loaded, setLoaded] = useState(false);

    unityContext.on("loaded", () => {
        setLoaded(true);
    });

    unityContext.on("progress", (progress) => {
        setProgress(progress);
    });

    unityContext.on("quitted", () => {

    });

    useEffect(() => {
        let freqString = samples.toString();
        unityContext.send("Game", "SetFrequencySamples", freqString);
    }, [samples]);

    return (
        <div>
            {loaded ?
                "" :
                <Box style={{ position: "fixed", marginTop: "25%", marginLeft: "50%" }} display="inline-flex">
                    <CircularProgress className="loader" variant="determinate" value={progress * 100} />
                    <Box
                        top={0}
                        left={0}
                        bottom={0}
                        right={0}
                        position="absolute"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <p className="text__loading">{Math.round(progress * 100)}%</p>
                    </Box>
                </Box>}
            <Unity
                unityContext={unityContext}
                style={{
                    height: "100vh",
                    width: "100vw"
                }} />
        </div>
    );
}