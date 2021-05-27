import React from "react";
import { A } from 'hookrouter';

import MediaCard from "./Cards/MediaCard"

import img_discoCruiser from "../images/disco-cruiser/front_screenshot.png"

export default function Games() {
    return <>
        <h2>Games</h2>

        <MediaCard bgImg={img_discoCruiser} handleClick={() => { window.location.href = "/disco-cruiser" }}>
            <h2>Disco Cruiser</h2>
            <p>Cruise through the highways, and listen to some beats...while a massive tsunami chases you.</p>
        </MediaCard>
    </>
}