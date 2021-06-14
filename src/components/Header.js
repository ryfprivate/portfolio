import React, { useState } from 'react'
import { A, usePath } from "hookrouter"
// Styling
import AppBar from '@material-ui/core/AppBar'
import Slide from '@material-ui/core/Slide'
import IconButton from '@material-ui/core/IconButton'
import Popover from '@material-ui/core/Popover'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import styled from "styled-components"

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
        cursor: pointer;
    }
`
const ContactContent = styled.div`
    && {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1em;
    }
`
const ContactText = styled.div`
    && {
        font-family: 'Indie Flower', cursive;
        font-size: 2em;

        :hover {
            text-decoration: underline;
        }
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
    const [contactAnchor, setContactAnchor] = useState(null)

    const handleClickContact = (event) => {
        setContactAnchor(event.currentTarget)
    }

    const handleCloseContact = () => {
        setContactAnchor(null);
    };

    const open = Boolean(contactAnchor)
    const id = open ? 'simple-popover' : undefined

    return <HideOnScroll {...props}>
        <SAppBar>
            <Left>
                <SLink href="/">
                    <SButton>
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
                <SLinkText onClick={handleClickContact}>
                    Contact
                </SLinkText>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={contactAnchor}
                    onClose={handleCloseContact}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <ContactContent>
                        <ContactText>ryfprivate@gmail.com</ContactText>
                        <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                            <SButton>
                                <GitHubIcon style={{ color: 'black' }} fontSize="large" />
                            </SButton>
                            <SButton>
                                <LinkedInIcon style={{ color: 'black' }} fontSize="large" />
                            </SButton>
                        </ButtonGroup>
                    </ContactContent>
                </Popover>
            </Right>
        </SAppBar>
    </HideOnScroll>
}

export default Header