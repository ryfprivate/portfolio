import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: '2em'
    }
}));

export default function Games() {
    const classes = useStyles();

    return <div>
        <h2 className={classes.title} >Games</h2>
    </div>
}