import {
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_START,
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGOUT,
} from "../constants/AdminLoginConstants";

const AdminLoginReducers = (state = { loginData: [] }, actions) => {
  switch (actions.type) {
    case ADMIN_LOGIN_START:
      return { ...state, loading: false };
    case ADMIN_LOGIN_SUCCESS:
      return { ...state, loginData: actions.payload, loading: true };
    case ADMIN_LOGIN_FAIL:
      return { ...state, loading: false };
    case ADMIN_LOGOUT:
      return {};
    default:
      return { ...state };
  }
};

export { AdminLoginReducers };
