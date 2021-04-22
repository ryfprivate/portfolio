import React from 'react';

import ladyMp3 from '../audio/Lady.mp3';

export default function AudioPlayer(props) {
    return (
        <audio
            ref={props.audioRef}
            crossOrigin="anonymous"
            preload="auto"
            autoPlay={true}
            controls={true}
            src={ladyMp3}
        >
        </audio>)
}