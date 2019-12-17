import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Icon from "@material-ui/core/Icon";
import Divider from "@material-ui/core/Divider";
import {Link} from "react-router-dom";

const list = [
    {
        primaryText: "Dashboard",
        icon: "home",
        path: "/dashboard"
    },
    {
        primaryText: "Files",
        icon: "folder",
        path: "/files"
    },
    {
        primaryText: "Statistics",
        icon: "equalizer",
        path: "/statistics"
    },
    {
        primaryText: "Operations",
        icon: "work",
        path: "/operations"
    },
    {
        primaryText: "Resources",
        icon: "note",
        path: "/resources"
    },
    {
        primaryText: "Events",
        icon: "event",
        path: "/events"
    }
];


export default class NavContentEx extends React.Component {

    constructor(props) {
        super(props);
        this.select = props.select;
    }

    render() {
        return (
            <List>
                {list.map(({primaryText, icon, path}, i) => (
                    <ListItem onClick={() => {this.forceUpdate()}} component={Link} to={path} key={primaryText}
                              selected={window.location.pathname === path}
                              button>
                        <ListItemIcon>
                            <Icon>{icon}</Icon>
                        </ListItemIcon>
                        <ListItemText
                            primary={primaryText}
                            primaryTypographyProps={{noWrap: true}}
                        />
                    </ListItem>
                ))}
                <Divider style={{margin: "12px 0"}}/>
                <ListItem onClick={() => {this.forceUpdate()}} component={Link} to={'/settings'}
                          selected={window.location.pathname === '/settings'}
                          button>
                    <ListItemIcon>
                        <Icon>settings</Icon>
                    </ListItemIcon>
                    <ListItemText
                        primary={"Settings"}
                        primaryTypographyProps={{noWrap: true}}
                    />
                </ListItem>
            </List>
        )
    }
};