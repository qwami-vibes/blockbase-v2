import axios from "axios";
import {
  fetchCoinsFailure,
  fetchCoinsPending,
  fetchCoinsSuccess,
} from "../actions";

const baseUrl = "https://coinranking1.p.rapidapi.com";

export const getCoins = () => (dispatch) => {
  dispatch(fetchCoinsPending());

  axios({
    method: "GET",
    url: `${baseUrl}/coins`,
    headers: {
      "x-rapidapi-key": process.env.REACT_APP_API_KEY,
      "x-rapidapi-host": process.env.REACT_APP_API_HOST,
    },
  })
    .then((data) => {
      console.log(data);
      dispatch(fetchCoinsSuccess(data.data));
    })
    .catch((err) => {
      dispatch(fetchCoinsFailure(err));
      console.log(err);
    });
};
