import React, { useState } from "react"
import AudioPlayer from "./AudioPlayer"
import AudioVisualiser from "./AudioVisualiser"

export default function Home() {
    const [samples, setSamples] = useState([]);
    return (
        <>
            <AudioPlayer setSamples={setSamples}></AudioPlayer>
            <AudioVisualiser samples={samples}></AudioVisualiser>
        </>
    )
}