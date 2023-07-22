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
  ON_FETCH_ONE_INITIAL,
} from "../constants/ContactConstants";

const ContactReducer = (state = { contactdata: [] }, actions) => {
  switch (actions.type) {
    case INITIAL_REQUEST:
      return { ...state, loading: true };
    case ON_SUCCESS:
      return {
        ...state,
        contactData: actions.payload,
        loading: false,
        message: "your data have been saved successfully!",
      };
    case ON_FAIL:
      return { ...state, loading: false, error: actions.payload };
    default:
      return { ...state };
  }
};

const fetchAllContactReducer = (state = { allContacts: [] }, actions) => {
  switch (actions.type) {
    case ON_FETCH_ALL_INITIAL:
      return { ...state, loading: true };
    case ON_FETCH_ALL_SUCCESS:
      return { ...state, loading: false, allContacts: actions.payload };
    case ON_FETCH_ALL_FAIL:
      return { ...state, loading: false };
    default:
      return { ...state };
  }
};

const fetchSingleContactsReducers = (state = {}, actions) => {
  switch (actions.type) {
    case ON_FETCH_ONE_INITIAL:
      return { ...state, loading: true };

    case ON_FETCH_ONE_SUCCESS:
      return { ...state, loading: false, singleContact: actions.payload };

    case ON_FETCH_ONE_FAIL:
      return { ...state, loading: false };
    default:
      return { ...state };
  }
};

const deleteContactReducers = (state = {}, actions) => {
  switch (actions.type) {
    case ON_DELETE_INITIAL:
      return { ...state, loading: true, success: false };
    case ON_DELETE_SUCCESS:
      return { ...state, loading: false, success: true };
    case ON_DELETE_FAIL:
      return { ...state, loading: false };
    default:
      return { ...state };
  }
};

const updateContactReducers = (state = {}, actions) => {
  switch (actions.type) {
    case ON_UPDATE_INTIAL:
      return { ...state, loading: true };
    case ON_UPDATE_SUCCESS:
      return { ...state, loading: false, updatedContact: actions.payload };
    case ON_UPDATE_FAIL:
      return { ...state, loading: false };
    default:
      return { ...state };
  }
};

export {
  ContactReducer,
  fetchAllContactReducer,
  fetchSingleContactsReducers,
  deleteContactReducers,
  updateContactReducers,
};
