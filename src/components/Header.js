import React, { useState } from 'react'
import { A } from "hookrouter"
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
    font-family: 'Indie Flower', cursive;
`
const SLinkText = styled.div`
    font-size: 1em;
    color: black;
    font-family: 'Indie Flower', cursive;
`

const HideOnScroll = (props) => {
    const { children, show } = props;

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
                <SLink href="/">
                    <SButton >
                        <SLogo>RF</SLogo>
                    </SButton>
                </SLink>
            </Left>
            <Right>
                <SLink href="/games">
                    <SLinkText>Games</SLinkText>
                </SLink>
            </Right>
        </SAppBar>
    </HideOnScroll>
}

export default Header