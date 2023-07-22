import React from "react";
import { SCROLL_X, SCROLL_X_ERROR } from "../constants/ParallexConstants";

const ParralxReducers = (state = {}, actions) => {
  switch (actions.type) {
    case SCROLL_X:
      return { ...state, scrollX: actions.payload };
    case SCROLL_X_ERROR:
      return { ...state, error: actions.payload };
    default:
      return { ...state };
  }
};

export default ParralxReducers;
