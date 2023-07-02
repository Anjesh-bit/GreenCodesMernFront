import React from "react";
import { ON_ERROR_OPEN, OPEN_MENU, OPEN_MENU_MOBILE, ON_ERROR_MOBILE_OPEN } from "../constants/IconButtonConstants";

const iconButtonActions = (open) => (dispatch) => {
 try {
        dispatch({ type: OPEN_MENU, payload: open })
    }
    catch (e) {
        dispatch({ type: ON_ERROR_OPEN, payload: e.response.data.message ? e.response.data.message : e.message })

    }
};

const mobileButtonActions = (open) => (dispatch) => {
    try {
        dispatch({ type: OPEN_MENU_MOBILE, payload: open })
    }
    catch (e) {
        dispatch({ type: ON_ERROR_MOBILE_OPEN, payload: e.response.data.message ? e.response.data.message : e.message })

    }
};
export  {iconButtonActions,mobileButtonActions};
