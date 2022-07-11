const SET_THEME = "SET_THEME";
const SET_USER = "SET_USER";
const RESET_USER = "RESET_USER";
const SET_ALERT = "SET_ALERT";
const RESET_ALERT = "RESET_ALERT";
const FETCH_COINS_SUCCESS = "FETCH_COINS_SUCCESS";
const FETCH_COINS_PENDING = "FETCH_COINS_PENDING";
const FETCH_COINS_FAILURE = "FETCH_COINS_FAILURE";
const FETCH_COINS_PRICES_SUCCESS = "FETCH_COINS_PRICES_SUCCESS";
const FETCH_COINS_PRICES_PENDING = "FETCH_COINS_PRICES_PENDING";
const FETCH_COINS_PRICES_FAILURE = "FETCH_COINS_PRICES_FAILURE";
const FETCH_COINS_MARKETCAP_SUCCESS = "FETCH_COINS_MARKETCAP_SUCCESS";
const FETCH_COINS_MARKETCAP_PENDING = "FETCH_COINS_MARKETCAP_PENDING";
const FETCH_COINS_MARKETCAP_FAILURE = "FETCH_COINS_MARKETCAP_FAILURE";

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

export const resetUser = () => {
  return {
    type: RESET_USER,
  };
};

export const setAlert = (alert) => {
  return {
    type: SET_ALERT,
    payload: alert,
  };
};

export const resetAlert = () => {
  return {
    type: RESET_ALERT,
  };
};

export const setTheme = () => {
  return {
    type: SET_THEME,
  };
};

export const fetchCoinsPending = () => {
  return {
    type: FETCH_COINS_PENDING,
  };
};

export const fetchCoinsSuccess = (data) => {
  return {
    type: FETCH_COINS_SUCCESS,
    payload: data,
  };
};

export const fetchCoinsFailure = (err) => {
  return {
    type: FETCH_COINS_FAILURE,
    payload: err,
  };
};

export const fetchCoinsPricesPending = () => {
  return {
    type: FETCH_COINS_PRICES_PENDING,
  };
};

export const fetchCoinsPricesSuccess = (data) => {
  return {
    type: FETCH_COINS_PRICES_SUCCESS,
    payload: data,
  };
};

export const fetchCoinsPricesFailure = () => {
  return {
    type: FETCH_COINS_PRICES_FAILURE,
  };
};

export const fetchCoinsMarketcapPending = () => {
  return {
    type: FETCH_COINS_MARKETCAP_PENDING,
  };
};

export const fetchCoinsMarketcapSuccess = (data) => {
  return {
    type: FETCH_COINS_MARKETCAP_SUCCESS,
    payload: data,
  };
};

export const fetchCoinsMarketcapFailure = () => {
  return {
    type: FETCH_COINS_MARKETCAP_FAILURE,
  };
};
