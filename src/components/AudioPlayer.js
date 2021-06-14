import React, { useEffect, useState, useRef, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import VolumeUp from '@material-ui/icons/VolumeUp';
import Popper from '@material-ui/core/Popper';
import Slider from '@material-ui/core/Slider';

import tracks from '../tracks';

const useStyles = makeStyles({
    audio: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    audio_section: {
        display: 'flex',
        alignItems: 'center',
        paddingTop: '0.5em',
        width: '100%'
    },
    audio_left: {
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'flex-start',
    },
    audio_right: {
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'flex-end',
        marginRight: '40px'
    },
    desc: {
        marginLeft: '20px',
        textAlign: 'left',
        fontSize: '18px',
    },
    volume: {
        color: 'white',
        width: '100px'
    },
    button: {
        color: 'white'
    }
})

export default function AudioPlayer(props) {
    const { setSamples, start } = props
    const classes = useStyles();
    const fft = 256;
    const [volume, setVolume] = useState(5);
    const [trackIndex, setTrackIndex] = useState(0);
    const [trackProgress, setTrackProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [audioData, setAudioData] = useState(null);
    const [anchorVol, setAnchorVol] = useState(null);
    const open = Boolean(anchorVol);
    const id = open ? 'simple-popper' : undefined;
    // Singleton variable (to ensure initializeAudioAnaylser only calls once)
    const [started, setStarted] = useState(false);
    // Tracks
    const { title, artist, audioSrc, imgSrc } = tracks[trackIndex];

    // Refs
    const audioContext = useRef(null);
    const mediaSource = useRef(null);
    const analyser = useRef(null);
    const audioRef = useRef(new Audio(audioSrc));
    const intervalRef = useRef();

    // Ref values
    const { duration } = audioRef.current;

    // Events
    const handleVolumeClick = (event) => {
        setAnchorVol(anchorVol ? null : event.currentTarget)
    }

    const handleVolumeChange = (event, newValue) => {
        setVolume(newValue);
        audioRef.current.volume = volume / parseFloat(100);
    }

    const togglePlay = () => {
        setIsPlaying(!isPlaying);

        if (!started) {
            setStarted(true);
            initializeAudioAnalyser();
        }
    }

    const toPrevTrack = () => {
        if (trackIndex - 1 < 0) {
            setTrackIndex(tracks.length - 1);
        } else {
            setTrackIndex(trackIndex - 1);
        }
    }

    const toNextTrack = () => {
        if (trackIndex < tracks.length - 1) {
            setTrackIndex(trackIndex + 1);
        } else {
            setTrackIndex(0);
        }
    }

    const startTimer = () => {
        // Clear any timers already running
        clearInterval(intervalRef.current);

        // Call every second
        intervalRef.current = setInterval(() => {
            if (audioRef.current.ended) {
                // Next track
                toNextTrack();
            } else {
                setTrackProgress(audioRef.current.currentTime);
            }
        }, [500]);
    };

    const initializeAudioAnalyser = () => {
        audioContext.current = audioContext.current || new AudioContext();
        mediaSource.current = audioContext.current.createMediaElementSource(audioRef.current);
        analyser.current = audioContext.current.createAnalyser();
        analyser.current.fftSize = fft;
        mediaSource.current.connect(audioContext.current.destination);
        mediaSource.current.connect(analyser.current);
        setAudioData(analyser.current);
    }

    const disconnectAudioAnalyser = () => {
        mediaSource.current.disconnect(audioContext.current.destination);
        mediaSource.current.disconnect(analyser.current);
    }

    const runSpectrum = useCallback(() => {
        if (audioData != null) {
            const bufferLength = audioData.frequencyBinCount;
            const amplitudeArray = new Uint8Array(bufferLength);
            audioData.getByteFrequencyData(amplitudeArray);
            setSamples(amplitudeArray);
        }
        requestAnimationFrame(runSpectrum);
    },
        [audioData]
    );

    // Effects
    useEffect(() => {
        if (!start) return;
        setIsPlaying(true);

        if (!started) {
            setStarted(true);
            initializeAudioAnalyser();
        }
    }, [start])

    useEffect(() => {
        requestAnimationFrame(runSpectrum);
    },
        [runSpectrum]);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.volume = volume / parseFloat(100);
            audioRef.current.play();
            startTimer();
        } else {
            audioRef.current.pause();
        }
    },
        [isPlaying]);

    useEffect(() => {
        if (audioContext.current == null) return;
        audioRef.current.pause();
        audioRef.current = new Audio(audioSrc);
        disconnectAudioAnalyser();
        initializeAudioAnalyser();

        audioRef.current.volume = volume / parseFloat(100);
        audioRef.current.play();
        startTimer();
    },
        [trackIndex, audioSrc]);

    useEffect(() => {
        return function cleanup() {
            if (audioContext.current == null) return;
            audioRef.current.pause();
        }
    }, [])

    return (
        <div>
            <div className={classes.audio}>
                <div className={classes.audio_section}>
                    <img src={imgSrc}
                        alt="Song cover" width="50" height="50"
                    />
                    <div className={classes.desc} >
                        <div><strong>{title}</strong></div>
                        <div>{artist}</div>
                    </div>
                </div>
                <div className={`${classes.audio_section} `}>
                    <div className={classes.audio_left}>
                        <IconButton onClick={toPrevTrack} className={classes.button} style={{ paddingLeft: 0 }}>
                            <SkipPreviousIcon />
                        </IconButton>
                        <IconButton onClick={togglePlay} className={classes.button}>
                            {isPlaying ?
                                <PauseIcon /> :
                                <PlayArrowIcon />}
                        </IconButton>
                        <IconButton onClick={toNextTrack} className={classes.button}>
                            <SkipNextIcon />
                        </IconButton>
                    </div>
                    <div className={classes.audio_right}>
                        <IconButton button aria-describedby={id} className={classes.button} onClick={handleVolumeClick} >
                            <VolumeUp />
                        </IconButton>
                        <Popper id={id} open={open} anchorEl={anchorVol}>
                            <Slider
                                className={classes.volume}
                                value={volume}
                                onChange={handleVolumeChange}
                                min={0}
                                max={100}
                            />
                        </Popper>
                    </div>
                </div>
            </div>
        </div>)
}