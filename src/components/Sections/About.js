import React from 'react';
import styled from "styled-components"

import Section from "./Section"

import photo from "../../images/beach_cropped.jpg";

const Image = styled.img`
    width: 100%;
    max-width: 400px;
    height: auto;
`

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export default function About(props) {
    const { setShowHeader } = props

    return (
        <Section setShowHeader={setShowHeader}>
            <Container>
                <Image alt='portrait' src={photo} />
                <div style={{ padding: '2em' }}>
                    <h1>About</h1>
                    <p>I live in Melbourne, Australia.</p>
                    <p>I'm a man of simple taste. I like things such as movies, games and...gasoline.</p>
                    <p>I believe when you create something, you are leaving behind an essence of your soul. I hope someday all
                        parts of my soul exist somewhere in the form of one of my creations.
                        Then, when I inevitably lose my body to time, I will still exist through the pieces of my legacy that I have
                        left behind. That is when I have achieved true immortality...
                    </p>
                </div>
            </Container>
        </Section>
    )
}