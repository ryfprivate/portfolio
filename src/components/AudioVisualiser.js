import React, { useEffect } from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
    loaderUrl: "Build/simple_bridge.loader.js",
    dataUrl: "Build/simple_bridge.data",
    frameworkUrl: "Build/simple_bridge.framework.js",
    codeUrl: "Build/simple_bridge.wasm",
});
// const unityContext = new UnityContext({
//     loaderUrl: "https://ryfprivate.github.io/audio_visualiser/Build/simple_bridge.loader.js",
//     dataUrl: "https://ryfprivate.github.io/audio_visualiser/Build/simple_bridge.data",
//     frameworkUrl: "https://ryfprivate.github.io/audio_visualiser/Build/simple_bridge.framework.js",
//     codeUrl: "https://ryfprivate.github.io/audio_visualiser/Build/simple_bridge.wasm",
// });

export default function AudioVisualiser(props) {
    useEffect(() => {
        let context = new AudioContext();
        context.resume();
        createVisualization(context);
        props.audioRef.current.volume = 0.1;
    })

    const createVisualization = (context) => {
        let analyser = context.createAnalyser();
        let audioSrc;
        if (audioSrc === undefined) {
            audioSrc = context.createMediaElementSource(props.audioRef.current);
        }
        audioSrc.connect(analyser);
        audioSrc.connect(context.destination);
        analyser.connect(context.destination);
        analyser.fftSize = 1024;

        function renderFrame() {
            let freqData = new Uint8Array(analyser.frequencyBinCount);


            requestAnimationFrame(renderFrame);
            analyser.getByteFrequencyData(freqData);

            let freqString = freqData.toString();
            unityContext.send("Game", "SetFrequencySamples", freqString);
        };
        renderFrame();
    }

    return (
        <Unity
            unityContext={unityContext}
            style={{
                height: "100vh",
                width: "100%"
            }} />
    );
}
