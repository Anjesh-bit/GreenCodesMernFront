import React, { useState } from "react"
import { Grid, Box, Typography, Card, CardContent, Paper, CardMedia, useMediaQuery, useTheme, Button } from '@material-ui/core';
import cn from 'classnames';
import { makeStyles, withStyles } from '@material-ui/core';
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import FullScreenLoad from "../../common/FullScreenLoad";
import { GreenProjectImages } from "../../common/DataModel";
const useStyles = makeStyles({
    body: {
        fontSize: "1.5em !important",
        color: "#878a8f"
    },
    leftContent: {
        background: "#F0EFED",
        marginLeft: "3em"
    },
    root: {
        paddingTop: "4em",


    },
    rightContent: {
        background: "#F0EFED",
        marginRight: "3em"
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

    }

})
var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,

                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};
const StyledButton = withStyles({

    root: {
        boxSizing: "border-box",
        padding: "10px 48px",
        fontSize: "4em",
        fontWeight: 800,
        border: "none",
        borderRadius: "10px",
        color: "#0f141e",
        background: "transparent",
        float: "right"

    },

    label: {
        textTransform: "capitalize",
    },
})(Button);
const Allprojects = () => {
    const classes = useStyles();
    const [currentindex, setIndex] = useState(0);

    const handleNext = () => {
        if (currentindex != GreenProjectImages.length - 1) {
            setIndex(currentindex + 1);
        }
        else if (currentindex === GreenProjectImages.length - 1) {
            setIndex(0);
        }

    }
    return (
        <>
            {
                GreenProjectImages?.map((data, index) =>
                    (index === currentindex) && (
                        <>
                            <FullScreenLoad />
                            <motion.div initial={{ x: "-100%" }}
                                animate={{ x: 0 }}
                                transition={{
                                    duration: 1, ease: "easeInOut", delay: 1, type: "spring"
                                }}>
                                <Grid container className={cn(classes.root)} key={Math.random()}>
                                    <Grid items md={12} sm={12} xs={12} lg={6}>
                                        <Card className={cn(classes.leftContent)} elevation={0} >
                                            <CardContent>
                                                <Typography variant="h1" className={cn(classes.h1)}>CASE STUDY</Typography>
                                                {/* <Typography variant="h6">{location.state.imagedata.client}</Typography> */}
                                                <Typography variant="h3" style={{ fontWeight: 700, color: "#042825" }} component="div" gutterBottom>
                                                    {data.client}
                                                </Typography>
                                                <Typography variant="h6"><small>{data.date}</small></Typography>
                                                <Typography variant="h6"><small>{data.location}</small></Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid items md={12} sm={12} xs={12} lg={6}>
                                        <Card elevation={0} className={cn(classes.rightContent)}>
                                            <CardContent>
                                                <Typography className={cn(classes.body)} varaint="body1">{data.paragraph}</Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid items xs={12}>
                                        <Card elevation={0} className={cn(classes.bottomContent)}>
                                            <CardContent>
                                                {
                                                    <>
                                                        {
                                                            data.authorurl === "" ?
                                                                <div></div>
                                                                : <CardMedia
                                                                    component="img"
                                                                    style={{ marginBottom: "1em" }}
                                                                    alt="Contemplative Reptile"
                                                                    image={data.authorurl}
                                                                    title="Contemplative Reptile" />}

                                                        {
                                                            data.authorurl2 === "" ?
                                                                <div></div> :
                                                                <CardMedia
                                                                    component="img"
                                                                    alt="Contemplative Reptile"
                                                                    style={{ marginBottom: "1em" }}
                                                                    image={data.authorurl2}
                                                                    title="Contemplative Reptile" />}
                                                        {
                                                            data.authorurl3 === "" ?
                                                                <div></div> :
                                                                <CardMedia
                                                                    component="img"
                                                                    alt="Contemplative Reptile"

                                                                    image={data.authorurl3}
                                                                    title="Contemplative Reptile" />}
                                                    </>
                                                }
                                            </CardContent>
                                        </Card>
                                        <NavLink to={`/allprojects/${data.route}`}>
                                            <StyledButton onClick={handleNext}>Next Project</StyledButton>
                                        </NavLink>
                                    </Grid>
                                </Grid>
                            </motion.div>

                        </>
                    )
                )
            }
        </ >
    )
}

export default Allprojects;