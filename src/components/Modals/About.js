import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import photo from "../../images/beach.jpg";

const useStyles = makeStyles(() => ({
    column: {
        float: 'left',
        width: '50%',
    },
    text: {
        textAlign: 'left',
        fontSize: '1.5em',
    },
    photo: {
        height: '60%',
        width: '60%',
    }
}));

export default function About() {
    const classes = useStyles();

    return <div>
        <div className={classes.column}>
            <img className={classes.photo} alt='portrait' src={photo} />
        </div>
        <div className={`${classes.column} ${classes.text}`}>
            <p>Hi, my name is Ray Feng.</p>
            <p>I'm a man of simple taste. I like things such as sports, games and...gasoline.</p>
            <p>I started developing games in 2018 however, I have been a hardcore gamer since the Golden Miniclip era.</p>
            <p>On this site, you'll find a bunch of my random creations.</p>
        </div>
    </div>
}