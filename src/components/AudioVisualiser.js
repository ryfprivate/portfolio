import React, { useState } from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import CircularProgress from '@material-ui/core/CircularProgress';

const unityContext = new UnityContext({
    loaderUrl: "Build/simple_bridge.loader.js",
    dataUrl: "Build/simple_bridge.data",
    frameworkUrl: "Build/simple_bridge.framework.js",
    codeUrl: "Build/simple_bridge.wasm",
});


export default function AudioVisualiser(props) {
    const [loaded, setLoaded] = useState(false);

    unityContext.on("loaded", () => {
        setLoaded(true);
    });

    // useEffect(() => {
    //     createVisualization();

    //     const timer = setInterval(() => {
    //         setProgression((oldProgress) => {
    //             if (oldProgress === 100) {
    //                 return 0;
    //             }
    //             const diff = Math.random() * 10;
    //             return Math.min(oldProgress + diff, 100);
    //         });
    //     }, 500);

    //     return () => {
    //         clearInterval(timer);
    //     };
    // })

    // const createVisualization = () => {
    //     let context, analyser, audioSrc;
    //     context = new (window.AudioContext ||
    //         window.webkitAudioContext)();
    //     analyser = context.createAnalyser();
    //     console.log("audiosrc" + audioSrc);
    //     if (audioSrc === undefined) {
    //         audioSrc = context.createMediaElementSource(props.audioRef.current);
    //     }
    //     audioSrc.connect(analyser);
    //     audioSrc.connect(context.destination);
    //     analyser.connect(context.destination);

    //     analyser.fftSize = 1024;

    //     function renderFrame() {
    //         let freqData = new Uint8Array(analyser.frequencyBinCount);


    //         requestAnimationFrame(renderFrame);
    //         analyser.getByteFrequencyData(freqData);

    //         let freqString = freqData.toString();
    //         unityContext.send("Game", "SetFrequencySamples", freqString);
    //     };
    //     renderFrame();
    // }

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
