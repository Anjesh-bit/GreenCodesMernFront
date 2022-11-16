import { MODAL_CLOSE, MODAL_OPEN, MODAL_ERROR } from "../constants/ModelConstants"

export const ModalReducers = (state = {}, action) => {
    switch (action.type) {
        case MODAL_OPEN:
            return { ...state, open: true }
        case MODAL_CLOSE:
            return { ...state, open: false }
        case MODAL_ERROR:
            return { ...state, open: false, error: action.payload }
        default:
            return { ...state };
    }
}