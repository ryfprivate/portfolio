import React, { useState, useEffect } from "react"
import { Scrollbars } from "react-custom-scrollbars-2"
import { useQueryParams } from "hookrouter"
// Styling
import styled, { keyframes } from "styled-components"
import IconButton from '@material-ui/core/IconButton'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import SportsEsportsIcon from '@material-ui/icons/SportsEsports'
import WebIcon from '@material-ui/icons/Web'
import Fade from '@material-ui/core/Fade'

import OceanView from "./Unity/OceanView"

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
    const { scrollActions } = props
    const [show, setShow] = useState(true)
    const [level, setLevel] = useState(0)
    const [gameLevel, setGameLevel] = useState(0)
    const [queryParams, setQueryParams] = useQueryParams()

    const {
        l = ''
    } = queryParams

    useEffect(() => {
        MoveToLevel(Number(l))
        setQueryParams({ l: '' })
    }, [l])

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
        if (level === 0) {
            return <Canvas show={show}>
                <ContentSection></ContentSection>
                <Navigate onNext={Descend} />
            </Canvas>
        }
        if (level === 1) {
            return <Canvas show={show}>
                <ContentSection>
                    <Buttons>
                        <Button>
                            <Text>Game Development</Text>
                            <SportsEsportsIcon fontSize="large" />
                        </Button>
                        <Button>
                            <Text>Web Development</Text>
                            <WebIcon fontSize="large" />
                        </Button>
                    </Buttons>
                </ContentSection>
                <Navigate onBack={Ascend} onNext={Descend} />
            </Canvas>
        }
        if (level === 2) {
            return <Canvas show={show}>
                <ContentSection>
                    <Container>
                        <p>I'm a man of simple taste. I like things such as movies, games and...gasoline.</p>
                        <p>I believe when you create something, you are leaving behind an essence of your soul. I want to keep doing that
                            for as long as I can until maybe someday, all parts of my soul exist somewhere in the form of one of my creations.
                            Then, when I inevitably lose my body to time, I still exist through the pieces of my legacy that I have
                            left behind. That is when I have achieved true immortality...
                        </p>
                        <p>Hence, this website serves as a vessel for some of my creations. I love playing games and especially love making
                            them, so feel free to check them out and maybe even leave me your thoughts on them.</p>
                    </Container>
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