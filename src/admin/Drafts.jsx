import React from "react";
import { Grid, Card, Typography, IconButton, makeStyles, withStyles, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { BlogsDraftsFindAll } from "../actions/BlogsSaveDraftsActions";
import { DeleteDraftsBlogs } from "../actions/BlogsSaveDraftsActions";
import cn from 'classnames';
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
        padding: "1em"
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

const Drafts = () => {
    const classes = useStyles();
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(BlogsDraftsFindAll())

    }, []);

    const { loading, blogsAllData } = useSelector((state) =>
        state.fetchDraftsAll
    )

    const handleBlogDelete = (id) => {
        const blogsdata = blogsAllData.findIndex((data) => data._id === id)
        blogsAllData.splice(blogsdata, 1);
        dispatch(DeleteDraftsBlogs(id));
    }

    return (
        <div className={cn(classes.root)}>
            <Typography variant="h2">Blogs</Typography>
            <Grid container className={cn(classes.grid)}>

                {
                    blogsAllData.map((blogsData, index) => (
                        <Grid items key={Math.random() + index}>
                            <Card elevation={0} className={cn(classes.innerGridWrapper)}>
                                <Typography variant="h5">{blogsData.title}</Typography>
                                <div className={cn(classes.blogImageWrapper)}>
                                    <img src={blogsData.featuredimg} className={cn(classes.blogImage)} />
                                </div>
                                <Typography variant="h6">{blogsData.catagories}</Typography>

                                <NavLink to={`/editBlogs/${blogsData._id}`}
                                    state={{ title: blogsData.title, catagories: blogsData.catagories, blogsData: blogsData.blogspost }}
                                >
                                    <IconButton><EditIcon /></IconButton>
                                </NavLink>
                                <IconButton onClick={(e) => { handleBlogDelete(blogsData._id) }}><DeleteIcon /></IconButton>
                            </Card>
                        </Grid>
                    ))
                }


            </Grid >
        </div>
    )
}
export default Drafts;