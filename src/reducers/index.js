import { combineReducers } from "redux";

import userReducer from "./userReducer";
import themeReducer from "./themeReducer";
import coinsReducer from "./coinsReducer";
import coinsPricesReducer from "./coinsPricesReducer";

const allReducers = combineReducers({
  currentUser: userReducer,
  theme: themeReducer,
  coins: coinsReducer,
  coinsPrices: coinsPricesReducer,
});

export default allReducers;
