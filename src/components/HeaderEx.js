import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import {useAuth0} from "../auth/react-auth0-spa";
import {AccountCircle} from "@material-ui/icons";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";


const styles = ({spacing, transitions, breakpoints, palette, shape}) => ({
    header: {
        fontWeight: 900,
        minWidth: 0,
        fontSize: 18,
    },
    grow: {
        flexGrow: 1
    },
    search: {
        position: "relative",
        marginRight: 8,
        borderRadius: shape.borderRadius,
        background: palette.grey[200],
        "&:hover": {
            background: palette.grey[300]
        },
        marginLeft: 0,
        width: "100%",
        [breakpoints.up("sm")]: {
            marginLeft: spacing(1),
            width: "auto"
        }
    },
    searchIcon: {
        width: spacing(9),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    inputRoot: {
        color: "inherit",
        width: "100%"
    },
    inputInput: {
        borderRadius: 4,
        paddingTop: spacing(1),
        paddingRight: spacing(1),
        paddingBottom: spacing(1),
        paddingLeft: spacing(10),
        transition: transitions.create("width"),
        width: "100%",
        [breakpoints.up("sm")]: {
            width: 120,
            "&:focus": {
                width: 200
            }
        }
    }
});


function HeaderEx(props) {
    const {classes} = props;
    const {logout} = useAuth0();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (<>
            <Typography noWrap color={"textSecondary"} className={classes.header}>
                Venture Portal
            </Typography>
            <div className={classes.grow}/>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <Icon>search</Icon>
                </div>
                <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput
                    }}
                />
            </div>
            <div>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                >
                    <AccountCircle/>
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem onClick={() => logout()}>Logout</MenuItem>
                </Menu>
            </div>
        </>
    )
}

HeaderEx.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
};

export default withStyles(styles)(HeaderEx);
