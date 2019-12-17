import React from "react";
import "../../style/styles.css";
import {makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';
import Button from "@material-ui/core/Button"; // Import css


const useStyles = makeStyles(theme => ({
    root: {
        height: '75vh',
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
}));

export default function Settings(props) {
    const classes = useStyles();

    function submit() {
        confirmAlert({
            title: 'Confirm Deactivation',
            message: 'Are you sure you want to deactivate your venture?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => alert('Click Yes')
                },
                {
                    label: 'No',
                    onClick: () => alert('Click No')
                }
            ]
        });
    };

    return (
        <div className={classes.root}>
            <Typography weight={"bold"} variant={"h5"} gutterBottom>
                {"Settings"}
            </Typography>
            <div style={{margin: '10%'}} className='container'>
                <Button color={"secondary"} onClick={submit}>Deactivate Venture</Button>
            </div>

        </div>
    );
}