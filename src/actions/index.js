const SET_USER_SUCCESS = "SET_USER_SUCCESS";
const SET_USER_FAILURE = "SET_USER_FAILURE";
const SET_USER_PENDING = "SET_USER_PENDING";
const SET_THEME = "SET_THEME";
const FETCH_COINS_SUCCESS = "FETCH_COINS_SUCCESS";
const FETCH_COINS_PENDING = "FETCH_COINS_PENDING";
const FETCH_COINS_FAILURE = "FETCH_COINS_FAILURE";

export const setUserSuccess = (user) => {
  return {
    type: SET_USER_SUCCESS,
    payload: user,
  };
};

export const setUserPending = () => {
  return {
    type: SET_USER_PENDING,
  };
};

export const setUserFailure = (err) => {
  return {
    type: SET_USER_FAILURE,
    payload: err,
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
