import React from "react"
import Gallery from 'react-grid-gallery'
import styled from "styled-components"
import ColorLensIcon from '@material-ui/icons/ColorLens'

import Section from "./Section"

import MediaCard from "../Cards/MediaCard"

import bitspace from "../../images/web/bitspace.png"
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
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.5em;
`
const Cards = styled.div`
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

export default function Skills(props) {
    const { setShowHeader } = props

    return (
        <Section setShowHeader={setShowHeader}>
            <Container>
                <h1></h1>
                <Title>
                    <div>I am a game developer with a full stack web development past.</div>
                    <div>I specialise in creating interactive interfaces with slick and expressive 'feel' and 'juice'</div>
                </Title>
            </Container>
        </Section>
    )
}