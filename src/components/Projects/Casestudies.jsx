import React from "react";
import { useLocation } from "react-router-dom";
import {
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  Paper,
  CardMedia,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import cn from "classnames";
import { makeStyles } from "@material-ui/core";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import FullScreenLoad from "../../common/FullScreenLoad";
import { useState } from "react";

const useStyles = makeStyles({
  body: {
    fontSize: "1.5em !important",
    color: "#878a8f",
  },
  leftContent: {
    background: "#F0EFED",
    marginLeft: "3em",
  },
  root: {
    paddingTop: "4em",
  },
  rightContent: {
    background: "#F0EFED",
    marginRight: "3em",
  },
  bottomContent: {
    background: "#F0EFED",
    margin: "3em",
  },
  h1: {
    fontSize: "0.65em",
    letterSpacing: "0.3em",
    fontWeight: 500,
    color: "#878a8f",
    paddingBottom: "1em",
  },
});
// < div >
// <AnimatePresence>
//     <motion.div className="Animator"
//         initial={{ y: "-100%" }}
//         animate={{ y: 0 }}
//         exit={{ x: "-100%" }}
//         transition={{ duration: 1, ease: "easeInOut" }}
//     >

//     </motion.div >
// </AnimatePresence>
//     </ >

const Casestudies = () => {
  const location = useLocation();
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  console.log(location);
  return (
    <AnimatePresence>
      <FullScreenLoad />
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 1,
          type: "spring",
        }}
      >
        <Grid container className={cn(classes.root)}>
          <Grid items md={12} sm={12} xs={12} lg={6}>
            <Card className={cn(classes.leftContent)} elevation={0}>
              <CardContent>
                <Typography variant="h1" className={cn(classes.h1)}>
                  CASE STUDY
                </Typography>
                {/* <Typography variant="h6">{location.state.imagedata.client}</Typography> */}
                <Typography
                  variant="h3"
                  style={{ fontWeight: 600, color: "#042825" }}
                  component="div"
                  gutterBottom
                >
                  {location.state.imagedata.client}
                </Typography>
                <Typography variant="h6">
                  <small>{location.state.imagedata.date}</small>
                </Typography>
                <Typography variant="h6">
                  <small>{location.state.imagedata.location}</small>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            items
            md={12}
            sm={12}
            xs={12}
            lg={6}
            style={matches ? { marginLeft: "3em" } : {}}
          >
            <Card elevation={0} className={cn(classes.rightContent)}>
              <CardContent>
                <Typography className={cn(classes.body)} varaint="body1">
                  {location.state.imagedata.paragraph}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid items xs={12}>
            <Card elevation={0} className={cn(classes.bottomContent)}>
              <CardContent>
                {
                  <>
                    {location.state.imagedata.authorurl === "" ? (
                      <div></div>
                    ) : (
                      <CardMedia
                        component="img"
                        style={{ marginBottom: "1em" }}
                        alt="Contemplative Reptile"
                        image={location.state.imagedata.authorurl}
                        title="Contemplative Reptile"
                      />
                    )}

                    {location.state.imagedata.authorurl2 === "" ? (
                      <div></div>
                    ) : (
                      <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        style={{ marginBottom: "1em" }}
                        image={location.state.imagedata.authorurl2}
                        title="Contemplative Reptile"
                      />
                    )}
                    {location.state.imagedata.authorurl3 === "" ? (
                      <div></div>
                    ) : (
                      <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        image={location.state.imagedata.authorurl3}
                        title="Contemplative Reptile"
                      />
                    )}
                  </>
                }
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </motion.div>
    </AnimatePresence>
  );
};

export default Casestudies;
