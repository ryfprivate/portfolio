import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MModal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from '@react-spring/web';
import 'simplebar';
import 'simplebar/dist/simplebar.css';

import About from './About';
import Experience from './Experience';
import Games from './Games';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        textAlign: 'center',
        backgroundColor: 'rgba(23, 23, 23, 0.5)',
        color: 'white',
        height: '50vh',
        width: '50vw',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        overflowX: 'hidden',
    },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter) {
                onEnter();
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited();
            }
        },
    });

    return (
        <animated.div ref={ref} style={style} {...other}>
            {children}
        </animated.div>
    );
});

export default function Modal({ page, open, onClose }) {
    const classes = useStyles();

    const renderContent = () => {
        if (page === 'About') {
            return <About />
        }
        if (page === 'Experience') {
            return <Experience />
        }
        if (page === 'Games') {
            return <Games />
        }
        return <></>;
    }

    return (
        <MModal
            className={classes.modal}
            open={open}
            onClose={onClose}
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <div className={classes.paper} data-simplebar >
                    {renderContent()}
                </div>
            </Fade>
        </MModal>)
};