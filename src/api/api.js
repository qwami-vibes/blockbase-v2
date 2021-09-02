import axios from "axios";
import {
  fetchCoinsFailure,
  fetchCoinsPending,
  fetchCoinsSuccess,
} from "../actions";

const baseUrl = "https://coinranking1.p.rapidapi.com";

export const getCoins = () => (dispatch) => {
  dispatch(fetchCoinsPending());

  axios
    .get(`${baseUrl}/coins`, {
      "X-RapidApi-Key": process.env.REACT_APP_API_KEY,
      "X-RapidApi-Host": process.env.REACT_APP_API_HOST,
    })
    .then((data) => {
      console.log(data);
      dispatch(fetchCoinsSuccess(data));
    })
    .catch((err) => {
      dispatch(fetchCoinsFailure(err));
      console.log(err);
    });
};
