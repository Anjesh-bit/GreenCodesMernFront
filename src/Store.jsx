import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { ModalReducers } from "./reducers/ModalReducers";
import ProjectsReducers from "./reducers/ProjectsReducers";
import ParralxReducers from "./reducers/ParralxReducer";
import { IconButttonReducers } from "./reducers/IconButtonReducers";
import { ContactReducer, fetchAllContactReducer, fetchSingleContactsReducers, deleteContactReducers, updateContactReducers } from "./reducers/ContactReducers";
import { AdminLoginReducers } from "./reducers/AdminLoginReducer";
import DrawerComponentReducers from "./reducers/DrawerComponenrReducer";
import { BlogsSaveReducers, BlogsFindAllReducers, BlogsFindByIdReducers, BlogsUpdateReducers, BlogDeleteReducers } from "./reducers/BlogsSaveReducers";
import { BlogsSaveDraftsReducers, BlogsFindAllDraftsReducers, BlogsFindByIdDraftsReducers, BlogsUpdateDraftsReducers, BlogDeleteDraftsReducers } from "./reducers/BlogsSaveDraftsReducer";
const reducers = combineReducers({
    modals: ModalReducers,
    projects: ProjectsReducers,
    parralx: ParralxReducers,
    buttons: IconButttonReducers,
    contact: ContactReducer,
    fetchallcontact: fetchAllContactReducer,
    fetchsinglecontact: fetchSingleContactsReducers,
    deletecontact: deleteContactReducers,
    updatecontact: updateContactReducers,
    login: AdminLoginReducers,
    drawer: DrawerComponentReducers,
    blogs: BlogsSaveReducers,
    fetchallblogs: BlogsFindAllReducers,
    fetchsingleblog: BlogsFindByIdReducers,
    deleteblog: BlogsUpdateReducers,
    updateblog: BlogDeleteReducers,
    blogsDraft: BlogsSaveDraftsReducers,
    fetchDraftsAll: BlogsFindAllDraftsReducers,
    fetchsingleDraft: BlogsFindByIdDraftsReducers,
    deleteDrafts: BlogDeleteDraftsReducers,
    updateDrafts: BlogsUpdateDraftsReducers
})
//initially check for data in LocalStorage
const loginDataLocalStorage = localStorage.getItem("loginData") ? JSON.parse(localStorage.getItem("loginData")) : null;

//initail state for store
const initialState = {
    modals: { open: false },
    buttons: { openBtn: null, openBtnMo: null },
    login: { loading: false, loginData: loginDataLocalStorage },
    drawer: {
        top: false
    }
}

const middleware = [thunk];

const Store = () => {
    const browserHasDevTools =
        typeof window === "object" &&
        typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined";
    return createStore(
        reducers,
        initialState,
        compose(
            applyMiddleware(...middleware),
            browserHasDevTools ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
        )
    );
};

export default Store;