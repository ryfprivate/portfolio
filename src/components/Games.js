import React from "react";
import styled from "styled-components"
import { A } from 'hookrouter';
import Unity, { UnityContext } from "react-unity-webgl";

import MediaCard from "./Cards/MediaCard"

import img_discoCruiser from "../images/disco-cruiser/front_screenshot.png"

const unityContext = new UnityContext({
    loaderUrl: "Build/Environment.loader.js",
    dataUrl: "Build/Environment.data",
    frameworkUrl: "Build/Environment.framework.js",
    codeUrl: "Build/Environment.wasm",
});

const Content = styled.div`
    position: fixed;
    top: 10%;
    width: 80%;
`;

export default function Games() {
    return <>
        <Unity
            unityContext={unityContext}
            style={{
                height: "100vh",
                width: "100vw"
            }} />
        <Content>
            <MediaCard bgImg={img_discoCruiser} handleClick={() => { window.location.href = "/disco-cruiser" }}>
                <h2>Disco Cruiser</h2>
                <p>Cruise through the highways, and listen to some beats...while a massive tsunami chases you.</p>
            </MediaCard>
        </Content>
    </>
}