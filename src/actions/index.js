const SET_USER_SUCCESS = "SET_USER_SUCCESS";
const SET_USER_FAILURE = "SET_USER_FAILURE";
const SET_USER_PENDING = "SET_USER_PENDING";

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
