import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
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

const drawerWidth = 150;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    navContent: {
        width: '80%',
        justifyContent: 'center',
    },
    appBar: {
        backgroundColor: 'rgba(201, 76, 76, 0.3)',
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    toolbar: {
        display: 'flex',
        width: '100%'
    },
    toolbarItem: {
        display: 'flex',
        justifyContent: 'flex-start'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    logo: {
        width: '50px',
        height: '50px',
        marginBottom: '5px'
    },
    hide: {
        visibility: 'hidden',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        alignItems: 'center',
        backgroundColor: 'rgba(201, 76, 76, 0.3)',
        width: drawerWidth,
        color: 'white',
        zIndex: 0
    },

}));

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
        setPage(pageName)
        setModalOpen(true);
    };
    const handleModalClose = () => {
        setModalOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
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
                        <IconButton >
                            <img className={classes.logo} alt='logo' src={logo} />
                        </IconButton>
                    </div>
                    <div style={{ marginLeft: '25px' }} className={classes.toolbarItem}>
                        <Typography variant="h6" noWrap>
                            Home: Audio Visualizer
                    </Typography>
                    </div>
                </Toolbar>
            </AppBar>
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
                </div>
                <Divider />
                <List>
                    <ListItem button onClick={() => handleModalOpen('About')} >
                        <ListItemText primary='About' />
                    </ListItem>
                    <ListItem button onClick={() => handleModalOpen('Experience')} >
                        <ListItemText primary='Experience' />
                    </ListItem>
                    <ListItem button onClick={() => handleModalOpen('Art')} >
                        <ListItemText primary='Art' />
                    </ListItem>
                    <ListItem button onClick={() => handleModalOpen('Games')} >
                        <ListItemText primary='Games' />
                    </ListItem>
                </List>
                <Divider />
            </Drawer>
            <Modal page={page} open={modalOpen} onClose={handleModalClose} />
        </div>
    );
}