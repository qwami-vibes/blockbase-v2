const initState = { prices: {}, marketCap: [], pending: false };

const coinsPricesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_COINS_PRICES_PENDING":
      return { ...state, pending: true };
    case "FETCH_COINS_PRICES_SUCCESS":
      return { ...state, prices: { ...action.payload }, pending: false };
    case "FETCH_COINS_PRICES_FAILURE":
      return { ...state, pending: false };

    case "FETCH_COINS_MARKETCAP_PENDING":
      return { ...state, pending: true };
    case "FETCH_COINS_MARKETCAP_SUCCESS":
      return { ...state, marketCap: [...action.payload], pending: false };
    case "FETCH_COINS_MARKETCAP_FAILURE":
      return { ...state, pending: false };
    default:
      return { ...state };
  }
};

export default coinsPricesReducer;
