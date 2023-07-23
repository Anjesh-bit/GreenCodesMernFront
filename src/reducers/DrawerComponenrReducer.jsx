import React from "react";
import {
  ON_DRAWER_CLOSE,
  ON_DRAWER_FAIL,
  ON_DRAWER_OPEN,
} from "../constants/DrawerComponentConstants";

const drawerComponentReducers = (state, actions) => {
  switch (actions.type) {
    case ON_DRAWER_OPEN:
      return { ...state, top: actions.top };
    case ON_DRAWER_FAIL:
      return { ...state, error: actions.payload };
    default:
      return { ...state };
  }
};

export default drawerComponentReducers;
