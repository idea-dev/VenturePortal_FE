import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';
import "../../style/styles.css";
import Grid from "@material-ui/core/Grid";
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import BorderClearIcon from '@material-ui/icons/BorderClear';
import Box from "@material-ui/core/Box";
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import Typography from "@material-ui/core/Typography";
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import Add from '@material-ui/icons/Add';
import People from '@material-ui/icons/People';
import Help from '@material-ui/icons/Help';


const useStyles = makeStyles(theme => ({
    root: {
        height: '120vh',
    },
    container: {
        display: 'flex',
        margin: theme.spacing(6),
    },
    paper: {
        margin: theme.spacing(1),
    },
    svg: {
        width: 100,
        height: 100,
    },
    polygon: {
        fill: theme.palette.common.white,
        stroke: theme.palette.divider,
        strokeWidth: 1,
    },
}));

const ventureFunctions = [
    {
        'functionName': 'Connection Request',
        'icon': RecordVoiceOverIcon,
        'link': 'https://airtable.com/shrk1DiZ7BahAMbUt'
    },
    {
        'functionName': 'Co-Founder Match',
        'icon': SupervisedUserCircleIcon,
        'link': ''
    },
    {
        'functionName': 'Legal Help',
        'icon': BusinessCenterIcon,
        'link': 'https://www.notion.so/Legal-Officer-3a6ba65f21214e46ae9fc5465c8aed94'
    },
    {
        'functionName': 'Milestone Update',
        'icon': Add,
        'link': ''
    },
    {
        'functionName': 'Peer Mentor Search',
        'icon': EmojiPeopleIcon,
        'link': ''
    },
    {
        'functionName': 'Suggest New...',
        'icon': Help,
        'link': ''
    },
];

const applicationFunctions = [
    {'functionName': 'Gap Funding Application', 'icon': RecordVoiceOverIcon, 'link': ''},
    {'functionName': 'Prototype Funding Application', 'icon': BorderClearIcon, 'link': ''},
    {'functionName': 'Management Team Application', 'icon': People, 'link': ''},
];

const mosaicFunctions = [
    {'functionName': 'Design Help (Scout)', 'icon': '/scout.png', 'link': ''},
    {'functionName': 'Prototype Help (Generate)', 'icon': '/generate.png', 'link': ''},
    {'functionName': 'Deep Tech (Origin)', 'icon': '/origin.png', 'link': ''},
    {'functionName': 'Close Mentoring (VMN)', 'icon': '/vmn.png', 'link': ''},
];

export default function Operations(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <br/>
            <br/>
            <Typography weight={"bold"} variant={"h5"} gutterBottom>
                {"Operations"}
            </Typography>
            <div className={classes.container}>
                <div className={"operations-container"}>
                    <Typography className={'operationHeader'} weight={"bold"} variant={"h6"}
                                gutterBottom>Venture Functions</Typography>
                    <div className={'operationSection'}>
                        <Grid container
                              direction="row"
                              alignItems="center">
                            {ventureFunctions.map(({functionName, icon, link}, i) => (
                                <Grid key={i} container item justify="center" xs={(12 / ventureFunctions.length)}>
                                    <Grow in={true}
                                          style={{transformOrigin: '0 0 0'}}
                                          {...{timeout: 1000 * i}}>
                                        <Box boxShadow={3} className={'operation'}>
                                            <a href={link}>
                                                <div>
                                                    {React.createElement(icon, {className: 'op-icon'})}
                                                </div>
                                                <div className={'operationName'}>
                                                    {functionName}
                                                </div>
                                            </a>
                                        </Box>
                                    </Grow>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                    <Typography className={'operationHeader'} weight={"bold"} variant={"h6"}
                                gutterBottom>Applications</Typography>
                    <div className={'operationSection'}>
                        <Grid container
                              direction="row"
                              alignItems="center">
                            {applicationFunctions.map(({functionName, icon, link}, i) => (
                                <Grid key={i} container item justify="center" xs={(12 / applicationFunctions.length)}>
                                    <Grow in={true}
                                          style={{transformOrigin: '0 0 0'}}
                                          {...{timeout: 1000 * i}}>
                                        <Box boxShadow={3} className={'operation'}>
                                            <a href={link}>
                                                <div>
                                                    {React.createElement(icon, {className: 'op-icon'})}
                                                </div>
                                                <div className={'operationName'}>
                                                    {functionName}
                                                </div>
                                            </a>
                                        </Box>
                                    </Grow>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                    <Typography className={'operationHeader'} weight={"bold"} variant={"h6"}
                                gutterBottom>Mosaic Support</Typography>
                    <div className={'operationSection'}>
                        <Grid container
                              direction="row"
                              alignItems="center">
                            {mosaicFunctions.map(({functionName, icon, link}, i) => (
                                <Grid key={i} container item justify="center" xs={(12 / mosaicFunctions.length)}>
                                    <Grow in={true}
                                          style={{transformOrigin: '0 0 0'}}
                                          {...{timeout: 1000 * i}}>
                                        <Box boxShadow={3} className={'operation'}>
                                            <a href={link}>
                                                <div>
                                                    <img className={'mosaicLogo'} src={icon}/>
                                                </div>
                                                <div className={'operationName'}>
                                                    {functionName}
                                                </div>
                                            </a>
                                        </Box>
                                    </Grow>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </div>
            </div>
        </div>
    );
}