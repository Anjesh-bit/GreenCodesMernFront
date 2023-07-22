import React, { useState, useRef } from "react";
import {
  Grid,
  MobileStepper,
  makeStyles,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { greenProjectImages } from "../../common/DataModel";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { motion, AnimatePresence, animate } from "framer-motion";
import ProjectsActions from "../../actions/ProjectsActions";
import { Transition } from "react-transition-group";
import { useSelector } from "react-redux";
import { defaaultTransition } from "../../utils/Transition";
import { Grow } from "@material-ui/core";
import cn from "classnames";
import { useEffect } from "react";

let GreenImages;
let GreenTitle;
let timeoutHandler;

const useStyles = makeStyles({
  root: {},
  greenStepper: {
    width: "30vh",
    overflowX: "hidden",
    paddingBottom: "2em",
  },
  greenimagesdiv: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gridColumnGap: "2em",
    gridRowGap: "2em",
  },
  greenImages: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    mixBlendMode: "revert-layer",
  },
  imageContainer: {
    width: "100%",
    height: "50vh",
    position: "relative",
  },
  onHoverimages: {
    position: "absolute",
    zIndex: 1,
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    background: "#042825",
    opacity: "0.9",
  },
  stepper: {
    "& .MuiLinearProgress-barColorPrimary": {
      background: "#0B5351",
    },
  },
  h1: {
    fontSize: "0.9em",
    letterSpacing: "0.5em",
    fontWeight: 500,
    color: "#878a8f",
    paddingBottom: "1em",
  },
  pageTitle: {
    display: "flex",

    alignItems: "center",
    fontSize: "1.3em",

    color: "#F5F5F5",
  },
});
const title = {
  color: "#878a8f",
  letterSpacing: "0.1em",
  fontSize: "4em",
  fontWeight: 800,
  padding: 0,
  margin: 0,
};
const Project = () => {
  const classes = useStyles();
  const [show, setShow] = useState(-1);
  const theme = useTheme();

  const matchXs = useMediaQuery(theme.breakpoints.down("xs"));
  const [activeStep, setActiveStep] = useState(0);
  const [showAnim, setAnim] = useState(false);

  useEffect(() => {
    GreenImages = greenProjectImages.filter((images) => {
      return images.select === "all";
    });
    GreenTitle = greenProjectImages.filter((title) => {
      return title.pageTitle === "All Projects";
    });
    setAnim(false);
  }, []);

  const handleOnClick = () => {
    console.log("clicked");
  };

  const setDelay = (time) => {
    timeoutHandler = window.setTimeout(() => {
      setAnim(false);
    }, time);
  };

  const animationHandle = () => {
    setAnim(true);
    window.clearTimeout(timeoutHandler);
    setDelay(1000);
  };

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
    switch (activeStep) {
      case 0:
        animationHandle();
        GreenImages = greenProjectImages.filter((images) => {
          return images.ci === "ci";
        });
        GreenTitle = greenProjectImages.filter((title) => {
          return title.pageTitle === "Codeigniter";
        });
        break;

      case 1:
        animationHandle();
        GreenImages = greenProjectImages.filter((images) => {
          return images.ecommerce === "ecommerce";
        });
        GreenTitle = greenProjectImages.filter((title) => {
          return title.pageTitle === "E-Commerce";
        });
        break;

      case 2:
        animationHandle();
        GreenImages = greenProjectImages.filter((images) => {
          return images.magento === "magento";
        });
        GreenTitle = greenProjectImages.filter((title) => {
          return title.pageTitle === "Magento";
        });
        break;

      case 3:
        animationHandle();
        GreenImages = greenProjectImages.filter((images) => {
          return images.drupal === "drupal";
        });
        GreenTitle = greenProjectImages.filter((title) => {
          return title.pageTitle === "Drupal";
        });
        break;

      case 4:
        animationHandle();
        GreenImages = greenProjectImages.filter((images) => {
          return images.wordpress === "wordpress";
        });
        GreenTitle = greenProjectImages.filter((title) => {
          return title.pageTitle === "Wordpress";
        });
        break;

      default:
        return " ";
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
    switch (activeStep) {
      case 1:
        animationHandle();
        GreenImages = greenProjectImages.filter((images) => {
          return images.select === "all";
        });
        GreenTitle = greenProjectImages.filter((title) => {
          return title.pageTitle === "All Projects";
        });
        break;

      case 2:
        animationHandle();
        GreenImages = greenProjectImages.filter((images) => {
          return images.ci === "ci";
        });
        GreenTitle = greenProjectImages.filter((title) => {
          return title.pageTitle === "Codeigniter";
        });
        break;

      case 3:
        animationHandle();
        GreenImages = greenProjectImages.filter((images) => {
          return images.ecommerce === "ecommerce";
        });
        GreenTitle = greenProjectImages.filter((title) => {
          return title.pageTitle === "E-Commerce";
        });
        break;

      case 4:
        animationHandle();
        GreenImages = greenProjectImages.filter((images) => {
          return images.magento === "magento";
        });
        GreenTitle = greenProjectImages.filter((title) => {
          return title.pageTitle === "Magento";
        });
        break;

      case 5:
        animationHandle();
        GreenImages = greenProjectImages.filter((images) => {
          return images.drupal === "drupal";
        });
        GreenTitle = greenProjectImages.filter((title) => {
          return title.pageTitle === "Drupal";
        });
        break;

      default:
        return " ";
    }
  };

  return (
    <motion.div
      style={
        !matchXs
          ? {
              paddingLeft: "3em",
              paddingRight: "3em",
              paddingBottom: "1em",
              background: "#F5F5F5",
              position: "relative",
            }
          : { paddingLeft: "1em", paddingRight: "1em" }
      }
      initial={{ left: "-100%" }}
      whileInView={{ left: 0 }}
      transition={{ ease: "easeInOut", delay: 1, duration: 1, type: "spring" }}
    >
      <Typography variant="h6" className={cn(classes.h1)}>
        SELECTED PROJECTS
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
        Latest Projects
      </Typography>
      {GreenTitle?.map((data, index) => (
        <div key={Math.random() + index} className={cn(classes.pageTitle)}>
          <div>
            <h2 style={title}>{data.pageTitle}</h2>
          </div>
        </div>
      ))}

      <Grid container className={cn(classes.root)}>
        <Grid items className={cn(classes.greenStepper)}>
          <MobileStepper
            className={cn(classes.stepper)}
            variant="progress"
            steps={6}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === 5}
              >
                {`${0}` + activeStep}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {`${0}` + activeStep}
              </Button>
            }
          />
        </Grid>
        <Grid
          component="motion.div"
          items
          className={cn(classes.greenimagesdiv)}
          xs={12}
        >
          {GreenImages?.map((data, index) => (
            <div
              key={Math.random()}
              className={classes.imageContainer}
              onMouseEnter={() => {
                setShow(index);
                setAnim(false);
              }}
              onMouseLeave={() => {
                setShow(-1);
                setAnim(false);
              }}
            >
              <motion.img
                key={Math.random()}
                src={data.all}
                className={cn(classes.greenImages)}
                initial={showAnim ? { x: 700, opacity: 0 } : {}}
                animate={showAnim ? { x: 0, opacity: 1 } : {}}
                transition={showAnim ? defaaultTransition : {}}
              />

              {show === index ? (
                <motion.div
                  key={index}
                  className={classes.onHoverimages}
                  initial={{ height: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                    type: "spring",
                  }}
                  animate={{ height: "100%" }}
                >
                  <motion.div
                    style={{ textAlign: "start", paddingLeft: "0.5em" }}
                    initial={{ y: "25%" }}
                    transition={{
                      duration: 1,
                      ease: "easeInOut",
                      type: "spring",
                    }}
                    animate={{ y: 0 }}
                  >
                    <h2 style={{ color: "#ddd" }}>{data.title}</h2>
                    {/* {client: ' Yvonne Adnams',
                                        date: '07 May 2016',
                                        location: ' United States',
                                        authorurl: '../assets/comalflowershop.com_.png',
                                        authorurl2: '',
                                        authorurl3: '',} */}
                    <Link
                      to="/projects"
                      state={{
                        imagedata: {
                          paragraph: data.paragraph,
                          date: data.date,
                          client: data.client,
                          location: data.location,
                          authorurl: data.authorurl,
                          authorurl2: data.authorurl2,
                          authorurl3: data.authorurl3,
                        },
                      }}
                      style={{
                        color: "#878a8f",
                        fontSize: "1em",
                        textDecoration: "none",
                      }}
                    >
                      <h4 onClick={handleOnClick}>View case study</h4>
                    </Link>
                  </motion.div>
                </motion.div>
              ) : (
                ""
              )}
            </div>
          ))}
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default Project;
