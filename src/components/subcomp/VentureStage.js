import * as React from "react";
import ListItemText from "@material-ui/core/ListItemText";

const list = [
    {
        primaryText: "Ready",
        color: "work",

    },
    {
        primaryText: "Set",
        color: "work",
    },
    {
        primaryText: "Go",
        color: "work",
    },
];


export default class VentureStage extends React.Component {

    constructor(props) {
        super(props);
        this.stage = 0;
    }

    render() {
        return <ul className={'ventureStage'}>
            {list.map(({primaryText, icon, path}, i) => (
                <li className={i === this.stage ? 'ventureStage-selected' : 'ventureStage-li'} key={primaryText}>
                    <ListItemText
                        primary={primaryText}
                        primaryTypographyProps={{noWrap: true}}
                    />
                </li>
            ))}
        </ul>
    }
}