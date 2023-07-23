import React from "react";
import {
  Grid,
  makeStyles,
  Box,
  Card,
  Paper,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import cs from "classnames";

const useStyles = makeStyles({
  box: {
    height: "100vh",
    padding: 0,
    margin: 0,
    display: "flex",
    justifyContent: "center",
    borderRadius: "20px",
    alignItems: "center",
    background: "#202221",
  },
  topGridContainer: {
    background: "#ccc",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  topCardContainer: {
    height: "auto",
    background: "#262627",
    color: "#F5F5F5",
    textAlign: "center",
  },
  topCardDenied: {
    fontSize: "50px",
    fontWeight: 700,
    color: "#ccc",
  },
  topCardAccess: {
    color: "#ccc",
  },
  topCardPermission: {
    fontSize: "13px",
    color: "#F5F5F5",
  },
});

const styledButton = {
  borderRadius: "20px",
  textTransform: "initial",
  margin: "auto",
  padding: "8px",
  color: "#F5F5F5",
};

const cardContentText = {
  title: "403",
  denied: "Permission Denied",
  permission: "You don't have permission to access the requested page.",
};

const Unauthorized = (props) => {
  const classes = useStyles();
  const handleOnClick = () => {};

  return (
    <Box className={cs(classes.box)}>
      <Grid container className={cs(classes.topGridContainer)}>
        <Box p={10}>
          <Paper elevation={1}>
            <Card className={cs(classes.topCardContainer)} elevation={0}>
              <CardContent>
                <Typography
                  variant="h5"
                  component="h3"
                  className={cs(classes.topCardDenied)}
                >
                  {cardContentText.title}
                </Typography>
                <Typography className={cs(classes.topCardAccess)} gutterBottom>
                  {cardContentText.denied}
                </Typography>

                <Typography
                  className={cs(classes.topCardPermission)}
                  gutterBottom
                >
                  <i>{cardContentText.permission}</i>
                </Typography>
                <CardActions>
                  <Button
                    style={styledButton}
                    type="submit"
                    color="primary"
                    size="small"
                    fullwidth
                    variant="contained"
                    onClick={handleOnClick}
                  >
                    <HomeIcon style={{ paddingRight: "4px", color: "#ccc" }} />
                    Go back to Home
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          </Paper>
        </Box>
      </Grid>
    </Box>
  );
};

export default Unauthorized;
