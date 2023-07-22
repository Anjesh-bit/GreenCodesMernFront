import {
  ON_ERROR_OPEN,
  OPEN_MENU,
  ON_ERROR_MOBILE_OPEN,
  OPEN_MENU_MOBILE,
} from "../constants/IconButtonConstants";

export const IconButttonReducers = (state = {}, action) => {
  switch (action.type) {
    case OPEN_MENU:
      return { ...state, openBtn: action.payload };
    case ON_ERROR_OPEN:
      return { ...state, error: action.payload };
    case OPEN_MENU_MOBILE:
      return { ...state, openBtnMo: action.payload };
    case ON_ERROR_MOBILE_OPEN:
      return { ...state, errorMo: action.payload };
    default:
      return { ...state };
  }
};
