import React, { useEffect, useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AudioVisualiser from "./AudioVisualiser";

import ladyMp3 from '../audio/Lady.mp3';

const useStyles = makeStyles({
    root: {
        position: 'fixed',
        bottom: '0',
        width: '100vw',
        backgroundColor: 'black',
        opacity: '0.3'
    }
})

export default function AudioPlayer() {
    const classes = useStyles();
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio(ladyMp3));

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    const play = () => {
        audioRef.current.volume = 0.1;
        setIsPlaying(true);
    }

    return (
        <div>
            <AudioVisualiser />
            <div className={classes.root}>
                <button onClick={play}>Play</button>
            </div>
        </div>)
}