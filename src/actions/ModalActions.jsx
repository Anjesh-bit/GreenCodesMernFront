import React from 'react';
import { MODAL_OPEN } from '../constants/ModelConstants';
import { MODAL_ERROR } from '../constants/ModelConstants';
import { MODAL_CLOSE } from '../constants/ModelConstants';

export const ModalOpen = () => (dispatch) => {
    try {
        dispatch({ type: MODAL_OPEN })
    }
    catch (e) {
        dispatch({ type: MODAL_ERROR, payload: e.response.data.message ? e.response.data.message : e.message })
    }

}

export const ModalClose = () => (dispatch) => {

    try {
        dispatch({ type: MODAL_CLOSE })

    }
    catch (e) {
        dispatch({ type: MODAL_ERROR, payload: e.response.data.message ? e.response.data.message : e.message })
    }

}