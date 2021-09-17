import { combineReducers } from "redux";

import authReducer from "./authReducer";
import alertReducer from "./alertReducer";
import themeReducer from "./themeReducer";
import coinsReducer from "./coinsReducer";
import coinsPricesReducer from "./coinsPricesReducer";

const allReducers = combineReducers({
  currentUser: authReducer,
  theme: themeReducer,
  coins: coinsReducer,
  coinsPrices: coinsPricesReducer,
  alert: alertReducer,
});

export default allReducers;
