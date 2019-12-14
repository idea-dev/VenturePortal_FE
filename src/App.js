// src/App.js

import React, {useState} from "react";
import {useAuth0} from "./auth/react-auth0-spa";
import SignIn from "./auth/SignIn";
import Dashboard from "./components/content/Dashboard";
import Resources from "./components/content/Resources";
import Operations from "./components/content/Operations";
import Events from "./components/content/Events";
import Statistics from "./components/content/Statistics";
import PrivateRoute from "./auth/PrivateRoute";
import {Switch} from "react-bootstrap";
import history from "./utils/history";
import {BrowserRouter as Router, Route} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
    CollapseBtn,
    CollapseIcon,
    Content, Footer,
    Header, Root,
    Sidebar,
    SidebarTrigger,
    SidebarTriggerIcon
} from "@mui-treasury/layout";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import HeaderEx from "./components/HeaderEx";
import NavHeaderEx from "./components/NavHeaderEx";
import NavContentEx from "./components/NavContentEx";
import FooterEx from "./components/FooterEx";
import {
    defaultLayoutPreset,
    standardLayoutPreset,
    fixedLayoutPreset,
    contentBasedLayoutPreset,
    cozyLayoutPreset,
    muiTreasuryPreset
} from "@mui-treasury/layout/presets";

const presets = {
    createDefaultLayout: defaultLayoutPreset,
    createStandardLayout: standardLayoutPreset,
    createFixedLayout: fixedLayoutPreset,
    createContentBasedLayout: contentBasedLayoutPreset,
    createCozyLayout: cozyLayoutPreset,
    createMuiTreasuryLayout: muiTreasuryPreset
};


function App() {
    const {loading} = useAuth0();
    const {isAuthenticated} = useAuth0();
    const [preset] = useState("createStandardLayout");

    if (loading) {
        return <div className={'loadingDiv'}>
            <img alt={'logo'} src={'idea.png'} className="ideaLoading">
            </img>
            <p style={{marginTop: '20px'}}>
                IDEA: Northeastern University's Venture Accelerator
            </p>
        </div>;
    }

    return (
        <Router history={history}>
            <div className="App">
                <Root config={presets[preset]}>
                    {({headerStyles, sidebarStyles}) => (
                        <>
                            <CssBaseline/>
                            <Header>
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
                                    <HeaderEx/>
                                </Toolbar>
                            </Header>
                            <Content>
                                {!isAuthenticated && (
                                    <Route path="/" exact component={SignIn}/>
                                )}
                                <Switch>
                                    <PrivateRoute path="/registration" component={Dashboard}/>
                                    <PrivateRoute path="/file" component={Dashboard}/>
                                    <PrivateRoute path="/statistics" component={Statistics}/>
                                    <PrivateRoute path="/operations" component={Operations}/>
                                    <PrivateRoute path="/resources" component={Resources}/>
                                    <PrivateRoute path="/events" component={Events}/>
                                    <PrivateRoute path="/settings" component={Dashboard}/>
                                    <PrivateRoute path="/dashboard" component={Dashboard}/>
                                    <PrivateRoute path="/" exact component={Dashboard}/>
                                </Switch>
                            </Content>
                            <Sidebar>
                                {({collapsed}) => (
                                    <>
                                        <NavHeaderEx collapsed={collapsed}/>
                                        <div className={sidebarStyles.container}>
                                            <NavContentEx select={0}/>}
                                        </div>
                                        <CollapseBtn className={sidebarStyles.collapseBtn}>
                                            <CollapseIcon/>
                                        </CollapseBtn>
                                    </>
                                )}
                            </Sidebar>
                            <Footer className={'footer'}><br/>
                            <FooterEx/>
                            </Footer>
                        </>
                    )}
                </Root>
            </div>
        </Router>

    );
}

export default App;