import { combineReducers } from "redux";

import userReducer from "./userReducer";
import themeReducer from "./themeReducer";
import coinsReducer from "./coinsReducer";

const allReducers = combineReducers({
  currentUser: userReducer,
  theme: themeReducer,
  coins: coinsReducer,
});

export default allReducers;
