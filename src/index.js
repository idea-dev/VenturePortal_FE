import React, {useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";


import "./style/styles.css";
import SignIn from "./SignIn";
import Dashboard from "./Dashboard";
import SignUp from "./SignUp";
import Typography from "@material-ui/core/Typography";
import * as ReactDOM from "react-dom";
import Statistics from "./Statistics";
import Operations from "./Operations";
import Events from "./Events";
import Resources from "./Resources";

// add presets.create{}() to config props in Root to change the behavior, looking and layout
// <Root config={presets.createCozyLayout()}> ...
function App() {
    const [loading, setLoading] = useState(false);

    return loading ? (
        <div
            style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Typography variant={"h2"}>Changing Preset...</Typography>
        </div>
    ) : (
        <Router>
            <Switch>
                <Route path="/" exact component={SignIn}/>
                <Route path="/register" component={SignUp}/>
                <Route path="/dashboard" component={Dashboard} isPrivate/>
                <Route path="/resources" component={Resources} isPrivate/>
                <Route path="/operations" component={Operations} isPrivate/>
                <Route path="/events" component={Events} isPrivate/>
                <Route path="/statistics" component={Statistics} isPrivate/>
                <Route path="/files" component={Dashboard} isPrivate/>
                {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
                <Route component={SignIn}/>
            </Switch>
        </Router>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
