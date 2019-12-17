import React from "react";
import "../../style/styles.css";
import {makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Switch from "../Switch";
import VentureStage from "../VentureStage";
import Grid from "@material-ui/core/Grid";
import Grow from "@material-ui/core/Grow";
import List from "@material-ui/core/List";
import Fade from "@material-ui/core/Fade";
// import UpcomingEvents from "../UpcomingEvents";


const useStyles = makeStyles(theme => ({
    navbar: {
        // backgroundColor: '#1F1F1F',
    },

    centerContainer: {
        position: 'relative',
        width: '100%',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },
}));

const exampleMilestones = [
    'Raised $100,000',
    'Had John Doe join the team as our new Chief Technology Officer',
    'Hired our first employee, a Software Engineer.',
    'Had our 1000th customer'
];

export default function Profile(props) {
    const classes = useStyles();
    return (
        <div>
            <Typography weight={"bold"} variant={"h5"} gutterBottom>
                {"Venture Name"}
            </Typography>
            <div className={classes.centerContainer}>
                <Switch isOn={true}/>
            </div>
            <br/>
            <br/>
            <br/>
            <div className={classes.centerContainer}>
                <VentureStage/>
            </div>
            <br/>
            <br/>
            <Grid container
                  direction="row"
                  alignItems="center">
                <Grid container item justify="center" xs={12}>
                    <div>
                        <Typography weight={"bold"} variant={"h5"} gutterBottom>
                            {"Founders"}
                        </Typography>
                        <ul className={'founders'}>
                            <li>John Doe</li>
                            <li>John Doe</li>
                            <li>John Doe</li>
                        </ul>
                    </div>
                </Grid>
                <Grid container item justify="center" xs={12}>
                    <Grow in={true}
                          style={{transformOrigin: '0 0 0'}}
                          {...{timeout: 1000}}>
                        <Typography weight={"bold"} variant={"h5"} gutterBottom>
                            {"Bio"}
                        </Typography>
                    </Grow>
                </Grid>

                <Grid container item justify="center" xs={4}>
                    <Grow in={true}
                          style={{transformOrigin: '0 0 0'}}
                          {...{timeout: 2000}}>
                        <Typography weight={"bold"} variant={"h5"} gutterBottom>
                            {"Industry"}
                        </Typography>
                    </Grow>
                </Grid>
                <Grid container item justify="center" xs={4}>
                    <Grow in={true}
                          style={{transformOrigin: '0 0 0'}}
                          {...{timeout: 2000}}>
                        <Typography weight={"bold"} variant={"h5"} gutterBottom>
                            {"Industry"}
                        </Typography>
                    </Grow>
                </Grid>
                <Grid container item justify="center" xs={4}>
                    <Grow in={true}
                          style={{transformOrigin: '0 0 0'}}
                          {...{timeout: 2000}}>
                        <Typography weight={"bold"} variant={"h5"} gutterBottom>
                            {"Industry"}
                        </Typography>
                    </Grow>
                </Grid>
                <Grid container item justify="center" xs={12}>
                    <Grow in={true}
                          style={{transformOrigin: '0 0 0'}}
                          {...{timeout: 2000}}>
                        <Typography weight={"bold"} variant={"h5"} gutterBottom>
                            {"Milestones"}
                        </Typography>
                    </Grow>
                </Grid>
            </Grid>
        </div>
    )
};