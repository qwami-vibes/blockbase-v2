import axios from "axios";

import {
  fetchCoinsFailure,
  fetchCoinsPending,
  fetchCoinsSuccess,
  fetchCoinsPricesFailure,
  fetchCoinsPricesPending,
  fetchCoinsPricesSuccess,
} from "../actions";

import { auth } from "../config/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore/lite";

let coinList = [];

export const getListApi = () => async (dispatch) => {
  const baseUrl = "https://coinranking1.p.rapidapi.com";
  dispatch(fetchCoinsPending());

  try {
    const res = await axios({
      method: "GET",
      url: `${baseUrl}/coins`,
      headers: {
        "x-rapidapi-key": process.env.REACT_APP_COINRANKING_API_KEY,
        "x-rapidapi-host": "coinranking1.p.rapidapi.com",
      },
    });

    res.data.data.coins.forEach((coin) => coinList.push(coin.symbol));
    dispatch(fetchCoinsSuccess(res.data.data));
    dispatch(getCoins());
  } catch (err) {
    dispatch(fetchCoinsFailure(err));
  }
};

const getCoins = () => async (dispatch) => {
  const baseUrl = "https://min-api.cryptocompare.com/data";
  const currencies = "USD,GBP,GHS,EUR,NGN";

  const coins = coinList.slice(0, 60).join(",");

  const apikey = process.env.REACT_APP_CRYPTOCOMPARE_API_KEY;

  dispatch(fetchCoinsPricesPending());

  try {
    const res = await axios({
      method: "GET",
      url: `${baseUrl}/pricemulti`,
      params: { api_key: apikey, fsyms: coins, tsyms: currencies },
    });
    dispatch(fetchCoinsPricesSuccess(res.data));
  } catch (error) {
    dispatch(fetchCoinsPricesFailure(error));
    console.log(error);
  }
};

export const signupUser = async (email, password) => {
  return await auth.createUserWithEmailAndPassword(email, password);
};

export const signinUser = async (email, password) => {
  return await auth.signInWithEmailAndPassword(email, password);
};

export const signoutUser = async () => {
  return await auth.signOut();
};

export const currentUser = () => {
  return auth.currentUser;
};

export const getCollection = async (db, collectionName) => {
  return await getDocs(collection(db, collectionName)).citySnapshot.docs.map(
    (doc) => doc.data()
  );
};

export const addDocument = async (db, collectionName, addItem) => {
  return await addDoc(collection(db, collectionName), addItem);
};
