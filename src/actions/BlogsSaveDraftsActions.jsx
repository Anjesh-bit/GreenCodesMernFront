
import axios from "axios";
import {
    ON_BLOGS_DRAFTS_INITIAL_REQUEST,
    ON_BLOGS_DRAFTS_SUCESS,
    ON_BLOGS_DRAFTS_FAIL,
    ON_FETCH_ONE_DRAFTS_SUCCESS,
    ON_FETCH_ONE_DRAFTS_FAIL,
    ON_FETCH_ONE_DRAFTS_INITIAL,
    ON_FETCH_ALL_DRAFTS_SUCCESS,
    ON_FETCH_ALL_DRAFTS_INITIAL,
    ON_FETCH_ALL_DRAFTS_FAIL,
    ON_DELETE_DRAFTS_INITIAL,
    ON_DELETE_DRAFTS_SUCCESS,
    ON_DELETE_DRAFTS_FAIL,
    ON_UPDATE_DRAFTS_INTIAL,
    ON_UPDATE_DRAFTS_SUCCESS,
    ON_UPDATE_DRAFTS_FAIL,
} from '../constants/BlogsSaveDraftsConstant';
const Blog = axios.create({
    baseURL: "http://localhost:5000/"
})
const BlogsSaveDraftsActions = (formData) => async (dispatch) => {

    try {
        dispatch({ type: ON_BLOGS_DRAFTS_INITIAL_REQUEST });
        const { data } = await Blog.post(
            "greenApi/admin/blogsDraftSave",
            formData,
        );
        console.log(data);
        dispatch({ type: ON_BLOGS_DRAFTS_SUCESS, payload: data })

    }
    catch (error) {
        dispatch({
            type: ON_BLOGS_DRAFTS_FAIL,
            payload: error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }

};
const BlogsDraftsFindAll = () => async (dispatch) => {
    try {
        dispatch({ type: ON_FETCH_ALL_DRAFTS_INITIAL });
        const { data } = await Blog.get("greenApi/admin/blogsDraftFindall")

        dispatch({ type: ON_FETCH_ALL_DRAFTS_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({
            type: ON_FETCH_ALL_DRAFTS_FAIL,
            payload: error.response.data.message
                ? error.response.data.message
                : error.message,
        });

    }
}
const BlogsDraftsFindById = (id) => async (dispatch) => {
    try {
        dispatch({ type: ON_FETCH_ONE_DRAFTS_INITIAL });
        const { data } = await Blog.get(`greenApi/admin/drafts/${id}`);
        dispatch({ type: ON_FETCH_ONE_DRAFTS_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({
            type: ON_FETCH_ONE_DRAFTS_FAIL,
            payload: error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }
}
const UpdateDraftsBlogs = (id, formData) => async (dispatch) => {
    try {
        dispatch({ type: ON_UPDATE_DRAFTS_INTIAL });
        const { data } = await Blog.put(`greenApi/admin/drafts/${id}`, formData)
        console.log(data);
        dispatch({ type: ON_UPDATE_DRAFTS_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({
            type: ON_UPDATE_DRAFTS_FAIL,
            payload: error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }
}

const DeleteDraftsBlogs = (id) => (dispatch) => {
    try {
        dispatch({ type: ON_DELETE_DRAFTS_INITIAL });
        const { data } = Blog.delete(`greenApi/admin/drafts/${id}`);
        dispatch({ type: ON_DELETE_DRAFTS_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({
            type: ON_DELETE_DRAFTS_FAIL,
            payload: error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }
}
export { BlogsSaveDraftsActions, BlogsDraftsFindAll, BlogsDraftsFindById, UpdateDraftsBlogs, DeleteDraftsBlogs };