import React, { useState } from 'react'
import { A, usePath } from "hookrouter"
// Styling
import AppBar from '@material-ui/core/AppBar'
import Slide from '@material-ui/core/Slide'
import IconButton from '@material-ui/core/IconButton'

import styled from "styled-components"

import logo from '../images/rf_logo.png'

const SAppBar = styled(AppBar)`
    && {
        display: flex;
        flex-direction: row;
        background: white;
        opacity: 0.7;
        width: 100vw;

        padding: 0 50px;
    }
`
const Left = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: flex-start;
`
const Right = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
const SButton = styled(IconButton)`
    && {    
        padding: 0;
        font-family: 'Indie Flower', cursive
    }
`
const SLink = styled(A)`
    && {
        text-decoration: none;
    }
`
const SLogo = styled.div`
    font-size: 3rem;
    color: black;
`
const SLinkText = styled.div`
    font-size: 1em;
    color: black;
    // padding: 0 1em;
    // margin: 0 15px;

    :hover {
        font-weight: bold;
    }
`


const HideOnScroll = (props) => {
    const { children, show } = props

    return (
        <Slide appear={false} direction="down" in={!show}>
            {children}
        </Slide>
    );
}

const Header = (props) => {
    return <HideOnScroll {...props}>
        <SAppBar>
            <Left>
                <SLink href="/" onClick={() => alert("hi")}>
                    <SButton >
                        <SLogo><strong>RF</strong></SLogo>
                    </SButton>
                </SLink>
            </Left>
            <Right>
                {/* <SLink href="/games">
                    <SLinkText>Games</SLinkText>
                </SLink>
                <SLink href="/web">
                    <SLinkText>Web</SLinkText>
                </SLink>
                <SLink href="/about">
                    <SLinkText>About</SLinkText>
                </SLink>
                <SLink href="/contact">
                    <SLinkText>Contact</SLinkText>
                </SLink> */}
                <SLinkText>ryfprivate@gmail.com</SLinkText>
            </Right>
        </SAppBar>
    </HideOnScroll>
}

export default Header