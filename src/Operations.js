import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import {
    Root,
    Header,
    Sidebar,
    Content,
    CollapseBtn,
    CollapseIcon,
    SidebarTrigger,
    SidebarTriggerIcon, Footer
} from "@mui-treasury/layout";
import {
    defaultLayoutPreset,
    standardLayoutPreset,
    fixedLayoutPreset,
    contentBasedLayoutPreset,
    cozyLayoutPreset,
    muiTreasuryPreset
} from "@mui-treasury/layout/presets";

import NavContentEx from "./components/NavContentEx";
import NavHeaderEx from "./components/NavHeaderEx";
import HeaderEx from "./components/HeaderEx";
import "./style/styles.css";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import Icon from "@material-ui/core/Icon";
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import BorderClearIcon from '@material-ui/icons/BorderClear';
import Box from "@material-ui/core/Box";
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import FooterEx from "./components/FooterEx";
import Typography from "@material-ui/core/Typography";
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';

const presets = {
    createDefaultLayout: defaultLayoutPreset,
    createStandardLayout: standardLayoutPreset,
    createFixedLayout: fixedLayoutPreset,
    createContentBasedLayout: contentBasedLayoutPreset,
    createCozyLayout: cozyLayoutPreset,
    createMuiTreasuryLayout: muiTreasuryPreset
};


