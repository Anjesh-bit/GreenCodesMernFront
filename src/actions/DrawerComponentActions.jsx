import React from "react";
import { ON_DRAWER_OPEN, ON_DRAWER_FAIL } from "../constants/DrawerComponentConstants";

const DrawerComponentActions = (anchorDrawer, open) => (dispatch) => {
    try {
        dispatch({ type: ON_DRAWER_OPEN, [anchorDrawer]: open });
    }
    catch (error) {
        dispatch({
            type: ON_DRAWER_FAIL,
            payload: error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}


export { DrawerComponentActions }