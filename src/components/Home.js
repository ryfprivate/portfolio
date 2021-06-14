import React, { useState, useEffect } from "react"
// Styling
import styled from "styled-components"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'

import OceanView from "./Unity/OceanView"

import Games from "./Sections/Games"
import Web from "./Sections/Web"
import About from "./Sections/About"

// Common 
const Button = styled.button`
    font-family: 'Indie Flower', cursive;
    font-size: 2em;
    padding: 1em;
    border: none;
    color: white;

    background: transparent;
    transition: background 1s;

    font-weight: normal;
    
    :hover {
        // font-weight: bold;
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
    transition: opacity 1s;
`
const ExpandButton = styled(Button)`
    position: absolute;
    bottom: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    height: 150px;
    font-size: 32px;
`
const Text = styled.div`
    color: white;
`
const ContentSection = styled.div`
    flex-grow: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Container = styled.div`
    width: 60%;
`
const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 60vw;
`
const BottomSection = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: row;
`

function Navigate(props) {
    const { onBack, onNext } = props
    return (
        <BottomSection>
            {onBack ?
                <ExpandButton onClick={onBack}>
                    <ExpandLessIcon style={{ color: 'white' }} fontSize="large" />
                    <Text>Up</Text>
                </ExpandButton>
                : ""
            }
            {onNext ?
                <ExpandButton style={{ left: '50%' }} onClick={onNext}>
                    <Text>Down</Text>
                    <ExpandMoreIcon style={{ color: 'white' }} fontSize="large" />
                </ExpandButton>
                : ""
            }
        </BottomSection>)
}

export default function Home(props) {
    const { startLevel, setShowHeader } = props
    const [gameLoaded, setGameLoaded] = useState(false)
    const [show, setShow] = useState(false)
    const [level, setLevel] = useState(0)
    const [gameLevel, setGameLevel] = useState(0)

    const levelOrder = ['/', '/games', '/web', '/about']

    useEffect(() => {
        if (!gameLoaded) return;
        // Change this to use unity event later
        setTimeout(() => {
            const index = levelOrder.indexOf(startLevel)
            MoveToLevel(index)
        }, 3000)
    }, [gameLoaded])

    function MoveToLevel(nextLevel) {
        setShow(false)
        setGameLevel(nextLevel)
        setTimeout(() => {
            setShow(true)
            setLevel(nextLevel)
        }, 1000)
    }

    const Descend = () => {
        MoveToLevel(level + 1)
    }

    const Ascend = () => {
        MoveToLevel(level - 1)
    }

    const AscendToTop = () => {
        MoveToLevel(0)
    }

    const Levels = () => {
        if (levelOrder[level] === '/') {
            return <Canvas show={show}>
                <ContentSection></ContentSection>
                <Navigate onNext={Descend} />
            </Canvas>
        }
        if (levelOrder[level] === '/games') {
            return <Canvas show={show}>
                <ContentSection>
                    <Games />
                </ContentSection>
                <Navigate onBack={Ascend} onNext={Descend} />
            </Canvas>
        }
        if (levelOrder[level] === '/web') {
            return <Canvas show={show}>
                <ContentSection>
                    <Web />
                </ContentSection>
                <Navigate onBack={Ascend} onNext={Descend} />
            </Canvas>
        }
        if (levelOrder[level] === '/about') {
            return <Canvas show={show}>
                <ContentSection>
                    <About setShowHeader={setShowHeader} />
                </ContentSection>
                <Navigate onBack={Ascend} />
            </Canvas>
        }
        // If it goes to an unknown level
        return ""
    }

    return (
        <>
            <OceanView
                height="100vh"
                width="100vw"
                level={gameLevel}
                onLoaded={setGameLoaded}
            />
            {Levels()}
        </>
    )
}