import { combineReducers } from "redux";

import authReducer from "./reducers/authReducer";
import alertReducer from "./reducers/alertReducer";
import themeReducer from "./reducers/themeReducer";
import coinsReducer from "./reducers/coinsReducer";
import coinsPricesReducer from "./reducers/coinsPricesReducer";

const allReducers = combineReducers({
  auth: authReducer,
  theme: themeReducer,
  coins: coinsReducer,
  coinsPrices: coinsPricesReducer,
  alert: alertReducer,
});

export default allReducers;
