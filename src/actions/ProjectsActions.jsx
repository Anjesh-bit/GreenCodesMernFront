
import React from "react";
import { PROJECT_DATA_FAIL } from "../constants/ProjectsConstants";
import { PROJECT_DATA_SUCCESS } from "../constants/ProjectsConstants";

const ProjectsActions = (data) => (dispatch) => {
    try {
        dispatch({ type: PROJECT_DATA_SUCCESS, payload: data })
    }
    catch (e) {
        dispatch({ type: PROJECT_DATA_FAIL, payload: e.response.data.message ? e.response.data.message : e.message })
    }
}

export default ProjectsActions;