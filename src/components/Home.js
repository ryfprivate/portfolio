import React, { useState, useRef } from "react"
import { Scrollbars } from "react-custom-scrollbars-2"
// Styling
import styled, { keyframes } from "styled-components"
import IconButton from '@material-ui/core/IconButton'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import Fade from '@material-ui/core/Fade'

import OceanView from "./Unity/OceanView"

// Common 
const Button = styled.button`
    font-family: 'Indie Flower', cursive;
    font-size: 2em;
    padding: 1em;
    border: none;

    background: transparent;
    transition: background 1s;
    
    :hover {
        background: rgba(0,0,0,0.1);
        cursor: pointer;
    }
`
// ------
const Canvas = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100vh;
    width: 100vw;
    opacity: ${props => props.show ? '1' : '0'};
    transition: opacity 2s;
`
const ExpandButton = styled(Button)`
    background: transparent;
    height: 150px;
    width: 100vw;
    font-size: 32px;
`
const Text = styled.div`
    color: white;
`
const ContentSection = styled.div`
    flex-grow: 2;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`
const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 60vw;
`
const BottomSection = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

export default function Home(props) {
    const { scrollActions } = props
    const [show, setShow] = useState(true)
    const [level, setLevel] = useState(0)
    const [gameLevel, setGameLevel] = useState(0)

    const Descend = () => {
        const nextLevel = level + 1
        setShow(false)
        setGameLevel(nextLevel)
        setTimeout(() => {
            setShow(nextLevel)
            setLevel(1)
        }, 2000)
    }

    const AscendToTop = () => {
        setShow(false)
        setGameLevel(0)
        setTimeout(() => {
            setShow(true)
            setLevel(0)
        }, 2000)
    }

    const Levels = () => {
        if (level === 1) {
            return <Canvas show={show}>
                <ContentSection>
                    <Buttons>
                        <Button>Game Projects</Button>
                        <Button>Web Projects</Button>
                    </Buttons>
                </ContentSection>
                <BottomSection>
                    <ExpandButton onClick={AscendToTop}>
                        <ExpandLessIcon style={{ color: 'white' }} fontSize="large" />
                        <Text>Back</Text>
                    </ExpandButton>
                </BottomSection>
            </Canvas>
        }
        else {
            return <Canvas show={show}>
                <BottomSection>
                    <ExpandButton onClick={Descend}>
                        <Text>Next</Text>
                        <ExpandMoreIcon style={{ color: 'white' }} fontSize="large" />
                    </ExpandButton>
                </BottomSection>
            </Canvas>
        }
    }

    return (
        <>
            <OceanView
                height="100vh"
                width="100vw"
                level={gameLevel}
            />

            <Scrollbars
                style={{ width: '100vw', height: '100vh' }}
                onScrollFrame={(data) => scrollActions(data)}
            >
                {Levels()}
            </Scrollbars>
        </>
    )
}