import { combineReducers } from "redux";

import userReducer from "./userReducer";
import themeReducer from "./themeReducer";

const allReducers = combineReducers({
  currentUser: userReducer,
  theme: themeReducer,
});

export default allReducers;
