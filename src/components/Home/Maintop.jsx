import React from "react";
import cn from "classnames";
import {
  makeStyles,
  Box,
  Grid,
  Button,
  withStyles,
  Typography,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { greentopSection } from "../../common/DataModel";
import { useSelector } from "react-redux";
import "./MainTop.css";
import { topBarImages } from "../../common/DataModel";

const useStyles = makeStyles({
  GreenParas: {
    alignSelf: "center",
    marginLeft: "auto",
    marginRight: "2em",
    fontSize: "1.5em",
    color: "#ddd",
  },
  styledButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.2em",
    padding: "6px 23px",
    opacity: 0.9,
  },
});

const GreenHeadings = {
  display: "block",
  color: "#ddd",
  opacity: 0.9,
  textTransform: "uppercase",
  fontSize: "3em",
  letterSpacing: "0.1em",
};

export const StyledButton = withStyles({
  root: {
    boxSizing: "border-box",
    padding: "10px 48px",
    fontSize: "1.4em",
    border: "2px solid #ddd",
    background: "transparent",
    zIndex: 99,
  },

  label: {
    textTransform: "capitalize",
  },
})(Button);

const Maintop = () => {
  const classes = useStyles();
  const setOffsetY = useSelector((state) => state.parralx.scrollX);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const matchessm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className="maintopWrapper">
      <Grid container>
        <Grid item md={6} xs={12} sm={12}>
          <Box
            style={{
              position: "relative",
              left: `-${setOffsetY * 0.4}px`,
              transition: "all 0.8s linear",
            }}
            className="box"
          >
            {greentopSection?.map((data, index) => (
              <h1 key={index} style={GreenHeadings} className="GreenHeadings">
                {data.greenHead}
              </h1>
            ))}
          </Box>
          <StyledButton
            style={
              !matchessm
                ? { color: "#ddd" }
                : { color: "#ddd", marginBottom: "2em" }
            }
            className="GreenConnected"
          >
            Stay connected
            <ArrowForwardIcon />
          </StyledButton>
        </Grid>
        <Grid item md={6} xs={12} sm={12}>
          <div>
            <div className="imagesOuterWrapper">
              {topBarImages.map((images, index) => (
                <div className="imagesTopbarWrapper">
                  <div className="square"></div>
                  <div className="circle"></div>

                  <img
                    key={Math.random}
                    src={images}
                    className="imagesTopbar"
                  />
                </div>
              ))}
            </div>
          </div>
        </Grid>
      </Grid>

      <div
        className="shapesLeft"
        style={
          !matchessm
            ? {
                position: "absolute",
                right: `-${setOffsetY * 0.4}px`,
                transition: "all 0.8s linear",
              }
            : { display: "none" }
        }
      ></div>

      {!matches && <div className="shapesText">Innovation</div>}
    </div>
  );
};

export default Maintop;
