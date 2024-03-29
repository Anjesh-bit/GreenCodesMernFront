import { SCROLL_X, SCROLL_X_ERROR } from "../constants/ParallexConstants";

const scrollY = (pageScrollX) => (dispatch) => {
    try {
        dispatch({ type: SCROLL_X, payload: pageScrollX })
    }
    catch (e) {
        dispatch({ type: SCROLL_X_ERROR, payload: e.response.data.message ? e.response.data.message : e.message })
    }
}

export default scrollY;
