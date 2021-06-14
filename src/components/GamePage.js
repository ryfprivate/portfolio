import React, { useState, useEffect } from "react";
// Styling
import styled from "styled-components"
import FullscreenIcon from '@material-ui/icons/Fullscreen'

import DiscoCruiser from "./Unity/DiscoCruiser/DiscoCruiser";

import { Scrollbars } from "react-custom-scrollbars-2"

const Button = styled.button`
    font-family: 'Indie Flower', cursive;
    font-size: 2em;
    padding: 10px 20px;
    color: white;
    border: none;
    background: transparent;
    transition: background 1s;

    font-weight: normal;
    
    :hover {
        font-weight: bold;
        background: rgba(0,0,0,0.1);
        cursor: pointer;
    }
`
const Spacing = styled.div`
    height: 200px;
`
const Wrapper = styled.div`
    position: fixed;
    top: 8%;
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const GameInfo = styled.div`
    width: 75vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const Heading = styled.div`
    font-weight: bold;
`

export default function GamePage(props) {
    const { name } = props
    const [isPlaying, setIsPlaying] = useState(false)
    const [isFullscreen, setIsFullscreen] = useState(false)

    const handlePlay = () => {
        setIsPlaying(true)
    }

    const handleFullscreen = () => {
        // Monkey code to make sure fullscreen is set back to false (esc doesnt trigger)
        setIsFullscreen(true)
        setTimeout(() => {
            setIsFullscreen(false)
        }, 1000)
    }

    const FindGame = (name) => {
        if (name == 'disco-cruiser') {
            return (
                <DiscoCruiser
                    start={isPlaying}
                    fullscreen={isFullscreen}
                    height="75vh"
                    width="75vw">
                </DiscoCruiser >
            )
        }
    }

    return (
        <Wrapper>
            <Scrollbars style={{ height: '100vh', width: '100vw' }}>
                <Content>
                    {isPlaying ?
                        <Button onClick={() => handleFullscreen()}>
                            <FullscreenIcon fontSize="large" />
                        </Button>
                        :
                        <Button onClick={handlePlay}>Play</Button>}
                    {FindGame(name)}
                    <GameInfo>
                        <h2>Disco Cruiser</h2>
                        <Heading>Game Description</Heading>
                        <div>Cruise through the highways, and listen to some beats...while a massive tsunami chases you.</div>
                        <Heading>Instructions</Heading>
                        <div>Move: A and D</div>
                        <div>Boost: Space</div>
                        <div>Change view: E</div>
                        <Spacing />
                    </GameInfo>
                </Content>
            </Scrollbars>

        </Wrapper>)
}