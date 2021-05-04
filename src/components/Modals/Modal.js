import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MModal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from '@react-spring/web';
import 'simplebar';
import 'simplebar/dist/simplebar.css';

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
    column: {
        float: 'left',
        width: '50%',
    },
    text: {
        textAlign: 'left',
        fontSize: '1.5em',
    },
    photo: {
        height: '50%',
        width: '50%',
    }
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

export default function Modal({ open, onClose, children }) {
    const classes = useStyles();

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
                    {children}
                </div>
            </Fade>
        </MModal>)
};