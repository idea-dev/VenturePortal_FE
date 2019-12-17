import React from "react";
import "../../style/styles.css";
import {makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";



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

    return (
        <div className={classes.root}>
            <br/>
            <Typography weight={"bold"} variant={"h5"} gutterBottom>
                {"Events"}
            </Typography>
            <Typography gutterBottom>
                See upcoming events and integrate with the community.
                <br/>
            </Typography>
            <br/>
            <br/>
            <br/>

            <div>
                <iframe title={'google_cal'}
                    src="https://calendar.google.com/calendar/b/2/embed?height=500&amp;wkst=2&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=aWRlYW5ldUBnbWFpbC5jb20&amp;color=%23c24a00&amp;showTz=1&amp;showTabs=1&amp;showPrint=0&amp;showDate=1&amp;showNav=1&amp;title=IDEA%20Venture%20Calendar"
                    className={classes.calendar}/>
            </div>
            <br/>
            <br/>
        </div>
    );
}