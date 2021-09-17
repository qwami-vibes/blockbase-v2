const initState = {
  isLoggedIn: false,
  user: null,
  userId: null,
};

const authReducer = (state = initState, action) => {
  switch (action.key) {
    case "SET_USER":
      return {
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
