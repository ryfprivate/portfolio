import React, { useState } from 'react';
import styled from "styled-components"
import { A } from "hookrouter"
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Collapse from '@material-ui/core/Collapse';
import Slide from '@material-ui/core/Slide';
import Grow from '@material-ui/core/Grow';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Modal from './Modals/Modal';

import logo from '../images/rf_logo.png';

const bgColor = 'rgba(201, 76, 76, 0.1)';
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
                    <ListItem button onClick={() => window.location.href = "/art"} >
                        <ListItemText primary='Art' />
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

{/* <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar className={classes.toolbar}>
                    <div className={classes.toolbarItem}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <A href="/">
                            <IconButton >
                                <img className={classes.logo} alt='logo' src={logo} />
                            </IconButton>
                        </A>
                    </div>
                    <div style={{ marginLeft: '25px' }} className={classes.toolbarItem}>
                        <Typography variant="h6" noWrap>
                            Home
                    </Typography>
                    </div>
                </Toolbar>
            </AppBar> */}