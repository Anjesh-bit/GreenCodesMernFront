import React from "react";
import { CardContent, Grid, Paper, Card, Typography, makeStyles } from "@material-ui/core";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { profileModel } from "../common/DataModel";
import cn from "classnames";
const useStyles = makeStyles({
    grid: {
        padding: "3em",

    },
    paper: {
        padding: "1em"
    },
    h5: {
        letterSpacing: "0.1em",
        fontWeight: 500,
        color: "#878a8f",
        paddingBottom: "1em",
        "&:not(:first-child)": {
            paddingTop: "1em",

        }
    },


})
const ProfileSection = () => {
    const classes = useStyles();
    const { loginData } = useSelector(state =>
        state.login
    )
    const {
        name,
        username,
        email,
        role, pp } = loginData;
    const {
        nameLogin,
        usernameLogin,
        emailLogin,
        roleLogin } = profileModel;

    return (
        <Grid className={cn(classes.grid)}>
            <Paper elevation={0} className={cn(classes.paper)}>

                <Typography variant="h5" className={cn(classes.h5)}>{nameLogin}</Typography>
                <Typography variant="h6" className={cn(classes.h6)}>{name}</Typography>
                <Typography variant="h5" className={cn(classes.h5)}>{usernameLogin}</Typography>
                <Typography variant="h6" className={cn(classes.h6)}>{username}</Typography>
                <Typography variant="h5" className={cn(classes.h5)}>{emailLogin}</Typography>
                <Typography variant="h6" className={cn(classes.h6)}>{email}</Typography>
                <Typography variant="h5" className={cn(classes.h5)}>{roleLogin}</Typography>
                <Typography variant="h6" className={cn(classes.h6)}>{role}</Typography>
            </Paper>
        </Grid>

    )
}
export default ProfileSection;