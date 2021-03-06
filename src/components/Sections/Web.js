import React from "react"
import Gallery from 'react-grid-gallery'
import styled from "styled-components"
import WebIcon from '@material-ui/icons/Web'

import Section from "./Section"

import MediaCard from "../Cards/MediaCard"

import bitspace from "../../images/web/bitspace.png"
import fairvine from "../../images/web/fairvine.png"
const IMAGES =
    [
        {
            src: bitspace,
            thumbnail: bitspace,

            caption: "Disco Cruiser",
        },
        {
            src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
            thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 250,
            caption: "After Rain (Jeshu John - designerspics.com)"
        },
        {
            src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
            thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
            caption: "Boats (Jeshu John - designerspics.com)"
        },

        {
            src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
            thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
        }
    ]

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
const Button = styled.button`
    font-family: 'Indie Flower', cursive;
    font-size: 2em;
    border: none;
    color: white;

    background: transparent;
    transition: background 1s;

    font-weight: normal;
    
    :hover {
        font-weight: bold;
        // background: rgba(0,0,0,0.1);
        cursor: pointer;
    }
`

export default function Web(props) {
    const { setShowHeader } = props

    return (
        <Section setShowHeader={setShowHeader}>
            <Container>
                <Title>
                    <WebIcon style={{ marginRight: '15px' }} fontSize="large" />
                    <h1>Web</h1>
                </Title>
                {/* <Cards>
                    <MediaCard bgImg={img_discoCruiser} handleClick={() => { window.location.href = "/disco-cruiser" }}>
                        <h2>Disco Cruiser</h2>
                        <p>Cruise through the highways, and listen to some beats...while a massive tsunami chases you.</p>
                    </MediaCard>
                </Cards> */}
                <Button onClick={() => { window.location.href = "https://www.fairvine.com.au/" }}>
                    <img style={{ width: '800px' }} src={fairvine}></img>
                </Button>
                <Button onClick={() => { window.location.href = "https://bs-frontend.herokuapp.com/" }}>
                    <img style={{ width: '800px' }} src={bitspace}></img>
                </Button>
            </Container>
            {/* <Gallery
                images={IMAGES}
                tagStyle={{ color: 'white' }}
                enableImageSelection={false}
            /> */}
        </Section>
    )
}