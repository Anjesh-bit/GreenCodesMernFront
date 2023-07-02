import React, { useState } from "react";
import { infoAbout } from "../../common/DataModel";
import cn from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import FullScreenLoad from "../../common/FullScreenLoad";
import { makeStyles, Grid, Card, CardContent, Typography, IconButton } from "@material-ui/core";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { AboutImages } from "../../common/DataModel";
import { useEffect } from "react";

const useStyles = makeStyles({
    root: {
        display: "flex",
        justifyContent: "center",
        marginTop: "3em",
        textAlign: "center"
    },
    h1: {
        fontSize: "0.875em",
        letterSpacing: "0.45em",
        fontWeight: 500,
        color: "#878a8f",
        paddingBottom: "1em"
    },
    imageInnerWrapper: {
        height: "90vh",
        width: "100%"
    },
    imagesAbout: {
        position: "relative",
        height: "100%",
        width: "100%",
        objectFit: "cover"
    },
    chevronButtonWrapper: {
        position: "absolute",
        width: "50%",
        top: "45vh",
        display: "flex",
        justifyContent: "space-between"
    }
})

const Aboutinfo = () => {
    const classes = useStyles();
    const [indexAbout, setIndexAbout] = useState(0);

    const handleNext = () => {
        if (indexAbout != AboutImages.length - 1) {
            setIndexAbout(indexAbout + 1);
        }
        else if (indexAbout === AboutImages.length - 1) {
            setIndexAbout(0);
        }
    }
    
const handlePrev = () => {
        if (indexAbout > 0) {
            setIndexAbout(indexAbout - 1)
        }
        else {
            setIndexAbout(AboutImages.length - 1)
        }
    }

    return (
        <AnimatePresence>
            <FullScreenLoad />
            <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                transition={{
                    duration: 1, ease: "easeInOut", delay: 1, type: "spring"
                }}>

                <Grid container className={cn(classes.root)}>
                    <Grid items md={6} sm={6} xs={12}>
                        <Card elevation={0}>
                            <CardContent elevation={0} style={{ background: "#F0EFED", paddingLeft: "3em", paddingRight: "3em"}}>
                                <Typography variant="h6" className={cn(classes.h1)}>{infoAbout[0]}</Typography>
                                <Typography variant="h4" style={{ paddingBottom: "1em", fontWeight: 600 }}>{infoAbout[1]}</Typography>
                                <Typography variant="body1" style={{ color: "#878a8f", }}>{infoAbout[2]}</Typography>
                                <Typography variant="body1" style={{ color: "#878a8f" }}>{infoAbout[3]}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    
                    <Grid items md={6} sm={6} xs={12}>
                        <Card elevation={0}>
                            <CardContent elevation={0} style={{ background: "#F0EFED" }}>
                                <div className={cn(classes.imageOuterWrapper)}>
                                    {
                                        AboutImages.map((images, index) =>
                                            (index === indexAbout) && (
                                                <div className={cn(classes.imageInnerWrapper)}>
                                                    <img src={images} key={Math.random() * index} className={cn(classes.imagesAbout)} />
                                                    <div className={cn(classes.chevronButtonWrapper)}>
                                                        <IconButton onClick={handlePrev} ><ChevronLeftIcon fontSize="large" /></IconButton>
                                                        <IconButton onClick={handleNext} ><ChevronRightIcon fontSize="large" style={{}} /></IconButton>
                                                    </div>
                                                </div>

                                            )
                                        )
                                    }
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Grid>

                </Grid>
            </motion.div>
        </AnimatePresence >
    )
}
export default Aboutinfo;
