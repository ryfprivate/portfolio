import React from 'react';
import "./Modal.css";

import photo from "../../images/beach_cropped.jpg";

export default function About() {
    return <div>
        <div className="column">
            <img className="photo--about" alt='portrait' src={photo} />
        </div>
        <div className="column text">
            <p className="title">Hi, my name is Ray Feng.</p>
            <p>I'm a man of simple taste. I like things such as movies, games and...gasoline.</p>
            <p>I believe when you create something, you are leaving behind an essence of your soul. I want to keep doing that
            for as long as I can until maybe someday, all parts of my soul exist somewhere in the form of one of my creations.
            Then, when I inevitably lose my body to time, my spirit still lives on through the pieces of my legacy that I have
            left behind. That is when I have achieved true immortality...
            </p>
            <p>Hence, this website serves as a vessel for some of my creations. I love playing games and especially love making
            them, so feel free to check them out and maybe even leave me your thoughts on them.
            </p>
        </div>
    </div>
}