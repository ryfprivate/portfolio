import React from 'react';

import ladyMp3 from '../audio/Lady.mp3';

export default function AudioPlayer(props) {

    const play = () => {
        let context = new AudioContext();
        context.resume();
        props.audioRef.current.play();
    }
    return (
        <div>
            <audio
                ref={props.audioRef}
                crossOrigin="anonymous"
                preload="auto"
                autoPlay={true}
                controls={true}
                src={ladyMp3}
            >
            </audio>
            <button onClick={play}>Play</button>
        </div>)
}