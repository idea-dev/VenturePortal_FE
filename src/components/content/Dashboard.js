import React from "react";
import "../../style/styles.css";
import {makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Switch from "../subcomp/Switch";
import VentureStage from "../subcomp/VentureStage";
// import UpcomingEvents from "../UpcomingEvents";


const useStyles = makeStyles(theme => ({
    navbar: {
        // backgroundColor: '#1F1F1F',
    },
    root: {
        padding: 16,
        [theme.breakpoints.up("sm")]: {
            padding: 24,
            maxWidth: 500,
            margin: "auto"
        },
        [theme.breakpoints.up("md")]: {
            maxWidth: 700
        },
    },

    centerContainer: {
        position: 'relative',
        width: '100%',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    }
}));

export default function Dashboard(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography gutterBottom>
                <b>Version 1.0</b>
            </Typography>
            <div className={classes.centerContainer}>
                <div>
                    Venture State
                </div>
                <Switch isOn={true} />
            </div>
            <br/>
            <br/>
            <br/>
            <div className={classes.centerContainer}>
                <VentureStage />
            </div>
            <br/>
            <br/>
            <br/>
            <Typography weight={"bold"} variant={"h5"} gutterBottom>
                {"Welcome to IDEA's Venture Portal"}
            </Typography>
            <Typography gutterBottom>
                We wanted to create a platform to help you manage your
                venture's files, operations, progress, and to help you keep track of upcoming events.
                Here you go!

                <br/>
            </Typography>
            <br/>
            <br/>
            <br/>
            <Typography weight={"bold"} variant={"h5"} gutterBottom>
                {"Upcoming Events"}
            </Typography>
            <div className={classes.centerContainer}>
                {/*<UpcomingEvents />*/}
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    );
}