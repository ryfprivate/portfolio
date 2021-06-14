import React from "react";
import styled from "styled-components"
import WebIcon from '@material-ui/icons/Web'

import Section from "./Section"

import MediaCard from "../Cards/MediaCard"

import img_discoCruiser from "../../images/disco-cruiser/front_screenshot.png"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Title = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
const Cards = styled.div`
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

export default function Web(props) {
    const { scrollActions } = props

    return (
        <Section scrollActions={scrollActions}>
            <Container>
                <Title>
                    <WebIcon style={{ marginRight: '15px' }} fontSize="large" />
                    <h1>Web</h1>
                </Title>
                <Cards>
                    <MediaCard bgImg={img_discoCruiser} handleClick={() => { window.location.href = "/disco-cruiser" }}>
                        <h2>Disco Cruiser</h2>
                        <p>Cruise through the highways, and listen to some beats...while a massive tsunami chases you.</p>
                    </MediaCard>
                </Cards>
            </Container>
        </Section>
    )
}