import React from "react";
import Gallery from 'react-grid-gallery'
// Styling
import styled from "styled-components"
import SportsEsportsIcon from '@material-ui/icons/SportsEsports'
import MediaCard from "../Cards/MediaCard"

import Section from "./Section"

import img_discoCruiser from "../../images/disco-cruiser/home_screen.png"
const IMAGES =
    [
        {
            src: img_discoCruiser,
            thumbnail: img_discoCruiser,

            caption: "Disco Cruiser",
        },
        // {
        //     src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        //     thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        //     thumbnailWidth: 320,
        //     thumbnailHeight: 174,
        //     caption: "After Rain (Jeshu John - designerspics.com)"
        // },
        // {
        //     src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        //     thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        //     thumbnailWidth: 320,
        //     thumbnailHeight: 212,
        //     tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
        //     caption: "Boats (Jeshu John - designerspics.com)"
        // },

        // {
        //     src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        //     thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        //     thumbnailWidth: 320,
        //     thumbnailHeight: 212
        // }
    ]

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    justify-content: center;
    align-items: center;
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

export default function Games(props) {
    const { setShowHeader } = props

    return (
        <Section setShowHeader={setShowHeader}>
            <Container>
                <Title>
                    <SportsEsportsIcon style={{ marginRight: '15px' }} fontSize="large" />
                    <h1>Games</h1>
                </Title>
                <Button onClick={() => { window.location.href = "/disco-cruiser" }}>
                    <img style={{ width: '80%' }} src={img_discoCruiser}></img>
                </Button>
                <div>More coming soon...</div>
            </Container>
        </Section>
    )
}