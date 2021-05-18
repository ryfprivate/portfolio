import React from 'react';
import MModal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from '@react-spring/web';
import 'simplebar';
import 'simplebar/dist/simplebar.css';
import './Modal.css';

import About from './About';
import Experience from './Experience';
import Art from './Art';
import Games from './Games';

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
    const renderContent = () => {
        if (page === 'About') {
            return <About />
        }
        if (page === 'Experience') {
            return <Experience />
        }
        if (page === 'Art') {
            return <Art />
        }
        if (page === 'Games') {
            return <Games />
        }
        return <></>;
    }

    return (
        <MModal
            className="modal"
            open={open}
            onClose={onClose}
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <div className="paper" data-simplebar >
                    {renderContent()}
                </div>
            </Fade>
        </MModal>)
};