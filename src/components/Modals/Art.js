import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: '2em'
    }
}));

export default function Art() {
    const classes = useStyles();

    return <div>
        <h2 className={classes.title} >Art</h2>
        <h3>Coming soon...</h3>
    </div>
}