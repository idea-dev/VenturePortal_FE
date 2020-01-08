import React from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const NavHeaderEx = ({collapsed}) => (
    <>
        <div style={{alignContent: 'center', padding: collapsed ? 8 : 16, paddingBottom: collapsed ? 0 : 16, transition: "0.3s"}}>
            <Avatar
                style={{
                    width: collapsed ? 48 : 60,
                    height: collapsed ? 48 : 60,
                    transition: "0.3s",
                    paddingBottom: 0,
                }}
            />
            <div style={{paddingBottom: collapsed ? 0 : 6}}/>
            <Typography style={{visibility: collapsed ? 'hidden' : 'visible'}} variant={"h6"} noWrap>
                Venture Name
            </Typography>
        </div>
        <Divider/>
    </>
);

NavHeaderEx.propTypes = {
    collapsed: PropTypes.bool
};
NavHeaderEx.defaultProps = {
    collapsed: false
};

export default NavHeaderEx;
