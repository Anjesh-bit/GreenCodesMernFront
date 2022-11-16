import React, { useState } from 'react';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import { useDispatch, useSelector } from 'react-redux';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./BlogsForm.css";
import { Grid, makeStyles, Button, withStyles } from '@material-ui/core';
import GreenTextFields from '../common/TextFields';
import cn from 'classnames';
import { BlogsSaveActions } from '../actions/BlogsSaveActions';
import { BlogsSaveDraftsActions } from '../actions/BlogsSaveDraftsActions';
import { BlogsModel } from '../common/DataModel';
import Loader from '../common/Loader';
const useStyles = makeStyles({
    root: {
        gap: 20,
        padding: "3em",

    },
    styledBtn: {
        display: "flex",
        justifyContent: "center",
        marginBottom: "1em"
    }

})
const StyledButton = withStyles({
    root: {
        background: "transparent",
        border: "2px solid #878a8f",
        boxSizing: "border-box",
        color: "#113628",
        padding: "2px 60px",
        fontSize: "0.9em",
        fontWeight: 600,
    },
    label: {
        textTransform: "none",
        marginTop: "3px"
    },

})(Button);
const BlogsForm = () => {
    let EditorstateDraft = EditorState.createEmpty()
    const [editorState, setEditorState] = useState(EditorstateDraft);
    const dispatch = useDispatch();
    const [values, setValue] = useState(BlogsModel);
    const [file, setFile] = useState(null);
    const classes = useStyles();
    const { loading } = useSelector((state) => state.blogs)
    const handleImageChange = (event) => {
        setFile(event.target.files[0]);
    }
    const handleOnchange = (event) => {
        const { name, value } = event.target;
        setValue({
            ...values,
            [name]: value
        })

    }
    const handleBlogsSave = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("title", values.title)
        formData.append("catagories", values.catagories)
        formData.append("blogspost", values.editorState.value)
        formData.append("photo", file);
        dispatch(BlogsSaveActions(formData))
    }
    const handleSaveDrafts = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("title", values.title)
        formData.append("catagories", values.catagories)
        formData.append("blogspost", values.editorState.value)
        formData.append("photo", file);
        dispatch(BlogsSaveDraftsActions(formData))

    }
    const handleOnEditorChange = (editorState) => {
        setEditorState(editorState);
    }
    const uploadImageCallBack = () => { }
    return (
        <div className="greenEditorWrapper">
            <form encType="multipart/form-data" onSubmit={handleBlogsSave}>
                <Grid container className={cn(classes.root)}>
                    <Grid items xs={12}>
                        <GreenTextFields
                            type="text"
                            variant="outlined"
                            label="Title"
                            name="title"
                            value={values.title}
                            onChange={handleOnchange}
                        />
                    </Grid>
                    <Grid items xs={12}>
                        <GreenTextFields
                            type="text"
                            variant="outlined"
                            label="Catagories"
                            name="catagories"
                            onChange={handleOnchange}
                            value={values.catagories}
                        />
                    </Grid>
                    <Grid items xs={12}>
                        <label>Featured Image</label>
                        <GreenTextFields
                            type="file"
                            filename="photo"
                            variant="outlined"
                            onChange={handleImageChange}
                        />
                    </Grid>
                    <Grid items xs={12}>
                        <Editor
                            editorClassName="greenEditor"
                            editorState={editorState}
                            toolbarClassName="toolbarDraft"
                            wrapperClassName="draftWrapper"
                            onEditorStateChange={handleOnEditorChange}
                            toolbar={{
                                inline: { inDropdown: true },
                                list: { inDropdown: true },
                                textAlign: { inDropdown: true },
                                link: { inDropdown: true },
                                history: { inDropdown: true },
                                image: { uploadCallback: uploadImageCallBack, alt: { present: true, mandatory: true } },
                            }}
                        />;
                        <textarea style={{ display: 'none' }} disabled ref={(val) => values.editorState = val} value={draftToHtml(convertToRaw(editorState.getCurrentContent()))} />

                    </Grid>

                </Grid>
                <div className={cn(classes.styledBtn)}>
                    <StyledButton type="submit"> {loading && <Loader />}Post</StyledButton>
                </div>
                {/* <div className={cn(classes.styledBtn)}>
                    <StyledButton onClick={handleSaveDrafts}> {loading && <Loader />}Save to Drafts</StyledButton>
                </div> */}
            </form >

        </div >
    )

}
export default BlogsForm;