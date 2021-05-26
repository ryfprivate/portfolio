import React from "react";
import styled from "styled-components";
import Unity, { UnityContext } from "react-unity-webgl";

const ctxAudioVis = new UnityContext({
    loaderUrl: "Build/DiscoCruiser.loader.js",
    dataUrl: "Build/DiscoCruiser.data",
    frameworkUrl: "Build/DiscoCruiser.framework.js",
    codeUrl: "Build/DiscoCruiser.wasm",
});

const Title = styled.h2`
    margin: 0;
    padding: 12px;
`

export default function DiscoCruiser() {
    return <>
        <Title>Disco Cruiser</Title>
        <Unity
            unityContext={ctxAudioVis}
            style={{
                height: "80vh",
                width: "80vw"
            }} />
    </>
}