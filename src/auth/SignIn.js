import React, {useState} from 'react';
import "../style/styles.css";
import {useAuth0} from "./react-auth0-spa";
import {Link} from "react-router-dom";


export default function SignIn(props) {
    const {isAuthenticated} = useAuth0();
    return (
        <div>
            {isAuthenticated && (
                <span>
                    <Link to="/dashboard"/>
                </span>
            )}
        </div>
    );
}