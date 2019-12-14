import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';
import "../../style/styles.css";
import ProgressStatistics from "../stats/ProgressStatistics";
import RadarStatistics from "../stats/RadarStatistics";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import FundingComparison from "../stats/FundingComparison";
import TalentSplit from "../stats/TalentSplit";
import BarComparison from "../stats/BarComparison";
import CharWithDomain from "../stats/CharWithDomain";


const useStyles = makeStyles(theme => ({
    root: {
        height: 180,
    },
    container: {
        display: 'flex',
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

export default function Statistics(props) {
    const classes = useStyles();
    const gridSize = 4;
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      className={"statistics-container"}>
                    <Grid container item justify="center" xs={4}>
                        <Grow in={true}>
                            <Box boxShadow={3} className={'stat'}>
                                <RadarStatistics/>
                            </Box>
                        </Grow>
                    </Grid>
                    <Grid container item justify="center" xs={8}>
                        <Grow
                            in={true}
                            style={{transformOrigin: '0 0 0'}}
                            {...{timeout: 1000}}
                        >
                            <Box boxShadow={3} className={'stat'}>
                                <ProgressStatistics/>
                            </Box>
                        </Grow>
                    </Grid>
                    <Grid container item justify="center" xs={gridSize}>

                        <Grow
                            in={true}
                            style={{transformOrigin: '0 0 0'}}
                            {...{timeout: 2000}}
                        >
                            <Box boxShadow={3} className={'stat'}>
                                <BarComparison/>
                            </Box>
                        </Grow>
                    </Grid>
                    <Grid container item justify="center" xs={gridSize}>

                        <Grow
                            in={true}
                            style={{transformOrigin: '0 0 0'}}
                            {...{timeout: 3000}}
                        >
                            <Box boxShadow={3} className={'stat'}>
                                <FundingComparison/>
                            </Box>
                        </Grow>
                    </Grid>
                    <Grid container item justify="center" xs={gridSize}>

                        <Grow
                            in={true}
                            style={{transformOrigin: '0 0 0'}}
                            {...{timeout: 4000}}
                        >
                            <Box boxShadow={3} className={'stat'}>
                                <ProgressStatistics/>
                            </Box>
                        </Grow>
                    </Grid>
                    <Grid container item justify="center" xs={6}>
                        <Grow
                            in={true}
                            style={{transformOrigin: '0 0 0'}}
                            {...{timeout: 5000}}
                        >
                            <Box boxShadow={3} className={'stat'}>
                                <CharWithDomain/>
                            </Box>
                        </Grow>
                    </Grid>
                    <Grid container item justify="center" xs={6}>
                        <Grow
                            in={true}
                            style={{transformOrigin: '0 0 0'}}
                            {...{timeout: 6000}}
                        >
                            <Box boxShadow={3} className={'stat'}>
                                <TalentSplit/>
                            </Box>
                        </Grow>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}