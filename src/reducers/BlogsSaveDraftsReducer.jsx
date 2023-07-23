import {
  ON_BLOGS_DRAFTS_INITIAL_REQUEST,
  ON_BLOGS_DRAFTS_SUCESS,
  ON_BLOGS_DRAFTS_FAIL,
  ON_FETCH_ONE_DRAFTS_SUCCESS,
  ON_FETCH_ONE_DRAFTS_FAIL,
  ON_FETCH_ONE_DRAFTS_INITIAL,
  ON_FETCH_ALL_DRAFTS_SUCCESS,
  ON_FETCH_ALL_DRAFTS_INITIAL,
  ON_FETCH_ALL_DRAFTS_FAIL,
  ON_DELETE_DRAFTS_INITIAL,
  ON_DELETE_DRAFTS_SUCCESS,
  ON_DELETE_DRAFTS_FAIL,
  ON_UPDATE_DRAFTS_INTIAL,
  ON_UPDATE_DRAFTS_SUCCESS,
  ON_UPDATE_DRAFTS_FAIL,
} from "../constants/BlogsSaveDraftsConstant";

const blogsSaveDraftsReducers = (state = { blogsData: [] }, actions) => {
  switch (actions.type) {
    case ON_BLOGS_DRAFTS_INITIAL_REQUEST:
      return { ...state, loading: true };
    case ON_BLOGS_DRAFTS_SUCESS:
      return { ...state, blogsData: actions.payload, loading: false };
    case ON_BLOGS_DRAFTS_FAIL:
      return { ...state, error: actions.payload, loading: false };
    default:
      return { ...state };
  }
};

const blogsFindAllDraftsReducers = (state = { blogsAllData: [] }, actions) => {
  switch (actions.type) {
    case ON_FETCH_ALL_DRAFTS_INITIAL:
      return { ...state, loading: true };
    case ON_FETCH_ALL_DRAFTS_SUCCESS:
      return { ...state, blogsAllData: actions.payload, loading: false };
    case ON_FETCH_ALL_DRAFTS_FAIL:
      return { ...state, loading: false };
    default:
      return { ...state };
  }
};

const blogsFindByIdDraftsReducers = (
  state = { blogsSingleData: [] },
  actions
) => {
  switch (actions.type) {
    case ON_FETCH_ONE_DRAFTS_INITIAL:
      return { ...state, loading: true };
    case ON_FETCH_ONE_DRAFTS_SUCCESS:
      return { ...state, blogsSingleData: actions.payload, loading: false };
    case ON_FETCH_ONE_DRAFTS_FAIL:
      return { ...state, loading: false };
    default:
      return { ...state };
  }
};

const blogsUpdateDraftsReducers = (
  state = { blogsUpdatedData: [] },
  actions
) => {
  switch (actions.type) {
    case ON_UPDATE_DRAFTS_INTIAL:
      return { ...state, loading: true };
    case ON_UPDATE_DRAFTS_SUCCESS:
      return { ...state, blogsUpdatedData: actions.payload, loading: false };
    case ON_UPDATE_DRAFTS_FAIL:
      return { ...state, loading: false };
    default:
      return { ...state };
  }
};

const blogDeleteDraftsReducers = (
  state = { blogsDeletedData: [] },
  actions
) => {
  switch (actions.type) {
    case ON_DELETE_DRAFTS_INITIAL:
      return { ...state, loading: true };
    case ON_DELETE_DRAFTS_SUCCESS:
      return { ...state, blogsDeletedData: actions.payload, loading: false };
    case ON_DELETE_DRAFTS_FAIL:
      return { ...state, loading: false };
    default:
      return { ...state };
  }
};

export {
  blogsSaveDraftsReducers,
  blogsFindAllDraftsReducers,
  blogsFindByIdDraftsReducers,
  blogsUpdateDraftsReducers,
  blogDeleteDraftsReducers,
};
