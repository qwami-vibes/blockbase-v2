const initState = [];

const favReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_FAV_COIN":
      return [...state];
    case "REMOVE_FAV_COIN":
      return [...state];

    default:
      return [...state];
  }
};

export default favReducer;
