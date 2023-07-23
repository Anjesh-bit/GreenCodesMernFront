import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { modalReducers } from "./reducers/ModalReducers";
import projectsReducers from "./reducers/ProjectsReducers";
import parralxReducers from "./reducers/ParralxReducer";
import { iconButttonReducers } from "./reducers/IconButtonReducers";
import {
  contactReducer,
  fetchAllContactReducer,
  fetchSingleContactsReducers,
  deleteContactReducers,
  updateContactReducers,
} from "./reducers/ContactReducers";
import { adminLoginReducers } from "./reducers/AdminLoginReducer";
import drawerComponentReducers from "./reducers/DrawerComponenrReducer";
import {
  blogsSaveReducers,
  blogsFindAllReducers,
  blogsFindByIdReducers,
  blogsUpdateReducers,
  blogDeleteReducers,
} from "./reducers/BlogsSaveReducers";
import {
  blogsSaveDraftsReducers,
  blogsFindAllDraftsReducers,
  blogsFindByIdDraftsReducers,
  blogsUpdateDraftsReducers,
  blogDeleteDraftsReducers,
} from "./reducers/BlogsSaveDraftsReducer";
const reducers = combineReducers({
  modals: modalReducers,
  projects: projectsReducers,
  parralx: parralxReducers,
  buttons: iconButttonReducers,
  contact: contactReducer,
  fetchallcontact: fetchAllContactReducer,
  fetchsinglecontact: fetchSingleContactsReducers,
  deletecontact: deleteContactReducers,
  updatecontact: updateContactReducers,
  login: adminLoginReducers,
  drawer: drawerComponentReducers,
  blogs: blogsSaveReducers,
  fetchallblogs: blogsFindAllReducers,
  fetchsingleblog: blogsFindByIdReducers,
  deleteblog: blogsUpdateReducers,
  updateblog: blogDeleteReducers,
  blogsDraft: blogsSaveDraftsReducers,
  fetchDraftsAll: blogsFindAllDraftsReducers,
  fetchsingleDraft: blogsFindByIdDraftsReducers,
  deleteDrafts: blogDeleteDraftsReducers,
  updateDrafts: blogsUpdateDraftsReducers,
});

//initially check for data in LocalStorage
const loginDataLocalStorage = localStorage.getItem("loginData")
  ? JSON.parse(localStorage.getItem("loginData"))
  : null;

//initail state for store
const initialState = {
  modals: { open: false },
  buttons: { openBtn: null, openBtnMo: null },
  login: { loading: false, loginData: loginDataLocalStorage },
  drawer: {
    top: false,
  },
};

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
