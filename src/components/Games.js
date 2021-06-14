import React from "react";
import styled from "styled-components"
import { A } from 'hookrouter';
import { UnityContext } from "react-unity-webgl";
import UnityGame from "./Unity/UnityGame";

import MediaCard from "./Cards/MediaCard"

import img_discoCruiser from "../images/disco-cruiser/front_screenshot.png"

const Content = styled.div`
    position: fixed;
    top: 10%;
    width: 80%;
`;

export default function Games() {
    return <>
        <Content>
            <MediaCard bgImg={img_discoCruiser} handleClick={() => { window.location.href = "/disco-cruiser" }}>
                <h2>Disco Cruiser</h2>
                <p>Cruise through the highways, and listen to some beats...while a massive tsunami chases you.</p>
            </MediaCard>
        </Content>
    </>
}