import { getCookies, setCookies } from "./Cookie";
import { getLocalStorage, setLocalStorage } from "./Localstorage";

const auth = (token, user) => {
  setCookies("token", token);
  setLocalStorage("loginData", user);
};

const isAuthenticated = () => {
  if (getCookies("token") && getLocalStorage("loginData")) {
    return getLocalStorage("loginData");
  } else {
    return false;
  }
};

export { auth, isAuthenticated };
