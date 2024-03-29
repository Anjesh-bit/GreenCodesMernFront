import axios from "axios";
import { deleteCookies } from "../utils/Cookie";
import { deleteLocalStorage } from "../utils/Localstorage";
import { auth } from "../utils/Auth";
import {
  ADMIN_LOGIN_START,
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGOUT,
} from "../constants/AdminLoginConstants";

const Login = axios.create({
  baseURL: "http://localhost:5000/",
});

const adminLoginActions = (adminEmail, adminPassword) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_LOGIN_START });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await Login.post(
      "/greenApi/admin/login",
      { adminEmail, adminPassword },
      config
    );
    dispatch({ type: ADMIN_LOGIN_SUCCESS, payload: data });
    const loginToken = data.token;
    auth(loginToken, data);
  } catch (error) {
    dispatch({
      type: ADMIN_LOGIN_FAIL,
      payload: error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

const adminLogoutActions = () => (dispatch) => {
  deleteCookies("token");
  deleteLocalStorage("loginData");
  deleteLocalStorage("userInfo");
  dispatch({ type: ADMIN_LOGOUT });
};

export { adminLoginActions, adminLogoutActions };
