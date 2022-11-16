
import axios from "axios";
import {
    ON_BLOGS_INITIAL_REQUEST,
    ON_BLOGS_SUCESS,
    ON_BLOGS_FAIL,
    ON_FETCH_ONE_SUCCESS,
    ON_FETCH_ONE_FAIL,
    ON_FETCH_ONE_INITIAL,
    ON_FETCH_ALL_SUCCESS,
    ON_FETCH_ALL_INITIAL,
    ON_FETCH_ALL_FAIL,
    ON_DELETE_INITIAL,
    ON_DELETE_SUCCESS,
    ON_DELETE_FAIL,
    ON_UPDATE_INTIAL,
    ON_UPDATE_SUCCESS,
    ON_UPDATE_FAIL,
} from "../constants/BlogsSaveConstants";

const Blog = axios.create({
    baseURL: "http://localhost:5000/"
})
const BlogsSaveActions = (formData) => async (dispatch) => {

    try {
        dispatch({ type: ON_BLOGS_INITIAL_REQUEST });
        const { data } = await Blog.post(
            "greenApi/admin/blogSave",
            formData,
        );
        console.log(data);
        dispatch({ type: ON_BLOGS_SUCESS, payload: data })

    }
    catch (error) {
        dispatch({
            type: ON_BLOGS_FAIL,
            payload: error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }

};
const BlogsFindAll = () => async (dispatch) => {
    try {
        dispatch({ type: ON_FETCH_ALL_INITIAL });
        const { data } = await Blog.get("/greenApi/admin/blogsAllData")

        dispatch({ type: ON_FETCH_ALL_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({
            type: ON_FETCH_ALL_FAIL,
            payload: error.response.data.message
                ? error.response.data.message
                : error.message,
        });

    }
}
const BlogsFindById = (id) => async (dispatch) => {
    try {
        dispatch({ type: ON_FETCH_ONE_INITIAL });
        const { data } = await Blog.get(`greenApi/admin/${id}`);
        dispatch({ type: ON_FETCH_ONE_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({
            type: ON_FETCH_ONE_FAIL,
            payload: error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }
}
const UpdateBlogs = (id, formData) => async (dispatch) => {
    try {
        dispatch({ type: ON_UPDATE_INTIAL });
        const { data } = await Blog.put(`greenApi/admin/${id}`, formData)
        console.log(data);
        dispatch({ type: ON_UPDATE_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({
            type: ON_UPDATE_FAIL,
            payload: error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }
}

const DeleteBlogs = (id) => (dispatch) => {
    try {
        dispatch({ type: ON_DELETE_INITIAL });
        const { data } = Blog.delete(`greenApi/admin/${id}`);
        dispatch({ type: ON_DELETE_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({
            type: ON_DELETE_FAIL,
            payload: error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }
}
export { BlogsSaveActions, BlogsFindAll, BlogsFindById, UpdateBlogs, DeleteBlogs };