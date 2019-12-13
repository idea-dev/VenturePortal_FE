import React, {useState} from "react";
import ReactDOM from "react-dom";
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
import {makeStyles} from "@material-ui/core";
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
        }
    },
    calendar: {
        borderWidth: 0,
        minWidth: '100%',
        minHeight: '400px',
        frameBorder: 0,
        scrolling: "no"
    }
}));

export default function Dashboard(props) {
    const classes = useStyles();
    const [loading, setLoading] = useState(false);
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
                            <Typography weight={"bold"} variant={"h5"} gutterBottom>
                                {"IDEA Events"}
                            </Typography>
                            <br/>
                            <br/>
                            <br/>

                            <div>
                            <iframe
                                src="https://calendar.google.com/calendar/b/2/embed?height=500&amp;wkst=2&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=aWRlYW5ldUBnbWFpbC5jb20&amp;color=%23c24a00&amp;showTz=1&amp;showTabs=1&amp;showPrint=0&amp;showDate=1&amp;showNav=1&amp;title=IDEA%20Venture%20Calendar"
                                className={classes.calendar}/>
                            </div>
                            <br/>
                            <br/>
                        </div>
                    </Content>
                    <Sidebar>
                        {({collapsed}) => (
                            <>
                                <NavHeaderEx collapsed={collapsed}/>
                                <div className={sidebarStyles.container}>
                                    {data.nav && <NavContentEx select={5}/>}
                                </div>
                                <CollapseBtn className={sidebarStyles.collapseBtn}>
                                    <CollapseIcon/>
                                </CollapseBtn>
                            </>
                        )}
                    </Sidebar>
                    <Footer>{data.footer && <FooterEx/>}</Footer>
                </>
            )}
        </Root>
    );
}