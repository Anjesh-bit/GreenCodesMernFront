import ProjectsActions from "../actions/ProjectsActions";
import { PROJECT_DATA_FAIL } from "../constants/ProjectsConstants";
import { PROJECT_DATA_SUCCESS } from "../constants/ProjectsConstants";

const projectsReducers = (state = [{}], actions) => {
  switch (actions.type) {
    case PROJECT_DATA_SUCCESS:
      return { ...state, projectsdata: actions.payload };
    case PROJECT_DATA_FAIL:
      return { ...state, error: actions.payload };
    default:
      return state;
  }
};

export default projectsReducers;
