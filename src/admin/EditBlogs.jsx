import React, { useState } from "react";
import {
  EditorState,
  convertToRaw,
  convertFromHTML,
  ContentState,
} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import { useParams, useLocation } from "react-router-dom";
import { Button, withStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./BlogsForm.css";
import { Grid, makeStyles } from "@material-ui/core";
import GreenTextFields from "../common/TextFields";
import cn from "classnames";
import { updateBlogs } from "../actions/BlogsSaveActions";

const useStyles = makeStyles({
  root: {
    gap: 20,
    padding: "3em",
  },
});
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
    marginTop: "3px",
  },
})(Button);

const EditBlogs = () => {
  const location = useLocation();
  const { state } = location;
  const { title, catagories, blogsData } = state;
  let EditorstateDraft = EditorState.createWithContent(
    ContentState.createFromBlockArray(convertFromHTML(blogsData))
  );
  const [editorState, setEditorState] = useState(EditorstateDraft);
  const dispatch = useDispatch();
  const [values, setValue] = useState({ title: title, catagories: catagories });
  const [file, setFile] = useState(null);
  const classes = useStyles();
  const { blogsId } = useParams();

  const handleImageChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleOnchange = (event) => {
    const { name, value } = event.target;
    setValue({
      ...values,
      [name]: value,
    });
  };

  const handleBlogsSave = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("catagories", values.catagories);
    formData.append("blogspost", values.editorState.value);
    formData.append("photo", file);
    dispatch(updateBlogs(blogsId, formData));
  };

  const handleOnEditorChange = (editorState) => {
    setEditorState(editorState);
  };

  const uploadImageCallBack = () => {};

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
                image: {
                  uploadCallback: uploadImageCallBack,
                  alt: { present: true, mandatory: true },
                },
              }}
            />
            ;
            <textarea
              style={{ display: "none" }}
              disabled
              ref={(val) => (values.editorState = val)}
              value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
            />
          </Grid>
          <StyledButton type="submit">Edit Post</StyledButton>
        </Grid>
      </form>
    </div>
  );
};

export default EditBlogs;
