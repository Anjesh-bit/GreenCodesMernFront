

import React, { useState } from "react";
import { Grid, Card, Typography, makeStyles, Button, withStyles, IconButton } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { BlogsFindAll } from "../../actions/BlogsSaveActions";
import { DeleteBlogs } from "../../actions/BlogsSaveActions";
import Pagination from "../../common/Pagination";
import cn from 'classnames';
import { convertFromRaw } from "draft-js";
import Loader from "../../common/Loader";
const useStyles = makeStyles({
    root: {
        padding: "3em"
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(350px,1fr))",
        gridColumnGap: "2em",
        gridRowGap: "2em",
        paddingTop: "2em"
    },
    innerGridWrapper: {
        padding: "1em",

    },
    paddingBottomImage: {
        paddingTop: "1em",

    },
    paddingBottomTypo: {
        paddingTop: "1em",
        paddingBottom: "1em"
    },
    blogImage: {
        height: "100%",
        width: "100%",
        objectFit: "cover",
        objectPosition: "top"
    },
    blogImageWrapper: {
        width: "70vh",
        height: "45vh",
    }
})
const StyledButton = withStyles({

    root: {
        boxSizing: "border-box",
        padding: "3px 30px",
        fontSize: "1.4em",
        border: "2px solid #0f141e",
        background: "transparent",
        zIndex: 99,
        margin: "auto"
    },

    label: {
        textTransform: "capitalize",
    },
})(Button);
const BlogsView = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const navigate = useNavigate();
    const [id, setId] = useState(0);

    useEffect(() => {
        dispatch(BlogsFindAll())

    }, []);

    const { loading, blogsAllData } = useSelector((state) =>
        state.fetchallblogs
    )
    const handleOnClick = (id) => {
        navigate("/blogsall", { state: id });
    }
    const handleBlogDelete = (id) => {
        const blogsdata = blogsAllData.findIndex((data) => data._id === id)
        blogsAllData.splice(blogsdata, 1);
        dispatch(DeleteBlogs(id));
    }
    return (
        <div className={cn(classes.root)}>
            <Typography variant="h2">Blogs</Typography>
            <Grid container className={cn(classes.grid)}>

                {
                    loading ?
                        <Loader />
                        :
                        blogsAllData.map((blogsData, index) => (

                            <Grid items key={Math.random() + index}>
                                <Card elevation={0} className={cn(classes.innerGridWrapper)}>
                                    <Typography variant="h5">{blogsData.title}</Typography>
                                    <div className={cn(classes.blogImageWrapper, classes.paddingBottomImage)}>
                                        <img src={blogsData.featuredimg} className={cn(classes.blogImage)} />
                                    </div>
                                    <Typography variant="h6" className={cn(classes.paddingBottomTypo)}>{blogsData.catagories}</Typography>
                                    <StyledButton onClick={() => { handleOnClick(blogsData._id) }}>View Post</StyledButton>

                                </Card>

                            </Grid>
                        ))
                }
                <Pagination />
            </Grid >

        </div>
    )
}
export default BlogsView;