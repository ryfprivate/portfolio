import React, { useState, useRef } from "react"
import { Scrollbars } from "react-custom-scrollbars-2"
// Styling
import styled from "styled-components"
import IconButton from '@material-ui/core/IconButton'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import Fade from '@material-ui/core/Fade'

import AudioPlayer from "./AudioPlayer"
import AudioVisualiser from "./Unity/AudioVisualiser"
import OceanView from "./Unity/OceanView"

const AudioWrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 350px;

    display: flex
    flexDirection: column
    justifyContent: center
    alignItems: center;

    @media (max-width: 768px) {
        width: 200px;
    }
`

const Canvas = styled.div`
    display: ${props => props.show ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;

    height: 100vh;
    width: 100vw;
    // background-color: transparent;
    // opacity: 1;
`
const ExpandButton = styled.button`
    background: transparent;
    height: 150px;
    width: 100vw;
    font-family: 'Indie Flower', cursive;
    font-size: 32px;
    border-style: none;
    transition: background, 0.3s;

    :hover {
        background: rgba(0,0,0,0.05);
        cursor: pointer;
    }
`
const Text = styled.div`
    color: white;
`
const ContentSection = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const BottomSection = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

export default function Home(props) {
    const { scrollActions } = props;
    const [open, setOpen] = useState(false)

    return (
        <>
            <OceanView
                height="100vh"
                width="100vw"
            />

            <Scrollbars
                style={{ width: '100vw', height: '100vh' }}
                onScrollFrame={(data) => scrollActions(data)}
            >
                <Fade in={!open} timeout={3000}>
                    <Canvas show={!open}>
                        <BottomSection>
                            <ExpandButton onClick={() => setOpen(true)}>
                                <Text>Next</Text>
                                <ExpandMoreIcon style={{ color: 'white' }} fontSize="large" />
                            </ExpandButton>
                        </BottomSection>
                    </Canvas>
                </Fade>
                <Fade in={open} timeout={3000}>
                    <Canvas show={open}>
                        <ContentSection>
                            <button>Game Projects</button>
                            <button>Web Projects</button>
                        </ContentSection>
                        <BottomSection>
                            <ExpandButton onClick={() => setOpen(false)}>
                                <ExpandLessIcon style={{ color: 'white' }} fontSize="large" />
                                <Text>Back</Text>
                            </ExpandButton>
                        </BottomSection>
                    </Canvas>
                </Fade>
            </Scrollbars>
        </>
    )
}