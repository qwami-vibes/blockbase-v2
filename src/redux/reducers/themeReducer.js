const themeReducer = (state = true, action) => {
  switch (action.type) {
    case "SET_THEME":
      return !state;
    default:
      return state;
  }
};

export default themeReducer;
