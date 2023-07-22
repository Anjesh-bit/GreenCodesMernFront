import React from "react";
import {
  makeStyles,
  Paper,
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
  withStyles,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import cn from "classnames";
import { greenServices } from "../../common/DataModel";
import { useSelector } from "react-redux";
import { greenIllustrations } from "../../common/DataModel";

const useStyles = makeStyles({
  root: {
    background: "#ddd",
    position: "relative",
    textAlign: "center",
  },
  margin: {
    marginRight: "1em",
  },
  h1: {
    fontSize: "0.9em",
    letterSpacing: "0.5em",
    fontWeight: 500,
    color: "#878a8f",
    paddingBottom: "1em",
    textAlign: "start",
  },
});

const headings = {
  color: "#042825",
  fontSize: "1.8em",
  fontWeight: 600,
};
const card = {
  background: "#F0EFED",
  marginBottom: "1em",
};

const Services = () => {
  const classes = useStyles();
  const setOffsetY = useSelector((state) => state.parralx.scrollX);
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXs = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <div>
      <Grid
        container
        className={cn(classes.root)}
        style={
          matchesXs
            ? { paddingLeft: "1em", paddingRight: 0 }
            : { paddingLeft: "3em", paddingRight: "3em" }
        }
      >
        <Grid item xs={12}>
          <Typography variant="h6" className={cn(classes.h1)}>
            WHAT'S ON SERVICES?
          </Typography>
          <Typography
            variant="h3"
            style={{
              fontWeight: 600,
              color: "#878a8f",
              background: "#042825",
              width: "fit-content",
              letterSpacing: "0.1em",
            }}
          >
            Tour of services{" "}
          </Typography>
        </Grid>

        <Grid
          item
          md={6}
          xs={12}
          sm={12}
          style={
            !matchesSm
              ? {
                  position: "relative",
                  left: `-${setOffsetY * 0.1}px`,
                  transition: "all 0.8s linear",
                }
              : {}
          }
        >
          <Card className={cn(classes.margin)} style={card} elevation={0}>
            <CardContent>
              <div>
                {/* <img src={GreenIllustrations[0]} style={{ width: "100%" }} /> */}
                <CardMedia
                  component="img"
                  sx={{ width: 151, height: 700 }}
                  image={greenIllustrations[0]}
                  alt="Development"
                />
              </div>
              <Typography variant="h2" gutterBottom style={headings}>
                {greenServices[0]}
              </Typography>
              <Typography varaint="body2" style={{ color: "#878a8f" }}>
                {greenServices[1]}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
          sm={12}
          style={
            !matchesSm
              ? {
                  position: "relative",
                  right: `-${setOffsetY * 0.1}px`,
                  transition: "all 0.8s linear",
                }
              : {}
          }
        >
          <Card style={card} elevation={0}>
            <CardContent>
              <div>
                {/* <img src={GreenIllustrations[1]} style={{ height: "100%", width: "100%" }} /> */}
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image={greenIllustrations[1]}
                  alt="Hosting"
                />
              </div>
              <Typography variant="h2" gutterBottom style={headings}>
                {greenServices[2]}
              </Typography>
              <Typography varaint="body2" style={{ color: "#878a8f" }}>
                {greenServices[3]}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
          sm={12}
          style={
            !matchesSm
              ? {
                  position: "relative",
                  left: `-${setOffsetY * 0.1}px`,
                  transition: "all 0.8s linear",
                }
              : {}
          }
        >
          <Card style={card} elevation={0} className={cn(classes.margin)}>
            <CardContent>
              <div>
                {/* <img src={GreenIllustrations[2]} style={{ height: "100%", width: "100%" }} /> */}
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image={greenIllustrations[2]}
                  alt="Design"
                />
              </div>
              <Typography variant="h2" gutterBottom style={headings}>
                {greenServices[4]}
              </Typography>
              <Typography varaint="body2" style={{ color: "#878a8f" }}>
                {greenServices[5]}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          md={6}
          sm={12}
          xs={12}
          style={
            !matchesSm
              ? {
                  position: "relative",
                  right: `-${setOffsetY * 0.1}px`,
                  transition: "all 0.8s linear",
                }
              : {}
          }
        >
          <Card style={card} elevation={0}>
            <CardContent>
              <div>
                {/* <img src={GreenIllustrations[3]} style={{ height: "100%", width: "100%" }} /> */}
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image={greenIllustrations[3]}
                  alt="Live from space album cover"
                />
              </div>
              <Typography variant="h2" gutterBottom style={headings}>
                {greenServices[6]}
              </Typography>
              <Typography varaint="body2" style={{ color: "#878a8f" }}>
                {greenServices[7]}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Services;
