const initState = {};

const coinsPricesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_COINS_PRICES_PENDING":
      return { ...state, pending: true };
    case "FETCH_COINS_PRICES_SUCCESS":
      return { ...action.payload, pending: false };
    case "FETCH_COINS_PRICES_FAILURE":
      return { ...action.payload, pending: false };
    default:
      return { ...state };
  }
};

export default coinsPricesReducer;
