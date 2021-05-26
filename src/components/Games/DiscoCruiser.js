import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const ctxAudioVis = new UnityContext({
    loaderUrl: "Build/audio_vis.loader.js",
    dataUrl: "Build/audio_vis.data",
    frameworkUrl: "Build/audio_vis.framework.js",
    codeUrl: "Build/audio_vis.wasm",
});

export default function DiscoCruiser() {
    return <>
        <h1>DiscoCruiser</h1>
        <Unity
            unityContext={ctxAudioVis}
            style={{
                height: "80vh",
                width: "80vw"
            }} />
    </>
}