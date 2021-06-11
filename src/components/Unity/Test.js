import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AudioPlayer from "../AudioPlayer"
import { UnityContext } from "react-unity-webgl";
import UnityGame from "./UnityGame";

const unityContext = new UnityContext({
    loaderUrl: "Build/2/DiscoCruiser.loader.js",
    dataUrl: "Build/2/DiscoCruiser.data",
    frameworkUrl: "Build/2/DiscoCruiser.framework.js",
    codeUrl: "Build/2/DiscoCruiser.wasm",
});

const AudioWrapper = styled.div`
    position: fixed;
    bottom: 15px;
    right: 15px;
    max-width: 600px;

    display: flex
    flexDirection: column
    justifyContent: center
    alignItems: center;

    background: rgba(0, 0, 0, 0.3);
    border-radius: 25px;
    padding: 0 1em;
`

const Title = styled.h2`
    margin: 0;
    padding: 12px;
`

export default function DiscoCruiser() {
    const [samples, setSamples] = useState([]);

    useEffect(() => {
        let freqString = samples.toString();
        unityContext.send("Music", "GetSpectrumJavaScript", freqString);
    }, [samples]);

    return <>
        <AudioWrapper>
            <AudioPlayer setSamples={setSamples}></AudioPlayer>
        </AudioWrapper>
        <Title>Disco Cruiser</Title>
        <UnityGame
            context={unityContext}
            height="75vh"
            width="75vw" />
    </>
}