import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  Paper,
  Card,
  CardContent,
  CardMedia,
  makeStyles,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { blogsFindById } from "../../actions/BlogsSaveActions";
import cn from "classnames";

const useStyles = makeStyles({
  root: {
    padding: "3em",
  },
  cardContent: {},
});

const BlogsContent = () => {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const classes = useStyles();
  const { blogsSingleData } = useSelector((state) => state.fetchsingleblog);
  useEffect(() => {
    dispatch(blogsFindById(state));
  }, [dispatch, state]);

  return (
    <Grid container className={cn(classes.root)}>
      {
        <Grid items xs={8}>
          <Card elevation={0}>
            <CardMedia
              component="img"
              height="350"
              image={blogsSingleData.featuredimg}
              alt="blogs images"
            />
            <CardContent>
              <Typography variant="h3">{blogsSingleData.title}</Typography>
              <Typography variant="h7">{blogsSingleData.catagories}</Typography>
              <div
                dangerouslySetInnerHTML={{ __html: blogsSingleData.blogspost }}
              ></div>
            </CardContent>
          </Card>
        </Grid>
      }
    </Grid>
  );
};

export default BlogsContent;
