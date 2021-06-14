import React from "react"
import Gallery from 'react-grid-gallery'
import styled from "styled-components"
import ColorLensIcon from '@material-ui/icons/ColorLens'
import "./Experience.css"
import Section from "./Section"

import MediaCard from "../Cards/MediaCard"

import bitspace from "../../images/web/bitspace.png"
import hf from "../../images/human.jfif";
import fairvine from "../../images/fairvine.jpg";
import unimelb from "../../images/unimelb.png";
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
                <div className="row">
                    <div className="column--experience">
                        <img className="photo--experience" alt='portrait' src={hf} />
                    </div>
                    <div className="column--experience text">
                        <h3 className="title">Human Financial Pty Ltd</h3>
                        <div><strong>Software Engineer</strong></div>
                        <div>Sydney, NSW</div>
                        <div className="text__date">Mar. 2020 - Dec. 2020</div>

                        <p>Developed the frontend and backend for a rewards platform allowing
                            users to earn money to their superannuation by shopping.</p>
                    </div>
                </div>

                <div className="row">
                    <div className="column--experience">
                        <img className="photo--experience" alt='portrait' src={fairvine} />
                    </div>
                    <div className="column--experience text">
                        <h3 className="title">FairVine Super</h3>
                        <div><strong>Software Intern</strong></div>
                        <div>Sydney, NSW</div>
                        <div className="text__date">Nov. 2019 - Mar. 2020</div>

                        <p>Super fund based in Bondi Junction in Sydney.</p>
                    </div>
                </div>

                <div className="row">
                    <div className="column--experience">
                        <img className="photo--experience" alt='portrait' src={unimelb} />
                    </div>
                    <div className="column--experience text">
                        <h3 className="title">University of Melbourne</h3>
                        <div><strong>Bachelor of Science</strong></div>
                        <div>Melbourne, VIC</div>
                        <div className="text__date">Mar. 2018 - Dec. 2020</div>

                        <p>Majored in Computing and Software Systems.</p>
                    </div>
                </div>
            </Container>
        </Section>
    )
}