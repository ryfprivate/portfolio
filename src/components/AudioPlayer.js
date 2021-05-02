import React, { useEffect, useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AudioVisualiser from "./AudioVisualiser";

import IconButton from '@material-ui/core/IconButton';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import VolumeUp from '@material-ui/icons/VolumeUp';

import Slider from '@material-ui/core/Slider';

import tracks from '../tracks';

const useStyles = makeStyles({
    root: {
        position: 'fixed',
        bottom: '0',
        height: '10vh',
        width: '100vw',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: 'rgba(201, 76, 76, 0.3)',
        opacity: '0.7',
    },
    slider: {
        width: '100vw',
        height: '3vh',
    },
    slider_input: {
        color: 'white',
        width: '95%',
    },
    audio: {
        height: '7vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
    },
    audio_section: {
        display: 'flex',
        alignItems: 'center'
    },
    audio_left: {
        flexGrow: '1',
        justifyContent: 'flex-start',
        marginLeft: '15px'
    },
    audio_middle: {
        flexGrow: '3',
        justifyContent: 'center',
        fontSize: '15px',
    },
    audio_right: {
        flexGrow: '1',
        justifyContent: 'flex-end',
        marginRight: '40px'
    },
    desc: {
        marginLeft: '20px'
    },
    volume: {
        color: 'white',
        width: '100px'
    },
    button: {
        color: 'white'
    }
})

export default function AudioPlayer() {
    const classes = useStyles();
    const [volume, setVolume] = useState(10);
    const [trackIndex, setTrackIndex] = useState(0);
    const [trackProgress, setTrackProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    // Tracks
    const { title, artist, audioSrc, imgSrc } = tracks[trackIndex];

    // Refs
    const audioRef = useRef(new Audio(audioSrc));
    const intervalRef = useRef();

    // Ref values
    const { duration } = audioRef.current;

    // Events
    const handleVolumeChange = (event, newValue) => {
        setVolume(newValue);
        audioRef.current.volume = volume / parseFloat(100);
    }

    const startTimer = () => {
        // Clear any timers already running
        clearInterval(intervalRef.current);

        // Call every second
        intervalRef.current = setInterval(() => {
            if (audioRef.current.ended) {
                // Next track
            } else {
                setTrackProgress(audioRef.current.currentTime);
            }
        }, [1000]);
    };

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
            startTimer();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    const play = () => {
        audioRef.current.volume = volume / parseFloat(100);
        setIsPlaying(true);
    }

    return (
        <div>
            <AudioVisualiser />
            <div className={classes.root}>
                <div className={classes.slider}>
                    <Slider
                        className={classes.slider_input}
                        value={trackProgress}
                        min={0}
                        max={duration ? duration : 0}
                    />
                </div>
                <div className={classes.audio}>
                    <div className={`${classes.audio_section} ${classes.audio_left}`}>
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
                    <div className={`${classes.audio_section} ${classes.audio_middle}`}>
                        <img src={imgSrc}
                            alt="Song cover" width="50" height="50"
                        />
                        <div className={classes.desc} >
                            <div><strong>{title}</strong></div>
                            <div>{artist}</div>
                        </div>
                    </div>
                    <div className={`${classes.audio_section} ${classes.audio_right}`}>
                        <IconButton className={classes.button}>
                            <VolumeUp />
                        </IconButton>
                        <Slider
                            className={classes.volume}
                            value={volume}
                            onChange={handleVolumeChange}
                            min={0}
                            max={100}
                        />
                    </div>
                </div>
            </div>
        </div>)
}