const initState = {};

const userReducer = (state = initState, action) => {
  switch (action.key) {
    case "SET_USER":
      return { ...state };
    default:
      return { ...state };
  }
};

export default userReducer;
