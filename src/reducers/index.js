import { combineReducers } from "redux";

import userReducer from "./userReducer";

const allReducers = combineReducers({
  currentUser: userReducer,
});

export default allReducers;
