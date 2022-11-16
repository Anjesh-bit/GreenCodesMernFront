
import React, { useEffect } from "react";
import GreenTextFields from "../common/TextFields";
import cn from 'classnames';
import { makeStyles, TextareaAutosize, Card, CardContent, Grid, Typography, withStyles, Button, useMediaQuery, useTheme } from "@material-ui/core";
import { AnimatePresence, motion } from "framer-motion";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { useState } from "react";
import { saveContact } from "../actions/ContactActions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../common/Loader";
import { useLocation, useParams } from "react-router-dom";
import { ContErrorMessage } from "../common/DataModel";
import { updateContacts } from "../actions/ContactActions";
const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiFormControl-root": {
            marginBottom: theme.spacing(2),
        },
        margin: "3em"
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
const EditContact = () => {
    const classes = useStyles();
    const theme = useTheme();
    const { contactId } = useParams();
    const { state } = useLocation();
    const { fname, lname, email, number, message } = state;
    const [values, setValues] = useState({
        client_fname: fname,
        client_lname: lname,
        client_email: email,
        client_number: number,
        client_message: message,
    });
    const [error, setError] = useState({})
    const dispatch = useDispatch();
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

    const validate = (values) => {
        const error = {};

        if (values.client_fname === "") {
            error.error_fname = ContErrorMessage.error_fname

        }
        if (values.client_lname === "") {
            error.error_lname = ContErrorMessage.error_lname

        }
        if (values.client_email === "") {
            error.error_email = ContErrorMessage.error_email

        }
        if (values.client_number === "") {
            error.error_number = ContErrorMessage.error_number
        }
        if (values.client_message === "") {
            error.error_message = ContErrorMessage.error_message
        }


        return error;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(validate(values))
        dispatch(updateContacts(
            contactId,
            values.client_fname,
            values.client_lname,
            values.client_email,
            values.client_number,
            values.client_message));
    }

    return (
        <>

            <form>
                <Grid container>
                    <Grid container className={cn(classes.root)}>
                        <Card style={{ width: "100%", background: "#F0EFED" }}>
                            <CardContent >
                                <Grid items>
                                    <GreenTextFields
                                        helperText={error?.error_fname}
                                        variant="outlined"
                                        label="What's your first name?"
                                        type="text"
                                        key="client_fname"
                                        name="client_fname"
                                        value={values.client_fname}
                                        onChange={onhandleChange}

                                    />

                                </Grid>
                                <Grid items>
                                    <GreenTextFields
                                        helperText={error?.error_lname}
                                        variant="outlined"
                                        label="What's your last name?"
                                        type="text"
                                        key="client_lname"
                                        name="client_lname"
                                        value={values.client_lname}
                                        onChange={onhandleChange}

                                    />

                                </Grid>
                                <Grid items>
                                    <GreenTextFields
                                        helperText={error?.error_email}
                                        variant="outlined"
                                        label="What's your email?"
                                        type="text"
                                        key="client_email"
                                        name="client_email"
                                        value={values.client_email}
                                        onChange={onhandleChange}
                                    />
                                </Grid>
                                <Grid items>
                                    <GreenTextFields
                                        helperText={error?.error_number}
                                        variant="outlined"
                                        label="What's your number?"
                                        type="number"
                                        name="client_number"
                                        key="client_number"
                                        value={values.client_number}
                                        onChange={onhandleChange}
                                    />
                                </Grid>
                                <Grid items>
                                    <TextareaAutosize

                                        aria-label="empty textarea"
                                        style={{ width: "100%", paddingTop: "5em", paddingBottom: "5em", border: "2px solid #878a8f", borderRadius: "4px" }}
                                        name="client_message"
                                        value={values.client_message}
                                        onChange={onhandleChange}
                                    />
                                </Grid>
                                <Grid items>
                                    <StyledButton onClick={handleSubmit}><MailOutlineIcon fontSize="small" style={{ marginRight: "4px" }} />{contactState.loading && <Loader />}Update Contact</StyledButton>
                                </Grid>
                            </CardContent>

                        </Card>



                    </Grid>


                </Grid >
            </form >

        </ >



    )

}
export default EditContact;