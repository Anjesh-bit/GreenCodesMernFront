import React, { useEffect, useState } from "react";
import {
  Card,
  Box,
  Paper,
  CardContent,
  CardActions,
  Button,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";
import { Link, useNavigate } from "react-router-dom";
import GreenTextFields from "../common/TextFields";
import { loginValues } from "../common/DataModel";
import { adminLoginActions } from "../actions/AdminLoginActions";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  SignInWrapper: {
    padding: "10px 40px 40px 40px",
  },
  link: {
    textDecoration: "none",
    color: "#ddd",
  },
});

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState(loginValues);

  const handleOnchange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const { loading, loginData } = useSelector((state) => state.login);

  useEffect(() => {
    if (loginData && loginData.role === "admin") {
      navigate("/dashboard");
    }
  }, [loginData, navigate]);

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(adminLoginActions(values.client_email, values.client_password));
  };

  return (
    <div className={cn(classes.root)}>
      <Paper className={cn(classes.SignInWrapper)}>
        <Card sx={{ minWidth: 275 }} elevation={0}>
          <CardContent>
            <Typography variant="h4">Sign In</Typography>
            <form>
              <GreenTextFields
                helperText=""
                variant="standard"
                label="Email"
                type="email"
                name="client_email"
                key="client_email"
                onChange={handleOnchange}
                value={values.client_email}
              />
              <GreenTextFields
                helperText=""
                variant="standard"
                label="Password"
                type="password"
                name="client_password"
                key="client_password"
                onChange={handleOnchange}
                value={values.client_password}
              />
            </form>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={handleLogin}>
              Sign In
            </Button>
          </CardActions>
        </Card>
      </Paper>
    </div>
  );
};

export default Login;
