import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import photo from "../../images/beach.jpg";

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

export default function About() {
    const classes = useStyles();

    return <>
        <div className={classes.column}>
            <img className={classes.photo} alt='portrait' src={photo} />
        </div>
        <div className={`${classes.column} ${classes.text}`}>
            <p>Hi, my name is Ray Feng.</p>
            <p>I'm a man of simple taste. I like things such as sports, games and...gasoline.</p>
            <p>I started developing games in 2018 however, I have been a hardcore gamer since the Golden Miniclip era.</p>
            <p>On this site, you'll find a bunch of random games that I made, have some fun and feel free to leave me some comments.</p>
        </div>
    </>
}