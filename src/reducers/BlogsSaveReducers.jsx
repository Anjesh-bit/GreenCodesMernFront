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

const BlogsSaveReducers = (state = { blogsData: [] }, actions) => {
  switch (actions.type) {
    case ON_BLOGS_INITIAL_REQUEST:
      return { ...state, loading: true };
    case ON_BLOGS_SUCESS:
      return { ...state, blogsData: actions.payload, loading: false };
    case ON_BLOGS_FAIL:
      return { ...state, error: actions.payload, loading: false };
    default:
      return { ...state };
  }
};

const BlogsFindAllReducers = (state = { blogsAllData: [] }, actions) => {
  switch (actions.type) {
    case ON_FETCH_ALL_INITIAL:
      return { ...state, loading: true };
    case ON_FETCH_ALL_SUCCESS:
      return { ...state, blogsAllData: actions.payload, loading: false };
    case ON_FETCH_ALL_FAIL:
      return { ...state, loading: false };
    default:
      return { ...state };
  }
};

const BlogsFindByIdReducers = (state = { blogsSingleData: [] }, actions) => {
  switch (actions.type) {
    case ON_FETCH_ONE_INITIAL:
      return { ...state, loading: true };
    case ON_FETCH_ONE_SUCCESS:
      return { ...state, blogsSingleData: actions.payload, loading: false };
    case ON_FETCH_ONE_FAIL:
      return { ...state, loading: false };
    default:
      return { ...state };
  }
};

const BlogsUpdateReducers = (state = { blogsUpdatedData: [] }, actions) => {
  switch (actions.type) {
    case ON_UPDATE_INTIAL:
      return { ...state, loading: true };
    case ON_UPDATE_SUCCESS:
      return { ...state, blogsUpdatedData: actions.payload, loading: false };
    case ON_UPDATE_FAIL:
      return { ...state, loading: false };
    default:
      return { ...state };
  }
};

const BlogDeleteReducers = (state = { blogsDeletedData: [] }, actions) => {
  switch (actions.type) {
    case ON_DELETE_INITIAL:
      return { ...state, loading: true };
    case ON_DELETE_SUCCESS:
      return { ...state, blogsDeletedData: actions.payload, loading: false };
    case ON_DELETE_FAIL:
      return { ...state, loading: false };
    default:
      return { ...state };
  }
};

export {
  BlogsSaveReducers,
  BlogsFindAllReducers,
  BlogsFindByIdReducers,
  BlogsUpdateReducers,
  BlogDeleteReducers,
};
