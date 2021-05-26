import React, { useState } from 'react';
import styled from "styled-components"
import { A } from "hookrouter"
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Slide from '@material-ui/core/Slide';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Modal from './Modals/Modal';

import logo from '../images/rf_logo.png';

const bgColor = 'rgba(201, 76, 76, 0)';
const drawerWidth = 150;

const useStyles = makeStyles((theme) => ({
    hide: {
        visibility: 'hidden',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        backgroundColor: bgColor,
        width: drawerWidth,
        color: 'white',
        zIndex: 0
    },
    drawerHeader: {
        minHeight: '64px'
    }
}));

const LeftBar = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    background: ${bgColor};
`

export default function NavBar(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [page, setPage] = useState(null);
    const [open, setOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleModalOpen = (pageName) => {
        handleDrawerClose();
        setPage(pageName)
        setModalOpen(true);
    };
    const handleModalClose = () => {
        setModalOpen(false);
    };

    return (
        <div className={classes.root}>
            <Slide in={!open} direction='right'>
                <LeftBar>
                    <Toolbar>
                        <div>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                            >
                                <MenuIcon />
                            </IconButton>
                            <A href="/">
                                <IconButton >
                                    <img className={classes.logo} alt='logo' src={logo} />
                                </IconButton>
                            </A>
                        </div>
                    </Toolbar>
                </LeftBar>
            </Slide>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton style={{ color: 'white' }} onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                    <A href="/">
                        <IconButton >
                            <img className={classes.logo} alt='logo' src={logo} />
                        </IconButton>
                    </A>
                </div>
                <Divider />
                <List>
                    <ListItem button onClick={() => handleModalOpen('About')} >
                        <ListItemText primary='About' />
                    </ListItem>
                    <ListItem button onClick={() => handleModalOpen('Experience')} >
                        <ListItemText primary='Experience' />
                    </ListItem>
                    <ListItem button onClick={() => window.location.href = "/games"}>
                        <ListItemText primary='Games' />
                    </ListItem>
                </List>
                <Divider />
            </Drawer>
            <Modal page={page} open={modalOpen} onClose={handleModalClose} />
        </div >
    );
}