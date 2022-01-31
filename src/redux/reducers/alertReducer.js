const initState = {
  visible: false,
  message: null,
  type: null,
};

const alertReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_ALERT":
      return {
        visible: true,
        message: action.payload.message,
        type: action.payload.type,
      };
    case "RESET_ALERT":
      return { ...initState };

    default:
      return { ...state };
  }
};

export default alertReducer;
