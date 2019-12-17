import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';
import "../../style/styles.css";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles(theme => ({
    root: {
        height: '70vh',
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

export default function Resources(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <br/>
            <br/>
            <Typography weight={"bold"} variant={"h5"} gutterBottom>
                {"Resources"}
            </Typography>
            <Typography gutterBottom>
                Utilize the resources below to further your venture.
                <br/>
            </Typography>
            <div className={"resourcesContainer"}>
                <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center">
                    <Grid container item justify="center" xs={4}>
                        <Grow in={true}
                              style={{transformOrigin: '0 0 0'}}
                              {...{timeout: 1000}}>
                            <Box boxShadow={3} className={'resources'}>
                                <Link to="">
                                    <div>
                                        <img className={'resourceLogo'} src={'notion.png'}
                                             alt={''}/>
                                    </div>
                                    <div className={'resourcesName'}>
                                        Notion
                                    </div>
                                </Link>
                            </Box>
                        </Grow>
                    </Grid>
                    <Grid container item justify="center" xs={4}>
                        <Grow in={true}
                              style={{transformOrigin: '0 0 0'}}
                              {...{timeout: 1000}}>
                            <Box boxShadow={3} className={'resources'}>
                                <Link to="">
                                    <div>
                                        <img className={'resourceLogo'} src={'drive.png'}
                                             alt={''}/></div>
                                    <div className={'resourcesName'}>
                                        Google Drive
                                    </div>
                                </Link>
                            </Box>
                        </Grow>
                    </Grid>
                    <Grid container item justify="center" xs={4}>
                        <Grow in={true}
                              style={{transformOrigin: '0 0 0'}}
                              {...{timeout: 1000}}>
                            <Box boxShadow={3} className={'resources'}>
                                <Link to="">
                                    <div>
                                        <img className={'resourceLogo'} src={'idea.png'}
                                             alt={''}/>
                                    </div>
                                    <div className={'resourcesName'}>
                                        IDEA Management
                                    </div>
                                </Link>
                            </Box>
                        </Grow>
                    </Grid>
                    <Grid container item justify="center" xs={4}>
                        <Grow in={true}
                              style={{transformOrigin: '0 0 0'}}
                              {...{timeout: 1000}}>
                            <Box boxShadow={3} className={'resources'}>
                                <Link to="">
                                    <div>
                                        <img className={'resourceLogo'} src={'slack.png'}
                                             alt={''}/>
                                    </div>
                                    <div className={'resourcesName'}>
                                        Slack
                                    </div>
                                </Link>
                            </Box>
                        </Grow>
                    </Grid>
                    <Grid container item justify="center" xs={4}>
                        <Grow in={true}
                              style={{transformOrigin: '0 0 0'}}
                              {...{timeout: 1000}}>
                            <Box boxShadow={3} className={'resources'}>
                                <Link to="">
                                    <div>
                                        <img className={'resourceLogo'} src={'aws.png'}
                                             alt={''}/>
                                    </div>
                                    <div className={'resourcesName'}>
                                        AWS / Google Cloud Credit
                                    </div>
                                </Link>
                            </Box>
                        </Grow>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}