const initState = {
  isLoggedIn: false,
  user: null,
  userId: null,
  emailVerified: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, ...action.payload, isLoggedIn: true };
    case "RESET_USER":
      return { ...initState };
    default:
      return { ...state };
  }
};

export default authReducer;
