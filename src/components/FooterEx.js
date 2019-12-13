import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const FooterEx = () => (
  <div style={{ maxWidth: 700, margin: "auto", textAlign: "center"}}>
    <Typography variant="caption" align={"center"}>
      © IDEA: Northeastern University's Venture Accelerator 2019-2020
    </Typography>
    <Divider style={{ margin: "24px auto", width: 60 }} />
    <Grid container justify={"center"} spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <Typography align={"center"} gutterBottom color={"textSecondary"}>
          <a href={'https://www.northeastern.edu/idea/'}>About</a>
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography align={"center"} gutterBottom color={"textSecondary"}>
          <a href={'https://medium.com/nuidea'}> Blog</a>
        </Typography>
      </Grid>
    </Grid>
  </div>
);

FooterEx.propTypes = {};
FooterEx.defaultProps = {};

export default FooterEx;
