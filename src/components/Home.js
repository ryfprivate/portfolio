import React, { useState } from "react"
import styled from "styled-components"
import AudioPlayer from "./AudioPlayer"
import AudioVisualiser from "./AudioVisualiser"

const AudioWrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 350px;

    display: flex
    flexDirection: column
    justifyContent: center
    alignItems: center;
`

export default function Home() {
    const [samples, setSamples] = useState([]);
    return (
        <>
            <AudioWrapper>
                <AudioPlayer setSamples={setSamples}></AudioPlayer>
            </AudioWrapper>
            <AudioVisualiser samples={samples}></AudioVisualiser>
        </>
    )
}