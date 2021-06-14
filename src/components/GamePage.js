import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AudioPlayer from "./AudioPlayer"
import { UnityContext } from "react-unity-webgl";
import UnityGame from "./Unity/UnityGame";

const ctxDiscoCruiser = new UnityContext({
    loaderUrl: "Build/DiscoCruiser.loader.js",
    dataUrl: "Build/DiscoCruiser.data",
    frameworkUrl: "Build/DiscoCruiser.framework.js",
    codeUrl: "Build/DiscoCruiser.wasm",
});

const Title = styled.h2`
    margin: 0;
    padding: 12px;
`

const FindGame = (name) => {
    if (name == 'disco-cruiser') {
        return (
            <UnityGame
                context={ctxDiscoCruiser}
                height="80vh"
                width="80vw"
            />
        )
    }
}

export default function GamePage(props) {
    const { name } = props

    return <>
        {/* <AudioWrapper>
            <AudioPlayer setSamples={setSamples}></AudioPlayer>
        </AudioWrapper> */}
        {FindGame(name)}
        {/* <UnityGame
            context={unityContext}
            height="75vh"
            width="75vw" /> */}
    </>
}