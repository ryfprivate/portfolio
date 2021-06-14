import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AudioPlayer from "../../AudioPlayer"
import { UnityContext } from "react-unity-webgl";
import UnityGame from "../UnityGame";

const unityContext = new UnityContext({
    loaderUrl: "Build/disco-cruiser/web.loader.js",
    dataUrl: "Build/disco-cruiser/web.data",
    frameworkUrl: "Build/disco-cruiser/web.framework.js",
    codeUrl: "Build/disco-cruiser/web.wasm",
});

const AudioWrapper = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    max-width: 600px;

    display: flex
    flexDirection: column
    justifyContent: center
    alignItems: center;

    background: rgba(0, 0, 0, 0.3);
    border-radius: 25px;
    padding: 0 1em;
`

const GameWrapper = styled.div`
    display: ${props => props.isPlaying ? 'flex' : 'none'};
    justify-content: center;
`

export default function DiscoCruiser(props) {
    const { start, fullscreen, height, width } = props
    const [samples, setSamples] = useState([])

    useEffect(() => {
        let freqString = samples.toString();
        unityContext.send("Music", "GetSpectrumJavaScript", freqString)
    }, [samples])

    useEffect(() => {
        if (fullscreen) unityContext.setFullscreen(true)
    }, [fullscreen])

    return <GameWrapper isPlaying={start}>
        <AudioWrapper>
            <AudioPlayer start={start} setSamples={setSamples}></AudioPlayer>
        </AudioWrapper>
        <UnityGame
            context={unityContext}
            height={height}
            width={width} />
    </GameWrapper>
}