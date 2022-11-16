import React, { useRef, useEffect } from "react";
import { GreenTeams } from "../../common/DataModel";
import { makeStyles, Typography } from "@material-ui/core";
import cn from 'classnames';
import ToggleButton from "../../common/ToggleButton";
import { motion, useMotionValue, AnimatePresence } from "framer-motion";
import "./Teams.css";
import { useState } from "react";
import { KeyboardArrowRight, KeyboardArrowLeft } from "@material-ui/icons";
import { defaaultTransition } from "../../utils/Transition";
import { useSelector } from "react-redux";
import { useTheme, useMediaQuery } from "@material-ui/core";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { GreenTeamsInfo } from "../../common/DataModel";
import "slick-carousel/slick/slick-theme.css";
const useStyles = makeStyles({
    h1: {
        display: "block",
        fontSize: "0.9em",
        letterSpacing: "0.5em",
        fontWeight: 500,
        color: "#878a8f",
        paddingBottom: "1em",



    },
    imageContainer: {
        position: "relative"
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
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
}
const item = {
    hidden: { opacity: 0, x: 200, transition: defaaultTransition },
    show: { opacity: 1, x: 0, transition: defaaultTransition },
    exit: { opacity: 0, x: -200, transition: defaaultTransition }
}
const containerList = {

    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
}

const itemList = {
    hidden: { opacity: 0, y: "-100%", transition: defaaultTransition },
    show: { opacity: 1, y: 0, transition: defaaultTransition },
    exit: { opacity: 0, y: "100%", transition: defaaultTransition }
}

const Teams = () => {
    // const [position, positionSet] = useState(0);
    const [isGrid, setGrid] = useState(true);
    const classes = useStyles();
    const theme = useTheme();
    const matchXs = useMediaQuery(theme.breakpoints.down('xs'))
    const handleToggle = (values) => {
        setGrid(values)
    }

    return (
        <>

            <div className="main">
                {!matchXs && <ToggleButton values={isGrid} handleToggle={handleToggle} />}
                <div>
                    <Typography variant="h6" className={cn(classes.h1)}>WHAT'S ON TEAM?</Typography>
                    <Typography variant="h3" style={{ fontWeight: 600, color: "#878a8f", background: "#042825", width: "fit-content", letterSpacing: "0.1em" }}>Enrolled Teams</Typography>
                </div>

                <div className="mainConatiner">
                    {!matchXs && (<div className="outerImageContainer">
                        <div className="innerContainer" >

                            {isGrid && (
                                <motion.div className="innerContainerImage"
                                    variants={container}
                                    initial="hidden"
                                    animate="show"
                                    exit="exit"
                                >
                                    {GreenTeamsInfo.filter(data =>
                                        data.select === "teams"
                                    ).map((images, index) => (

                                        <motion.div className="imageWrapper"
                                            variants={item}
                                        >
                                            <img className="teamsImages" src={images.image} />


                                        </motion.div>


                                    ))}

                                    <Typography variant="h1" style={{ position: "absolute", top: "20%", right: 0, letterSpacing: "0.6em", color: "#ddd", opacity: 0.3, background: "#878a8f", borderRadius: "5px", width: "100%", textAlign: "right" }}>GREEN</Typography>
                                    <Typography variant="h1" style={{ position: "absolute", top: "48%", right: 0, letterSpacing: "0.6em", color: "#ddd", opacity: 0.3, background: "#878a8f", borderRadius: "5px", width: "100%", textAlign: "right" }}>CODES</Typography>
                                    <Typography variant="h1" style={{ position: "absolute", top: "78%", right: 0, letterSpacing: "0.6em", color: "#ddd", opacity: 0.3, background: "#878a8f", borderRadius: "5px", width: "100%", textAlign: "right" }}>TEAMS</Typography>




                                </motion.div>)}
                        </div>

                    </div>)}


                    {
                        (!isGrid || matchXs) && (<div className="listContainer">
                            <AnimatePresence>
                                <motion.div
                                    variants={containerList}
                                    initial="hidden"
                                    animate="show"
                                    exit="exit"
                                >
                                    <Slider {...settings}>

                                        {GreenTeamsInfo.filter(data =>
                                            data.select === "teams").map((images, index) => (
                                                <motion.div className="imageContainer"
                                                    key={`images+${index}`}
                                                    variants={itemList}
                                                >
                                                    <motion.img className="teamsList" src={images.image} transition={defaaultTransition} />
                                                    <div className="onHoverTeams">
                                                        <h2>{images.name}</h2>
                                                        <h4>{images.info}</h4>
                                                    </div>
                                                </motion.div>
                                            ))}

                                    </Slider>
                                </motion.div>


                            </AnimatePresence>



                        </div>
                        )
                    }

                </div>

            </div >
        </>




    );
}
export default Teams;