import React, { useEffect } from "react";
import GreenTextFields from "../../common/TextFields";
import cn from 'classnames';
import { makeStyles, TextareaAutosize, Card, CardContent, Grid, Typography, withStyles, Button, useMediaQuery, useTheme } from "@material-ui/core";
import { contactModel, FormValues } from "../../common/DataModel";
import { AnimatePresence, motion } from "framer-motion";
import FullScreenLoad from "../../common/FullScreenLoad";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { useState } from "react";
import { saveContact } from "../../actions/ContactActions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../common/Loader";
import { ContErrorMessage } from "../../common/DataModel";
const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiFormControl-root": {
            marginBottom: theme.spacing(2),
        },
    },
    h1: {
        fontSize: "0.65em",
        letterSpacing: "0.3em",
        fontWeight: 500,
        color: "#878a8f",
        paddingBottom: "1em",

    }
}));
const StyledButton = withStyles({
    root: {
        background: "#113628",
        border: "none",
        boxSizing: "border-box",
        color: "#ddd",
        padding: "2px 10px",
        fontSize: "0.9em",
        fontWeight: 600,

    },
    label: {
        textTransform: "none",
        marginTop: "3px"
    },

})(Button);
const Contact = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [values, setValues] = useState(FormValues);
    const [issubmit, setSubmit] = useState(false);
    const [error, setError] = useState({})
    const dispatch = useDispatch();
    const matches = useMediaQuery(theme.breakpoints.down('xs'));
    const contactState = useSelector(state =>
        state.contact
    )
    console.log(contactState);
    const onhandleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });

    }

    const validate = () => {
        const error = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        error.error_fname = values.client_fname ? "" : ContErrorMessage.error_fname;
        error.error_lname = values.client_lname ? "" : ContErrorMessage.error_lname;
        error.error_email = values.client_email ? "" : ContErrorMessage.error_email;
        if (values.client_email) {
            error.error_email = regex.test(values.client_email) ? "" : "Please enter the valid email format.";
        }
        error.error_number = values.client_number ? "" : ContErrorMessage.error_number;
        error.error_message = values.client_message ? "" : ContErrorMessage.error_message;

        setError({
            ...error
        })

        return Object.values(error).every(x => x == "");
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validate()) {
            dispatch(saveContact(
                values.client_fname,
                values.client_lname,
                values.client_email,
                values.client_number,
                values.client_message));
        }

    }

    return (
        <>
            <FullScreenLoad />
            <motion.div
                initial={
                    { x: "-100%" }}
                animate={
                    { x: 0 }
                }
                transition={
                    { duration: 1, ease: "easeInOut", delay: 1, type: "spring" }
                }>

                <form>
                    <Grid container>
                        <Grid container md={6} sm={6} xs={12} className={cn(classes.root)}>
                            <Card elevation={0} style={matches ? { width: "100%", background: "#F0EFED" } : { width: "100%", background: "#F0EFED", marginLeft: "3em" }}>
                                <CardContent>
                                    <Typography variant="h1" className={cn(classes.h1)}>{contactModel[0]}</Typography>
                                    <Typography variant="h3" style={{ fontWeight: 800, color: "#878a8f" }} component="div" gutterBottom>
                                        {contactModel[1]}
                                    </Typography>

                                    <Typography variant="h1" className={cn(classes.h1)}>{contactModel[2]}</Typography>

                                    <Typography variant="h6" ><small>{contactModel[3]}</small></Typography>
                                    <Typography variant="h6"><small>{contactModel[4]}</small></Typography>
                                    <Typography variant="h6"><small>{contactModel[5]}</small></Typography>
                                    <Typography variant="h6"><small>{contactModel[6]}</small></Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid container md={6} sm={6} xs={12} className={cn(classes.root)}>
                            <Card style={matches ? { width: "100%", background: "#F0EFED" } : { width: "100%", background: "#F0EFED", marginRight: "4em" }} elevation={0}>
                                <CardContent >
                                    <Grid items xs={12}>
                                        <GreenTextFields
                                            error={error?.error_fname}
                                            variant="outlined"
                                            label="What's your first name?"
                                            type="text"
                                            key="client_fname"
                                            name="client_fname"
                                            value={values.client_fname}
                                            onChange={onhandleChange}

                                        />

                                    </Grid>
                                    <Grid items xs={12}>
                                        <GreenTextFields
                                            error={error?.error_lname}
                                            variant="outlined"
                                            label="What's your last name?"
                                            type="text"
                                            key="client_lname"
                                            name="client_lname"
                                            value={values.client_lname}
                                            onChange={onhandleChange}

                                        />

                                    </Grid>
                                    <Grid items xs={12}>
                                        <GreenTextFields
                                            error={error?.error_email}
                                            variant="outlined"
                                            label="What's your email?"
                                            type="text"
                                            key="client_email"
                                            name="client_email"
                                            value={values.client_email}
                                            onChange={onhandleChange}
                                        />
                                    </Grid>
                                    <Grid items xs={12}>
                                        <GreenTextFields
                                            error={error?.error_number}
                                            variant="outlined"
                                            label="What's your number?"
                                            type="number"
                                            name="client_number"
                                            key="client_number"
                                            value={values.client_number}
                                            onChange={onhandleChange}
                                        />
                                    </Grid>
                                    <Grid items xs={12}>
                                        <TextareaAutosize

                                            aria-label="empty textarea"
                                            style={{ width: "100%", paddingTop: "5em", paddingBottom: "5em", border: "2px solid #878a8f", borderRadius: "4px" }}
                                            name="client_message"
                                            value={values.client_message}
                                            onChange={onhandleChange}
                                        />
                                        {!values.client_message ? <div style={{ color: "red", fontSize: "0.92em", marginLeft: "1em", marginBottom: "0.8em" }}> <small>{error.error_message}</small></div> : ""}
                                    </Grid>
                                    <Grid items xs={12}>
                                        <StyledButton onClick={handleSubmit}><MailOutlineIcon fontSize="small" style={{ marginRight: "4px" }} />{contactState.loading && <Loader />}Send message</StyledButton>
                                    </Grid>
                                </CardContent>

                            </Card>



                        </Grid>


                    </Grid >
                </form >
            </motion.div>
        </ >



    )

}
export default Contact;