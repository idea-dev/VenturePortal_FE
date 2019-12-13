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
import FooterEx from "./components/FooterEx";
import Typography from "@material-ui/core/Typography";

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

export default function Resources(props) {
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
                    </Content>
                    <Sidebar>
                        {({collapsed}) => (
                            <>
                                <NavHeaderEx collapsed={collapsed}/>
                                <div className={sidebarStyles.container}>
                                    {data.nav && <NavContentEx select={4}/>}
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