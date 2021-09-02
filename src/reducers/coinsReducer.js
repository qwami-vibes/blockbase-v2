const initState = {};

const coinsReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_COINS_PENDING":
      return { ...state, pending: true };
    case "FETCH_COINS_SUCCESS":
      return { ...action.payload, pending: false };
    case "FETCH_COINS_FAILURE":
      return { ...action.payload, pending: false };
    default:
      return { ...state };
  }
};

export default coinsReducer;
