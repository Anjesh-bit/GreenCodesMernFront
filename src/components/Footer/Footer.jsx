import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { makeStyles, Box, Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import cn from "classnames";

const useStyles = makeStyles({
  Box: {
    background: "#042825",
    overflowX: "hidden",
    padding: "2em 3em 2em 3em",
    display: "flex",
    alignItems: "center",
    height: "20vh",
    color: "#878a8f",
    paddingBottom: "1em",
  },
  icons: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  greenDate: {
    fontSize: "0.8em",
  },
});
const Footer = () => {
  const classes = useStyles();
//   const setOffsetY = useSelector((state) => state.parralx.scrollX);
  return (
    <Box className={cn(classes.Box)}>
      <Grid container>
        <Grid items xs={6} className={cn(classes.greenDate)}>
          <small>GreenCodes Nepal ©2022 </small>
        </Grid>
        <Grid items xs={6} className={cn(classes.icons)}>
          <FacebookIcon style={{ marginRight: "0.5em" }} />
          <LinkedInIcon style={{ marginRight: "0.5em" }} />
          <TwitterIcon />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
