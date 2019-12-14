import React, { useState } from "react";
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
    const [value, setValue] = useState(false);

    return (
        <Root config={presets[preset]}>
            {({ headerStyles, sidebarStyles }) => (
                <>
                    <CssBaseline />
                    <Header className={classes.navbar}>
                        <Toolbar>
                            <CollapseBtn
                                component={IconButton}
                                className={headerStyles.leftTrigger}
                            >
                                <CollapseIcon />
                            </CollapseBtn>
                            <SidebarTrigger className={headerStyles.leftTrigger}>
                                <SidebarTriggerIcon />
                            </SidebarTrigger>
                            {data.header && <HeaderEx />}
                        </Toolbar>
                    </Header>
                    <Content>
                        {data.content && <ContentEx />}
                    </Content>
                    <Sidebar>
                        {({ collapsed }) => (
                            <>
                                <NavHeaderEx collapsed={collapsed} />
                                <div className={sidebarStyles.container}>
                                    {data.nav && <NavContentEx select={0} />}
                                </div>
                                <CollapseBtn className={sidebarStyles.collapseBtn}>
                                    <CollapseIcon />
                                </CollapseBtn>
                            </>
                        )}
                    </Sidebar>
                    <Footer>{data.footer && <FooterEx />}</Footer>
                </>
            )}
        </Root>
    );
}