const useStyles = makeStyles(theme => ({
    root: {
        height: 180,
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

export default function Operations(props) {
    const classes = useStyles();
    const [preset, setPreset] = useState("createStandardLayout");
    const [data, setData] = useState({
        header: true,
        nav: true,
        content: true,
        footer: true
    });

    return (
        <Root config={presets[preset]}>
            {({headerStyles, sidebarStyles}) => (
                <>
                    <CssBaseline/>
                    <Header className={classes.navbar}>
                        <Toolbar>
                            <CollapseBtn
                                component={IconButton}
                                className={headerStyles.leftTrigger}
                            >
                                <CollapseIcon/>
                            </CollapseBtn>
                            <SidebarTrigger className={headerStyles.leftTrigger}>
                                <SidebarTriggerIcon/>
                            </SidebarTrigger>
                            {data.header && <HeaderEx/>}
                        </Toolbar>
                    </Header>
                    <Content>
                        <div className={classes.root}>
                            <div className={classes.container}>
                                <div className={"operations-container"}>

                                    <Typography className={'operationHeader'} weight={"bold"} variant={"h6"}
                                                gutterBottom>Funding</Typography>
                                    <div className={'operationSection'}>
                                        <Grid container
                                              direction="row"
                                              justify="center"
                                              alignItems="center">
                                            <Grid container item justify="center" xs={6}>
                                                <Grow in={true}
                                                      style={{transformOrigin: '0 0 0'}}
                                                      {...{timeout: 1000}}>
                                                    <Box boxShadow={3} className={'operation'}>

                                                        <Link to="">
                                                            <div>
                                                                <Icon className={'op-icon'}>redo</Icon>
                                                            </div>
                                                            <div className={'operationName'}>
                                                                Gap Fund Application
                                                            </div>
                                                        </Link>
                                                    </Box>
                                                </Grow>
                                            </Grid>
                                            <Grid container item justify="center" xs={6}>
                                                <Grow in={true}
                                                      style={{transformOrigin: '0 0 0'}}
                                                      {...{timeout: 2000}}>
                                                    <Box boxShadow={3} className={'operation'}>

                                                        <Link to="">
                                                            <div>
                                                                <BorderClearIcon className={'op-icon'}/>
                                                            </div>
                                                            <div className={'operationName'}>
                                                                Prototype Fund Application
                                                            </div>
                                                        </Link>
                                                    </Box>
                                                </Grow>
                                            </Grid>
                                        </Grid>
                                    </div>
                                    <Typography className={'operationHeader'} weight={"bold"} variant={"h6"}
                                                gutterBottom>Venture Functions</Typography>
                                    <div className={'operationSection'}>
                                        <Grid container
                                              direction="row"
                                              justify="center"
                                              alignItems="center">
                                            <Grid container item justify="center" xs={2}>
                                                <Grow in={true}
                                                      style={{transformOrigin: '0 0 0'}}
                                                      {...{timeout: 1000}}>
                                                    <Box boxShadow={3} className={'operation'}>

                                                        <Link to="">
                                                            <div>
                                                                <RecordVoiceOverIcon className={'op-icon'} />
                                                            </div>
                                                            <div className={'operationName'}>
                                                                Connection Request
                                                            </div>
                                                        </Link>
                                                    </Box>
                                                </Grow>
                                            </Grid>
                                            <Grid container item justify="center" xs={2}>
                                                <Grow in={true}
                                                      style={{transformOrigin: '0 0 0'}}
                                                      {...{timeout: 1000}}>
                                                    <Box boxShadow={3} className={'operation'}>

                                                        <Link to="">
                                                            <div>
                                                                <SupervisedUserCircleIcon className={'op-icon'} />
                                                            </div>
                                                            <div className={'operationName'}>
                                                                Co-Founder Match
                                                            </div>
                                                        </Link>
                                                    </Box>
                                                </Grow>
                                            </Grid>
                                            <Grid container item justify="center" xs={2}>
                                                <Grow in={true}
                                                      style={{transformOrigin: '0 0 0'}}
                                                      {...{timeout: 1000}}>
                                                    <Box boxShadow={3} className={'operation'}>

                                                        <Link to="">
                                                            <div>
                                                                <BusinessCenterIcon className={'op-icon'} />
                                                            </div>
                                                            <div className={'operationName'}>
                                                                Legal Help
                                                            </div>
                                                        </Link>
                                                    </Box>
                                                </Grow>
                                            </Grid>
                                            <Grid container item justify="center" xs={2}>
                                                <Grow in={true}
                                                      style={{transformOrigin: '0 0 0'}}
                                                      {...{timeout: 2000}}>
                                                    <Box boxShadow={3} className={'operation'}>

                                                        <Link to="">
                                                            <div>
                                                                <Icon className={'op-icon'}>add</Icon>
                                                            </div>
                                                            <div className={'operationName'}>
                                                                Milestone Update
                                                            </div>
                                                        </Link>
                                                    </Box>
                                                </Grow>
                                            </Grid>
                                            <Grid container item justify="center" xs={2}>
                                                <Grow in={true}
                                                      style={{transformOrigin: '0 0 0'}}
                                                      {...{timeout: 3000}}>
                                                    <Box boxShadow={3} className={'operation'}>
                                                        <Link to="">
                                                            <div>
                                                                <EmojiPeopleIcon className={'op-icon'}/>
                                                            </div>
                                                            <div className={'operationName'}>
                                                                Peer Mentor Search
                                                            </div>
                                                        </Link>
                                                    </Box>
                                                </Grow>
                                            </Grid>
                                        </Grid>
                                    </div>
                                    <Typography className={'operationHeader'} weight={"bold"} variant={"h6"}
                                                gutterBottom>Mosaic Support</Typography>
                                    <div className={'operationSection'}>
                                        <Grid container
                                              direction="row"
                                              justify="center"
                                              alignItems="center">
                                            <Grid container item justify="center" xs={4}>
                                                <Grow in={true}
                                                      style={{transformOrigin: '0 0 0'}}
                                                      {...{timeout: 1000}}>
                                                    <Box boxShadow={3} className={'operation'}>
                                                        <Link to="https://web.northeastern.edu/scout/">
                                                            <div>
                                                                <img className={'mosaicLogo'} src={'scout.png'}
                                                                     alt={''}/>
                                                            </div>
                                                            <div className={'operationName'}>
                                                                Design Help (Scout)
                                                            </div>
                                                        </Link>
                                                    </Box>
                                                </Grow>
                                            </Grid>
                                            <Grid container item justify="center" xs={4}>
                                                <Grow in={true}
                                                      style={{transformOrigin: '0 0 0'}}
                                                      {...{timeout: 2000}}>
                                                    <Box boxShadow={3} className={'operation'}>
                                                        <Link to="https://web.northeastern.edu/generate/">
                                                            <div>
                                                                <img className={'mosaicLogo'} src={'generate.png'}
                                                                     alt={''}/>
                                                            </div>
                                                            <div className={'operationName'}>
                                                                Prototype Help (Generate)
                                                            </div>
                                                        </Link>
                                                    </Box>
                                                </Grow>
                                            </Grid>
                                            <Grid container item justify="center" xs={4}>
                                                <Grow in={true}
                                                      style={{transformOrigin: '0 0 0'}}
                                                      {...{timeout: 3000}}>
                                                    <Box boxShadow={3} className={'operation'}>
                                                        <Link to="https://www.northeastern.edu/vmn/">
                                                            <div>
                                                                <img className={'mosaicLogo'} src={'vmn.png'} alt={''}/>
                                                            </div>
                                                            <div className={'operationName'}>
                                                                Close Mentoring (VMN)
                                                            </div>
                                                        </Link>
                                                    </Box>
                                                </Grow>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Content>
                    <Sidebar>
                        {({collapsed}) => (
                            <>
                                <NavHeaderEx collapsed={collapsed}/>
                                <div className={sidebarStyles.container}>
                                    {data.nav && <NavContentEx select={3}/>}
                                </div>
                                <CollapseBtn className={sidebarStyles.collapseBtn}>
                                    <CollapseIcon/>
                                </CollapseBtn>
                            </>
                        )}
                    </Sidebar>
                </>
            )}
        </Root>
    );
}