const initState = {};

const userReducer = (state = initState, action) => {
  switch (action.key) {
    case "SET_USER_PENDING":
      return { ...state, pending: true };
    case "SET_USER_SUCCESS":
      return { ...state, pending: false, ...action.payload };
    case "SET_USER_FAILURE":
      return { ...state, error: action.payload, pending: false };
    default:
      return { ...state };
  }
};

export default userReducer;
