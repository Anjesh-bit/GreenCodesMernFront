oimport React from "react";
import { Grid, Paper, makeStyles, Card, CardContent, Typography, CardActions, Button, withStyles, useMediaQuery, useTheme } from "@material-ui/core";
import { GreenAbout } from "../../common/DataModel";
import cn from 'classnames';
import { useSelector } from "react-redux";

const useStyles = makeStyles({
    aboutPaper: {
        color: "#042825",
        paddingLeft: "3em",

    },

    h1: {
        fontSize: "0.9em",
        letterSpacing: "0.5em",
        fontWeight: 500,
        color: "#878a8f",
        paddingBottom: "1em",

    }
})

const StyledButton = withStyles({
    root: {
        background: "transparent",
        border: "none",
        borderRadius: "59px",
        boxSizing: "border-box",
        color: "#042825",
        padding: "2px 10px",
        fontSize: "1.25em",
        fontWeight: 600,

    },
    label: {
        textTransform: "capitalize",
    },

})(Button);

const About = () => {
    const classes = useStyles();
    const theme = useTheme();
    const mediaXs = useMediaQuery(theme.breakpoints.down('xs'));
    const setOffsetY = useSelector((state) => state.parralx.scrollX);
    return (
        <div className={cn(classes.root)} style={{ margin: 0, padding: 0, position: "relative" }}>
            <Grid container>
                <Grid items md={6} xs={12} sm={12}>
                    {/* <Paper className={cn(classes.aboutPaper)} elevation={0}>
                        <h1>{GreenAbout[0]}</h1>
                        <h3>{GreenAbout[1]}</h3>
                        <p style={{ color: "#878a8f" }}>{GreenAbout[2]}</p>

                    </Paper> */}
                    <Card style={mediaXs ? { paddingLeft: 0 } : { paddingLeft: "2em", background: "#ddd" }} elevation={0}>
                        <CardContent>
                            <Typography variant="h6" className={cn(classes.h1)} >
                                THIS IS ABOUT
                            </Typography>
                            <Typography variant="h3" style={{
                                fontWeight: 800, color: "#878a8f", letterSpacing: "0.1em", fontSize: "5em"
                            }}
                                component="div"
                                gutterBottom>
                                {GreenAbout[0]}
                            </Typography>

                            <Typography variant="body1" style={{ color: "#878a8f" }}>
                                {GreenAbout[2]}
                            </Typography>
                        </CardContent >
                        {/* <CardActions>
                            <StyledButton>View projects</StyledButton>
                            <Typography variant="h5" style={{ color: "#878a8f", fontSize: "0.8em", fontWeight: 600 }}>Or</Typography>
                            <StyledButton>Read about us</StyledButton>

                        </CardActions> */}
                    </Card>
                </Grid>
                <Grid items md={6} xs={12} sm={12} style={{ background: "#ddd" }}>
                    <Card elevation={0}>
                        <Typography variant="h1" style={{ position: "absolute", top: "20%", right: 0, letterSpacing: "0.6em", color: "#F0EFED", opacity: 0.3, background: "#878a8f", borderRadius: "5px", right: `-${setOffsetY * 0.2}px`, transition: "all 0.8s linear" }}>GREEN</Typography>
                        <Typography variant="h1" style={{ position: "absolute", top: "49%", right: 0, letterSpacing: "0.6em", color: "#F0EFED", opacity: 0.6, right: `-${setOffsetY * 0.4}px`, transition: "all 0.8s linear" }}>CODES</Typography>
                        <Typography variant="h1" style={{ position: "absolute", top: "78%", right: 0, letterSpacing: "0.6em", color: "#F0EFED", opacity: 0.3, zIndex: 3, background: "#878a8f", borderRadius: "5px", right: `-${setOffsetY * 0.4}px`, transition: "all 0.8s linear" }}>SERVICES</Typography>
                    </Card>

                </Grid>
            </Grid>
        </div >

    )
}
export default About;
