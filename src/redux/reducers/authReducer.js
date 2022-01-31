const initState = {
  isLoggedIn: false,
  user: null,
  userId: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.user,
        userId: action.payload.id,
      };
    case "RESET_USER":
      return { ...initState };
    default:
      return { ...state };
  }
};

export default authReducer;
