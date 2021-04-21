import React, { useEffect, useState, useRef } from "react";
import Unity, { UnityContext } from "react-unity-webgl";

import ladyMp3 from '../audio/Lady.mp3';
import pumpedMp3 from '../audio/Pumped.mp3';

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

function AudioVisualiser() {
    // const [freqString, setFreqString] = useState("");

    const audioRef = useRef(null);

    useEffect(() => {
        createVisualization();
        audioRef.current.volume = 0.1;
    })

    const createVisualization = () => {
        let context = new AudioContext();
        context.resume();
        let analyser = context.createAnalyser();
        let audioSrc;
        if (audioSrc === undefined) {
            audioSrc = context.createMediaElementSource(audioRef.current);
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
            unityContext.send("AudioPeer", "SetFrequencySamples", freqString);
        };
        renderFrame();
    }

    const togglePlay = () => {
        if (audioRef.current.paused) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }

    const changeSong = () => {
        audioRef.current.src = pumpedMp3;
    }

    const sendString = () => {
        unityContext.send("AudioPeer", "SetFrequencySamples", "Hello");
    }

    return (
        <div>
            <Unity
                unityContext={unityContext}
                style={{
                    height: "100vh",
                }} />
            <audio
                ref={audioRef}
                crossOrigin="anonymous"
                preload="auto"
                autoPlay={true}
                controls={true}
                src={ladyMp3}
            >
            </audio>
            <button onClick={() => changeSong()} >Click</button>
        </div>
    );
}

export default AudioVisualiser;