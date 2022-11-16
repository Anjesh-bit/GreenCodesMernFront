import React from "react";
import { makeStyles, TextField } from "@material-ui/core";
const GreenTextFields = (props) => {
    const { variant, label, type, name, error = null, filename, value, onChange, style } = props;
    const useStyles = makeStyles(theme => ({
        greenTextfield: {
            "& .MuiFormControl-root": {
                margin: theme.spacing(1),
            },

            "& .MuiOutlinedInput-input": {
                color: "#878a8f",
                background: "#F5F5F5"

            },
            "& .MuiInputLabel-root": {
                color: "#878a8f",
                fontSize: "0.9em"
            },
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: "#878a8f",
                border: "2px solid #878a8f"
            },

            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
                color: "#878a8f",
            },
            "& .MuiInputLabel-root.Mui-focused": {
                color: "#878a8f",
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#878a8f",
            },

        }
    }))
    const classes = useStyles();
    return (

        <TextField
            className={classes.greenTextfield}
            variant={variant}
            label={label}
            type={type}
            filename={filename}
            name={name}
            value={value}
            onChange={onChange}
            fullWidth
            {...(error && { error: true, helperText: error })}
        />)
}

export default GreenTextFields;