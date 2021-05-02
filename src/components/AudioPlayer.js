import React, { useEffect, useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AudioVisualiser from "./AudioVisualiser";

import IconButton from '@material-ui/core/IconButton';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

import Slider from '@material-ui/core/Slider';

import ladyMp3 from '../audio/Lady.mp3';

const useStyles = makeStyles({
    root: {
        position: 'fixed',
        bottom: '0',
        height: '5vh',
        width: '100vw',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: 'black',
        opacity: '0.7'
    },
    slider: {
        color: 'white',
        width: '80%',
    },
    audio: {
        display: 'flex',
    },
    button: {
        color: 'white'
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
                <Slider className={classes.slider} />
                <div className={classes.audio}>
                    <IconButton className={classes.button}>
                        <SkipPreviousIcon />
                    </IconButton>
                    <IconButton onClick={play} className={classes.button}>
                        <PlayArrowIcon />
                    </IconButton>
                    <IconButton className={classes.button}>
                        <SkipNextIcon />
                    </IconButton>
                </div>
            </div>
        </div>)
}