// src/App.js

import React from "react";
import {useAuth0} from "./components/react-auth0-spa";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard";
import Resources from "./Resources";
import Operations from "./Operations";
import Events from "./Events";
import Statistics from "./Statistics";
import PrivateRoute from "./PrivateRoute";
import {Switch} from "react-bootstrap";
import history from "./utils/history";
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
    const {loading} = useAuth0();
    const {isAuthenticated} = useAuth0();
    //
    if (loading) {
        return <div className={'loadingDiv'}>
            <img src={'idea.png'} className="ideaLoading">
            </img>
            <p style={{marginTop: '20px'}}>
                IDEA: Northeastern University's Venture Accelerator
            </p>
        </div>;
    }

    return (
        <div className="App">
            <Router history={history}>
                {!isAuthenticated && (
                    <Route path="/" exact component={SignIn}/>
                )}
                <Switch>
                    <PrivateRoute path="/registration" component={SignUp}/>
                    <PrivateRoute path="/file" component={Dashboard}/>
                    <PrivateRoute path="/statistics" component={Statistics}/>
                    <PrivateRoute path="/operations" component={Operations}/>
                    <PrivateRoute path="/resources" component={Resources}/>
                    <PrivateRoute path="/events" component={Events}/>
                    <PrivateRoute path="/settings" component={Dashboard}/>
                    <PrivateRoute path="/dashboard" component={Dashboard}/>
                    <PrivateRoute path="/" exact component={Dashboard}/>
                </Switch>
            </Router>
        </div>

    );
}

export default App;