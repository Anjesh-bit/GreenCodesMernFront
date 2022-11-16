import React from "react";
import axios from "axios";
import {
    ON_FAIL,
    INITIAL_REQUEST,
    ON_SUCCESS,
    ON_FETCH_ONE_SUCCESS,
    ON_FETCH_ONE_FAIL,
    ON_FETCH_ALL_SUCCESS,
    ON_FETCH_ALL_INITIAL,
    ON_FETCH_ALL_FAIL,
    ON_DELETE_INITIAL,
    ON_DELETE_SUCCESS,
    ON_DELETE_FAIL,
    ON_UPDATE_INTIAL,
    ON_UPDATE_SUCCESS,
    ON_UPDATE_FAIL,
    ON_FETCH_ONE_INITIAL

} from "../constants/ContactConstants";

const Contact = axios.create({
    baseURL: "http://localhost:5000/"
})
const saveContact = (fname, lname, email, number, message) => async (dispatch) => {
    try {
        dispatch({ type: INITIAL_REQUEST });
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        const { data } = await Contact.post(
            "greenApi/contact/addcontact",
            {
                fname, lname, email, number, message
            },
            config
        );
        dispatch({ type: ON_SUCCESS, payload: data })

    } catch (error) {

        dispatch({
            type: ON_FAIL,
            payload: error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }
};
const fetchAllContacts = () => async (dispatch) => {
    try {
        dispatch({ type: ON_FETCH_ALL_INITIAL });
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const { data } = await Contact.get("greenApi/contact/allcontacts", config);

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
const fetchSingleContacts = (id) => async (dispatch) => {
    try {
        dispatch({ type: ON_FETCH_ONE_INITIAL });
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        const { data } = await Contact.get(`/greenApi/contact/${id}`, config);
        dispatch({ type: ON_FETCH_ONE_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({
            type: ON_FETCH_ONE_FAIL,
            payload: error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}
const deleteContacts = (id) => (dispatch) => {
    console.log(id);
    try {
        dispatch({ type: ON_DELETE_INITIAL })
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        const { data } = Contact.delete(`/greenApi/contact/${id}`, config);
        dispatch({ type: ON_DELETE_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({
            type: ON_DELETE_FAIL,
            payload: error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }

}

const updateContacts = (id, fname, lname, email, number, message) => async (dispatch) => {
    try {
        dispatch({ type: ON_UPDATE_INTIAL });
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        const { data } = await Contact.put(`/greenApi/contact/${id}`, { fname, lname, email, number, message }, config);
        dispatch({ type: ON_UPDATE_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({
            type: ON_UPDATE_FAIL,
            payload: error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }

}

export { saveContact, fetchAllContacts, fetchSingleContacts, deleteContacts, updateContacts };