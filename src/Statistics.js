import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import {
    Root,
    Header,
    Sidebar,
    Content,
    Footer,
    CollapseBtn,
    CollapseIcon,
    SidebarTrigger,
    SidebarTriggerIcon
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
import ContentEx from "./components/ContentEx";
import FooterEx from "./components/FooterEx";

import "./style/styles.css";
import ProgressStatistics from "./components/stats/ProgressStatistics";
import RadarStatistics from "./components/stats/RadarStatistics";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import FundingComparison from "./components/stats/FundingComparison";
import TalentSplit from "./components/stats/TalentSplit";
import BarComparison from "./components/stats/BarComparison";
import CharWithDomain from "./components/stats/CharWithDomain";

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
    const [loading, setLoading] = useState(false);
    const [preset, setPreset] = useState("createStandardLayout");
    const [data, setData] = useState({
        header: true,
        nav: true,
        content: true,
        footer: true
    });
    const gridSize = 4;
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked(prev => !prev);
    };
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
                                                <BarComparison />
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
                                                <TalentSplit />
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
                                    {data.nav && <NavContentEx select={2}/>}
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