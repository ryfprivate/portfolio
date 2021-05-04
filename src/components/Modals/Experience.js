import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import hf from "../../images/human.jfif";
import fairvine from "../../images/fairvine.jpg";
import unimelb from "../../images/unimelb.png";

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
        fontSize: '1.2em',
        minHeight: '250px'
    },
    photo: {
        marginTop: '20px',
        height: '60%',
        width: '60%',
    },
    title: {
        fontSize: '2em'
    },
    heading: {
        marginBottom: '5px'
    }
}));

export default function Experience() {
    const classes = useStyles();

    return <div>
        <h2 className={classes.title}>My Experience</h2>
        <div className={classes.column}>
            <img className={classes.photo} alt='portrait' src={hf} />
        </div>
        <div className={`${classes.column} ${classes.text}`}>
            <h3 className={classes.heading}>Human Financial Pty Ltd</h3>
            <div className={classes.heading}><strong>Software Engineer</strong></div>
            <div>Sydney, NSW</div>
            <p>Developed the frontend and backend for a rewards platform allowing users to earn money to their superannuation by shopping.</p>
        </div>

        <div className={classes.column}>
            <img className={classes.photo} alt='portrait' src={fairvine} />
        </div>
        <div className={`${classes.column} ${classes.text}`}>
            <h3 className={classes.heading}>FairVine Super</h3>
            <div className={classes.heading}><strong>Software Intern</strong></div>
            <div>Sydney, NSW</div>
            <p>Super fund based in Bondi Junction in Sydney.</p>
        </div>

        <div className={classes.column}>
            <img className={classes.photo} alt='portrait' src={unimelb} />
        </div>
        <div className={`${classes.column} ${classes.text}`}>
            <h3 className={classes.heading}>University of Melbourne</h3>
            <div className={classes.heading}><strong>Bachelor of Science</strong></div>
            <div>Melbourne, VIC</div>
            <p>Majored in Computing and Software Systems.</p>
        </div>

    </div>
}